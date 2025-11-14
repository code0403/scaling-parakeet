import Product from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    // const products = await Product.find(
    //   {},
    //   {
    //     name: 1,
    //     brand: 1,
    //     slug: 1,
    //     image: 1,
    //     price: 1,
    //     mrp: 1,
    //     category: 1,
    //     "variants.color": 1,
    //     "variants.image": 1,
    //     "variants.price": 1,
    //   }
    // ).sort({ createdAt: -1 });
    // res.json(products);


    const {
      brand,
      category,
      search,
      page = 1,
      limit = 10,
      sort = "createdAt_desc", // default sort by newest
    } = req.query;

    // Step 1: Build filters
    const filter = {};
    if (brand) filter.brand = brand;
    if (category) filter.category = category;

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { model: { $regex: search, $options: "i" } },
      ];
    }

    // Step 2: Sorting logic
    const sortOrder = sort.endsWith("_desc") ? -1 : 1;
    const sortField = sort.split("_")[0];
    const sortQuery = { [sortField]: sortOrder };

    // Step 3: Pagination
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    // Step 4: Fetch data
    const [products, total] = await Promise.all([
      Product.find(filter)
        .sort(sortQuery)
        .skip(skip)
        .limit(limitNum)
        .select("name brand price image slug category mrp variants"),
      Product.countDocuments(filter),
    ]);

    // Step 5: Response
    res.status(200).json({
      success: true,
      count: products.length,
      totalPages: Math.ceil(total / limitNum),
      currentPage: pageNum,
      totalProducts: total,
      data: products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      success: false,
      message: "Server Error while fetching products",
    });
  }
};


// export const getSingleProduct = async (req, res) => {
//   try {
//      const { slug } = req.params;

//     const product = await Product.findOne({ slug }).lean();

//     if (!product) {
//       return res.status(404).json({
//         success: false,
//         message: "Product not found",
//       });
//     }

//     const responseData = {
//       _id: product._id,
//       name: product.name,
//       brand: product.brand,
//       category: product.category,
//       mrp: product.mrp,
//       price: product.price,
//       description: product.description,
//       color : product.color,
//       OperatingSystem: product.OperatingSystem,
//       image: product.image,
//       imageGallery: product.imageGallery || [],
//       storageOptions: product.storageOptions || [],
//       variants: product.variants || [],
//       emiPlans: product.emiPlans || [],
//       slug: product.slug,
//       createdAt: product.createdAt,
//       updatedAt: product.updatedAt,
//     };

//     res.status(200).json({
//       success: true,
//       data: responseData,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: "Server Error while fetching product details",
//     });
//   }
// };


export const getSingleProduct = async (req, res) => {
  try {
    const { slug } = req.params;

    // Step 1: Try to find product by main slug first
    let product = await Product.findOne({ slug }).lean();

    // Step 2: If not found, search for a matching variant or storage slug
    if (!product) {
      product = await Product.findOne({
        $or: [
          { "variants.slug": slug },
          { "variants.storageOptions.slug": slug },
        ],
      }).lean();
    }

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Step 3: Determine which variant and storage option to display
    let selectedVariant = null;
    let selectedStorage = null;

    for (const variant of product.variants) {
      if (variant.slug === slug) {
        selectedVariant = variant;
        break;
      }

      for (const storage of variant.storageOptions) {
        if (storage.slug === slug) {
          selectedVariant = variant;
          selectedStorage = storage;
          break;
        }
      }

      if (selectedStorage) break;
    }

    // Step 4: Construct response with the right variant and price details
    const displayVariant = selectedVariant || product.variants[0];
    const displayStorage =
      selectedStorage || displayVariant.storageOptions[0] || {};

    const responseData = {
      _id: product._id,
      name: product.name,
      brand: product.brand,
      category: product.category,
      description: product.description,
      OperatingSystem: product.OperatingSystem,
      color: displayVariant.color,
      image: displayVariant.image,
      imageGallery: displayVariant.imageGallery,
      storageOptions: displayVariant.storageOptions,
      selectedStorage: displayStorage.size || "",
      price: displayStorage.price || displayVariant.price || 0,
      mrp: displayStorage.mrp || displayVariant.mrp || 0,
      variants: product.variants.map(v => ({
        color: v.color,
        slug: v.slug,
        image: v.image,
      })),
      emiPlans: product.emiPlans,
      slug: slug,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };

    return res.status(200).json({
      success: true,
      data: responseData,
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching product details",
    });
  }
};

export const getProductStartingPrice = (product) => {
  let minPrice = Infinity;
  let minMRP = Infinity;

  product.variants?.forEach((variant) => {
    variant.storageOptions?.forEach((option) => {
      if (option.price < minPrice) minPrice = option.price;
      if (option.mrp < minMRP) minMRP = option.mrp;
    });
  });

  return { startingPrice: minPrice, startingMRP: minMRP };
};
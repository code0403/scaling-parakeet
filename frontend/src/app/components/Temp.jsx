"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchProductBySlug } from "@/app/utlis/api";

export default function Temp() {
  const { slug } = useParams();
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedEmi, setSelectedEmi] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);



  const { data, isLoading, error } = useQuery({
    queryKey: ["product", slug],
    queryFn: () => fetchProductBySlug(slug),
  });

   const product = data?.data;

   useEffect(() => {
    if (!searchParams) return;
    const color = searchParams.get("color");
    if (!color || !product?.variants) return;

    const matchedVariant = product.variants.find((v) => v.color === color);
    setSelectedVariant(matchedVariant || null);
  }, [product?.variants, searchParams?.toString()]);

  if (isLoading)
    return <div className="text-center py-10">Loading product details...</div>;
  if (error)
    return (
      <div className="text-center py-10 text-error">
        Failed to load product: {error.message}
      </div>
    );

  const displayItem = selectedVariant || product;
  const mainImage = selectedImage || displayItem.image;

  const handleProceedToBuy = () => {
  if (!selectedEmi) {
    toast.error("Please select an EMI plan before proceeding!");
    return;
  }

  toast.success(
    `Purchase simulated! 🎉 
    You selected ${selectedEmi.duration} months plan 
    with ₹${selectedEmi.downPayment} down payment.`,
    {
      duration: 4000,
      style: {
        border: "1px solid #4caf50",
        padding: "16px",
        color: "#333",
      },
    }
  );

  // Optionally simulate API call
  setTimeout(() => navigate("/"), 2000);
};

  return (
    <div className="max-w-6xl mx-auto py-6">
      <div className="grid md:grid-cols-2 gap-10">
        {/* --- Image Section --- */}
        <div>
          <img
            src={displayItem.image}
            alt={displayItem.name}
            className="rounded-xl w-full object-contain"
          />
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {displayItem.imageGallery?.map((img, idx) => (
                <div
                key={idx}
                className={`w-24 h-24 relative rounded-md overflow-hidden border cursor-pointer transition
                  ${
                    mainImage === imgUrl
                      ? "border-primary ring-2 ring-primary"
                      : "border-gray-200"
                  }`}
                onClick={() => setSelectedImage(imgUrl)}
              >
              <img
                  src={imgUrl}
                  alt={`gallery-${idx}`}
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- Info Section --- */}
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-500 mb-2">{product.brand}</p>

          <div className="flex items-center gap-4 mb-4">
            <p className="text-3xl font-semibold text-primary">
              ₹{displayItem.price.toLocaleString()}
            </p>
            <p className="line-through text-gray-400">
              ₹{displayItem.mrp.toLocaleString()}
            </p>
          </div>

          <p className="mb-4">{displayItem.description}</p>

          {/* --- Variant Selection --- */}
          {/* --- Variant Selection --- */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Available Colors:</h3>
            <div className="flex gap-2 flex-wrap">
              {/* Default Variant Button */}
              <button
                onClick={() => setSelectedVariant(null)}
                className={`btn btn-sm ${
                  selectedVariant === null ? "btn-primary" : "btn-outline"
                }`}
              >
                {product.color || "Default"}
              </button>

              {/* Actual Variants */}
              {product.variants?.map((variant, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedVariant(variant)}
                  className={`btn btn-sm ${
                    selectedVariant?.color === variant.color
                      ? "btn-primary"
                      : "btn-outline"
                  }`}
                >
                  {variant.color}
                </button>
              ))}
            </div>
          </div>

          {/* --- Storage Options --- */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Storage Options:</h3>
            <div className="flex gap-2 flex-wrap">
              {displayItem.storageOptions.map((opt, idx) => (
                <div
                  key={idx}
                  className="badge badge-outline p-3 text-sm font-medium"
                >
                  {opt}
                </div>
              ))}
            </div>
          </div>

          {/* --- EMI Plans --- */}
          {/* --- EMI Plans --- */}
          <div className="border-t pt-4 mt-6">
            <h3 className="font-semibold mb-3">EMI Plans:</h3>

            {/* Plan List */}
            <div className="space-y-2">
              {product.emiPlans.map((plan, idx) => {
                const monthly = (
                  (displayItem.price * (1 + plan.interestRate / 100)) /
                  plan.tenureMonths
                ).toFixed(2);

                return (
                  <div
                    key={idx}
                    className={`p-4 border rounded-xl flex justify-between items-center cursor-pointer transition ${
                      plan.id === selectedPlan?.id
                        ? "border-primary bg-base-200"
                        : ""
                    }`}
                  >
                    <div>
                      <p className="font-semibold text-lg">
                        ₹{monthly}/month × {plan.tenureMonths} months
                      </p>
                      <p className="text-sm text-gray-500">
                        {plan.interestRate}% Interest • Fund: {plan.fund}
                        {plan.cashback > 0 && (
                          <span className="ml-2 text-success">
                            + Cashback ₹{plan.cashback}
                          </span>
                        )}
                      </p>
                    </div>
                    <button
                      className={`btn btn-sm ${
                        plan.id === selectedPlan?.id
                          ? "btn-success"
                          : "btn-primary"
                      }`}
                      onClick={() =>
                        setSelectedPlan(
                          plan.id === selectedPlan?.id ? null : plan
                        )
                      }
                    >
                      {plan.id === selectedPlan?.id
                        ? "Selected"
                        : "Choose Plan"}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* --- Summary Card --- */}
            {selectedPlan && (
              <div className="mt-6 p-6 border rounded-2xl bg-base-200 shadow-md">
                <h4 className="text-xl font-semibold mb-4">Payment Summary</h4>

                <p className="text-sm mb-2">
                  Selected Plan:{" "}
                  <span className="font-medium">{selectedPlan.fund}</span>
                </p>
                <p className="text-sm mb-2">
                  Tenure:{" "}
                  <span className="font-medium">
                    {selectedPlan.tenureMonths} months
                  </span>
                </p>

                <p className="text-sm mb-2">
                  Interest Rate:{" "}
                  <span className="font-medium">
                    {selectedPlan.interestRate}%
                  </span>
                </p>

                <p className="text-sm mb-2">
                  Cashback:{" "}
                  <span className="font-medium text-success">
                    ₹{selectedPlan.cashback}
                  </span>
                </p>

                {/* Calculations */}
                {(() => {
                  const totalPayable = (
                    displayItem.price *
                    (1 + selectedPlan.interestRate / 100)
                  ).toFixed(2);
                  const monthlyEMI = (
                    totalPayable / selectedPlan.tenureMonths
                  ).toFixed(2);
                  const downPayment = (displayItem.price * 0.1).toFixed(2); // 10% example

                  return (
                    <>
                      <p className="text-sm mb-2">
                        Total Payable:{" "}
                        <span className="font-medium">₹{totalPayable}</span>
                      </p>
                      <p className="text-sm mb-2">
                        Monthly EMI:{" "}
                        <span className="font-medium">₹{monthlyEMI}</span>
                      </p>
                      <p className="text-sm mb-4">
                        Down Payment (10%):{" "}
                        <span className="font-medium text-warning">
                          ₹{downPayment}
                        </span>
                      </p>

                      {/* className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition" */}

                      <button onClick={handleProceedToBuy} className="btn btn-success w-full">
                        Proceed to Buy
                      </button>
                    </>
                  );
                })()}
              </div>
            )}
          </div>


        </div>
      </div>
    </div>
  );
}

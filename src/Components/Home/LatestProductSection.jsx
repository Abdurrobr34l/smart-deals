import React from "react";
import { Link } from "react-router";

const LatestProductSection = ({ latestProducts }) => {
  return (
    <div>
      <h2 className="title">
        Recent <span className="text-accent">Products</span>
      </h2>

      <div className="grid grid-cols-1 gap-6 mt-5 md:grid-cols-2 md:mt-10 lg:grid-cols-3">
        {latestProducts?.length > 0 ? (
          latestProducts.map(
            ({ _id, image, title, condition, price_min, price_max }) => (
              <div key={_id} className="p-4 bg-white rounded-xl">
                <img
                  src={image}
                  alt="It is product image"
                  className="rounded-lg"
                />

                <div className="flex flex-col gap-1 my-6">
                  <h3 className="text-xl font-semibold xl:text-2xl">
                    {title} -{" "}
                    <span className="capitalize">[ {condition} ]</span>
                  </h3>

                  <p className="font-bold text-lg text-accent! md:text-[20px]">
                    $ <span>{price_min}</span> - <span>{price_max}</span>
                  </p>
                </div>

                <Link
                  to={`/product-details/${_id}`}
                  className="gradAccentClrHover inline-block py-3 w-full border border-accent rounded-sm text-center transition-colors duration-300 ease-linear hover:text-white"
                >
                  View Details
                </Link>
              </div>
            )
          )
        ) : (
          <div className="flex items-center justify-center h-[400px] col-span-12 bg-white rounded-xl">
            <h2 className="font-bold text-3xl">No products to show</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestProductSection;

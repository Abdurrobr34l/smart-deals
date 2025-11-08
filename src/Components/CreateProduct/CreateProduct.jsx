import React from "react";
import Container from "../Container/Container";
import { Link } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const CreateProduct = () => {
  const handleCreateProduct = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image.value;
    const price_min = e.target.price_min.value;
    const price_max = e.target.price_max.value;

    const newProduct = { title, image, price_min, price_max };
    axios.post("http://localhost:3000/products", newProduct)
    .then(data => {
      if(data.data.insertedId) {
        Swal.fire("Product added successfully");
      }
    })
  };

  return (
    <section className="commonSectionPadding bg-base-100 min-h-screen">
      <title>Smart Deals | Create Product</title>

      <Container>
        <div className="text-center">
          {/* Back Link */}
          <div className="mb-6 mx-auto">
            <Link
              to={"/all-products"}
              className="inline-block text-secondary hover:text-accent text-sm"
            >
              <span>←</span> Back To Products
            </Link>
          </div>

          {/* Title */}
          <h1 className="title">
            Create <span className="text-accent">A Product</span>
          </h1>
        </div>

        <div className="max-w-3xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
          {/* Form */}
          <form onSubmit={handleCreateProduct} className="space-y-5">
            {/* Title & Category */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text text-primary font-semibold">
                    Title
                  </span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Yamaha Fz Guitar for Sale"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-primary font-semibold">
                    Category
                  </span>
                </label>
                <select className="select select-bordered w-full">
                  <option disabled selected>
                    Select a Category
                  </option>
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Home & Living</option>
                  <option>Vehicles</option>
                  <option>Others</option>
                </select>
              </div>
            </div>

            {/* Price Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text text-primary font-semibold">
                    Min Price You Want to Sale ($)
                  </span>
                </label>
                <input
                  type="number"
                  name="price_min"
                  placeholder="e.g. 18.5"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-primary font-semibold">
                    Max Price You Want to Sale ($)
                  </span>
                </label>
                <input
                  type="number"
                  name="price_max"
                  placeholder="Optional (default = Min Price)"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Condition & Usage */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text text-primary font-semibold">
                    Product Condition
                  </span>
                </label>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="condition"
                      className="radio radio-accent"
                      defaultChecked
                    />
                    <span>Brand New</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="condition"
                      className="radio radio-accent"
                    />
                    <span>Used</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-primary font-semibold">
                    Product Usage Time
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1 year 3 month"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Image URLs */}
            <div>
              <label className="label">
                <span className="label-text text-primary font-semibold">
                  Your Product Image URL
                </span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="https://..."
                className="input input-bordered w-full"
              />
            </div>

            {/* Seller Details */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text text-primary font-semibold">
                    Seller Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Artisan Roasters"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-primary font-semibold">
                    Seller Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="e.g. leli31955@nrlord.com"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text text-primary font-semibold">
                    Seller Contact
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. +1-555-1234"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-primary font-semibold">
                    Seller Image URL
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="https://..."
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="label">
                <span className="label-text text-primary font-semibold">
                  Location
                </span>
              </label>
              <input
                type="text"
                placeholder="City, Country"
                className="input input-bordered w-full"
              />
            </div>

            {/* Description */}
            <div>
              <label className="label">
                <span className="label-text text-primary font-semibold">
                  Simple Description about your Product
                </span>
              </label>
              <textarea
                placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time..."
                className="textarea textarea-bordered w-full"
                rows={3}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="btn gradAccentClr gradAccentClrHover text-white w-full font-semibold text-lg"
              >
                Create A Product
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default CreateProduct;

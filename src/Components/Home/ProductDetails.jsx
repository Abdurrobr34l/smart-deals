import React, { useContext, useRef, useState } from "react"; // <-- FIXED: Added useState
import { Link, useLoaderData } from "react-router";
import Container from "../Container/Container"; // Assuming this handles max-width and center
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { AuthContext } from "../../Contexts/AuthContext";
import { MdOutlineFastfood } from "react-icons/md";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData();
  const bidModalRef = useRef(null);
  const { user } = useContext(AuthContext);

  // 1. MISSING STATE DEFINITION - Added to manage form inputs
  const [formData, setFormData] = useState({
    buyerName: "",
    buyerEmail: "",
    buyerImage: "",
    price: "",
    contactInfo: "",
  });

  // 2. MISSING HANDLER DEFINITION - Function to open modal via ref
  const handleOpenModal = () => {
    if (bidModalRef.current) {
      bidModalRef.current.showModal();
    }
  };

  // 3. MISSING HANDLER DEFINITION - Function to update form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 4. MISSING HANDLER DEFINITION - Function to close modal
  const handleClose = () => {
    if (bidModalRef.current) {
      bidModalRef.current.close();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your bid has been placed",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  // 5. MISSING HANDLER DEFINITION - Function to handle submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const price = e.target.price.value;

    const newBid = {
      product: _id,
      buyer_name: name,
      buyer_email: email,
      bid_price: price,
      status: "pending",
    };

    fetch(`http://localhost:3000/product-details/${_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    // Clear form and close modal
    setFormData({
      name: "",
      email: "",
      buyerImage: "",
      price: "",
      contactInfo: "",
    });
    handleClose();
  };

  // Destructure with default values for safety and clarity
  const {
    _id,
    title = "Yamaha Fz Guitar For Sale",
    price_min = 22.5,
    price_max = 30,
    category = "Art And Hobbies",
    created_at,
    image = "https://placehold.co/472x276/e0e0e0/555555?text=Product+Image",
    status = "On Sale",
    location = "Los Angeles, CA",
    seller_image,
    seller_name = "Sara Chen",
    condition = "New",
    usage = "3 Month",
    description = "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution Of Letters, As Opposed To Using 'Content Here, Content Here', Making It Look Like Readable English. Many Desktop Publishing Packages And Web Page Editors Now Use Lorem Ipsum As Their Default Model Text, And A Search For 'lorem Ipsum' Will Uncover Many Web Sites Still In Their Infancy.",
    seller_contact = "sara.chen_contact",
    email = "sara@shop.net",
  } = product || {};

  // Format price display
  const priceRange =
    price_min === price_max ? `$${price_min}` : `$${price_min} - ${price_max}`;

  // Format date for display
  const postedDate = created_at
    ? new Date(created_at).toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
      })
    : "10/19/2024";

  const displayProductId = _id || "68f753ae2174c4368ec882f4";

  const bidsData = [
    {
      slNo: 1,
      productName: "Orange Juice",
      productPrice: "22.5",
      sellerName: "Sara Chen",
      sellerEmail: "sara@ishop.net",
      bidPrice: "$10",
    },
    {
      slNo: 2,
      productName: "Orange Juice",
      productPrice: "22.5",
      sellerName: "Sara Chen",
      sellerEmail: "sara@ishop.net",
      bidPrice: "$10",
    },
    {
      slNo: 3,
      productName: "Orange Juice",
      productPrice: "22.5",
      sellerName: "Sara Chen",
      sellerEmail: "sara@ishop.net",
      bidPrice: "$10",
    },
  ];

  return (
    <section className="commonSectionPadding">
      <title>Smart Deals | Product Details</title>

      <Container className="flex flex-col gap-5 md:gap-10 lg:gap-14 xl:gap-20">
        {/* Main Content Card - Adjusted max-w and p to match the image structure */}
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg p-6 lg:p-10">
          {/* Back Button */}
          <Link
            to={"/"}
            className="flex items-center text-secondary mb-6 hover:text-accent transition-colors"
          >
            <IoIosArrowBack className="text-xl mr-1" />
            <span className="font-semibold text-sm">Back To Products</span>
          </Link>

          {/* Header Section */}
          <h1 className="text-3xl font-extrabold text-primary mb-2">{title}</h1>
          <div className="text-xs font-medium px-2 py-0.5 bg-gray-100 text-secondary w-fit rounded-sm mb-6">
            {category}
          </div>

          {/* Main Content Grid (Image/Description + Details/Seller) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Image (Placeholder area) and Description - This section is split vertically */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image Placeholder area - Represents the large gray box on the left */}
              <div className="w-full bg-gray-200 aspect-video rounded-lg overflow-hidden shadow-md">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/472x276/e0e0e0/555555?text=Image+Load+Error";
                  }}
                />
              </div>

              {/* Product Description Section - Matches the bottom left panel */}
              <div className="mt-4 border-t pt-4">
                <h2 className="text-xl font-bold text-primary mb-4">
                  Product Description
                </h2>

                {/* Condition and Usage Time - Displayed inline */}
                <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm mb-4 border-b pb-4">
                  <p className="font-semibold text-primary">
                    Condition:{" "}
                    <span className="font-normal text-secondary">
                      {condition}
                    </span>
                  </p>
                  <p className="font-semibold text-primary">
                    Usage Time:{" "}
                    <span className="font-normal text-secondary">{usage}</span>
                  </p>
                </div>

                {/* Full Description Text */}
                <p className="text-secondary leading-relaxed text-sm pt-4">
                  {description}
                </p>
              </div>
            </div>

            {/* Right Column: Price, Details, and Seller Info - This column is stacked vertically */}
            <div className="lg:col-span-1 space-y-6">
              {/* Price Block - Topmost section on the right */}
              <div className="pb-4 border-b">
                <p className="text-3xl font-extrabold text-green-600 mb-1">
                  {priceRange}
                </p>
                <p className="text-sm text-secondary">Price starts from</p>
              </div>

              {/* Product Details - Middle section on the right */}
              <div>
                <h2 className="text-lg font-bold text-primary mb-3">
                  Product Details
                </h2>
                <p className="text-sm text-secondary mb-1">
                  **Product ID:**{" "}
                  <span className="font-normal break-all">
                    {displayProductId}
                  </span>
                </p>
                <p className="text-sm text-secondary">
                  **Posted:** <span className="font-normal">{postedDate}</span>
                </p>
              </div>

              {/* Seller Information - Matches the lower right panel */}
              <div className="pt-4 border-t">
                <h2 className="text-lg font-bold text-primary mb-4">
                  Seller Information
                </h2>

                {/* Seller Name and Email */}
                <div className="flex items-center mb-4">
                  <div className="avatar mr-3">
                    <div className="w-12 h-12 rounded-full ring ring-gray-200 ring-offset-base-100 ring-offset-2">
                      {seller_image ? (
                        <img
                          src={seller_image}
                          alt={seller_name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://placehold.co/48x48/e0e0e0/555555?text=Error";
                          }}
                        />
                      ) : (
                        <FaUserCircle className="w-full h-full text-secondary" />
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{seller_name}</p>
                    <p className="text-xs text-secondary">{email}</p>
                  </div>
                </div>

                {/* Location, Contact, and Status */}
                <div className="text-sm space-y-2">
                  <p className="text-secondary">
                    **Location:**{" "}
                    <span className="font-normal text-primary">{location}</span>
                  </p>
                  <p className="text-secondary">
                    **Contact:**{" "}
                    <span className="font-normal text-primary">
                      {seller_contact}
                    </span>
                  </p>

                  <div className="flex items-center">
                    <p className="font-semibold text-primary mr-2">Status:</p>
                    {/* Using badge-warning for 'On Sale' to match the yellow-orange in the image */}
                    <div
                      className={`badge ${
                        status.toLowerCase() === "sold"
                          ? "badge-error"
                          : "badge-warning"
                      } text-xs font-semibold`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button - Full width, using your custom gradient classes */}
              <button
                onClick={handleOpenModal}
                className="btn btn-block text-white font-bold h-12 gradAccentClrHover gradAccentClr border-0 mt-6"
              >
                I Want Buy This Product
              </button>

              {/* Biding Modal (The refactored content from the BidModal) */}
              <dialog
                ref={bidModalRef}
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box p-6 md:p-10 bg-white rounded-xl shadow-2xl w-full max-w-lg">
                  {/* Close Button (Top right X) */}
                  <div className="modal-action absolute top-4 right-4 m-0 p-0">
                    <form method="dialog">
                      {/* If there is a button in form, it will close the modal */}
                      <button
                        className="btn btn-sm btn-circle btn-ghost text-primary text-xl hover:text-accent"
                        onClick={handleClose}
                      >
                        {/* Using a generic close icon as MdOutlineClose was not imported here */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>

                  {/* Modal Title */}
                  <h2 className="text-xl md:text-2xl font-black text-primary text-center mb-8 pt-4">
                    Give Seller Your Offered Price
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Buyer Name and Buyer Email (Side-by-side on desktop, stacked on mobile) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="label text-primary text-sm font-semibold p-0 mb-1">
                          Buyer Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          value={user?.displayName || formData.buyerName}
                          onChange={handleChange}
                          className="input input-bordered w-full bg-base-100 rounded-lg text-secondary h-12"
                          required
                          readOnly
                        />
                      </div>
                      <div>
                        <label className="label text-primary text-sm font-semibold p-0 mb-1">
                          Buyer Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={user?.email || formData.buyerEmail}
                          onChange={handleChange}
                          className="input input-bordered w-full bg-base-100 rounded-lg text-secondary h-12"
                          required
                          readOnly
                        />
                      </div>
                    </div>

                    {/* Buyer Image URL (Full width) */}
                    <div>
                      <label className="label text-primary text-sm font-semibold p-0 mb-1">
                        Buyer Image URL
                      </label>
                      <input
                        type="url"
                        name="buyerImage"
                        placeholder="https://...your_img_url"
                        value={user?.photoURL || formData.buyerImage}
                        onChange={handleChange}
                        readOnly
                        className="input input-bordered w-full bg-base-100 rounded-lg text-secondary h-12"
                      />
                    </div>

                    {/* Place your Price (Full width) */}
                    <div>
                      <label className="label text-primary text-sm font-semibold p-0 mb-1">
                        Place your Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        step="0.01"
                        placeholder="e.g. $25.00"
                        value={formData.price}
                        onChange={handleChange}
                        className="input input-bordered w-full bg-base-100 rounded-lg text-secondary h-12"
                        required
                      />
                    </div>

                    {/* Contact Info (Full width) */}
                    <div>
                      <label className="label text-primary text-sm font-semibold p-0 mb-1">
                        Contact Info
                      </label>
                      <input
                        type="tel"
                        name="contactInfo"
                        placeholder="e.g. +1-555-1234"
                        value={seller_contact}
                        onChange={handleChange}
                        className="input input-bordered w-full bg-base-100 rounded-lg text-secondary h-12"
                        required
                        readOnly
                      />
                    </div>

                    {/* Action Buttons (Right aligned) */}
                    <div className="pt-6 flex justify-end space-x-3">
                      {/* Cancel Button */}
                      <button
                        type="button"
                        className="btn btn-outline text-secondary border-secondary/50 hover:bg-gray-100 hover:border-secondary transition-colors"
                        onClick={handleClose}
                      >
                        Cancel
                      </button>

                      {/* Submit Bid Button using custom gradient classes */}
                      <button
                        type="submit"
                        className="btn text-white font-semibold gradAccentClr gradAccentClrHover border-0"
                      >
                        Submit Bid
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
          </div>
        </div>

        {/* Bids Data */}
        <div className="p-4 md:p-8 lg:p-10">
          {/* Header Section */}
          <div className="mb-6 md:mb-8 flex items-end">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mr-2">
              Bids For This Products:
            </h2>
            <span className="text-4xl md:text-5xl font-extrabold text-[#9F62F2] leading-none">
              {bidsData.length.toString().padStart(2, "0")}
            </span>
          </div>

          {/* Table Container - Uses DaisyUI `table` class */}
          <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
            <table className="table w-full">
              {/* Table Head */}
              <thead>
                <tr className="border-b-2 border-base-200">
                  <th className="w-12 text-center text-secondary font-semibold">
                    SL No
                  </th>
                  <th className="text-left text-secondary font-semibold">
                    Product
                  </th>
                  <th className="text-left text-secondary font-semibold">
                    Seller
                  </th>
                  <th className="text-left text-secondary font-semibold">
                    Bid Price
                  </th>
                  <th className="text-center text-secondary font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {bidsData.map((bid) => (
                  <tr
                    key={bid.slNo}
                    className="hover:bg-base-100 transition-colors duration-200 border-b border-base-200 last:border-b-0"
                  >
                    {/* SL No */}
                    <td className="text-center font-medium text-secondary">
                      {bid.slNo}
                    </td>

                    {/* Product */}
                    <td>
                      <div className="flex items-center space-x-3">
                        {/* Placeholder for Product Image/Icon */}
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12 bg-base-200 flex items-center justify-center">
                            <MdOutlineFastfood className="text-3xl text-gray-500" />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-primary">
                            {bid.productName}
                          </div>
                          <div className="text-sm opacity-50">
                            ${bid.productPrice}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Seller */}
                    <td>
                      <div className="flex items-center space-x-3">
                        {/* Placeholder for Seller Avatar */}
                        <div className="avatar">
                          <div className="w-10 h-10 rounded-full bg-base-200">
                            {/*  */}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-primary">
                            {bid.sellerName}
                          </div>
                          <div className="text-sm opacity-50 truncate max-w-[150px]">
                            {bid.sellerEmail}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Bid Price */}
                    <td className="font-bold text-lg text-primary">
                      {bid.bidPrice}
                    </td>

                    {/* Actions */}
                    <td>
                      <div className="flex justify-center space-x-2">
                        <button
                          className="btn btn-sm btn-success text-white px-3"
                          onClick={() => console.log("Accept Offer:", bid.slNo)}
                        >
                          Accept Offer
                        </button>
                        <button
                          className="btn btn-sm btn-outline btn-error px-3"
                          onClick={() => console.log("Reject Offer:", bid.slNo)}
                        >
                          Reject Offer
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetails;

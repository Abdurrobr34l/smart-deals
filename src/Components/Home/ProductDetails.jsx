import React from "react";
import { Link, useLoaderData } from "react-router";
import Container from "../Container/Container"; // Assuming this handles max-width and center
import { FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";
import { IoIosArrowBack } from 'react-icons/io'; // Added IoIosArrowBack

const ProductDetails = () => {
  const product = useLoaderData();

  // Destructure with default values for safety and clarity
  const {
    _id,
    title = "Yamaha Fz Guitar For Sale",
    price_min = 22.5,
    price_max = 30,
    category = "Art And Hobbies",
    created_at,
    image = 'https://dummyimage.com/472x276/e0e0e0/555555.png&text=Product+Image', // Placeholder image
    status = "On Sale",
    location = "Los Angeles, CA",
    seller_image,
    seller_name = "Sara Chen",
    condition = "New",
    usage = "3 Month",
    description = "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution Of Letters, As Opposed To Using 'Content Here, Content Here', Making It Look Like Readable English. Many Desktop Publishing Packages And Web Page Editors Now Use Lorem Ipsum As Their Default Model Text, And A Search For 'lorem Ipsum' Will Uncover Many Web Sites Still In Their Infancy.",
    seller_contact = "sara.chen_contact",
    email = "sara@shop.net",
  } = product || {}; // Ensure product is defined

  // Format price display
  const priceRange = price_min === price_max
    ? `$${price_min}`
    : `$${price_min} - ${price_max}`;

  // Format date for display
  const postedDate = created_at
    ? new Date(created_at).toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
      })
    : '10/19/2024';

  const displayProductId = _id || '68f753ae2174c4368ec882f4';


  return (
    <section className="commonSectionPadding">
      {/* Note: <title> tag should be in the document head or use react-helmet/equivalent */}
      {/* Keeping it here for reference, but typically handled outside the component return */}
      <title>Smart Deals | Product Details</title>

      <Container>
        {/* Main Content Card - Adjusted max-w and p to match the image structure */}
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg p-6 lg:p-10">
          
          {/* Back Button */}
          <Link to={"/"} className="flex items-center text-secondary mb-6 hover:text-accent transition-colors">
            <IoIosArrowBack className="text-xl mr-1" />
            <span className="font-semibold text-sm">Back To Products</span>
          </Link>

          {/* Header Section */}
          <h1 className="text-3xl font-extrabold text-primary mb-2">{title}</h1>
          {/* Using a badge style closer to the image, which looks like a simple text box with a light background */}
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
                            Condition: <span className="font-normal text-secondary">{condition}</span>
                        </p>
                        <p className="font-semibold text-primary">
                            Usage Time: <span className="font-normal text-secondary">{usage}</span>
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
                    <p className="text-3xl font-extrabold text-green-600 mb-1">{priceRange}</p>
                    <p className="text-sm text-secondary">Price starts from</p>
                </div>

                {/* Product Details - Middle section on the right */}
                <div>
                    <h2 className="text-lg font-bold text-primary mb-3">Product Details</h2>
                    <p className="text-sm text-secondary mb-1">
                        **Product ID:** <span className="font-normal break-all">{displayProductId}</span>
                    </p>
                    <p className="text-sm text-secondary">
                        **Posted:** <span className="font-normal">{postedDate}</span>
                    </p>
                </div>

                {/* Seller Information - Matches the lower right panel */}
                <div className="pt-4 border-t">
                    <h2 className="text-lg font-bold text-primary mb-4">Seller Information</h2>
                    
                    {/* Seller Name and Email */}
                    <div className="flex items-center mb-4">
                        <div className="avatar mr-3">
                            <div className="w-12 h-12 rounded-full ring ring-gray-200 ring-offset-base-100 ring-offset-2">
                                {seller_image ? (
                                    <img src={seller_image} alt={seller_name} className="w-full h-full object-cover" />
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
                            **Location:** <span className="font-normal text-primary">{location}</span>
                        </p>
                        <p className="text-secondary">
                            **Contact:** <span className="font-normal text-primary">{seller_contact}</span>
                        </p>

                        <div className="flex items-center">
                            <p className="font-semibold text-primary mr-2">Status:</p>
                            {/* Using badge-warning for 'On Sale' to match the yellow-orange in the image */}
                            <div className={`badge ${status.toLowerCase() === 'sold' ? 'badge-error' : 'badge-warning'} text-xs font-semibold`}>
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Button - Full width, using your custom gradient classes */}
                <button className="btn btn-block text-white font-bold h-12 gradAccentClrHover gradAccentClr border-0 mt-6">
                    I Want Buy This Product
                </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetails;
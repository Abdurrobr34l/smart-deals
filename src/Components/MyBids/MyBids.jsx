import React, { useContext, useEffect, useState } from "react";
import Container from "../Container/Container";
import { AuthContext } from "../../Contexts/AuthContext";
import { MdOutlineFastfood } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const MyBids = () => {
  const { user } = useContext(AuthContext); // get logged-in user info
  const [myBids, setMyBids] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bids?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyBids(data))
        .catch((err) => console.error("Fetch error:", err));
    }
  }, [user]);

  return (
    <section className="commonSectionPadding">
      <title>Smart Deals | My Bids</title>
      <Container>
        <h2 className="title">
          My <span className="text-accent">Bids</span>
        </h2>

        {myBids.length > 0 ? (
          <div className="mt-10 overflow-x-auto shadow-lg rounded-lg bg-white">
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
                    Buyer
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
                {myBids.map((bid, index) => (
                  <tr
                    key={bid._id}
                    className="hover:bg-base-100 transition-colors duration-200 border-b border-base-200 last:border-b-0"
                  >
                    {/* SL No */}
                    <td className="text-center font-medium text-secondary">
                      {index + 1}
                    </td>

                    {/* Product */}
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12 bg-base-200 flex items-center justify-center">
                            <MdOutlineFastfood className="text-3xl text-gray-500" />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-primary">
                            {bid.product_title || bid.product}{" "}
                          </div>
                          <div className="text-sm opacity-50">
                            ${bid.bid_price}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Buyer */}
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center">
                            <FaUserCircle className="text-gray-500 text-xl" />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-primary">
                            {bid.buyer_name || "You"}
                          </div>
                          <div className="text-sm opacity-50 truncate max-w-[150px]">
                            {bid.buyer_email}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Bid Price */}
                    <td className="font-bold text-lg text-primary">
                      ${bid.bid_price}
                    </td>

                    {/* Actions */}
                    <td>
                      <div className="flex justify-center space-x-2">
                        <button
                          className="btn btn-sm btn-success text-white px-3"
                          onClick={() => console.log("Accept Offer:", bid._id)}
                        >
                          Accept Offer
                        </button>
                        <button
                          className="btn btn-sm btn-outline btn-error px-3"
                          onClick={() => console.log("Reject Offer:", bid._id)}
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
        ) : (
          <p className="mt-6">No bids found.</p>
        )}
      </Container>
    </section>
  );
};

export default MyBids;

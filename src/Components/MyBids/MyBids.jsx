import React, { useContext, useEffect, useState } from "react";
import Container from "../Container/Container";
import { AuthContext } from "../../Contexts/AuthContext";

const MyBids = () => {
  const { user } = useContext(AuthContext); // get logged-in user info
  const [myBids, setMyBids] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://your-server-url.com/bids?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyBids(data));
    }
  }, [user]);

  return (
    <section className="commonSectionPadding">
      <title>Smart Deals | My Bids</title>
      <Container>
        <h2 className="text-2xl font-semibold mb-4">My Bids</h2>
        {myBids.length > 0 ? (
          <div className="space-y-3">
            {myBids.map((bid) => (
              <div
                key={bid._id}
                className="p-4 border border-gray-300 rounded-lg flex justify-between"
              >
                <p>Product ID: {bid.product}</p>
                <p>Bid Price: ${bid.bid_price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No bids found.</p>
        )}
      </Container>
    </section>
  );
};

export default MyBids;

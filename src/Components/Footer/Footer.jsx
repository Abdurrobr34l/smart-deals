import React from "react";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-primary p-4">
      <Container>
        <aside>
          <p className="text-white!">
            Copyright © {new Date().getFullYear()} - All right reserved by Smart
            Deals
          </p>
        </aside>
      </Container>
    </footer>
  );
};

export default Footer;

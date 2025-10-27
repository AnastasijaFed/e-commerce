import React from "react";
import ProductSection from "./ProductSection";

const WomenSection = () => (
  <ProductSection
    title="Women’s Collection"
    category="women's clothing"
    linkTo="/products/women's clothing"
    limit={3}
  />
);

export default WomenSection;

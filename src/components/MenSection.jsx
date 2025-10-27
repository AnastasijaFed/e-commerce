import React from "react";
import ProductSection from "./ProductSection";

const MenSection = () => (
  <ProductSection
    title="Men’s Collection"
    category="men's clothing"
    linkTo="/products/men's clothing"
    limit={3}
  />
);

export default MenSection;

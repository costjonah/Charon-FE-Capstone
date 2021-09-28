import React from "react";
import ProductCard from "./ProductCard";
class Outfits extends React.Component {
  constructor() {
    super();
  }
  render() {
    // console.log(this.props.outfitProducts);
    const renderOutFitProducts = () => {
      if (
        !Array.isArray(this.props.outfitProducts) ||
        this.props.outfitProducts.length <= 0
      )
        return null;
      const OutfitProducts = this.props.outfitProducts.map((product) => {
        return (
          <ProductCard
            handleRemoveProductFromOutfits={
              this.props.handleRemoveProductFromOutfits
            }
            outfit={true}
            key={product.id}
            product={product}
          />
        );
      });
      return <div className="outfit-products">{OutfitProducts}</div>;
    };
    return <>{renderOutFitProducts()}</>;
  }
}

export default Outfits;

import React, { useState } from "react";
import PropTypes from "prop-types";
import * as styles from "./ProductDisplay.styles";
import Container from "../../Container";
import Button from "../../Buttons";
import { useLayoutEffect } from "react";
import { useDispatch } from 'react-redux';

const mockProduct = {
  title: "Product title",
  description:
    "lorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsumelorem ipsume",
  price: "$45.59",
  images: [
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F91%2Ff7%2F91f789d0347ffed27ed6e3ff961b2cb03fd94437.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F87%2Fa7%2F87a7b33e88a6650d213201be6f7988764882de87.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F79%2F61%2F7961d3694ff84e62a953d35bcb9404632ef79c38.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  ],
};

// main product image
export const ProductImage = (props) => (
  <div>
    <img src={props.image} alt={props.productDescription} />
  </div>
);

// product details e.g. title, description
export const ProductDetails = (props) => { 
  
  const [active, setActive] = useState(false);
  
  return (
    <styles.ProductDetails>
      <h2>{props.title}</h2>
      <h2>{props.price}</h2>
      <p className={active ? 'active' : ''}>{props.description}</p>
      <styles.ProductDetailsThumbnails>
        {props.thumbNailImages.map((i, index) => (
          <styles.ProductDetailsThumbnail className={props.currentSlideId === index ? 'active': ''} onClick={() => props.click(index)} src={i} alt="" />
        ))}
      </styles.ProductDetailsThumbnails>
      <p>Check store availibility</p>
      <br />
      <Button label="Add to Cart" width="full" />
    </styles.ProductDetails>
  )
};

// Product display
const ProductDisplay = (props) => {

  const [current, setCurrent ] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrent(index);
  }

  return (
    <Container>
      <styles.ProductDisplayGrid>
        <ProductImage image={mockProduct.images[current]} />
        <ProductDetails 
          title={mockProduct.title}
          price={mockProduct.price}
          description={mockProduct.description}
          thumbNailImages={mockProduct.images}
          currentSlideId={current}
          click={(index) => handleThumbnailClick(index)}
        />
      </styles.ProductDisplayGrid>
    </Container>
  )
};

ProductDisplay.propTypes = {
  // bla: PropTypes.string,
};

ProductDisplay.defaultProps = {
  // bla: 'test',
};

export default ProductDisplay;

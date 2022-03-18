import React from "react";
import Container from "../../Container";
import { ProductCard, ProductGrid } from "../../Product/Product";
import Filter from "../../Filter";
import Banner from "../../Banner";
import * as styles from "../Gallery/Gallery.styles";

const GalleryFilter = (props) => (
  <styles.GalleryFilter>
    <styles.GalleryFilterSection>
      <div>Sort By</div>
      <div>Filter By</div>
    </styles.GalleryFilterSection>
    <styles.GalleryFilterSection>
      <div>800 items</div>
      <div>Grid</div>
    </styles.GalleryFilterSection>
  </styles.GalleryFilter>
);

const data = [
  {
    image:
      "https://www.the-sustainable-fashion-collective.com/img/http/assets.the-sustainable-fashion-collective.com/assets/the-swatch-book/2016/10/1612006000_1_1_1.jpg/a38769c7c53dd6dcee26f4530935d0a4.jpg",
    headline: "Womans shirt",
    price: "$456",
    description: "this is description",
  },
  {
    image:
      "https://www.the-sustainable-fashion-collective.com/img/http/assets.the-sustainable-fashion-collective.com/assets/the-swatch-book/2016/10/1612006000_1_1_1.jpg/a38769c7c53dd6dcee26f4530935d0a4.jpg",
    headline: "Womans shirt",
    price: "$456",
    description: "this is description",
  },
  {
    image:
      "https://www.the-sustainable-fashion-collective.com/img/http/assets.the-sustainable-fashion-collective.com/assets/the-swatch-book/2016/10/1612006000_1_1_1.jpg/a38769c7c53dd6dcee26f4530935d0a4.jpg",
    headline: "Womans shirt",
    price: "$456",
    description: "this is description",
  },
  {
    image:
      "https://www.the-sustainable-fashion-collective.com/img/http/assets.the-sustainable-fashion-collective.com/assets/the-swatch-book/2016/10/1612006000_1_1_1.jpg/a38769c7c53dd6dcee26f4530935d0a4.jpg",
    headline: "Womans shirt",
    price: "$456",
    description: "this is description",
  },
  {
    image:
      "https://www.the-sustainable-fashion-collective.com/img/http/assets.the-sustainable-fashion-collective.com/assets/the-swatch-book/2016/10/1612006000_1_1_1.jpg/a38769c7c53dd6dcee26f4530935d0a4.jpg",
    headline: "Womans shirt",
    price: "$456",
    description: "this is description",
  },
  {
    image:
      "https://www.the-sustainable-fashion-collective.com/img/http/assets.the-sustainable-fashion-collective.com/assets/the-swatch-book/2016/10/1612006000_1_1_1.jpg/a38769c7c53dd6dcee26f4530935d0a4.jpg",
    headline: "Womans shirt",
    price: "$456",
    description: "this is description",
  },
  {
    image:
      "https://www.the-sustainable-fashion-collective.com/img/http/assets.the-sustainable-fashion-collective.com/assets/the-swatch-book/2016/10/1612006000_1_1_1.jpg/a38769c7c53dd6dcee26f4530935d0a4.jpg",
    headline: "Womans shirt",
    price: "$456",
    description: "this is description",
  },
];

const banner = {
  headline: "Now even more styles in your size!",
  body: "Discover our extended size range online & in stores"
}

const Gallery = (props) => (
  <Container>
    <styles.GalleryGrid>
      <div>
        <Filter />
      </div>
      <div>
        <Banner
          headline={banner.headline}
          body={banner.body}
        />
        <GalleryFilter />
        <ProductGrid>
          {data.map((d) => (
            <ProductCard
              link="/product"
              image={d.image}
              headline={d.headline}
              price={d.price}
              description={d.description}
            />
          ))}
        </ProductGrid>
      </div>
    </styles.GalleryGrid>
  </Container>
);

Gallery.propTypes = {
  // bla: PropTypes.string,
};

Gallery.defaultProps = {
  // bla: 'test',
};

export default Gallery;

import React from 'react';
import { shallow } from 'enzyme';

import Overview from "../../../components/main_component/Overview.jsx";

import ProductInfo from "../../../components/main_component/product_information/ProductInfo.jsx";
import Review from "../../../components/main_component/product_information/OV_Review.jsx";
import FreeForm from "../../../components/main_component/product_information/FreeForm.jsx";
import BrandLogos from "../../../components/main_component/product_information/BrandLogos.jsx";

import StyleSelector from "../../../components/main_component/style_selector/StyleSelector.jsx";

import MainImage from "../../../components/main_component/image_gallery/MainImage.jsx";
import Gallery from "../../../components/main_component/image_gallery/GalleryView.jsx";
import ImgModal from "../../../components/main_component/image_gallery/ImgModal.jsx";

import SizeSelector from "../../../components/main_component/add_to_cart/SizeSelect.jsx";
import QuantitySelector from "../../../components/main_component/add_to_cart/QuantitySelect.jsx";
import AddToCart from "../../../components/main_component/add_to_cart/AddToCart.jsx";

describe('Main Component', () => {
  let overviewBody;

  beforeAll(() => {
    overviewBody = shallow(<Overview />);
  });

  test('renders Product Information', () => {
    const doesRender = overviewBody.find(ProductInfo);
    expect(doesRender).toHaveLength(1);
  });

  test('renders Overview Reviews', () => {
    const doesRender = overviewBody.find(Review);
    expect(doesRender).toHaveLength(1);
  });

  test('renders Free Form Information', () => {
    const doesRender = overviewBody.find(FreeForm);
    expect(doesRender).toHaveLength(1);
  });

  test('renders Brand Logos', () => {
    const doesRender = overviewBody.find(BrandLogos);
    expect(doesRender).toHaveLength(1);
  });

  test('renders Style Selector', () => {
    const doesRender = overviewBody.find(StyleSelector);
    expect(doesRender).toHaveLength(1);
  });

  test('renders Main Image', () => {
    const doesRender = overviewBody.find(MainImage);
    expect(doesRender).toHaveLength(1);
  });

  test('renders Gallery View', () => {
    const doesRender = overviewBody.find(Gallery);
    expect(doesRender).toHaveLength(1);
  });

  test('renders Image Modal', () => {
    const doesRender = overviewBody.find(ImgModal);
    expect(doesRender).toHaveLength(1);
  });

  test('renders Size Selector', () => {
    const doesRender = overviewBody.find(SizeSelector);
    expect(doesRender).toHaveLength(1);
  });

  test('renders Quantity Selector', () => {
    const doesRender = overviewBody.find(QuantitySelector);
    expect(doesRender).toHaveLength(1);
  });

  test('renders Add To Cart', () => {
    const doesRender = overviewBody.find(AddToCart);
    expect(doesRender).toHaveLength(1);
  });
});


const BASE_URL_PREFFIX = "";

export const fetchProductList = async () => {
  const res = await fetch(`${BASE_URL_PREFFIX}/products`);
  const data = await res.json();
  //console.log(data);
  return data;
};

export const ProductListid = async () => {
  const res = await fetch(`${BASE_URL_PREFFIX}/products/1/related`);
  //const res = await fetch(`${BASE_URL_PREFFIX}/7.json`);
  const data = await res.json();

  return data;
};

export const fetchProduct = async (id) => {
  const res = await fetch(`${BASE_URL_PREFFIX}/products/${id}`);
  const data = await res.json();
  return data;
};

export const fetchRelatedProductIDs = async (productID) => {
  const res = await fetch(`${BASE_URL_PREFFIX}/products/${productID}/related`);
  const data = await res.json();
  return data;
};

export const fetchCurrentProduct = async () => {
  const res = await fetch(`${BASE_URL_PREFFIX}/currentProduct`);
  const data = await res.json();
  return data;
};

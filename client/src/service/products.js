const BASE_URL_PREFFIX = '/api/test'

exports.fetchProductList = async () => {
    const res = await fetch(`${BASE_URL_PREFFIX}/products`);
    const data = await res.json();
    // console.log(data);
    return data;
};

exports.fetchProduct = async (id) => {
    const res = await fetch(`${BASE_URL_PREFFIX}/products/${id}`);
    const data = await res.json();
    return data;
};
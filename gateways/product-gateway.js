// Hanya untuk operational array
let products = [];
let nextProductId = 1;

module.exports.addProductGateway = (data) => {
    const product = {
        product_id: nextProductId++,
        ...data
    };
    products.push(product);
    return product.product_id
}

module.exports.getAllProductGateway = () => {
    return products
}

module.exports.getProductByIdGateway = (id) => {
    const product = products.find(p => p.product_id === id);
    return product;
}

module.exports.updateProductGateway = (id) => {
    const product = products.find(p => p.product_id === id);
    return product;
}

module.exports.deleteProductGateway = (id) => {
    const productIndex = products.findIndex(p => p.product_id === id);
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        return true
    } else {
        return false
    }
}
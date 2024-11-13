let orders = [];
let nextOrderId = 1;

module.exports.addOrderGateway = (data) => {
    const order = {
        order_id: nextOrderId++,
        ...data
    }
    orders.push(order);
    return order.order_id
}

module.exports.getAllOrderGateway = () => {
    return orders;
}

module.exports.getOrderByIdGateway = (id) => {
    const order = orders.find(o => o.order_id === id)
    return order;
}

module.exports.updateOrderGateway = (id) => {
    const order = orders.findIndex(o => o.order_id === id)
    return order;
}

module.exports.deleteOrderGateway = (id) => {
    const orderIndex = orders.findIndex(o => o.order_id === id);
    if (orderIndex !== -1) {
        orders.splice(orderIndex, 1);
        return true
    } else {
        return false
    }
}
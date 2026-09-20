const getFromLocale = (key) =>{
    return JSON.parse(localStorage.getItem(key)) || []
}

const saveToLocal = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

const calculateTotalQuantity = (cart) => {
    console.log("cart ", cart)
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)

    return totalQuantity
}

const calculateTotalPrice = (cart) => {
    const cartItemsAmount = cart.reduce(
        (total,product) => total + product.quantity * product.price, 0
    )

    let totalAmount
    if (cartItemsAmount < 500) {
        totalAmount = cartItemsAmount + 100
    } else {
        totalAmount = cartItemsAmount
    }

    console.log("totalAmount ,", totalAmount)

    return totalAmount
}

export {getFromLocale, saveToLocal, calculateTotalQuantity, calculateTotalPrice}
import fetchProduct from "./api.js";
import { uiElement, renderProduct, renderCartItems, renderNotFound, renderCartQuantity, renderCartTotal  } from "./ui.js";
import { getFromLocale } from "./helper.js";
import { addToCart } from "./cart.js";

const CART = "cart1"


document.addEventListener("DOMContentLoaded", async () => {


    uiElement.menuBtn.addEventListener("click", () => {
        uiElement.nav.classList.toggle("open")
    })

    let cart = getFromLocale(CART)

    //render cart quantity !!
    renderCartQuantity(cart)

    if (window.location.pathname.includes("/index.html")) {
        const products = await fetchProduct()

        renderProduct(products, (e) => {

            //addToCart !!
            addToCart(e, products)
        })

    } else {
        if (cart.length > 0) {
            console.log(" bigger 0")
            renderCartItems(cart)
            renderCartTotal(cart)
        } else {
            renderNotFound()
        }
    }

})
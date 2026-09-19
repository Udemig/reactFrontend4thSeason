
import getMenu from "./api.js";
import { uiElements, renderLoader, renderMenuCard, renderDetailPage, renderNotFound } from "./ui.js";

document.addEventListener("DOMContentLoaded",async()=>{

    const menuData = await getMenu()

    if (window.location.pathname.includes("/index.html")) {
        renderLoader()
        renderMenuCard(menuData)

        uiElements.categoryButtons.forEach((button)=>{
            button.addEventListener("click",()=>{
                const selectedCategory = button.id

                const filteredMenu = menuData.filter(
                    (item) => item.category == selectedCategory
                )

                if (selectedCategory == "all") {
                    renderMenuCard(menuData)
                } else {
                    renderMenuCard(filteredMenu)
                }
            })
        })
    } else {
       const params = new URLSearchParams(window.location.search)
        console.log(params.get("id"))

        const itemId = +params.get("id")

        const product = menuData.find((item) => item.id == itemId)

        if (!product) {
            renderNotFound()
        } else {
            renderDetailPage(product)
        }
    }
})
// const main = document.querySelector(".main")
//
// let myProds = []
//
// const saveToCart = (prod) => {
//     let cartValue = localStorage.getItem("cart")
//
//     if(cartValue) {
//         cartValue = JSON.parse(cartValue)
//         const existsInCart = cartValue.find(pr => pr.id === prod.id)
//
//         if(existsInCart) {
//             const prodIndex = cartValue.findIndex(pr => pr.id === prod.id)
//             cartValue[prodIndex].quantity++
//             localStorage.setItem("cart", JSON.stringify(cartValue))
//
//         } else {
//             prod.quantity = 1
//             cartValue.push(prod)
//             localStorage.setItem("cart", JSON.stringify(cartValue))
//         }
//
//     } else {
//         prod.quantity = 1
//         localStorage.setItem("cart", JSON.stringify([prod]))
//     }
// }
//
//
// const appendHtml = (prods) => {
//
//     prods.map(prod => {
//         main.innerHTML += `
//                 <div class="box">
//                     <img src="${prod.images[0]}" alt="">
//                     <h3>${prod.title}</h3>
//                     <h2>${prod.price}$</h2>
//                     <button id="${prod.id}">ADD TO CART</button>
//                 </div>
//         `
//     })
//
//     const buttons = document.querySelectorAll("button")
//
//     buttons.forEach(item => {
//         item.onclick = (event) => {
//             const id = event.target.id
//             const myProd = myProds.find(prod => prod.id === Number(id))
//             saveToCart(myProd)
//         }
//     })
//
// }
//







const getProducts = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => res.json())
        .then(data => {
            myProds = data.meals
            console.log(data)
            // appendHtml(data.meals)
        })
}

getProducts()











//     [20:56] Andrius Kasovskis
// create two html files, one for "add product" other for "all products"
//     in add product:create form with inputs, title, description,
//     ingredients, caloriesAlso create button for adding photoAlso you
// can create one more button in form, to add product to preview.When user
// fills form inputs, he have to click "add photo" this button calls api (fetch)
// and gets photo from response objectWhen user fills all inputs he should
// click on "add to review" button, which appends right  side of screen with product review
// (there should be title, description, tags , calories and photo visible)After product is previewed,
//     you user clicks on ADD PRODUCT button, this should send product object to
// local storage and add it to array of productsWhen user hoes to "All products" page,
//     those products which are in local storage should be visible Also in 'ALL products" ' +
// 'page should be a filter component which lets user to filter products. And show only those ' +
// 'who match criteria. If filter inputs is empty and user clicks "filter" all products should be shown



















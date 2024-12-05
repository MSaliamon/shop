import Cart from "./modules/Cart.js";

const productList = document.querySelector('.cart-product-list');


let cartObj = {
    products: [],
    qty: 0,
    totalPrice: 0
};
const CartFromLS = JSON.parse(localStorage.getItem('cart'));

if (CartFromLS) {
    cartObj = CartFromLS;
}
let cart = new Cart(cartObj);

console.log(cart);


function addCartProductToDom(product) {
    const html = `
        <div class="product-wrap">
            <div class="card" data-id="${product.id}">
                <img src="${product.images[0]}" alt="${product.title}" class="card__img">
                <div class="card__body">
                    <h5 class = "card__title"> ${product.title}</h5>
                    <p class = "card__text">  ${product.description}</p>
                    <p class = "card__text"> Price:  ${product.price}$</p>
                    <a href="#" class="card__link js-product-buy" >Buy</a>
                </div>
            </div>
        </div>
    `;
    productList.innerHTML += html;
}
window.addEventListener('load', (e) => {
    if (cart.qty > 0) {
        cart.products.forEach(product => {
            addCartProductToDom(product);
        });
    }
});

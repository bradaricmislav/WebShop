import {cart} from "./cart.js";
import { games } from "./games.js"
import { ps5Games } from "./igre/ps5.js";
import { xboxGames } from "./igre/xbox.js";
import { nintendoGames} from "./igre/nintendo.js"
import { ps5Consoles } from "./konzole/ps5.js"
import { xboxConsoles } from "./konzole/xbox.js"
import { nintendoConsoles } from "./konzole/nintendo.js"
import { ps5Periphery } from "./periferija/ps5.js"
import { xboxPeriphery } from "./periferija/xbox.js"
import { nintendoPeriphery } from "./periferija/nintendo.js"

const products = [...games, ...ps5Games, ...xboxGames, ...nintendoGames, ...ps5Consoles, ...xboxConsoles, ...nintendoConsoles, ...ps5Periphery, ...xboxPeriphery, ...nintendoPeriphery];

export function renderCart()
{
    document.querySelector(".orders").innerHTML = "";
    document.querySelector(".order-payment").innerHTML = "";
    if (cart.cartItems.length === 0) {
        document.querySelector(".main").style.height="52.75vh"; 
        const orderPaymentContainer = document.querySelector(".order-payment");
        orderPaymentContainer.remove();
        document.querySelector(".empty-cart").innerHTML = `
        <p class="no-order">Vaša košarica je prazna.</p>
        <a class="return-to-main-page" href="../index.html"><button>Povratak u trgovini</button></a>
        `
        return; 
    }
    let cartSummaryHTML = '';
    let totalPriceCents = 0;
    cart.cartItems.forEach((cartItem) => {
    const productId = cartItem.id;

    let matchingProduct;

    products.forEach((product) => {
        if(product.id === productId)
        {
            matchingProduct = product;
        }
    })

    totalPriceCents += cartItem.quantity*matchingProduct.priceCents;
    cartSummaryHTML += `
    <div class="order js-cart-item-container-${productId}">
        <img src="${matchingProduct.image}" alt="${matchingProduct.name}">
        <div class="order-summary">
            <p class="name">${matchingProduct.name}</p>
            <p class="price">${(matchingProduct.priceCents/100).toFixed(2)} €</p>
            <div class="quantity">
                <p>Količina:</p>
                <input class="quantity-input" data-product-id="${productId}" type="number" value="${cartItem.quantity}" min="1">
            </div>
            <div class="delete-item">
                <button 
                    class="remove-item" 
                    data-product-id="${productId}">
                    Izbriši
                </button>
            </div>
        </div>
    </div>
    `;

    });
    document.querySelector(".orders").innerHTML = cartSummaryHTML;
    const totalPrice = totalPriceCents/100;
    const { shipping, finalPrice } = calculateShipping(totalPrice);
    document.querySelector(".order-payment").innerHTML = `
        <p>Ukupno: ${totalPrice.toFixed(2)}€</p>
        <p>Dostava: ${shipping.toFixed(2)}€</p>
        <hr>
        <p>Za platiti: ${finalPrice.toFixed(2)}€</p>
        <button class="order-button">Kupi</button>
    `;
    document.querySelectorAll(".remove-item")
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId; 
            cart.removeFromCart(productId);
            renderCart();
        });
    });
    document.querySelector(".order-button").addEventListener("click", () => {
    placeAnOrder();
    renderCart();
});
updateQuantity();
}

function calculateShipping(totalPrice)
{
    let shippingPrice = 0;
    if (totalPrice === 0)
    {
        shippingPrice = 0;
    }
    else if(totalPrice<49.99)
    {
        shippingPrice = 4.99;
    }
    return {
        shipping: shippingPrice,
        finalPrice: totalPrice + shippingPrice
    };
}
function placeAnOrder()
{
    cart.cartItems.length=0;
    localStorage.removeItem("cart");
    successfulOrder();
}
function successfulOrder() 
{
    const overlay = document.createElement("div");
    overlay.className = "order-success";
    overlay.innerHTML = `
        <div class="order-success-box">
            &#x2713 Hvala na narudžbi!
        </div>
    `;
    document.body.appendChild(overlay);
    setTimeout(() => {
        overlay.remove();
    }, 3000);
}
function updateQuantity()
{
    document.querySelectorAll(".quantity-input").forEach(input => {
        input.addEventListener("input", () => {
            const productId = input.dataset.productId;
            const cartItem = cart.cartItems.find(item => item.id === productId);
            cartItem.quantity = input.value;
            cart.saveCart();
            renderCart();
        });
    });
}
renderCart();

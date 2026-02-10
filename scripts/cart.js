class Cart{
    cartItems;
    #localStorageKey;

    constructor(localStorageKey)
    {
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
    }

    #loadFromStorage()
    {
       this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [];
    }

    saveCart() 
    {
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(productId)
    {
        let matchingItem;
        this.cartItems.forEach((cartItem) => {
            if(productId === cartItem.id)
            {
                matchingItem=cartItem;
            }
        })
        if(matchingItem)
        {
            matchingItem.quantity+=1;
        }
        else 
        {
            this.cartItems.push(
                {
                    id: productId,
                    quantity: 1
                }
            );
        }
        this.saveCart();
    }

    removeFromCart(productId)
    {
        const newCart = [];
        this.cartItems.forEach((cartItem) => {
            if (cartItem.id !== productId)
            {
                newCart.push(cartItem);
            }
        });

        this.cartItems = newCart;

        this.saveCart();
    }
}

export const cart = new Cart('cart');


// export let cart = JSON.parse(localStorage.getItem('cart')) || [];

// export function saveCart() {
//     localStorage.setItem("cart", JSON.stringify(cart));
// }

// export function addToCart(productId)
// {
//     let matchingItem;
//     cart.forEach((cartItem) => {
//         if(productId === cartItem.id)
//         {
//             matchingItem=cartItem;
//         }
//     })
//     if(matchingItem)
//     {
//         matchingItem.quantity+=1;
//     }
//     else 
//     {
//         cart.push(
//             {
//                 id: productId,
//                 quantity: 1
//             }
//         );
//     }
//     console.log("Trenutna košarica:", cart);
//     saveCart();
// }

// export function removeFromCart(productId)
// {
//     const newCart = [];
//     cart.forEach((cartItem) => {
//         if (cartItem.id !== productId)
//         {
//             newCart.push(cartItem);
//         }
//     });

//     cart = newCart;

//     saveCart();
// }
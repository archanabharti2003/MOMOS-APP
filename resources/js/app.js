 let addToCart = document.querySelectorAll('.add-to-cart')


addToCart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        console.log(e)

        //request to server and add momos to cart
        let momo=JSON.parse(btn.dataset.momos)
        console.log(momo)

    })
})


// document.addEventListener("DOMContentLoaded", function() {
//     const addToCartButtons = document.querySelectorAll('.add-to-cart');

//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             const momosData = JSON.parse(this.getAttribute('data-momos'));
//             addToCart(momosData);
//         });
//     });

//     function addToCart(momosData) {
//         // Here you can implement your logic to add the momos to the cart
//         // For example, you can send an AJAX request to a server-side script to add the momos to the cart
//         console.log('Added to cart:', momosData);
//     }
// });
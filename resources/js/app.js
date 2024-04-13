 
//  import axios from 'axios'
const axios = require('axios');



 let addToCart = document.querySelectorAll('.add-to-cart')
 let cartCounter = document.querySelector('#cartCounter')


function updateCart(momos){
    axios.post('./update-cart',momos).then(res=>{
        cartCounter.innerText = res.data.totalQty;
        // new Noty({
        //     type: 'success',
        //     timeout: 1000,
        //     text: 'Item added to cart',
        //         progressBar: false,
        //     }).show();
        // }).catch(err => {
        //     new Noty({
        //          type: 'error',
        //         timeout: 1000,
        //         text: 'Something went wrong',
        //         progressBar: false,
        //     }).show();
    })
}

addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let momos= JSON.parse(btn.dataset.momos)
        updateCart(momos)
    })
})

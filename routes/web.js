
const homeController=require('../app/http/controllers/homeController');
const authController=require('../app/http/controllers/authController');
const cartController=require('../app/http/controllers/customers/cartController');

function initRoutes(app){
    //create routing for home page
    app.get('/',homeController().index)

    // create routing for cart page
    app.get('/cart', cartController().index);

    // create routing for login page
    app.get('/login',authController().login );

    // create routing for register page
    app.get('/register', authController().register);
}


module.exports=initRoutes




function cartController(){
    return {
        index(req,res){
            res.render("customers/cart");
        }
    }                     //factory functions:-ye ek programming pattern hai   ye object creational pattern hai..
}

module.exports=cartController
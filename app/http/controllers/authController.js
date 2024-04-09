
function authController(){
    return {
        login(req,res){
            res.render("auth/login");
        },
        register(req,res){
            res.render("auth/register");
        }
    }                     //factory functions:-ye ek programming pattern hai   ye object creational pattern hai..
}

module.exports=authController
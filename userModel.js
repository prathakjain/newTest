var con = require('./config');

class commonClass {
 
    
/* mobile number check */
addUserModel(req){  
    // var first  = req.first; 
    
    return new Promise(function(resolve, reject) {
       var sql = "INSERT INTO users (name, email, dob) values ('"+req.name+"' ,'"+req.email+"' , '"+req.dob+"')";
        con.query(sql, function (err, result) {
            if(result){
                resolve(result);
            }else{
                reject(err);
            }
        });
    });
}


getUserModel(userId){  
    return new Promise(function(resolve, reject) {
       var sql = "SELECT * FROM users WHERE id = '"+userId+"'";
        con.query(sql, function (err, result) {
            if(result){
                resolve(result);
            }else{
                reject(err);
            }
        });
    });
}


deleteUserModel(userId){  
    return new Promise(function(resolve, reject) {
       var sql = "DELETE FROM users WHERE id = '"+userId+"'";
        con.query(sql, function (err, result) {
            if(result){
                resolve(result);
            }else{
                reject(err);
            }
        });
    });
}
 

}
module.exports = commonClass;

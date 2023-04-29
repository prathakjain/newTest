var userModel = require('./userModel');
const user = new userModel();

module.exports.addUser = async function(req, res, next) {

    const finaloutput = await user.addUserModel(req.body).then((result) => {
        if(result.insertId){
            res.json({
                status: 200,
                error_code: 0,
                error_line:4,
                message: "User Added Successfully"
            });
        }
    }).catch((e) => {
        console.log(e)
        res.json({
            status: 200,
            error_code: 0,
            error_line:4,
            message: "Not Insert"
        });
    })
    

   
    return true;
        
};

module.exports.getUser = async function(req, res, next) {
	var userId = req.params.userId; 
    const finaloutput = await user.getUserModel(userId).then((result) => {
        if(result){
            res.json({
                status: 200,
                error_code: 0,
                error_line:4,
                message: "User details success",
                data : result
            }); 
        }
    }).catch((e) => { 
        res.json({
            status: 200,
            error_code: 0,
            error_line:4,
            message: "User not find"
        });
    })
     
   
    return true;   
};

module.exports.deleteUser = async function(req, res, next) {
    
    var userId = req.params.userId; 
    const finaloutput = await user.deleteUserModel(userId).then((result) => {
        console.log(result);
        if(result){
            res.json({
                status: 200,
                error_code: 0,
                error_line:4,
                message: "User delete success",
                data : result
            }); 
        }
    }).catch((e) => { 
        res.json({
            status: 200,
            error_code: 0,
            error_line:4,
            message: "User not found"
        });
    })
     
   
    return true;
        
};


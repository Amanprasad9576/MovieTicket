

const createUser = async (req,res)=>{
    try {
        const response = await UserService.createUser(req.body);
        console.log(response);
        res.status(201).json({
            success:true,
            data:response
        });
    } catch (error) {
        console.log("Error in creating in controller",error);
        res.status(500).json({
            success:false,
            message:"Internal Server error"
        })
    }
}

module.exports = {
    createUser
}
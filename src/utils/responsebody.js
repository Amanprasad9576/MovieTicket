
const errorResponseBody = {
    error:{},
    data:{},
    success:false,
    message:"Something went wrong cann't process the request", 
}

const successResponseBody = {
    error:{},
    data:{},
    success:true,
    message:"Request successful"
}

module.exports = {
    errorResponseBody,
    successResponseBody
}
    

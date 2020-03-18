import {loginType} from "./userType"
import {loginApi} from "@api/users"
export const userLoginAsyncAction=(value)=>{
    const userLoginAction=(data)=>({
        type:loginType,
        data
    })
   
    return async (dispatch)=>{
        let data=await loginApi(value);
        console.log(data)
        dispatch(userLoginAction(data.data))
        if(data.data.code=== '200'){
            return data.data.code
        }
    }
}
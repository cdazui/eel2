import {userLoginAsyncAction} from "@actions/users/userAction"
import { message } from "antd";
export const mapStateToProps=(state)=>({

})

export const mapDispatchToProps=(dispatch)=>({
    async handleLogin(values){
       let data=await dispatch(userLoginAsyncAction(values));
       if(data === '200'){
           message.success("登录成功",1,()=>{
               this.props.history.push("/home")
               this.props.history.go()
               console.log(123)
           })
       }
    }
})
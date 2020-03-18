import {loginType} from "@actions/users/userType"
import Cookies from "js-cookie"
let defaultState={
    authToken:""
}

export default (state=defaultState,actions)=>{
    switch(actions.type){
        case loginType:
            let loginState=Object.assign({},state);
            loginState.authToken=actions.data.data.authtoken;
            Cookies.set("token",actions.data.data.authtoken,{expires:7})
            return loginState
        default:;
    }
    return state;
}   
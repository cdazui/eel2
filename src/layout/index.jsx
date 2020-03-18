import React from "react"
import LayoutCom from "./layoutcom"
import Cookies from "js-cookie"
import {Redirect} from "react-router-dom"
export default (WrapperComponent)=>{
    return class extends React.Component{
        render(){
            if(Cookies.get("token")){
                console.log(22)
                if(window.location.hash!=="#/login"){
                    console.log(window.location.hash)
                    return(
                        <LayoutCom>
                            <WrapperComponent></WrapperComponent>
                        </LayoutCom>
                    )
                }else{
                    console.log(window.location.hash)
                    return <WrapperComponent></WrapperComponent>
                }
                
                
            }else{
                console.log(window.location.hash)
               return <Redirect to="/login"/>
            }
        }
    }
}
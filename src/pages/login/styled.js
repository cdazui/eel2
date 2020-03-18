import styled from "styled-components"

export const LoginContainer = styled.div`
    width:100%;
    height:100%;
    background:#000;
    display:flex;
    justify-content:center;
    align-items:center;
    .loginContent{
        width:400px;
        height:350px;
        background:rgba(255,255,255,.5);
        border-radius:10px;
        padding:10px;
    }
    .login_btn button{
        width:100%;
    }
    .logo_title{
        width:100%;
        padding-top:20px;
        text-align:center;
        margin-bottom:30px;
        font-weight:900;
        font-size:30px;
    }
`
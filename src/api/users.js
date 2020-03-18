import axios from "axios";
import api from "./index";

export const loginApi=(data)=>axios({
    method:"post",
    data,
    url:api.users.login
})
import axios from "axios"
import api from "./index"

export const booksListApi=(data)=>axios({
    method:"get",
    url:api.books.booksList,
    // 这样就是查询字符串
    // params:data
    // get请求有点问题呀
    data
})
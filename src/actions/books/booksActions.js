import { booksListType} from "./booksType"
import {booksListApi} from "@api/books.js"
export const booksListAsyncAction=(dataInfo)=>{
    const booksListAction=(data)=>({
        type:booksListType,
        data
    })
    return async (dispatch)=>{
        let data=await booksListApi(dataInfo)
        dispatch(booksListAction(data.data))
    }
}
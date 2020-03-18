import {booksListType} from "@actions/books/booksType"
let defaultState={
    booksList:[],
    count:0
}

export default(state=defaultState,action)=>{
    switch(action.type){
        case booksListType:
            let booksState=JSON.parse(JSON.stringify(state));
            booksState.booksList=action.data.data;
            booksState.count=action.data.count;

            return booksState
    }
    return state
}
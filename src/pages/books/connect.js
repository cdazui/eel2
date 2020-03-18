import {booksListAsyncAction} from "@actions/books/booksActions"
export const mapStateToProps =(state)=>({
    booksList:state.books.booksList,
    count:state.books.count
})

export const mapDispatchToProps=(dispatch)=>({
    handleGetList(page,limit){
        dispatch(booksListAsyncAction({page,limit}))
    }
})
import loadable from "react-loadable"
import Loading from '@common/loading'

export const Home=loadable({
    loader:_=>import("./home"),
    loading:Loading
})

export const BooksManagement=loadable({
    loader:_=>import("./books/books-management"),
    loading:Loading
})

export const BooksList = loadable({
    loader:_=>import("./books/books-list"),
    loading:Loading
})

export const Login = loadable({
    loader:_=>import("./login"),
    loading:Loading
})

export const OrderList = loadable({
    loader:_=>import("./order/order-list"),
    loading:Loading
})

export const OrderManagement = loadable({
    loader:_=>import("./order/order-management"),
    loading:Loading
})

export const UserList = loadable({
    loader:_=>import("./users/user-list"),
    loading:Loading
})

export const UserInfo = loadable({
    loader:_=>import("./users/user-info"),
    loading:Loading
})
import { BrowserRouter, Route, Routes } from "react-router";
import UserLayout from "./layouts/userLayout";
import ReactComponent from "./pages/home";
import NotFoundPage from "./pages/404notfound";
import CounterPage from "./pages/counter/counter";
import ProductsPage from "./pages/products";
import SingleProduct from "./pages/singleProduct";

export default function AppRoutes() {
    console.log("AppRoutes rendered")
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserLayout />} >
                    <Route index element={<ReactComponent />} />
                    <Route path="counter" element={<CounterPage />} />
                    <Route path="product" >
                        <Route index element={<ProductsPage/>}/>
                        <Route path=":productID" element={<SingleProduct/>}/>
                    </Route>

                    <Route path="*" element={<NotFoundPage/>} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}
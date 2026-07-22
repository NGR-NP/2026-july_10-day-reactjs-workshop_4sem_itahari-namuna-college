import { Link, Outlet } from "react-router"

export default function UserLayout(){
    console.log("UserLayout rendered")
    return(
        <div>
            <h1>User Layout</h1>
            <p>This is the user layout component.</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                    <li>
                        <Link to="/random">Random</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}
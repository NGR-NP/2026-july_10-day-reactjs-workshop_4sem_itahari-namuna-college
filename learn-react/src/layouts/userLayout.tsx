import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router";
import { KEY_TOEKN } from "../constents/token";

export default function UserLayout() {
  const [isLoggedin, setIsLoggedIn] = useState<boolean|null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const hasToken = localStorage.getItem(KEY_TOEKN);
    if (hasToken) return setIsLoggedIn(true);
    setIsLoggedIn(false);
  }, []);

  function handleLogout() {
    localStorage.removeItem(KEY_TOEKN);
    setIsLoggedIn(false);
  }

  if(isLoggedin == null) return <div>checking auth...</div>  

  if (isLoggedin !== null &&!isLoggedin) navigate("/login");


  return (
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
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/users">users</Link>
          </li>
          <li>
            <Link to="/random">Random</Link>
          </li>
        </ul>

        <div>
          <button onClick={handleLogout}>logout</button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

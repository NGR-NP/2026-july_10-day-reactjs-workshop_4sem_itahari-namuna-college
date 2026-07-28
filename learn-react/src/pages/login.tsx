import type { SubmitEvent } from "react";
import { useNavigate } from "react-router";
import { KEY_TOEKN } from "../constents/token";

export default function LoginPage() {
    const navigate = useNavigate()
  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    const credentials = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    console.log(credentials)
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await  res.json()
      localStorage.setItem(KEY_TOEKN, data?.token)

      console.log(data)
      navigate("/users")
    } catch (err) {
        throw Error(JSON.stringify(err))
    }
  }
  return (
    <main>
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </section>
    </main>
  );
}

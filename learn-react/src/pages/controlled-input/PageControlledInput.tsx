import { useState } from "react";

export default function PageControlledInput() {
    const [username, updateUsername] = useState("")
    const [password, updatePassword] = useState("")
    const [showPassword, updateShowPassword] = useState(false)

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const userData = {
            username: username,
            password: password
        }
        console.log("form submitted", userData)
    }

    function handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log("username changed", e.currentTarget.value)
        updateUsername(e.currentTarget.value)
    }

    function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log("password changed", e.currentTarget.value)
        updatePassword(e.currentTarget.value)
    }
    console.log("show password:", showPassword,)

    return (
        <main>
            <div className="header">
                <h1 className="page-title">controlled Form Example Page</h1>
            </div>

            <section className="form-section">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input value={username} onChange={handleUsernameChange} name="username" type="text" placeholder="enter your username" />
                    </div>
                    <div>
                        <input value={password} onChange={handlePasswordChange}
                            type={showPassword ? "text" : "password"} name="password" placeholder="enter your password" />
                        <div>
                            <button type="button" onClick={() => updateShowPassword(!showPassword)}>
                                {showPassword ? "🫣" : "🫡"} Password
                            </button>
                        </div>
                    </div>
                    <div>
                        <button type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </main>
    )
}
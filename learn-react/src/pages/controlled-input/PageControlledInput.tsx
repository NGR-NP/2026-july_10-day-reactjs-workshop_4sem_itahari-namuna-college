import { useState } from "react";

export default function PageInputForm() {
    const [username, updateUsername] = useState("")
    const [password, updatePassword] = useState("")
   
    function handleSubmit(e:React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    function handleUsernameChange(e:React.ChangeEvent<HTMLInputElement>) {
        console.log("username changed", e.currentTarget.value)
    }

    function handlePasswordChange(e:React.ChangeEvent<HTMLInputElement>) {
        console.log("password changed", e.currentTarget.value)
    }

    return(
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
                        <input value={password} onChange={handlePasswordChange} type="password" name="password" placeholder="enter your password" />
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
import "./styleInputForm.css";


export default function PageInputForm() {
    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log("form submitted");
        const username = formData.get("username");
        const password = formData.get("password");
        console.log("username:", username);
        console.log("password:", password);
    }
    return (
        <main>
            <div className="header">
                <h1 className="page-title">Form Example Page</h1>
            </div>

            <section className="form-section">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input name="username" type="text" placeholder="enter your username" />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="enter your password" />
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
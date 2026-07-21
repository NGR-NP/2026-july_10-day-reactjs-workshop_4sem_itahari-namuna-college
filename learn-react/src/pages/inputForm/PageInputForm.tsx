import "./styleInputForm.css";


export default function PageInputForm() {
    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("form submit", e)
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
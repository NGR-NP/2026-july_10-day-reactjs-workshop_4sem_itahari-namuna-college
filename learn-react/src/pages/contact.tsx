export default function ContactPage() {
    return (
        <main>
            <section style={{padding:"3rem"}}>
                <form action="https://formsubmit.co/ab0c55c80619f50d0789d8fec61c337e" method="POST">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label >Name</label>
                        <input type="text" name="name" required />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>

                        <label>Email</label>
                        <input type="email" name="email" required />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>

                        <label>Message</label>
                        <input type="text" name="message" required />
                    </div>

                    <button type="submit">Send</button>
                </form>
            </section>
        </main>
    )
}
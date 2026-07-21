import { useState } from "react"
import "./counter.css"
export default function CounterPage() {
    const [value, updateValueFunction]=useState(0)

    function handleIncrement() {
        updateValueFunction(value + 1)
        console.log("+ Increment button clicked")
    }
    function handleDecrement() {
        updateValueFunction(value - 1)
        console.log("- Decrement button clicked")
    }
    return (
        <main className="counter-page">
            <div className="counter-header">
                <h1>Counter Page</h1>
            </div>
            <div className="counter-body">
                <p className="counter-value">Counter: {value}</p>

                <div className="counter-buttons">
                    <button onClick={handleIncrement} className="counter-button increment">Increment +</button>
                    <button onClick={handleDecrement} className="counter-button decrement">Decrement -</button>
                </div>
            </div>
        </main>
    )
}
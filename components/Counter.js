"use client";
import { useState } from "react";

export default function Counter({ initialCount = 0, initialStep = 1 }) {
    let [count, setCount] = useState(initialCount);
    let [step, setStep] = useState(Math.max(1, initialStep));

    let decreasingCheck = count - step >= 0;
    let increaseCount = () => setCount((c) => c + step);
    let decreaseCount = () => {
        if (!decreasingCheck) return;
        setCount((c) => c - step);
    };
    
    let resetCounter = () => setCount(0);

    let updateStep = (e) => {
        let value = Number(e.target.value);
        if (value < 1 || !e.target.value) {
            setStep(1);
        }
        else {
            setStep(value);
        }   
    };

    return (
        <div className="counter" aria-label="buttoncounter">
            <div className="row">
                <label className="label" htmlFor="step-input">Step</label>
                <input id="step-input" type="number" min={1} value={step} onChange={updateStep} className="input" />
                
            </div>

            <div className="counting" aria-live="polite" aria-atomic="true">
                Count: {count}
            </div>

            <div className="buttons">
                <button type="button" onClick={increaseCount} className="btn">Plus 1</button>
                <button type="button" onClick={decreaseCount} className="btn" disabled={!decreasingCheck} aria-disabled={!decreasingCheck}>Minus 1</button>
                <button type="button" onClick={resetCounter} className="secondBtn">Reset</button>

            </div>
        </div>
    );

};

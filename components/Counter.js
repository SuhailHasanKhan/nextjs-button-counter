"use client";
import { useState } from "react";

export default function Counter({ initialCount = 0, initialStep = 1 }) {
    let [count, setCount] = useState(initialCount);
    let [step, setStep] = useState(Math.max(1, initialStep));

    let decreasingCheck = count - step >= 0;
    let increaseCount = () => setCount((c) => c + step);
    let increaseCount = () => {
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






}

import { useState, useRef, useEffect } from "react";
import ResultModal from "./resultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {

    const timer = useRef(null);
    const dialog = useRef(null);

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    useEffect(() => {
        if (timeRemaining <= 0) {
            clearInterval(timer.current);
            setTimeRemaining(targetTime * 1000);
            dialog.current.open();
        }
    }, [timeRemaining, targetTime]);


    function handleStart() {
        timer.current = setInterval(()=> {
            setTimeRemaining(PrevTimeRemaining => PrevTimeRemaining - 10);
        }, 10);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    return (
        <>
            <ResultModal ref={dialog} onReset={handleReset} targetTime={targetTime} remainingTime = {timeRemaining} result = 'Lost' />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} seconds {targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running....' : 'Timer inactive'}
                </p>
            </section>
        </>
    );

}

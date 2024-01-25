import { useState, useEffect } from 'react';
import "./CountdownTimer.scss"

const CountdownTimer = () => {
    const targetDate = new Date('March 1, 2024 00:00:00').getTime();
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    function calculateTimeRemaining() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            return { days, hours, minutes, seconds };
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer-container">
            <p className="timer-container__unit">{timeRemaining.days} days</p>
            <p className="timer-container__unit">{timeRemaining.hours} hours</p>
            <p className="timer-container__unit">{timeRemaining.minutes} minutes</p>
            <p className="timer-container__unit">{timeRemaining.seconds} seconds</p>
        </div >
    );
};

export default CountdownTimer;

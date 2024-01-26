import { useEffect, useState } from "react";

export default function useCountDown() {
    const [secondsLeft, setSecondsLeft] = useState(0);

    useEffect(() => {
        if (secondsLeft <= 0) return;

        // Reduce the counter by 1 every second
        const timeout = setTimeout(() => {
            setSecondsLeft(secondsLeft - 1);
        }, 1000);

        // avoids infinite loop
        return () => clearTimeout(timeout);
    }, [secondsLeft]);

    function startTimer(seconds: number) {
        setSecondsLeft(seconds);
    }

    return { secondsLeft, startTimer };
}

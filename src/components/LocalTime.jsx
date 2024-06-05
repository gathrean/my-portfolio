import React, { useState, useEffect } from 'react';

function LocalTime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const localTime = time.toLocaleTimeString([], options);

    return <span>{localTime}</span>;
}

export default LocalTime;

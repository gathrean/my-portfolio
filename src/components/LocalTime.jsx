import React, { useState, useEffect } from 'react';

function LocalTime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        // Get the UTC offset in minutes
        const offset = -date.getTimezoneOffset();
        const offsetHours = Math.floor(offset / 60).toString().padStart(2, '0');
        const offsetMinutes = (offset % 60).toString().padStart(2, '0');
        const offsetSign = offset >= 0 ? '+' : '-';

        return `${hours}:${minutes} (UTC ${offsetSign}${offsetHours}:${offsetMinutes})`;
    };

    const formattedTime = formatTime(time);

    return <span>{formattedTime}</span>;
}

export default LocalTime;
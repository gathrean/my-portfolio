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
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12;
        hours = hours.toString().padStart(2, '0');

        const offset = -date.getTimezoneOffset();
        const offsetSign = offset >= 0 ? '+' : '-';
        const absOffsetHours = Math.abs(Math.floor(offset / 60)).toString().padStart(2, '0');
        const absOffsetMinutes = Math.abs(offset % 60).toString().padStart(2, '0');

        return `${hours}:${minutes} ${ampm} (UTC ${offsetSign}${absOffsetHours}:${absOffsetMinutes})`;
    };

    const formattedTime = formatTime(time);

    return <span>{formattedTime}</span>;
}

export default LocalTime;
'use client';

import { useState, useEffect } from 'react';

export function FooterTimestamp() {
    const [lastUpdated, setLastUpdated] = useState('Loading...');

    useEffect(() => {
        fetch('https://api.github.com/repos/gathrean/my-portfolio/commits/main')
            .then(res => {
                if (!res.ok) throw new Error('Not found');
                return res.json();
            })
            .then(data => {
                const date = new Date(data.commit.committer.date);
                const options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true,
                    timeZone: 'America/Vancouver',
                };
                const formatted = date.toLocaleString('en-US', options);
                setLastUpdated(`Last updated on ${formatted} UTC -8`);
            })
            .catch(() => {
                setLastUpdated('Last updated on February 8, 2026 at 12:00 AM UTC -8');
            });
    }, []);

    return <p>{lastUpdated}</p>;
}

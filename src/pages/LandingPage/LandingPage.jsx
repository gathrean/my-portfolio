import React, { useState, useEffect } from 'react';
import { ExternalButton } from '../../components/ExternalButton/ExternalButton';
import { ExternalLink } from '../../components/ExternalLink/ExternalLink';
import { LinkedInIcon, GitHubIcon, XIcon } from '../../components/Icons/LinkIcons';
import heroImage from './2025-10-16-Gathrean.jpg';

import './LandingPage.css';

const BIRTHDAY = new Date(2000, 10, 20);
const RESUME_URL = '/Gathrean_DelaCruz__Resume.pdf';
const LINKEDIN_URL = 'https://www.linkedin.com/in/gathrean/';
const GITHUB_URL = 'https://github.com/gathrean';
const TWITTER_URL = 'https://x.com/gathrean';

function getAge() {
  const today = new Date();
  let age = today.getFullYear() - BIRTHDAY.getFullYear();
  const monthDiff = today.getMonth() - BIRTHDAY.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < BIRTHDAY.getDate())) {
    age--;
  }
  return age;
}

function getWeatherDescription(code) {
  if (code === 0) return 'Clear';
  if (code >= 1 && code <= 3) return 'Cloudy';
  if (code >= 45 && code <= 48) return 'Foggy';
  if (code >= 51 && code <= 67) return 'Rainy';
  if (code >= 71 && code <= 77) return 'Snowy';
  if (code >= 80 && code <= 82) return 'Showers';
  if (code >= 95 && code <= 99) return 'Stormy';
  return 'Clear';
}

export function LandingPage() {
  const [now, setNow] = useState(new Date());
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=49.2827&longitude=-123.1207&current=temperature_2m,weather_code&timezone=America/Los_Angeles'
        );
        const data = await res.json();
        setWeather({
          temp: data.current.temperature_2m,
          code: data.current.weather_code,
        });
      } catch (err) {
        console.error('Weather fetch failed:', err);
      }
    };
    fetchWeather();
    const interval = setInterval(fetchWeather, 600000);
    return () => clearInterval(interval);
  }, []);

  const timeStr = now.toLocaleTimeString('en-US', {
    timeZone: 'America/Los_Angeles',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const dateStr = now.toLocaleDateString('en-US', {
    timeZone: 'America/Los_Angeles',
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <section className="hero-container">

      <div className="hero-image-container">
        <img src={heroImage} alt="Gathrean Dela Cruz" className="hero-image" />
      </div>

      <div className="hero-text">
        <h1 className="hero-name">Gathrean Dela Cruz, {getAge()}</h1>
        <p className="subtitle" style={{ marginBottom: '20px' }}>Software Developer</p>

        <p>I am a software developer with a passion for building reliable productivity apps. I like tech, finance, music, and arts.</p>
        <br />
        <p>Currently exploring iOS development and AI-powered tooling.</p>
        <br />
        <p>When I'm not coding, I'm probably editing photos I took on my FujiFilm, cooking my favourite meals, or making beats on Ableton.</p>

        <div className="hero-links">
          <ExternalButton href={RESUME_URL} tooltip="Last updated October 2024">Resume</ExternalButton>
        </div>
        <div className="hero-links">
          <ExternalLink href={LINKEDIN_URL} icon={<LinkedInIcon />}>LinkedIn</ExternalLink>
          <ExternalLink href={GITHUB_URL} icon={<GitHubIcon />}>GitHub</ExternalLink>
          <ExternalLink href={TWITTER_URL} icon={<XIcon />}>Twitter / X</ExternalLink>
        </div>

      </div>

      <div className="hero-weather-widget">
        {weather && (
          <span className="subtitle">
            {getWeatherDescription(weather.code)}, {weather.temp.toFixed(1)}&deg;C
          </span>
        )}
        <span className="widget-time">{timeStr}</span>
        <span className="subtitle">{dateStr}</span>
      </div>
    </section>
  );
}

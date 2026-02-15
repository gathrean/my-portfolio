import Image from 'next/image';
import { ExternalButton } from '@/components/ExternalButton/ExternalButton';
import { ExternalLink } from '@/components/ExternalLink/ExternalLink';
import { LinkedInIcon, GitHubIcon, XIcon } from '@/components/Icons/LinkIcons';
import { LiveClock } from '@/components/LiveClock';
import { WeatherWidget } from '@/components/WeatherWidget';
import heroImage from '@/assets/images/landing/2025-10-16-Gathrean.jpg';
import './landing-page.css';

const RESUME_URL = '/Gathrean_DelaCruz__Resume.pdf';
const LINKEDIN_URL = 'https://www.linkedin.com/in/gathrean/';
const GITHUB_URL = 'https://github.com/gathrean';
const TWITTER_URL = 'https://x.com/gathrean';

const BIRTHDAY = new Date(2000, 10, 20);

function getAge() {
  const today = new Date();
  let age = today.getFullYear() - BIRTHDAY.getFullYear();
  const monthDiff = today.getMonth() - BIRTHDAY.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < BIRTHDAY.getDate())) {
    age--;
  }
  return age;
}

export const metadata = {
  title: "Gathrean Dela Cruz's Home Page",
};

export default function HomePage() {
  return (
    <section className="hero-container">
      <div className="hero-image-container">
        <Image src={heroImage} alt="Gathrean Dela Cruz" className="hero-image" width={180} height={180} priority />
      </div>

      <div className="hero-text">
        <h1 className="hero-name">Gathrean Dela Cruz, {getAge()}</h1>
        <p className="subtitle" style={{ marginBottom: '20px' }}>Software Developer</p>

        <p>I am a software developer with a passion for building reliable productivity apps. I like tech, finance, music, and arts.</p>
        <br />
        <p>Currently exploring iOS development and AI-powered tooling.</p>
        <br />
        <p>When I&apos;m not coding, I&apos;m probably editing photos I took on my FujiFilm, cooking my favourite meals, or making beats on Ableton.</p>

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
        <WeatherWidget />
        <LiveClock />
      </div>
    </section>
  );
}

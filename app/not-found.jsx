import Link from 'next/link';
import '@/components/ExternalButton/ExternalButton.css';
import './not-found.css';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="external-button-component">Go Home</Link>
    </div>
  );
}

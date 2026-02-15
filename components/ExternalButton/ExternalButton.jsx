import './ExternalButton.css';

export function ExternalButton({ href, children, tooltip }) {
  const button = (
    <a
      className="external-button-component"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </a>
  );

  if (!tooltip) return button;

  return (
    <span className="external-button-tooltip-wrap">
      {button}
      <span className="external-button-tooltip">{tooltip}</span>
    </span>
  );
}

import { ExternalLink } from '@/components/ExternalLink/ExternalLink';
import { ExternalButton } from '@/components/ExternalButton/ExternalButton';
import './typography-page.css';

export const metadata = {
  title: 'Typography',
};

export default function TypographyPage() {
  return (
    <div className="page type-showcase">
      <h2 className="type-showcase-label">Typography Showcase</h2>
      <hr className="divider" style={{ margin: '0 0 32px 0' }} />

      <div className="type-row">
        <span className="type-label">h1</span>
        <h1>The quick brown fox</h1>
      </div>
      <div className="type-row">
        <span className="type-label">h2</span>
        <h2>The quick brown fox</h2>
      </div>
      <div className="type-row">
        <span className="type-label">h3</span>
        <h3>The quick brown fox</h3>
      </div>
      <div className="type-row">
        <span className="type-label">h4</span>
        <h4>The quick brown fox</h4>
      </div>
      <div className="type-row">
        <span className="type-label">.subtitle</span>
        <p className="subtitle">The quick brown fox</p>
      </div>
      <div className="type-row">
        <span className="type-label">.bold-label</span>
        <p className="bold-label">British Columbia Institute of Technology</p>
      </div>
      <div className="type-row">
        <span className="type-label">p</span>
        <p>The quick brown fox jumps over the lazy dog. This is body text at the default paragraph style.</p>
      </div>
      <div className="type-row">
        <span className="type-label">link</span>
        <ExternalLink href="#">Sample link with arrow</ExternalLink>
      </div>
      <div className="type-row">
        <span className="type-label">button</span>
        <ExternalButton href="#">Sample Button</ExternalButton>
      </div>
      <div className="type-row">
        <span className="type-label">.clean-list</span>
        <ul className="clean-list">
          <li>First item in a clean list</li>
          <li>Second item in a clean list</li>
          <li>Third item in a clean list</li>
        </ul>
      </div>
      <div className="type-row">
        <span className="type-label">.tag</span>
        <div className="tags">
          <span className="tag">React</span>
          <span className="tag">Node.js</span>
          <span className="tag">CSS</span>
        </div>
      </div>
    </div>
  );
}

import React, { useRef } from 'react';

// Styles
import './HERO.css'

// Icons
import ArrowUpRight from '../../../../assets/icons/arrow-up-right.svg';

const HERO = () => {
  const overlayRef = useRef(null);

  function handleClick(buttonType) {
    switch (buttonType) {
      case 'LinkedIn':
        window.open('https://www.linkedin.com/in/gathrean/', '_blank');
        break;
      case 'GitHub':
        window.open('https://github.com/gathrean', '_blank');
        break;
      default:
        break;
    }
  }

  return (
    <div className="hero-container">
      <div className="text-container hero-animation">
        <div ref={overlayRef} className="overlay-text">
          <h1>
            <span>Gathrean Dela Cruz</span>
          </h1>
          <h4>Software Developer</h4>
        </div>
      </div>

      <div className="buttons-container">

        {/* Resume Button */}
        <div className="external-link">
          <a href="resumeURL" style={{ cursor: 'pointer', color: 'white' }} >View Resumé</a>
          <img
            src={ArrowUpRight} alt="Arrow Up Right"
            style={{ width: '0.8em', height: '0.8em', marginLeft: '10px' }}
          />
        </div>

        <div className="bottom-buttons-container">

          {/* LinkedIn Button */}
          <div onClick={() => handleClick('LinkedIn')}>
            <svg viewBox="0 0 20 20" version="1.1">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                      id="linkedin]">
                    </path>
                  </g>
                </g>
              </g>
            </svg>
          </div>

          {/* GitHub Button */}
          <div onClick={() => handleClick('GitHub')}>
            <svg viewBox="0 0 20 20" version="1.1">
              <g id="github-page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                      id="github">
                    </path>
                  </g>
                </g>
              </g>
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HERO;
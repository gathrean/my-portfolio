import React, { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';
import './ABOUT.css';
import GathreanIcon from '../../../../assets/icons/project-icons/gathrean-Icon.png';
import LocalTime from '../../../../components/LocalTime';

export function ABOUT() {
  const [emailMessage, setEmailMessage] = useState('📧 gathrean@icloud.com');

  const handleEmailClick = () => {
    navigator.clipboard.writeText('gathrean@icloud.com')
      .then(() => {
        setEmailMessage('💡 Email copied to clipboard!');
        setTimeout(() => {
          setEmailMessage('📧 gathrean@icloud.com');
        }, 2000);
      })
      .catch(err => {
        console.error('😵 Failed to copy email: ', err);
      });
  };

  return (
    <div className="section-container">
      <hr />
      <h1>About Me</h1>
      <p>This is my lore</p>
      <div className="section-container-child">
        <div className="about-me-container">
          <div className="about-me-info-container">
            <div className="about-me-images">
              <img src={GathreanIcon} alt="Gathrean" />
            </div>
            <br />
            <div className="about-me-info">
              <h4>Gathrean Dela Cruz</h4>
              <p>Software Developer</p>
              <p>📍 Vancouver, BC, Canada</p>
              <p>⌚️ <LocalTime /></p>
              <p onClick={handleEmailClick} style={{ cursor: 'pointer' }}>{emailMessage}</p>
            </div>
          </div>
          <div className="about-me-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam orci risus, varius nec nisi a, consectetur iaculis nibh.
              Vivamus sollicitudin rutrum consequat. Sed ligula purus, convallis sed sagittis ut, lobortis vitae mauris.
              In quis bibendum ante. Praesent pellentesque luctus elit a consequat. Nulla facilisi.
              Vivamus pulvinar, leo at suscipit viverra, libero nisl fringilla nisi, at volutpat diam elit interdum nibh.
              Ut ante ligula, fermentum eget libero sit amet, tristique consequat nulla. Nulla posuere consequat lorem id auctor.
              In congue, augue sit amet accumsan vulputate, lorem mi aliquam leo, sit amet gravida turpis ex non nibh.
              Etiam congue erat vitae magna commodo, at hendrerit lacus gravida. Proin dignissim dui commodo nulla feugiat, id cursus libero dictum.
              Fusce varius sodales urna sed cursus. Donec ornare, nisl ut aliquam viverra, ex sapien pulvinar elit, tincidunt lacinia magna massa dapibus purus.
            </p>
            <p>
              Nulla tempor nec nisl ut interdum. Mauris commodo lacus ac felis volutpat tincidunt.
              Proin a auctor metus. In non ligula sagittis lorem iaculis finibus. Phasellus in metus eget sapien vehicula gravida.
              Vestibulum ac interdum ante. Donec accumsan velit mi, eu consequat ante egestas quis.
              Nullam vitae metus pretium, accumsan felis et, interdum purus. Vestibulum tincidunt mi orci, et condimentum nisi fringilla vel.
            </p>
            <div className="github-calendar-container">
              <div className="github-calendar">
                <a href="https://github.com/gathrean" target="_blank" rel="noopener noreferrer">
                  <GitHubCalendar username="gathrean" blockSize={16} blockMargin={4} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
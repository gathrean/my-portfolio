import React from 'react';

const navLinks = [
  { page: 'Nebula', title: 'Nebula' },
  { page: 'OrcaSwipe', title: 'OrcaSwipe' },
  { page: 'DungeonQuad', title: 'DungeonQuad' },
  { page: 'Contact', title: 'Contact' },
];

function Sidebar({ activePage, handlePageClick }) {
  return (
    <div className="sidebar benzin-font">

    
      <ul className="sidebar-links">
        
        {navLinks.map((link) => (
          <li key={link.page}>
            <a
              href={`#${link.page}`}
              className={activePage === link.page ? 'active' : ''}
              onClick={() => handlePageClick(link.page)}
            >
              <span className="sidebar-title">{link.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
import { useState, useMemo } from 'react';
import './LogoComponent.css';

export const LogoComponent = () => {
  const randomTitles = (titles) => {
    return titles[Math.floor(Math.random() * titles.length)];
  };
  const titles = ['Frontend', 'backend', 'fullstack'];
  const [title, setTitle] = useState(randomTitles(titles));

  useMemo(() => {
    setInterval(() => {
      setTitle(randomTitles(titles));
    }, 24000);
  });

  return (
    <>
      <div className="logo_wrapper">
        <h2>gary allin</h2>
        <div className="titles" data={title}>
          {title}
        </div>
      </div>
    </>
  );
};

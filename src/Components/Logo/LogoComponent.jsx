import './LogoComponent.css';

export const LogoComponent = () => {
  const title = `webDeveloper`;

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

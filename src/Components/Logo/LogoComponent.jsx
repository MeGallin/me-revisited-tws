import './LogoComponent.css';

const LogoComponent = () => {
  const title = `webdeveloper`;

  return (
    <>
      <div className="logo_wrapper">
        <h2>gary allin</h2>
        <div className="title" data={title}>
          {title}
        </div>
      </div>
    </>
  );
};

export default LogoComponent;

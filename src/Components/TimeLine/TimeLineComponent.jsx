import './TimeLineComponent.css';

const TimeLineComponent = ({ props }) => {
  const component = props.map((item) => {
    return (
      <>
        {item?.dateBool === true ? (
          <h2 className="timeline__item timeline__item--year">{item?.date}</h2>
        ) : null}

        <div className="timeline__item">
          <h3 className="timeline__title">{item?.company}</h3>
          <p>
            <span className="timeline__item__text">position</span>
            {item?.position}
          </p>
          <p>
            <span className="timeline__item__text">tech stack</span>
            {item?.tech}
          </p>
          <p>{item?.term}</p>
        </div>
      </>
    );
  });
  return <div className="timeline">{component}</div>;
};

export default TimeLineComponent;

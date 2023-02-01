import React from 'react';
import ButtonComponent from '../Button/ButtonComponent';

const DownloaderComponent = () => {
  const cvUrl = `${process.env.REACT_APP_CV_URL}assets/cv/dummy.pdf`;
  const handleDownload = (cvUrl) => {
    const aTag = document.createElement('a');
    const fileName = cvUrl.split('/').pop();
    aTag.href = cvUrl;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div style={{ margin: '1rem 0' }}>
      <div style={{ margin: '1rem 0' }}>
        <ButtonComponent
          type="button"
          disabled={false}
          variant="info"
          text="Download My CV"
          onClick={() => handleDownload(cvUrl)}
        />
      </div>
      <h3>The legal Stuff</h3>
      <p>
        If you want your details removed, please message me via my contact form
        and I will gladly remove them.
      </p>
    </div>
  );
};

export default DownloaderComponent;

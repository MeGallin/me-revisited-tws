import { useSelector, useDispatch } from 'react-redux';
import { userDownloadCounterAction } from '../../Store/Actions/userActions';
import ButtonComponent from '../Button/ButtonComponent';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import ToasterComponent from '../Toaster/ToasterComponent';

const DownloaderComponent = ({ id }) => {
  const dispatch = useDispatch();
  const cvUrl = `${process.env.REACT_APP_CV_URL}assets/cv/cv.pdf`;
  const handleDownload = (cvUrl) => {
    const aTag = document.createElement('a');
    const fileName = cvUrl.split('/').pop();
    aTag.href = cvUrl;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
    //Dispatch Action to counter downloads
    dispatch(userDownloadCounterAction(id));
  };

  const userDownloadCounter = useSelector((state) => state.userDownloadCounter);
  const { loading, error, success } = userDownloadCounter;

  return (
    <>
      {loading ? (
        <SpinnerComponent />
      ) : (
        <div style={{ margin: '1rem 0' }}>
          <h1>Please note!</h1>
          <p>The download button for my CV is currently disabled.</p>
          <p>
            I am currently updating my CV. I hope to have it ready in the next
            few days.
          </p>
          <p>Thank you for your patience and understanding.</p>
          <div style={{ margin: '1rem 0' }}>
            <ButtonComponent
              type="button"
              disabled={true}
              variant="warning"
              text="Download My CV"
              onClick={() => handleDownload(cvUrl)}
            />
          </div>
          <ToasterComponent options={{ error, success }} />
          <h3>The legal Stuff</h3>
          <p>
            If you want your details removed, please message me via my contact
            form and I will gladly remove them.
          </p>
        </div>
      )}
    </>
  );
};

export default DownloaderComponent;

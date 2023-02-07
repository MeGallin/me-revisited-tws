import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputComponent from '../Input/InputComponent';
import ButtonComponent from '../Button/ButtonComponent';
import { adminFileUploadAction } from '../../Store/Actions/AdminActions';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import ToasterComponent from '../Toaster/ToasterComponent';

const UploadComponent = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('file', file);
    //Action to upload file!
    dispatch(adminFileUploadAction(formData));
  };

  const adminFileUpload = useSelector((state) => state.adminFileUpload);
  const { loading, error, success } = adminFileUpload;

  return (
    <>
      {loading ? (
        <SpinnerComponent />
      ) : (
        <>
          <ToasterComponent options={{ error, success }} />
          <form onSubmit={handleUpload}>
            <h3>Upload Text Files</h3>
            <div
              style={{
                border: '1px solid lightGrey',
                padding: '0.2em 2em',
              }}
            >
              <InputComponent
                type="file"
                id="file"
                name="file"
                onChange={handleOnChange}
              />

              <ButtonComponent
                type="submit"
                text={!file ? 'disabled' : 'upload your file'}
                variant={!file ? 'dark' : 'info'}
                disabled={!file ? true : false}
              />
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default UploadComponent;

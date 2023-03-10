import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userInfoDetailsAction } from '../../Store/Actions/userActions';

import CardComponent from '../Card/CardComponent';
import MyDetailsComponent from '../MyDetails/MyDetailsComponent';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import TellMeComponent from '../TellMe/TellMeComponent';
import ToasterComponent from '../Toaster/ToasterComponent';
import ButtonComponent from '../Button/ButtonComponent';
import UploadComponent from '../Upload/UploadComponent';

const DashBoardComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEmailConfirmed, setIsEmailConfirmed] = useState('');

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const googleUserLogin = useSelector((state) => state.googleUserLogin);
  const { userInfo: googleUserInfo } = googleUserLogin;

  useEffect(() => {
    let ignore = false;
    if (!userInfo && !googleUserInfo) return navigate('/forms');
    dispatch(userInfoDetailsAction());
    if (!ignore) return () => (ignore = true);
  }, [dispatch, navigate, userInfo, googleUserInfo]);

  const userInfoDetails = useSelector((state) => state.userInfoDetails);
  const { loading, error, userDetails } = userInfoDetails;
  useEffect(() => {
    if (!userDetails?.isConfirmed)
      return setIsEmailConfirmed(
        `Warning: If you are seeing this message then your email address has not been verified! `,
      );
  }, [userDetails?.isConfirmed]);

  const handleLink = () => {
    if (!userDetails.isAdmin) return false;
    navigate('/admin-dashboard');
  };

  return (
    <>
      {loading ? (
        <SpinnerComponent />
      ) : (
        <fieldset className="fieldSet">
          <legend>
            {' '}
            <TellMeComponent text={[userDetails?.name]} /> Dashboard
          </legend>
          <ToasterComponent options={{ error }} />
          {!userDetails?.isConfirmed ? (
            <>
              <h3>{isEmailConfirmed}</h3>
              <p>
                Please logout and check for a email that you should have
                received after you registered.
              </p>
              <p>
                Simply click the link that was included and then try logging
                back in.
              </p>
              <p>Thank you.</p>
              <TellMeComponent text={['Gar', 'y']} />
            </>
          ) : (
            <>
              <CardComponent props={{ ...userDetails }} />

              <MyDetailsComponent id={userDetails?._id} />
              {userDetails.isAdmin ? (
                <>
                  <UploadComponent />
                  <ButtonComponent
                    type="button"
                    text="Admin Dashboard"
                    disabled={false}
                    variant="info"
                    onClick={handleLink}
                  />
                </>
              ) : null}
            </>
          )}
        </fieldset>
      )}
    </>
  );
};

export default DashBoardComponent;

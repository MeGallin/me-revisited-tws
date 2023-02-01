import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './AdminContactEmailsComponent.css';

import { adminGetContactEmailsAction } from '../../Store/Actions/AdminActions';

import SpinnerComponent from '../Spinner/SpinnerComponent';
import ToasterComponent from '../Toaster/ToasterComponent';
import moment from 'moment';

const AdminContactEmailsComponent = () => {
  const dispatch = useDispatch();

  const adminGetContactEmails = useSelector(
    (state) => state.adminGetContactEmails,
  );
  const { loading, error, emails } = adminGetContactEmails;

  useEffect(() => {
    let ignore = false;
    if (!emails) {
      dispatch(adminGetContactEmailsAction());
    }
    if (!ignore) return () => (ignore = true);
  }, [dispatch, emails]);

  return (
    <>
      {loading ? (
        <SpinnerComponent />
      ) : (
        <>
          <ToasterComponent options={{ error }} />
          {emails?.map((email) => (
            <div key={email._id} className="admin_contact_email_wrapper">
              <div className="admin_contact_email__group">
                <div>
                  <span className="details-label">From: </span>
                  <span>{email.name}</span>
                </div>
                <div>
                  <span className="details-label">email: </span>
                  <span>{email.email}</span>
                </div>
                <div>
                  <span className="details-label">From: </span>
                  <span>{email.message}</span>
                </div>
              </div>

              <div className="admin_contact_email__group border-temp">
                <div className="admin_contact_wrapper__inner_wrapper">
                  <div>
                    <span className="details-label">Received: </span>
                    <span>
                      {moment().diff(moment(email.createdAt), 'days')}
                    </span>
                    <span> day ago.</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default AdminContactEmailsComponent;

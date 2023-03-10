import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  adminDeleteAllUserDataAction,
  adminUserDetailsAction,
} from '../../Store/Actions/AdminActions';

import SpinnerComponent from '../Spinner/SpinnerComponent';
import ToasterComponent from '../Toaster/ToasterComponent';
import './AdminDashboardComponent.css';

import moment from 'moment';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
import ButtonComponent from '../Button/ButtonComponent';
import AdminIPAddressComponent from '../AdminIPAddresses/AdminIPAddressComponent';
import AdminContactEmailsComponent from '../AdminContactEmails/AdminContactEmailsComponent';
import AnalyticsDashboardComponent from '../AnalyticsDashboard/AnalyticsDashboardComponent';

const AdminDashboardComponent = () => {
  const [showIPToggle, setShowIPToggle] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    let ignore = false;
    if (!userInfo) return navigate('/forms');
    dispatch(adminUserDetailsAction());
    if (!ignore) return () => (ignore = true);
  }, [dispatch, navigate, userInfo]);

  const adminUserDetails = useSelector((state) => state.adminUserDetails);
  const { loading, error, users } = adminUserDetails;

  const handleDeleteUser = (id) => {
    if (
      window.confirm(
        `Are you sure you want to delete account?. You will be removing all their details including memories. ARE YOU SURE?`,
      )
    ) {
      dispatch(adminDeleteAllUserDataAction(id));
    }
  };

  const adminDeleteUser = useSelector((state) => state.adminDeleteUser);
  const { success, error: adminDeleteUserError } = adminDeleteUser;

  return (
    <>
      {loading ? (
        <SpinnerComponent />
      ) : (
        <>
          <fieldset className="fieldSet">
            <legend> Registered User Details</legend>
            <ToasterComponent
              options={{ error, adminDeleteUserError, success }}
            />

            {users?.map((user) =>
              !user.isAdmin ? (
                <div key={user?._id} className="admin_dashboard_wrapper">
                  <div className="admin_dashboard__group">
                    <div>
                      <div>
                        <span className="details-label">ID: </span>
                        <span>{user?._id}</span>
                      </div>
                      <div>
                        <span className="details-label">Name: </span>
                        <span>{user?.name}</span>
                      </div>
                      <div>
                        <span className="details-label">Email: </span>
                        <span>{user?.email}</span>
                      </div>
                      <div>
                        <span className="details-label">Joined: </span>
                        <span>
                          {moment(user.updatedAt).diff(
                            moment(user.createdAt),
                            'days',
                          )}
                        </span>
                        <span> day ago.</span>
                      </div>
                      <div className="admin_dashboard_wrapper__inner_wrapper">
                        <div>
                          <span className="details-label">Created: </span>
                          <span>
                            {moment(user?.createdAt).format('Do MMM YYYY')}
                          </span>
                        </div>

                        <div>
                          <span className="details-label">Updated: </span>
                          <span>
                            {moment(user?.updatedAt).format('Do MMM YYYY')}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="admin_dashboard_wrapper__img"
                      style={{
                        backgroundImage: `url(${user.profileImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                  </div>

                  <div>
                    <div>
                      <span className="details-label">IP: </span>
                      <span>{user?.ipAddress}</span>
                    </div>
                    <div>
                      <span className="details-label">Login Count: </span>
                      <span>{user.loginCounter}</span>
                    </div>
                    <div>
                      <span className="details-label">Download Count: </span>
                      <span>{user.downloadCounter}</span>
                    </div>
                    <div>
                      <span className="details-label">Confirmed email: </span>
                      <span>
                        {user.isConfirmed ? (
                          <FaRegThumbsUp
                            className="reg-thumbs-up-icon"
                            size={22}
                          />
                        ) : (
                          <FaRegThumbsDown
                            className="reg-thumbs-down-icon"
                            size={22}
                          />
                        )}
                      </span>
                    </div>
                    <div>
                      <span className="details-label">
                        Registered with google:{' '}
                      </span>
                      <span>
                        {user.registeredWithGoogle ? (
                          <FaRegThumbsUp
                            className="reg-thumbs-up-icon"
                            size={22}
                          />
                        ) : (
                          <FaRegThumbsDown
                            className="reg-thumbs-down-icon"
                            size={22}
                          />
                        )}
                      </span>
                    </div>
                    <div>
                      <ButtonComponent
                        text="Delete this user"
                        variant="danger"
                        disabled={false}
                        onClick={() => handleDeleteUser(user._id)}
                      />
                    </div>
                  </div>
                </div>
              ) : null,
            )}
          </fieldset>

          <fieldset className="fieldSet">
            <legend>Analytics</legend>
            <AnalyticsDashboardComponent />
          </fieldset>

          <fieldset className="fieldSet">
            <legend>views</legend>

            <div>
              <ButtonComponent
                type="button"
                disabled={false}
                text={showIPToggle ? 'show emails' : 'show IP Addresses'}
                variant={showIPToggle ? 'primary' : 'info'}
                onClick={() => setShowIPToggle((prev) => (prev = !prev))}
              />
            </div>
            {showIPToggle ? (
              <fieldset className="fieldSet">
                <legend> Page Hit IP addresses</legend>
                <AdminIPAddressComponent />
              </fieldset>
            ) : (
              <fieldset className="fieldSet">
                <legend>Received Emails</legend>
                <AdminContactEmailsComponent />
              </fieldset>
            )}
          </fieldset>
        </>
      )}
    </>
  );
};

export default AdminDashboardComponent;

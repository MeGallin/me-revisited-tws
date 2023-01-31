import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adminUserDetailsAction } from '../../Store/Actions/AdminActions';

import SpinnerComponent from '../Spinner/SpinnerComponent';
import ToasterComponent from '../Toaster/ToasterComponent';
import './AdminDashboardComponent.css';

import moment from 'moment';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
import ButtonComponent from '../Button/ButtonComponent';

const AdminDashboardComponent = () => {
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
  const userInfoDetails = useSelector((state) => state.userInfoDetails);
  const { userDetails } = userInfoDetails;
  const adminUserDetails = useSelector((state) => state.adminUserDetails);
  const { loading, error, users } = adminUserDetails;

  const handleDeleteUser = (id) => {
    alert(id);
  };

  return (
    <>
      {loading ? (
        <SpinnerComponent />
      ) : (
        <fieldset className="fieldSet">
          <legend> {userDetails?.name}Dashboard</legend>
          <ToasterComponent options={{ error }} />

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
                </div>
                <ButtonComponent
                  text="Delete this user"
                  variant="danger"
                  disabled={false}
                  onClick={() => handleDeleteUser(user._id)}
                />
              </div>
            ) : null,
          )}
        </fieldset>
      )}
    </>
  );
};

export default AdminDashboardComponent;

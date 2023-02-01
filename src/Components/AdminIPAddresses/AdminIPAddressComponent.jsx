import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './AdminIPAddressComponent.css';

import SpinnerComponent from '../Spinner/SpinnerComponent';
import ToasterComponent from '../Toaster/ToasterComponent';
import moment from 'moment';
import { adminGetIpAddressesAction } from '../../Store/Actions/AdminActions';

const AdminIPAddressComponent = () => {
  const dispatch = useDispatch();
  const adminGetIpAddresses = useSelector((state) => state.adminGetIpAddresses);
  const { loading, error, ipAddress } = adminGetIpAddresses;
  useEffect(() => {
    let ignore = false;
    if (!ipAddress) {
      dispatch(adminGetIpAddressesAction());
    }
    if (!ignore) return () => (ignore = true);
  }, [dispatch, ipAddress]);
  return (
    <>
      {loading ? (
        <SpinnerComponent />
      ) : (
        <>
          <ToasterComponent options={{ error }} />
          {ipAddress?.map((ip) => (
            <div key={ip._id} className="admin_contact_email_wrapper">
              <div className="admin_contact_email__group">
                <div>
                  <span className="details-label">IP Address: </span>
                  <span>{ip.ipAddress}</span>
                </div>
              </div>

              <div className="admin_contact_email__group border-temp">
                <div className="admin_contact_wrapper__inner_wrapper">
                  <div>
                    <span className="details-label">Hit: </span>
                    <span>{moment().diff(moment(ip.createdAt), 'days')}</span>
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

export default AdminIPAddressComponent;

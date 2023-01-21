import './CardComponent.css';
import moment from 'moment';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';

const CardComponent = ({ props }) => {
  return (
    <div className="card_wrapper">
      <div className="card_header">
        <h3>Details</h3>
        {props._id}
        {props.name}
        {props.email}
        {props.password}
      </div>
      <div className="card_body">
        <h3>Stats</h3>
        <div className="card_body_inner_wrapper">
          <div>
            <span className="details-label">Joined: </span>
            <span>
              {moment(props.updatedAt).diff(moment(props.createdAt), 'days')}
            </span>
            <span> day ago.</span>
          </div>
          <div>
            <span className="details-label">
              You have logged in on IP Address:{' '}
            </span>
            {props.ipAddress}
          </div>
        </div>

        <div>
          <span className="details-label">Login Counter: </span>
          {props.loginCounter}
        </div>
        <div>
          <span className="details-label">Admin rights: </span>
          <span>
            {props.isAdmin ? (
              <FaRegThumbsUp className="reg-thumbs-up-icon" size={22} />
            ) : (
              <FaRegThumbsDown className="reg-thumbs-down-icon" size={22} />
            )}
          </span>
        </div>
        <div>
          <span className="details-label">Confirmed email: </span>
          <span>
            {props.isConfirmed ? (
              <FaRegThumbsUp className="reg-thumbs-up-icon" size={22} />
            ) : (
              <FaRegThumbsDown className="reg-thumbs-down-icon" size={22} />
            )}
          </span>
        </div>
        <div>
          <span className="details-label">Suspended: </span>
          <span>
            {props.isSuspended ? (
              <FaRegThumbsUp className="reg-thumbs-up-icon" size={22} />
            ) : (
              <FaRegThumbsDown className="reg-thumbs-down-icon" size={22} />
            )}
          </span>
        </div>
        <div>
          <span className="details-label">Registered with google: </span>
          <span>
            {props.registeredWithGoogle ? (
              <FaRegThumbsUp className="reg-thumbs-up-icon" size={22} />
            ) : (
              <FaRegThumbsDown className="reg-thumbs-down-icon" size={22} />
            )}
          </span>
        </div>
      </div>
      <div className="card_footer">
        <div>
          <span className="details-label">Created: </span>
          <span>{moment(props.createdAt).format('Do MMMM YYYY')}</span>
        </div>

        <div>
          <span className="details-label">Updated: </span>
          <span>{moment(props.updatedAt).format('Do MMMM YYYY')}</span>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;

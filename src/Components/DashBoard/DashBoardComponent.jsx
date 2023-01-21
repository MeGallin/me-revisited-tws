import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DashBoardComponent = () => {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    let ignore = false;
    if (!userInfo) return navigate('/forms');
    if (!ignore) return () => (ignore = true);
  });

  return <div>DashBoardComponent</div>;
};

export default DashBoardComponent;

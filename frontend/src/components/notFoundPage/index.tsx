import notFoundImg from '../../images/404-error.jpg';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import './index.css';

const NotFoundComponent = () => {
  const navigate = useNavigate()
  return (
    <div className="image-wrapper">
      <img src={notFoundImg} alt="404 Error" />
      <Button onClick={() => navigate('/')} type="primary" className="button-home">
        Back to Home
      </Button>
    </div>
  );
};

export default NotFoundComponent;

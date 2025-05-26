import notFoundImg from '../../images/404-error.jpg';
import './index.css';
import { Button } from 'antd';

const NotFoundComponent = () => {
  return (
    <div className="image-wrapper">
      <img src={notFoundImg} alt="404 Error" />
      <Button type="primary" className="button-home">
        Back to Home
      </Button>
    </div>
  );
};

export default NotFoundComponent;

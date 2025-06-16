import notFoundImg from '../../images/404-error.jpg';
import { Button } from 'antd';
import './index.css';

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

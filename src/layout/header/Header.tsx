import { MoonFilled, SunOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { ROUTES } from '../../routes/paths';
import { Button, Input } from 'antd';
import './Header.css';

export const Header = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  return (
    <header>
      <div>
        <Button onClick={() => navigate('/')}>Logo</Button>
      </div>
      <div>
        <Input placeholder='Search' />
      </div>
      <div>
        <MoonFilled />
        <SunOutlined />
      </div>
      <div>
        {isAuth ? (
          <Button onClick={() => navigate(ROUTES.PROFILE_PATH)}>Profile</Button>
        ) : (
          <>
            <Button>Sign In</Button>
            <Button>Sign Up</Button>
          </>
        )}
      </div>
    </header>
  );
};

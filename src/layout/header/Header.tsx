import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { ROUTES } from '../../routes/paths';
import { Button } from 'antd';
import React from 'react';
import './Header.css';

export const Header = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  return (
    <div>
      Header
      <div>
        {isAuth ? (
          <Button onClick={() => navigate(ROUTES.PROFILE_PATH)}>Profile</Button>
        ) : null}
      </div>
    </div>
  );
};

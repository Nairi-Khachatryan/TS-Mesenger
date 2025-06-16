import SecurityTab from './securityTab/SecurityTab';
import ActivityTab from './activityTab/ActivityTab';
import ProfileTab from './profileTab/ProfileTab';
import { Tabs, Row, Col } from 'antd';
import React from 'react';
import './Profile.css';

export const Profile: React.FC = () => {
  let theme = '';

  const tabItems = [
    {
      key: '1',
      label: 'Profile',
      children: <ProfileTab />,
    },

    {
      key: '4',
      label: 'Security',
      children: <SecurityTab />,
    },
    {
      key: '5',
      label: 'Activity',
      children: <ActivityTab />,
    },
  ];

  return (
    <div
      className={`profile-page ${
        theme === 'dark' ? 'profile-dark' : 'profile-light'
      }`}
    >
      <Row className="container mx-auto px-4 py-8">
        <Col span={24}>
          <Tabs defaultActiveKey="1" className="custom-tabs" items={tabItems} />
        </Col>
      </Row>
    </div>
  );
};

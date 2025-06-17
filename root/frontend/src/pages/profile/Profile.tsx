import { Avatar, Col, Row, Tabs, Typography } from 'antd';
import ActivityTab from './activityTab/ActivityTab';
import SecurityTab from './securityTab/SecurityTab';
import { UserOutlined } from '@ant-design/icons';
import ProfileTab from './profileTab/ProfileTab';
import React from 'react';
import './Profile.css';
import FriendTab from './friendTab/FriendTab';

const { Title, Text } = Typography;

export const Profile: React.FC = () => {
  const tabItems = [
    {
      key: '1',
      label: 'Profile',
      children: <ProfileTab />,
    },
    {
      key: '2',
      label: 'Security',
      children: <SecurityTab />,
    },
    {
      key: '3',
      label: 'Activity',
      children: <ActivityTab />,
    },
    {
      key: '4',
      label: 'Friend',
      children: <FriendTab />,
    },
  ];

  return (
    <div className="profile-page">
      <Row className="profile-row" gutter={[32, 32]} align="middle">
        <Col
          className="profile-tab-items"
          xs={24}
          md={6}
          style={{ textAlign: 'center' }}
        >
          <Avatar size={120} icon={<UserOutlined />} />
          <Title level={4} style={{ marginTop: 16 }}>
            Nairi Khachatryan
          </Title>
          <div style={{ marginTop: 8 }}>
            <Text>Email: nairi.khachatryan357@gmail.com</Text>
            <br />
            <Text>Location: Yerevan</Text>
          </div>
        </Col>

        <Col className="profile-tabs-wrapper" xs={24} md={18}>
          <Tabs
            defaultActiveKey="1"
            items={tabItems}
            style={{ minWidth: 500 }}
          />
        </Col>
      </Row>
    </div>
  );
};

import { Descriptions, Avatar, Divider, Button } from 'antd';
import React from 'react';

const ProfileTab: React.FC = () => {
  return (
    <div>
      <Avatar size={64} style={{ backgroundColor: '#1890ff' }}>
        N
      </Avatar>

      <Divider />

      <Descriptions title="User Info" bordered column={1}>
        <Descriptions.Item label="First Name">Nairi</Descriptions.Item>
        <Descriptions.Item label="Last Name">Khachatryan</Descriptions.Item>
        <Descriptions.Item label="Email">nairi.khachatryan357@gmail.com</Descriptions.Item>
        <Descriptions.Item label="Location">Yerevan, Armenia</Descriptions.Item>
      </Descriptions>

      <Divider />
      <Button type="primary">Edit Profile</Button>
    </div>
  );
};

export default ProfileTab;


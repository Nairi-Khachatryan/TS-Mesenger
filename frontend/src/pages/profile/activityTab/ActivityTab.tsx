import { List, Typography, Divider } from 'antd';
import React from 'react';

const ActivityTab: React.FC = () => {
  const activities = [
    'Logged in from Yerevan',
    'Changed profile picture',
    'Updated password',
    'Logged out',
  ];

  return (
    <div>
      <Typography.Title level={4}>Recent Activity</Typography.Title>
      <Divider />

      <List
        bordered
        dataSource={activities}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text>{item}</Typography.Text>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ActivityTab;

import { UserOutlined } from "@ant-design/icons";
import { Card, Space, Avatar } from 'antd';
import './Profile.css';


export const Profile = () => {
  return (
    <Card>
      <Space direction="vertical" size={16}>
        <Avatar size={64} icon={<UserOutlined />} />
      </Space>
    </Card>
  );
};

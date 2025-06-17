import { Form, Input, Button, Typography, Divider } from 'antd';
import React from 'react';

const SecurityTab: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Updated Password:', values);
  };

  return (
    <div>
      <Typography.Title level={4}>Change Password</Typography.Title>
      <Divider />

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Current Password" name="currentPassword" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item label="New Password" name="newPassword" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item label="Confirm Password" name="confirmPassword" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">Update Password</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SecurityTab;

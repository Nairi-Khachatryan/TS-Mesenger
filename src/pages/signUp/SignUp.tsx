import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { onFinish } from './signUpServices';
import { onFinishFailed } from './signUpServices';
import type { FieldType } from './types';
import './SignUp.css';

export const SignUp: React.FC = () => {
  const [error, setError] = useState(''); 

  return (
    <>
      <Form
        name="basic"
        autoComplete="off"
        onFinish={onFinish(setError)} 
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinishFailed={onFinishFailed}
        initialValues={{ remember: true }}
      >
        <Form.Item<FieldType>
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="confirmPassword"
          label="Confirm Password"
          rules={[{ required: true, message: 'Please confirm your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {/* Error message display */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};


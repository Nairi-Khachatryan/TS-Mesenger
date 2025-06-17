import { Button, Checkbox, Form, Input, Col } from 'antd';
import { useAppDispatch } from '../../app/hook';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { onFinish } from './signInService';
import type { FieldType } from './types';
import React, { useState } from 'react';
import type { FormProps } from 'antd';
import './SignIn.css';

export const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const form = Form.useForm();
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();

  return (
    <Form
      name="basic"
      autoComplete="off"
      onFinish={onFinish({ setError, form, dispatch, navigate })}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
    >
      <Form.Item<FieldType>
        name="email"
        label="Email"
        rules={[{ required: true, message: 'Please input your email!' }]}
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

      <Form.Item>
        <Col>Dont have an Acount?</Col>
        <Button type="link" onClick={() => navigate(ROUTES.SIGN_UP_PATH)}>
          Sign Up
        </Button>
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        label={null}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

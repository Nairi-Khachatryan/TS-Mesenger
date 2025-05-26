import { Button, Checkbox, Col, Form, Input } from 'antd';
import { onFinishFailed } from './signUpServices';
import { useAppDispatch } from '../../app/hook';
import { useNavigate } from 'react-router-dom';
import { onFinish } from './signUpServices';
import React, { useState } from 'react';
import type { FieldType } from './types';
import './SignUp.css';
import { ROUTES } from '../../routes/paths';

export const SignUp: React.FC = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const form = Form.useForm();
  const dispatch = useAppDispatch;

  return (
    <>
      <Form
        name="basic"
        autoComplete="off"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinishFailed={onFinishFailed}
        initialValues={{ remember: true }}
        onFinish={onFinish({ setError, navigate, form, dispatch })}
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

        <Form.Item>
          <Col>Already have an account?</Col>
          <Button
            type="link"
            onClick={() => navigate(ROUTES.SIGN_IN_PATH)}
          >Sign In</Button>
        </Form.Item>

        <Form.Item<FieldType>
          label={null}
          name="remember"
          valuePropName="checked"
        >
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

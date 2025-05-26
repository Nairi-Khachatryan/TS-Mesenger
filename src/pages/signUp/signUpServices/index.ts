import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/firebaseConfig';
import type { FieldType } from '../types';
import type { FormProps } from 'antd';

export const onFinish =
  (setError: (msg: string) => void): FormProps<FieldType>['onFinish'] =>
  async (values) => {
    const { email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setError(''); 
    } catch (error: any) {
      setError(error.message); 
    }
  };

export const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

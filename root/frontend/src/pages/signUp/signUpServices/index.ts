import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/firebaseConfig';
import { setUser } from '../../../features/userSlice';
import type { AppDispatch } from '../../../app/store';
import type { FieldType } from '../types';
import type { FormProps } from 'antd';

type SignUpDependencies = {
  setError: (msg: string) => void;
  dispatch: AppDispatch;
  navigate: (path: string) => void;
  form: any;
};

export const onFinish =
  ({
    setError,
    navigate,
    form,
    dispatch,
  }: SignUpDependencies): FormProps<FieldType>['onFinish'] =>
  async (values) => {
    const { email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      form.setFieldsValue({ password: '' });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const token = await user.getIdToken();

      const userData = {
        email: user.email || '',
        id: user.uid,
        token,
      };
      dispatch(setUser(userData));
      navigate('/');
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    }
  };

// export const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
//   errorInfo
// ) => {
//   console.log('Failed:', errorInfo);
// };

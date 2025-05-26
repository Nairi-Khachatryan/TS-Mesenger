import { signInWithEmailAndPassword } from 'firebase/auth/cordova';
import { auth } from '../../../services/firebaseConfig';
import { setUser } from '../../../features/userSlice';
import { ROUTES } from '../../../routes/paths';
import type { FieldType } from '../types';
import type { FormProps } from 'antd';

type SignInDependencies = {
  setError: (msg: string) => void;
  dispatch: any;
  navigate: (path: string) => void;
  form: any;
};

export const onFinish =
  ({
    setError,
    navigate,
    form,
    dispatch,
  }: SignInDependencies): FormProps<FieldType>['onFinish'] =>
  async (values) => {
    const { email, password, remember } = values;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const token = await user.getIdToken();

      const userData = {
        email,
        token,
        id: user.uid,
      };

      navigate(ROUTES.HOME_PATH);
      dispatch(setUser(userData));
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.log(error);
      }
    }
  };

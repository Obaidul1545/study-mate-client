import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
  const authData = {
    name: 'obaidul',
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;

import './App.css';
import { Messenger } from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountContextProvider from './context/AccountProvider';
function App() {
  const clientId='695324462369-3vojru7i0j8ds5g19k2gtfo7nmdukd8v.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountContextProvider>
      <Messenger/>
      </AccountContextProvider>
    </GoogleOAuthProvider>
  );
}

export default App;

import HomePage from './pages/home';
import  UserProvider from './hooks/UserContext';

import { GlobalStyle } from "./styles/global";


function App() {
  return(
    <UserProvider>
      <HomePage />
      <GlobalStyle />
    </UserProvider>
  )
}

export default App;

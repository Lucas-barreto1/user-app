import Summary from './components/Summary';
import  UserProvider from './hooks/UserContext';

import { GlobalStyle } from "./styles/global";


function App() {
  return(
    <UserProvider>
      <Summary />
      <GlobalStyle />
    </UserProvider>
  )
}

export default App;

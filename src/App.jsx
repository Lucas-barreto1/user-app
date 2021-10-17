import Pagination from './components/Pagination';
import  UserProvider from './hooks/UserContext';

import { GlobalStyle } from "./styles/global";


function App() {
  return(
    <UserProvider>
      <Pagination />
      <GlobalStyle />
    </UserProvider>
  )
}

export default App;

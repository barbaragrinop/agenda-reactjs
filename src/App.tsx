import {BrowserRouter, Route} from 'react-router-dom';
import { Contatos } from './pages/Contatos';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Contatos}></Route>
    </BrowserRouter>
  );
}

export default App;

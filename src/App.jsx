import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Main} from './pages/Main';
import './styles/App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
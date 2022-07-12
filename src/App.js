import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Router from './components/Router/Router';

function App() {
  return (
    <BrowserRouter>
      <div className='container overlay'>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;

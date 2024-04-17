
import ReactDOM from 'react-dom/client'; // Correct import
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const React=require('react')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
import ReactDom from 'react-dom/client';
import './styles/styles.css';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';

let rootElm = document.getElementById('root');

ReactDom.createRoot(rootElm).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

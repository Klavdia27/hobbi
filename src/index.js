import React from 'react';
import './index.scss';
import App from './components/App';
import { createRoot } from "react-dom/client";

const RenderApp = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

createRoot(
  document.getElementById('root'),
).render(<RenderApp />);

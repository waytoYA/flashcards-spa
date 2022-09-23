import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './interface/sass/main.css'
import FlashCards from './context/FlashCards';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

interface ICards {
    initialValue: any;
}

export const Cards = createContext<any>(null)


root.render(
    <Cards.Provider

      value = {{
          FlashCards: new FlashCards(),
      }}
    > 
        <App />
    </Cards.Provider>
    
);

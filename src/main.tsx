import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './index.css' ;

const queryClient= new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>


  <QueryClientProvider client={queryClient}>
      <App />
  </QueryClientProvider>
    </Provider>

  </React.StrictMode>
);

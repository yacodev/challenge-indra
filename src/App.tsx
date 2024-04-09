import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import './App.scss';

function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  );
}

export default App;

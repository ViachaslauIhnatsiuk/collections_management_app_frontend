import './index.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { AppThemeProvider } from './components/AppThemeProvider';
import { AppRouterProvider } from './components/AppRouterProvider';
import './i18n/i18n';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppThemeProvider>
          <AppRouterProvider>
            <App />
          </AppRouterProvider>
        </AppThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react' 
import { store, persistedStore } from './store' 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <App />
      </PersistGate>
    </ReduxProvider>
  </StrictMode>,
)
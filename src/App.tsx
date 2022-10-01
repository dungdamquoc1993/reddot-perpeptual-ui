import React, { Suspense, useMemo } from 'react';
import { createWeb3ReactRoot, useWeb3React, Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';
import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';

const getLibrary = (lib: any) => {
  const library = new Web3Provider(lib);
  library.pollingInterval = 20000;
  return library;
};

const Web3ReactReadOnlyProvider = createWeb3ReactRoot('ReadOnly');

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ReactReadOnlyProvider getLibrary={getLibrary}>
          <BrowserRouter>
            <Header />
            <AppRoutes />
            <Footer />
          </BrowserRouter>
        </Web3ReactReadOnlyProvider>
      </Web3ReactProvider>
    </Suspense>
  );
}

export default App;

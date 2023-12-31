import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { 
  Home,
  ExpositoresPage,
  ExpositorPage,
  OrganicaPage
} from './pages'
import { Layout } from './components';
function App () {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='/expositores' element={ <ExpositoresPage /> } />
        <Route path='/organica' element={ <OrganicaPage /> } />
        <Route path='/expositor/:expositor_id' element={ <ExpositorPage /> } />
      </Routes>
    </Layout>
  );
}

export default App;

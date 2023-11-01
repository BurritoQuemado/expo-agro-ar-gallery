import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { 
  Home,
  PeoplePage,
  PersonPage
} from './pages'
import { Layout } from './components';
function App () {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='/expositores' element={ <PeoplePage /> } />
        <Route path='/expositor/:person_id' element={ <PersonPage /> } />
      </Routes>
    </Layout>
  );
}

export default App;

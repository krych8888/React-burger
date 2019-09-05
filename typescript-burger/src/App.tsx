import React from 'react';
import Layout from '../src/components/Layout/Layout'; 
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder';

const App: React.FC = () => {
  return (
    <Layout>
      <BurgerBuilder/>
    </Layout>
  );
}

export default App;

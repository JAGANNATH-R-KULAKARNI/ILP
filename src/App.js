import React from 'react';
import Layout from './components/layout/Layout';
import ErrorBoundry from './components/error/Error';
class App extends React.Component
{
  render()
  {
    return (
      <div>
        <ErrorBoundry>
        <Layout/>
        </ErrorBoundry>
      </div>
    );
  }
}
export default App;

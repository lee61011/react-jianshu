import React from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <div>
            <Route path='/' exact render={() => <div>home</div>}></Route>
            <Route path='/detail' exact render={() => <div>detail</div>}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

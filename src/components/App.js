import React, { Component } from 'react';
import Search from './search/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyList from './mylist/MyList';
import Header from './Header';
import Footer from './Footer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import githubApp from '../reducers/reducers';

let store = createStore(githubApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider>
            <div>
              <Header />
              
              <Route exact path='/' component={Search}/>
              <Route path="/search" component={Search}/>
              <Route path="/mylist" component={MyList}/>
              <Footer />
            </div>
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;

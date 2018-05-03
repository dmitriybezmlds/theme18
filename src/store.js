import { createStore } from 'redux';
import githubApp from './reducers';

let store = createStore(githubApp);
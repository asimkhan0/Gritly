import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from '../app/reducers/index';

//connect our app to reducers
export default createStore(reducers,applyMiddleware(thunk));

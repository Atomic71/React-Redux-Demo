import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { rootReducer } from './store/reducers/RootReducer';
import './sass/main.scss';
import App from './containers/App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)
// use HashRouter for static, HTML websites
// use BrowserRouter for other

const app = (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);


ReactDOM.render(app, document.getElementById("root"));
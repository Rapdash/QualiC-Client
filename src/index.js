import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { FirebaseContext } from './data/firebase';
import { SignUpPage } from './pages/SignUp';

ReactDOM.render((
<FirebaseContext.Provider>
    <SignUpPage />
</FirebaseContext.Provider>)
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

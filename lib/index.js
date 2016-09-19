import React from 'react';
import { render } from 'react-dom';

import Application from './components/Application';
import firebase from './firebase';

require('./styles/style');

render(<Application/>, document.getElementById('application'));

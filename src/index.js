/**
 * @file index.js
 * Main application file.
 */

import 'aframe';
import 'aframe-state-component';

import initialState from './initialState';
import './components/initializeSong';

// Register the initial state.
AFRAME.registerState(initialState);

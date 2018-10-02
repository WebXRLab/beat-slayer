/**
 * @file initialState.js
 * Exports an object representing the initial state, and actions that can be
 * performed on the state powering this game.
 */

import handlers from './actions';
import { DIFFICULTY_NORMAL } from './constants';

const initialState = {
  initialized: false,
  hits: 0,
  misses: 0,
  hitCombo: 0,
  missCombo: 0,
  difficulty: DIFFICULTY_NORMAL,
  songFile: null,
  songJson: null,
  songName: null,
  songAuthor: null,
  handlers,
};

export default initialState;

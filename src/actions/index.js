/**
 * @file index.js
 * Collects and exports all actions pertaining to state.
 */

/**
 * Increments hits by one, and then increments combo.
 */
function incrementHits(store) {
  store.hits += 1;
  store.combo += 1;
}

/**
 * Increments misses by one.
 */
function incrementMisses(store) {
  store.misses += 1;
  store.combo = 0;
}

/**
 * Sets the difficulty.
 */
function setDifficulty(difficulty) {
  store.difficulty = difficulty;
}

/**
 * Sets the audio file url.
 */
function setSongFile(url) {
  store.songFile = url;
}

/**
 * Sets the song json file url.
 */
function setSongJson(url) {
  store.songJson = url;
}

/**
 * Sets the song name.
 */
function setSongName(name) {
  store.songName = name;
}

/**
 * Sets the song's author's name.
 */
function setSongAuthor(name) {
  store.songAuthor = name;
}

export {
  incrementHits,
  incrementMisses,
}

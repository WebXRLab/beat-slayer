/**
 * @file initializeSong.js
 * Responsible for loading the song's information, and setting state that allows
 * for the specified song to be played.
 */

import JSZip from 'jszip';
import { pickBy } from 'ramda';

AFRAME.registerComponent('initialize-song', {

  async init() {
    const url = this.fetchSongDownloadPath();

    // @TODO: send the user an error.
    if (!url) {
      return;
    }

    const data = await this.downloadSongZip(url);
    const info = this.fetchFileFromZip(data, 'info.json');
    console.log(info);
  },

  /**
   * Fetches the song's download path from the 'song' query parameter'
   *
   * @returns {string|null} - String path to song's data file, or null.
   */
  fetchSongDownloadPath() {
    const params = new URLSearchParams(window.location.search);
    return params.get('song') || null;
  },

  /**
   * Downloads and un-zips song data file.
   *
   * @param {string} url - String URL path to song's data file.
   *
   * @returns {JSZip} - JSZip file object.
   */
  async downloadSongZip(url) {
    const data = await fetch(url);
    const blob = await data.blob()
    return await JSZip.loadAsync(blob);
  },

  /**
   * Parses a JSZip object and fetches content for the specified file.
   *
   * @param {JSZip} zip - JSZip object from which the file will be extracted.
   * @param {string} filename - String name of file to extract from {JSZip}.
   *
   * @returns {string|null} - Content of the specified file, or null.
   */
  fetchFileFromZip(zip, filename) {
    return pickBy((file) => {
      if (file.name.split('/').pop().toLowerCase() === filename.toLowerCase()) {
        return true;
      }

      return false;
    }, zip.files);
  }

});

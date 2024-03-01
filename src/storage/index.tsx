/**
 *
 * Custom AsyncStorage Functions
 *
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

import {PERSISTENT_STORAGE_KEY} from './config';

/**
 * Sets an item in AsyncStorage.
 *
 * @param {string} data - The data to be stored in AsyncStorage.
 * @returns {void}
 */
export const setItem = (data: string) => {
  AsyncStorage.setItem(PERSISTENT_STORAGE_KEY, data);
};

/**
 * Retrieves an item from AsyncStorage.
 *
 * @returns {Promise<string | null>} - A promise that resolves to the retrieved data.
 */
export const getItem = async (): Promise<string | null> =>
  AsyncStorage.getItem(PERSISTENT_STORAGE_KEY);

/**
 * Clears all items from AsyncStorage.
 *
 * @returns {void}
 */
export const clearStorage = () => {
  AsyncStorage.clear();
};

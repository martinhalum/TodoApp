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
export const setItem = (data: string, key?: string) => {
  AsyncStorage.setItem(key || PERSISTENT_STORAGE_KEY, data);
};

/**
 * Retrieves an item from AsyncStorage.
 *
 * @returns {Promise<string | null>} - A promise that resolves to the retrieved data.
 */
export const getItem = async (key?: string): Promise<string | null> =>
  AsyncStorage.getItem(key || PERSISTENT_STORAGE_KEY);

/**
 * Removes the item with the specified key from AsyncStorage.
 * @param {string} key - The key of the item to remove.
 * @returns {Promise<void>} - A Promise that resolves once the item is removed.
 * @throws {Error} - If there is an error removing the item.
 */
export const removeItem = async (key: string) => AsyncStorage.removeItem(key);

/**
 * Clears all items from AsyncStorage.
 *
 * @returns {void}
 */
export const clearStorage = () => {
  AsyncStorage.clear();
};

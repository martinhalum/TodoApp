// userStore.ts

import {create} from 'zustand';
import {getItem, setItem, removeItem} from 'storage';

import {UserData, UserStoreState} from './types';

const useUserStore = create<UserStoreState>(set => ({
  user: null,
  login: async (email, password) => {
    try {
      // Retrieve user data from AsyncStorage
      const userData = await getItem('users');
      if (userData) {
        const users: UserData[] = JSON.parse(userData);
        const user = users.find(
          u => u.email === email && u.password === password,
        );
        if (user) {
          set({user});
        } else {
          throw new Error('Invalid credentials');
        }
      } else {
        throw new Error('No users found');
      }
    } catch (error) {
      console.error(error);
    }
  },
  createUser: async (email, password) => {
    const userId = Math.floor(Math.random() * 100000);
    const id = userId.toString();
    try {
      // Retrieve existing users from AsyncStorage
      const userData = await getItem('users');
      let users: UserData[] = [];
      if (userData) {
        users = JSON.parse(userData);
      }
      // Check if the email already exists
      const existingUser = users.find(u => u.email === email);
      if (existingUser) {
        throw new Error('User already exists');
      }
      // Create a new user and save to AsyncStorage
      const newUser: UserData = {id, email, password};
      users.push(newUser);
      setItem('users', JSON.stringify(users));
      set({user: newUser});
    } catch (error) {
      console.error(error);
    }
  },
  logout: async () => {
    // Clear user data from state
    set({user: null});
    // Clear user data from AsyncStorage
    removeItem('user');
  },
  initialize: async () => {
    try {
      // Check if a user is already logged in
      const userData = await getItem('users');
      if (userData) {
        const users: UserData[] = JSON.parse(userData);
        set({user: users[0]}); // Assume the first user is logged in
      }
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useUserStore;

import { configureStore } from '@reduxjs/toolkit';
import reducer from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: reducer,
    filter: filterReducer,
  },
});

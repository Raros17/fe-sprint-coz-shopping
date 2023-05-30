import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './Modal'
import bookmarkReducer from './Bookmark'

const store = configureStore({
    reducer: {modal: modalReducer, bookmark:bookmarkReducer}
});

export default store;
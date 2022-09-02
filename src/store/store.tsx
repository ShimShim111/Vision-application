import { applyMiddleware, combineReducers, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import Thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

import archiveReducer from './archive/archive.slice';
import likeReducer from './like/like.slice';
import searchReducer from './search/search.slice';
// import authReducer from './auth/auth.slice';
// import counterReducer from './counter/counter.slice'
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};
const rootReducer = combineReducers({
  archive:archiveReducer,
  like:likeReducer,
  search:searchReducer
});
const middleware = [Thunk];
// let composed = applyMiddleware(...middleware);
// const reactotron = require('../proxy/reactotron').default;
// const reactotronMiddleware = reactotron.createEnhancer();
// if (process.env.NODE_ENV !== 'production') {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   composed = compose(applyMiddleware(...middleware), reactotronMiddleware);
// }

export type RootState = ReturnType<typeof rootReducer>;

let persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: middleware,
});

const persistor = persistStore(store);

export { store, persistor };

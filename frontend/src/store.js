import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { allApi } from "./redux/Api/allApi";


const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const reducer = combineReducers({
    // [signupApi.reducerPath]: signupApi.reducer,
    [allApi.reducerPath]: allApi.reducer,
});

const persistedReducers = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducers,
    // reducer: {
    //     // user: userReducer,
    //     // [signupApi.reducerPath]: signupApi.reducer,
    //     // [courseApi.reducerPath]: courseApi.reducer,
    // },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(allApi.middleware)
});

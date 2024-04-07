import { configureStore } from '@reduxjs/toolkit'

import MobileMenuReducer from '../Reducer/MobileMenu/MobileMenuSlice'
import SettingUserPageReducer from '../Reducer/SettingUserPage/SettingUserPageSlice'
export const store = configureStore({
    reducer: {
        MobileMenu: MobileMenuReducer,
        SettingUserPage: SettingUserPageReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

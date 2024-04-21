import { createSlice } from '@reduxjs/toolkit'

export interface SettingUserPageState {
    openedSettingPage: boolean
}

const initialState: SettingUserPageState = {
    openedSettingPage: true
}

export const SettingUserPage = createSlice({
    name: 'SettingUserPage',
    initialState,
    reducers: {
        openSettingPage: (state) => {
            state.openedSettingPage = true
        },
        closeSettingPage: (state) => {
            state.openedSettingPage = false
        }
    }
})

// Action creators are generated for each case reducer function
export const { openSettingPage, closeSettingPage } = SettingUserPage.actions

export default SettingUserPage.reducer

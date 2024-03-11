import { createSlice } from '@reduxjs/toolkit'

export interface MobileMenuState {
    openedMenu: boolean
}

const initialState: MobileMenuState = {
    openedMenu: false
}

export const mobileMenuSlice = createSlice({
    name: 'MobileMenu',
    initialState,
    reducers: {
        openMenu: (state) => {
            state.openedMenu = true
        },
        closeMenu: (state) => {
            state.openedMenu = false
        }
    }
})

// Action creators are generated for each case reducer function
export const { openMenu, closeMenu } = mobileMenuSlice.actions

export default mobileMenuSlice.reducer

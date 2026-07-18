import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


interface ThemeStateType {
    theme : "Light" | "Dark",
}

const initialState : ThemeStateType = {
    theme : "Dark"
}

const ThemeSlice = createSlice({
    name : "mode",
    initialState,
    reducers : {
        toggleTheme(state , action : PayloadAction<"Light" | "Dark">){
            state.theme = action.payload
        }
    }
})

export const {
    toggleTheme,
} = ThemeSlice.actions

export default ThemeSlice.reducer;
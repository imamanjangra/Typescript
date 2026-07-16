import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";


interface WeatherState {
  weather: {
    text: string;
  };
}

const initialState: WeatherState = {
  weather: {
    text: "Delhi",
  },
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<string>) => {
      state.weather.text = action.payload;
    },
  },
});

export const { addCity } = weatherSlice.actions;

export default weatherSlice.reducer;
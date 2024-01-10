import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FileState, csvToArr } from "../../util";

const initState = {
    contents: "",
    set: false,
    objects: [],
    keys: [],
} as FileState;

export const fileSlice = createSlice({
    name: "file",
    initialState: initState,

    reducers: {
        setFile: (state, action: PayloadAction<string>) => {
            const [keys, objects] = csvToArr(action.payload);
            state.contents = action.payload;
            state.set = true;
            state.keys = keys;
            state.objects = objects;
        },
        emptyFile: (state) => {
            state.contents = "";
            state.set = false;
            state.keys = [];
            state.objects = [];
        },
    },
});

export const { setFile, emptyFile } = fileSlice.actions;

export default fileSlice.reducer;

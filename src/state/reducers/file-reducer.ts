import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FileState, csvToArr } from "../../util";

const initState = {
    name: "",
    contents: "",
    set: false,
    objects: [],
    keys: [],
} as FileState;

export const fileSlice = createSlice({
    name: "file",
    initialState: initState,

    reducers: {
        setFile: (state, action: PayloadAction<[string, string]>) => {
            const [keys, objects] = csvToArr(action.payload[1]);
            state.name = action.payload[0];
            state.contents = action.payload[1];
            state.set = true;
            state.keys = keys;
            state.objects = objects;
        },
        emptyFile: (state) => {
            state.name = "";
            state.contents = "";
            state.set = false;
            state.keys = [];
            state.objects = [];
        },
    },
});

export const { setFile, emptyFile } = fileSlice.actions;

export default fileSlice.reducer;

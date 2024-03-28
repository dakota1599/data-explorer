import { Button, Typography } from "@mui/material";
import { FlexRow } from ".";
import { WithChildren } from "../util";
import { useAppDispatch, useAppSelector } from "../util/hooks";
import { Upload } from "@mui/icons-material";
import { ChangeEvent } from "react";
import { setFile } from "../state/reducers/file-reducer";

export const FileVerification = ({ children }: WithChildren) => {
    const fileState = useAppSelector((state) => state.file);
    return (
        <>
            {fileState.set && children}
            {!fileState.set && <SetFile />}
        </>
    );
};

const SetFile = () => {
    const dispatch = useAppDispatch();
    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const fr = new FileReader();
        const file = e.target.files[0];
        fr.readAsText(file);
        fr.onload = () => {
            dispatch(setFile([file.name, String(fr.result)]));
        };
    };

    return (
        <>
            <FlexRow justifyContent="center">
                <Typography variant="h3">Please upload a CSV File: </Typography>
                <Button
                    variant="contained"
                    startIcon={<Upload />}
                    component="label"
                >
                    <input
                        type="file"
                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        hidden
                        onChange={handleFile}
                    />
                    Upload
                </Button>
            </FlexRow>
        </>
    );
};

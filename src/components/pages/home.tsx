import { Typography } from "@mui/material";
import { useAppSelector } from "../../util/hooks";
import { TableView } from "../views";
import { FlexColumn } from "..";

export const Home = () => {
    const fileState = useAppSelector((state) => state.file);

    console.log(fileState.keys);
    console.log(fileState.objects);
    return (
        <FlexColumn alignItems="center">
            <Typography variant="h4" textAlign="left">
                {fileState.name}
            </Typography>
            <TableView state={fileState} width="50%" height="50em" />
        </FlexColumn>
    );
};

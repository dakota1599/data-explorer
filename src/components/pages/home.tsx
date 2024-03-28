import { Typography } from "@mui/material";
import { useAppSelector } from "../../util/hooks";
import { TableView } from "../views";
import { FlexColumn, Menu, MenuItem } from "..";

export const Home = () => {
    const fileState = useAppSelector((state) => state.file);

    console.log(fileState.keys);
    console.log(fileState.objects);
    return (
        <FlexColumn alignItems="center">
            <Typography variant="h4" textAlign="left">
                {fileState.name}
            </Typography>
            <Menu>
                <MenuItem title="Table">
                    <TableView state={fileState} />
                </MenuItem>
            </Menu>
        </FlexColumn>
    );
};

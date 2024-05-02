import { FileState } from "../../util";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const TableView = ({
  state,
  height = "100%",
  width = "100%",
}: {
  state: FileState;
  width?: string;
  height?: string;
}) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ height, width, overflow: "scroll" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {state.keys.map((key, index) => (
              <TableCell align="left" key={index}>
                {key}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {state.objects.map((rec, index) => (
            <TableRow key={index}>
              {state.keys.map((key, index) => (
                <TableCell align="left" key={`cell-${index}`}>
                  {rec[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

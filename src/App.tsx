import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./util";
import { Provider } from "react-redux";
import { store } from "./state";
import { Outlet } from "react-router-dom";
import { FlexColumn } from "./components";
import { FileVerification } from "./components";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <FlexColumn>
                    <FileVerification>
                        <Outlet />
                    </FileVerification>
                </FlexColumn>
            </ThemeProvider>
        </Provider>
    );
}

export default App;

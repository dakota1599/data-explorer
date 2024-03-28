import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./util";
import { Provider } from "react-redux";
import { store } from "./state";
import { Outlet } from "react-router-dom";
import { FileVerification } from "./components";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container sx={{ p: "30px" }}>
                    <FileVerification>
                        <Outlet />
                    </FileVerification>
                </Container>
            </ThemeProvider>
        </Provider>
    );
}

export default App;

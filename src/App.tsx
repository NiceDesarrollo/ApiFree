import { ThemeProvider, createTheme } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { ListBar } from "./components/SideBar/ListBar";
import { SideBar } from "./components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;

function App() {
  
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <SideBar
          titleBar="ApiFree"
          drawerWidth={drawerWidth}
          drawer={<ListBar />}
        />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 5,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;

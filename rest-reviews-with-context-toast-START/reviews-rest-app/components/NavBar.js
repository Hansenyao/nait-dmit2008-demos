import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch } from "@mui/material";

import { useTheme } from "../context/themeContext";

export default function NavBar({ title }) {
  const { appTheme, setAppTheme } = useTheme();


  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          {title}
        </Typography>
        <Switch
          checked={appTheme=="light"?false:true}
          onChange={(e)=>{
            setAppTheme(!e.target.checked?"light":"dark")
          }}
          inputProps={{ "aria-label": "controlled" }}
        />
        Dark Mode
      </Toolbar>
    </AppBar>
  );
}

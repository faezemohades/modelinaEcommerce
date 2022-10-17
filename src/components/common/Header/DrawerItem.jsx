import React from "react";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
function DrawerItem({ children }) {
  return (
    <List>
      <ListItem>
        <ListItemButton divider>
          <ListItemText sx={{ textAlign: "center" }}>{children}</ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default DrawerItem;

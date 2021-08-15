import React from "react";
import {
  makeStyles,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Avatar
} from "@material-ui/core";
import { AddCircleOutlineSharp, SubjectOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";
import { format } from "date-fns";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      witdh: "100%",
      padding: theme.spacing(3),
    },
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1
    },
    avatar: {
      marginLeft: theme.spacing(2)
    }
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineSharp color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div className={classes.root}>
      {/*App bar */}
      <AppBar className={classes.appbar} elevation={0} color="primary">
        <Toolbar>
          <Typography variant="h5" className={classes.date}>
            Welcome to Arzivre Note App
            <Typography>
              Today is the {format(new Date(), "do MMM Y")}
            </Typography>
          </Typography>
          <Typography>Arzivre</Typography>
          <Avatar src="/avatar.jpg" className={classes.avatar}/>
        </Toolbar>
      </AppBar>

      {/* side Drawer*/}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Arzivre Notes
          </Typography>
        </div>

        {/* list / link */}

        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar} />
        {children}
      </div>
    </div>
  );
};

export default Layout;

import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, } from '@mui/material';
import DraftsIcon from '@mui/icons-material/Drafts';
import InboxIcon from '@mui/icons-material/Inbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MonitorIcon from '@mui/icons-material/Monitor';
import InventoryIcon from '@mui/icons-material/Inventory';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import {useMatches, useNavigate, useRoutes} from "react-router-dom";
export default function NavBar() {
  const navs = [
    {
      name: 'Dashboard',
      icon: <DashboardIcon />,
      pathname: '/dashboard',
    },
    {
      name: 'Watching List',
      icon: <MonitorIcon />,
      pathname: '/watching-list'
    },
    {
      name: 'Import Inventory',
      icon: <InventoryIcon />,
      pathname: '/inventory'
    },
    {
      name: 'Account',
      icon: <ManageAccountsIcon />,
      pathname: '/account'
    }
  ];
  const navigate = useNavigate();
  const routesMatch = useMatches();
  return (
    <div className={'w-100 mt-4'}>
      <List>
        {navs.map(nav => {
          const active = routesMatch.find(route => route.pathname === nav.pathname);
          return (
            <ListItem
              selected={active}
              key={nav.name} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(nav.pathname);
                }}
              >
                <ListItemIcon>
                  {nav.icon}
                </ListItemIcon>
                <ListItemText primary={nav.name} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}
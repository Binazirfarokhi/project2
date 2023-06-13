import {Box, Divider, List, ListItem, ListItemButton, ListItemText, Paper, Typography} from "@mui/material";


export default function News() {
  return (
    <Paper elevation={4} className={'p-3 rounded rounded-4'}>
      <Typography variant={'h5'}>
        News
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText primary="Wish I could come, but I'm out of town this" />
        </ListItem>
        <Divider  component="li" />

        <ListItem disablePadding>
          <ListItemText primary="Wish I could come, but I'm out of town this" />
        </ListItem>
        <Divider  component="li" />
      </List>
    </Paper>
  )
}
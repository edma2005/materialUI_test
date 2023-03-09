import React from "react";
import { Button, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import AlarmIcon from "@mui/icons-material/Alarm";

const App = () => {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <hr />
      <Button variant="contained" color="secondary">
        Contained
      </Button>
      <Button variant="contained" color="warning">
        Warning
      </Button>
      <Button
        variant="contained"
        disableElevation
        onClick={() => alert("say hello")}
      >
        Contained+Alert
      </Button>
      <hr />
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <hr />
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <hr />
      <Typography variant="body1">Edma</Typography>
      <Typography variant="body2" color="primary">
        Edma
      </Typography>
      <Typography variant="subtitle1">Edma</Typography>
      <Typography variant="subtitle2" color="textSecondary">
        Edma
      </Typography>
      <hr />
      <Box padding={1}>Edmus</Box>
      <Box padding="8px">Edmus</Box>
    </div>
  );
};

export default App;

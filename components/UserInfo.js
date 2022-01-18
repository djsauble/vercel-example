import {
  Paper,
  Box,
  TextField,
  IconButton,
  Button,
  Popover,
} from "@mui/material";
import { useState } from "react";
import api from "../utils/api";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

const UserInfo = (props) => {
  // User data passed in via props, needs to be updated when new values are saved (setUser)
  const { user, setUser, documentId } = props;

  // State controls the values of the inputs
  const [state, setState] = useState({ emoji: "😀" });

  // Annoying stuff to control the emoji picker
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const onSave = async () => {
    if (!user) {
      await api.createUser(documentId, state);
    } else {
      await api.updateUser(documentId, state);
    }
    setUser(state);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onEmojiPick = (event) => {
    setState({ ...state, emoji: event.native });
    setAnchorEl(null);
  };

  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <IconButton
        onClick={(event) => setAnchorEl(event.currentTarget)}
        component="span"
        sx={{ mb: 2 }}
      >
        {state.emoji}
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        <Picker onSelect={onEmojiPick} />
      </Popover>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          label="Name"
          name="name"
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Role"
          name="role"
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Location"
          name="location"
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
      </Box>
      <Button
        variant="contained"
        size="large"
        fullWidth
        onClick={onSave}
        disabled={!state.name || !state.role || !state.location}
      >
        Save
      </Button>
    </Paper>
  );
};

export default UserInfo;

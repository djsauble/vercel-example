import { Paper, Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import api from "../utils/api";

const UserInfo = (props) => {
  // User passed in via props, needs to be updated when new user values are saved (setUser)
  const { user, setUser, documentId } = props;

  // State controls the values of the inputs
  const [state, setState] = useState({});

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

  return (
    <>
      {user?.name && (
        <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
          <h1>{user.name}'s Deets</h1>
          <span>My role is: {user.role}</span>
          <span>I am located here: {user.location}</span>
        </Box>
      )}

      <Paper
        elevation={2}
        sx={{
          p: 3,
          display: "grid",
          gridGap: 20,
        }}
      >
        <TextField label="Name" name="name" onChange={handleChange} />
        <TextField label="Role" name="role" onChange={handleChange} />
        <TextField label="Location" name="location" onChange={handleChange} />
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
    </>
  );
};

export default UserInfo;

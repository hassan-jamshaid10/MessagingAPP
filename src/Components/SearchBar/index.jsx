import React from 'react';
import { Box, Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const OverviewSection = () => {
  return (
    <Box p={3}>
      {/* Search Bar and Dropdown */}
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <TextField
          variant="outlined"
          placeholder="Search friends or settings"
          size="small"
          sx={{ width: '300px' }}
        />

        <Box display="flex" alignItems="center">
          <FormControl sx={{ ml: 2, minWidth: 120 }}>
            <InputLabel>Options</InputLabel>
            <Select
              label="Options"
              defaultValue=""
            >
              <MenuItem value="friends">Friends</MenuItem>
              <MenuItem value="settings">Settings</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            sx={{ backgroundColor: '#071952', color: '#EBF4F6', ml: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OverviewSection;

import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
    <Box sx={{ width: '100%', height: '100%' }}>
      <Grid container rowSpacing={50} columnSpacing={{ xs: 1 }}>
        <Grid item xs={12}>
          <Button variant="outlined" sx={{width: '100%', height: '100px'}}>Map</Button>
        </Grid>
        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}

export default App;

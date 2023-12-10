"use client"
//1. import area
import { ThemeProvider } from '@emotion/react'
import { Box, Container, createTheme, CssBaseline, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Grid} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from 'next/link';
import { Copyright } from '@mui/icons-material';


const x = createTheme({ }); // createTheme is function will return something and i will catch in x variable
//2. function definaion area
function Home() {
  return (
    <>
       <ThemeProvider theme={x}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{mt:1, display:"flex", flexDirection:"column", alignItems:"center"}}>
              <Avatar sx={{ bgcolor: 'secondary.main', m: 2 }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h2" variant="h4">Sign In</Typography>
              <Box component="form">
                <TextField 
                  fullWidth label="Enter Name"
                  name="fname"
                  id="fname"
                  margin="normal"
                  required autoComplete="name"
                  autoFocus
                />
                <TextField 
                  fullWidth label="Enter Email" 
                  name="email" 
                  id="email" 
                  margin="normal" 
                  required 
                  autoComplete="email" 
                  autoFocus 
                />
                <FormControlLabel control={ <Checkbox value="remember" color="success" /> }          label="Remember me" 
                />
                <Button fullWidth type="submit" variant="contained" sx={{mt:2, mb:2, bgcolor:"green"}}>Sign In</Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                     {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
       </ThemeProvider>
    </>
  )
}
//3. export area
export default Home;

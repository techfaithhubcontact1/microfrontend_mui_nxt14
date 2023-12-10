"use client"
import { Box, Container, ThemeProvider, Typography, createTheme } from '@mui/material'
import React from 'react'

//2. function defination area
const defaultTheme = createTheme();

export default function Page() {
    console.log(defaultTheme);
  return (
    <ThemeProvider theme={defaultTheme}>
        <Container>
            <Box>
              <Typography component="h2" variant="h3">Add New Products</Typography>
            </Box>
        </Container>
    </ThemeProvider>
  )
}

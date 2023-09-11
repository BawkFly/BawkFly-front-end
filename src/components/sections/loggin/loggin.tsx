import React from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import Link from 'next/link';

export type DataSectionLoggin = {}

export default function SectionLoggin(data:DataSectionLoggin){
  const {} = data;
  
  return (
    <Container maxWidth="sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <form>
            <TextField label="Username" fullWidth margin="normal" />
            <TextField label="Password" fullWidth margin="normal" type="password" />
            <Button variant="contained" color="primary" fullWidth type="submit">
              Login
            </Button>
          </form>
          <Typography variant="body2" style={{ marginTop: '20px' }}>
            Don't have an account?{' '}
            <Link href="@/components/sections/sign-up/sign-up">Sign up</Link>
          </Typography>
        </Paper>
      </Container>
  )
}
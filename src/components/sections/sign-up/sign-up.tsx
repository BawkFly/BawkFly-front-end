// ./src/components/sections/sign-up/sign-up.tsx
"use client"
// ./src/components/sections/sign-up/sign-up.tsx
import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import Link from 'next/link';

export type DataSectionSignUp = {};

const SignupPage: React.FC<DataSectionSignUp> = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    cellphone: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    cellphone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      fullName: formData.fullName ? '' : 'Full Name is required',
      email: formData.email ? '' : 'Email is required',
      password: formData.password ? '' : 'Password is required',
      confirmPassword:
        formData.confirmPassword === formData.password
          ? ''
          : 'Passwords do not match',
      cellphone:
        /^\d{13}$/.test(formData.cellphone)
          ? ''
          : 'Cellphone must be a 13-digit number',
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error !== '')) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          error={!!errors.fullName}
          helperText={errors.fullName}
          required
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          error={!!errors.email}
          helperText={errors.email}
          required
        />
        <TextField
          label="Password"
          fullWidth
          margin="normal"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          error={!!errors.password}
          helperText={errors.password}
          required
        />
        <TextField
          label="Confirm Password"
          fullWidth
          margin="normal"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            required
          />
          <TextField
            label="Cellphone"
            fullWidth
            margin="normal"
            type="tel"
            name="cellphone"
            value={formData.cellphone}
            onChange={handleInputChange}
            error={!!errors.cellphone}
            helperText={errors.cellphone}
            required
          />
          <Button variant="contained" color="primary" fullWidth type="submit">
            Sign Up
          </Button>
        </form>
        <Typography variant="body2" style={{ marginTop: '20px' }}>
          Already have an account?{' '}
          <Link href="/login">Login</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default SignupPage;

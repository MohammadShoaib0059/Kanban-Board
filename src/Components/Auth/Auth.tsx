import React from 'react';
import useAuthForm from '../../Hooks/useAuthForm';
import { Box, Controls, Paper, TextField } from '../../Common/imports';
import Notification from '../notifications/Notifications';
import LoginImage from '../../assets/20944201.jpg';
import { AuthHeader } from '../UI Controls/AuthHeader';

interface LoginComponentProps {
  isAdminView: boolean;
  toggleView: () => void;
}

const LoginComponent: React.FC<LoginComponentProps> = () => {
  const formik = useAuthForm();

  return (
    <Paper
      variant="outlined"
      sx={{
        my: { xs: 3, md: 6 },
        p: { xs: 2, md: 3 },
        mt:{xs:8,md:10}
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Illustration Side */}
        <Box
          sx={{
            flex: '1 1 50%',
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={LoginImage} alt="Login Illustration" width="100%" />
        </Box>

        {/* Form Side */}
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            flex: '1 1 50%',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: { xs: '100%', md: 'auto' },
            marginTop:{xs:'10px',md:'50px'}
          }}
          noValidate
          autoComplete="off"
        >
          {/* <Controls.Typography variant="h3" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          Kanban Login
          </Controls.Typography> */}
          <AuthHeader/>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Controls.Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Controls.Button>
          <Notification />
        </Box>
      </Box>
    </Paper>
  );
};

export default LoginComponent;

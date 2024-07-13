import React from 'react';
import useAuthForm from '../../Hooks/useAuthForm';
import {AccountCircleIcon, AdminPanelSettingsIcon, Box,Controls, IconButton, Paper, TextField} from '../../Common/imports';

interface LoginComponentProps {
  isAdminView: boolean;
  toggleView: () => void;
}

const LoginComponent: React.FC<LoginComponentProps> = ({ isAdminView, toggleView }) => {
  
  const formik = useAuthForm(isAdminView);

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isAdminView ? 'row-reverse' : 'row',
          alignItems: 'center',
          height: '100%',
        }}
      >
        {/* Illustration Side */}
        <Box sx={{ flex: '1 1 50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {isAdminView ? (
            <AdminPanelSettingsIcon sx={{ fontSize: '10rem', color: 'primary.main' }} />
          ) : (
            <AccountCircleIcon sx={{ fontSize: '10rem', color: 'primary.main' }} />
          )}
        </Box>

        {/* Form Side */}
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{ flex: '1 1 50%', p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}
          noValidate
          autoComplete="off"
        >
          <Controls.Typography variant="h4">
            {isAdminView ? 'Admin Login' : 'User Login'}
          </Controls.Typography>
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
            {isAdminView ? 'Sign In (Admin)' : 'Sign In'}
          </Controls.Button>
          <Controls.Box sx={{ textAlign: 'center' }}>
            <IconButton onClick={toggleView} size="small">
              {isAdminView ? <AccountCircleIcon /> : <AdminPanelSettingsIcon />}
            </IconButton>
            <Controls.Typography variant="body2" sx={{ mt: 1 }}>
              {isAdminView ? 'Sign in as User' : 'Sign in as Admin'}
            </Controls.Typography>
          </Controls.Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default LoginComponent;

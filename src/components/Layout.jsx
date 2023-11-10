import React from 'react';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const Layout = () => {
  return (
    <Box width="100vw" height="100vh" backgroundColor="gray">
      <Navigation />
      <div>
        <Outlet />
      </div>
    </Box>
  );
};

export default Layout;

import { Route, Routes } from 'react-router-dom';

import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Layout from './components/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="*" />
      </Routes>
    </div>
  );
};

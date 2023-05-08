import './App.css';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Routes/Allroute.routes';

function App() {
  useSelector((state) => console.log(state));
  return (
    <Box>
      <Navbar /> 
      <AllRoutes />
    </Box>
  );
}

export default App;

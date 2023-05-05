import './App.css';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar';



function App() {

  useSelector((state) => console.log(state));
  return (
    <Box>
      <Navbar />
       </Box>
  );
}

export default App;

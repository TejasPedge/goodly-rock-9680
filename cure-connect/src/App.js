<<<<<<< HEAD
import './App.css';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Routes/Allroute.routes';
=======
import "./App.css";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Routes/Allroute.routes";
>>>>>>> c7e2a266d4ba13f3cb106b7debb9bd92ead39839

function App() {
  useSelector((state) => console.log(state));
  return (
    <Box>
<<<<<<< HEAD
      <Navbar /> 
=======
      <Navbar />
>>>>>>> c7e2a266d4ba13f3cb106b7debb9bd92ead39839
      <AllRoutes />
    </Box>
  );
}

export default App;

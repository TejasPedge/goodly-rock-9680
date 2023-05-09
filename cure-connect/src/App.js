import "./App.css";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Routes/Allroute.routes";
import Footer from "./Components/Footer/Footer";

function App() {
  useSelector((state) => console.log(state));
  return (
    <Box>
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;

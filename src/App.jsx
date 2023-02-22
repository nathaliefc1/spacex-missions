import { Image } from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import logo from "./assets/logo-spaceX.png";
import { LaunchDetails } from "./components/LaunchDetails";
import { LaunchList } from "./components/LaunchList";
import { RocketDetails } from './components/RocketDetails';


export function App() {
  return (
    <>
      <Image m={4} src={logo} width={300} />
      <Routes>
        <Route path="/" element={<LaunchList/>}/>
        <Route path="launch/:launchId" element={<LaunchDetails/>}/>
        <Route path="rocket/:rocketId" element={<RocketDetails/>}/>
      </Routes>
      
    </>
    );
}
 
//https://www.youtube.com/watch?v=afDXVnDnBf4 18:28
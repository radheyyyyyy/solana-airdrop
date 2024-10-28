
import { Buffer } from 'buffer';

import WelcomeText from "./Components/WelcomeText.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Airdrop from "./Components/Airdrop.jsx";
import SendSOL from "./Components/SendSOL.jsx";


window.Buffer = Buffer;

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path='/sendairdrop' element={<Airdrop/>}/>
              <Route path='/' element={<WelcomeText/>}/>
              <Route path='sendsol' element={<SendSOL/>}/>
          </Routes>

      </BrowserRouter>
  )
}

export default App

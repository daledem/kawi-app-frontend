import Index from './page/Index'
import News from './page/News';
import Map from './page/Map';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index/>}/>
        <Route path='news' element={<News/>}/>
        <Route path='map' element={<Map/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

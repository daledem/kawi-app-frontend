import Index from './page/Index'
import News from './page/News';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index/>}/>
        <Route path='news' element={<News/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

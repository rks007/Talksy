import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Create from "./pages/Create"
import Join from "./pages/Join"

function App() {
  

  return (
    <div className="bg-gray-800 h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/join" element={<Join/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

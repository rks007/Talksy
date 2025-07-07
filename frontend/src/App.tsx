import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"

function App() {
  

  return (
    <div className="bg-gray-800 h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<h1 className="text-3xl font-bold underline">Login Page</h1>} />
          <Route path="/register" element={<h1 className="text-3xl font-bold underline">Register Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

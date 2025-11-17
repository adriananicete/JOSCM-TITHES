import Home from "./components/Home"
import { BrowserRouter, Routes, Route, Navigate } from "react-router"
import Login from "./components/Login"
import BaseLayout from "./layout/BaseLayout"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/" element={<BaseLayout />}>
          <Route index element={< Home />} />
          <Route path="/login" element={< Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App

import Home from "./components/Home";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router";
import Login from "./components/Login";
import BaseLayout from "./layout/BaseLayout";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Navigate to="login" replace />} />
            <Route path="login" element={<Login />} />
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

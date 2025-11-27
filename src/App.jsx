import Home from "./components/Home";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router";
import Login from "./components/Login";
import BaseLayout from "./layout/BaseLayout";
import UserProvider from "./context/UserContext";
import AddTithes from "./components/home/AddTithes";
import GenerateTithes from "./components/home/GenerateTithes";
import Expense from "./components/home/Expense";
import CreateVoucher from "./components/home/CreateVoucher";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Navigate to="login" replace />} />
            <Route path="login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="addTithes" element={<AddTithes />} />
            <Route path="generateTithes" element={<GenerateTithes />} />
            <Route path="expenses" element={<Expense />} />
            <Route path="createVoucher" element={<CreateVoucher />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Transaction from "./components/Transaction";
import Customer from "./components/Customer";
import { Outlet, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Analytics from "./components/Analytics";

function App() {
  return (
    <main className="flex overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col w-full">
        <Header />
        <Outlet />
        <Routes>
          <Route path="/customer" element={<Customer />} />
          <Route path="/transactions" index element={<Transaction />} />
          <Route path="/login" element={<Login />} />
          <Route path="/"  element={<Menu />} />
          <Route path="/analytics" element={<Analytics message="Analytics" />} />
          <Route path="/wa" element={<Analytics message="Whatapp Marketing" />} />
          <Route path="/em" element={<Analytics message="Email Marketing" />} />
          <Route path="/setting" element={<Analytics message="Work In progress" />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;

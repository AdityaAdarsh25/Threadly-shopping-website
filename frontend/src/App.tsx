import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import { SignUp } from "./pages/SignUp";
import { Toaster } from "@/components/ui/sonner";
import Products from "./pages/Products";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

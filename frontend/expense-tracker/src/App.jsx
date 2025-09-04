import React from 'react'
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
 } from 'react-router-dom';
import Login from "./pages/Auth/Login";
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';
import Expense from './pages/Dashboard/Expense';
import UserProvider from './context/UserContext';
import ErrorBoundary from './components/ErrorBoundary';
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <ErrorBoundary>
      <UserProvider>
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Root />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/signup" exact element={<SignUp />} />
              <Route path="/dashboard" exact element={<Home />} />
              <Route path="/income" exact element={<Income />} />
              <Route path="/expense" exact element={<Expense />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </div>

        <Toaster
          toastOptions={{
            className:"",
            style: {
              fontSize:'13px'
            },
          }}
        />
      </UserProvider>
    </ErrorBoundary>
  );
};

export default App

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};

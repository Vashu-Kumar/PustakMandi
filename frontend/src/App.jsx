import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// Pages
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Books from './pages/Books';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import BookDetail from './components/BookDetail';
import Blog from './pages/Blog';

// Admin
import DashBoard from './components/DashBoard';
import ProtectedAdminRoute from './components/ProtectedAdminRoute';
import DeleteBook from './pages/DeleteBook';
import AddBook from './pages/AddBook';

import { DashboardProvider } from "./context/DashboardContext";

function App() {
  return (
    <main>
      <DashboardProvider>
    
        <Header />

<Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PustakMandi/blog" element={<Blog />} />
            <Route path="/PustakMandi/books" element={<Books />} />
            <Route path="/PustakMandi/book/:id" element={<BookDetail />} />
            <Route path="/PustakMandi/login" element={<Login />} />
            <Route path="/PustakMandi/register" element={<Register />} />
            <Route path="/PustakMandi/profile" element={<Profile />} />

            <Route
              path="/PustakMandi/dashBoard/x9a3dmin"
              element={
                <ProtectedAdminRoute>
                  <DashBoard />
                </ProtectedAdminRoute>
              }
            />

            <Route path="*" element={<Home />} />
          </Routes>
        
        <Footer />
        
      </DashboardProvider>
    </main>
  );
}

export default App;


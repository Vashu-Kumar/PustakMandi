import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Books from './pages/Books';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import BookDetail from './components/BookDetail';

//Only for Admin
import ProtectedAdminRoute from './components/ProtectedAdminRoute';
import DeleteBook from './pages/DeleteBook';
import AddBook from './pages/AddBook';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PustakMandi/books" element={<Books />} />
        <Route path="/PustakMandi/book/:id" element={<BookDetail />} />
        <Route path="/PustakMandi/about" element={<About />} />
        <Route path="/PustakMandi/contact" element={<Contact />} />
        <Route path="/PustakMandi/login" element={<Login />} />
        <Route path="/PustakMandi/register" element={<Register />} />
        <Route path="/PustakMandi/profile" element={<Profile />} />



        <Route
          path="/PustakMandi/addBook"
          element={
            <ProtectedAdminRoute>
              <AddBook />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/PustakMandi/deleteBook"
          element={
            <ProtectedAdminRoute>
              <DeleteBook />
            </ProtectedAdminRoute>
          }
        />



        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


<<<<<<< HEAD

// Pages
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Books from './pages/Books';
=======
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Books from './pages/Books';
import About from './pages/About';
import Contact from './pages/Contact';
>>>>>>> aea2970d30785cb3ad372155b984cc8132ea8a01
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import BookDetail from './components/BookDetail';
<<<<<<< HEAD
import Blog from './pages/Blog';

// Admin
import DashBoard from './components/DashBoard';
=======

//Only for Admin
>>>>>>> aea2970d30785cb3ad372155b984cc8132ea8a01
import ProtectedAdminRoute from './components/ProtectedAdminRoute';
import DeleteBook from './pages/DeleteBook';
import AddBook from './pages/AddBook';

<<<<<<< HEAD
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

=======

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
>>>>>>> aea2970d30785cb3ad372155b984cc8132ea8a01

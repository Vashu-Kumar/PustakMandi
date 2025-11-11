import React, { useState } from "react";
import AddBook from "../pages/AddBook";
import DeleteBook from "../pages/DeleteBook";
import {
  BookPlus,
  Trash2,
  Users,
  Menu,
  X,
} from "lucide-react";

const DashBoard = () => {
  const [activeSection, setActiveSection] = useState("add");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Temporary Manage Users section
  const UsersSection = () => (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
      <p className="text-gray-600">
        Here you can view, edit, or delete registered users. (Feature coming soon)
      </p>
    </div>
  );

  return (
    <div className="mt-8 flex bg-gray-100 min-h-[85vh]">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out 
        bg-[#1B1212] text-white w-64 flex flex-col p-4 z-50 shadow-xl`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center m-10">
          {/* <div className="text-xl font-semibold flex items-center gap-2">
            <LayoutDashboard className="w-5 h-5" />
            Admin Panel
          </div> */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col gap-2">
          <button
            onClick={() => {
              setActiveSection("add");
              setSidebarOpen(false);
            }}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
              activeSection === "add"
                ? "bg-blue-600"
                : "hover:bg-[#2b1f1f] hover:translate-x-1"
            }`}
          >
            <BookPlus className="w-5 h-5" />
            Add Book
          </button>

          <button
            onClick={() => {
              setActiveSection("delete");
              setSidebarOpen(false);
            }}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
              activeSection === "delete"
                ? "bg-red-600"
                : "hover:bg-[#2b1f1f] hover:translate-x-1"
            }`}
          >
            <Trash2 className="w-5 h-5" />
            Delete Book
          </button>

          <button
            onClick={() => {
              setActiveSection("users");
              setSidebarOpen(false);
            }}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
              activeSection === "users"
                ? "bg-green-600"
                : "hover:bg-[#2b1f1f] hover:translate-x-1"
            }`}
          >
            <Users className="w-5 h-5" />
            Manage Users
          </button>
        </nav>
      </aside>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-20 left-4 z-40 bg-[#1B1212] text-white p-2 rounded-md shadow-lg"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 transition-all duration-300 bg-gray-50 min-h-[85vh]">
        <div className="p-4 md:p-6">
          {activeSection === "add" && <AddBook />}
          {activeSection === "delete" && <DeleteBook />}
          {activeSection === "users" && <UsersSection />}
        </div>
      </main>
    </div>
  );
};

export default DashBoard;

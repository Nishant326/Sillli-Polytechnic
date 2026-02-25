// src/layouts/AdminLayout.jsx
import React, { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Bell,
  LogOut,
  X,
  FileBadge,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { NavLink, Outlet } from "react-router-dom";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    {
      id: "/dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      id: "/create-notice",
      label: "Notice",
      icon: <Bell className="w-5 h-5" />,
    },
    {
      id: "/create-syllabus",
      label: "Syllabus",
      icon: <BookOpen className="w-5 h-5" />,
    },
    // {
    //   id: "/create-result",
    //   label: "Results",
    //   icon: <FileText className="w-5 h-5" />,
    // },
    {
      id: "/create-topper",
      label: "Topper",
      icon: <FileBadge className="w-5 h-5" />,
    },
    {
      id : "/create-notes",
      label: "Notes",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      id: "/create-pyq",
      label: "PYQ",
      icon: <FileText className="w-5 h-5" />,
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white">U</span>
              </div>
              <span className="text-gray-900">Admin Portal</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.id}
                    className={({ isActive }) =>
                      `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback className="bg-blue-600 text-white">
                  AD
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 truncate">Admin User</p>
                <p className="text-xs text-gray-500 truncate">
                  admin@university.edu
                </p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;

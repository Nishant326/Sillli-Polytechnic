// src/pages/AdminDashboard.jsx
import { useEffect, useState } from "react";
import { Users, Bell, BookOpen, FileText, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import axios from "axios";

// Reusable StatCard Component
function StatCard({ title, value, change, trend, icon, color }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
        <div className={`p-2 rounded-lg bg-opacity-10 ${color}`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            <div className="flex items-center gap-1 mt-2">
              {trend === "up" ? (
                <TrendingUp className="w-4 h-4 text-green-600" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-600" />
              )}
              <span
                className={`text-sm font-medium ${
                  trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {change}
              </span>
              <span className="text-sm text-gray-500 ml-1">vs last update</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function AdminDashboard() {
  const [totalStudents, setTotalStudents] = useState(0);

  const totalNotices = "156";
  const totalSyllabus = "42";
  const totalNotes = "1,024";

  // Fetch student count from backend
  useEffect(() => {
    const fetchStudentCount = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/students/count");
        setTotalStudents(res.data.count);
      } catch (err) {
        console.error("Failed to fetch student count", err);
      }
    };

    fetchStudentCount();
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-600">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Total Students */}
        <StatCard 
          title="Students Today" 
          value={totalStudents} 
          change="+ live" 
          trend="up" 
          icon={<Users className="w-6 h-6 text-blue-600" />}
          color="bg-blue-500"
        />

        {/* Notices */}
        <StatCard 
          title="Active Notices" 
          value={totalNotices} 
          change="+8.2%" 
          trend="up" 
          icon={<Bell className="w-6 h-6 text-yellow-600" />} 
          color="bg-yellow-500"
        />

        {/* Syllabus */}
        <StatCard 
          title="Syllabus Files" 
          value={totalSyllabus} 
          change="+2 new" 
          trend="up" 
          icon={<BookOpen className="w-6 h-6 text-purple-600" />} 
          color="bg-purple-500"
        />

        {/* Notes */}
        <StatCard 
          title="Study Notes" 
          value={totalNotes} 
          change="+24.5%" 
          trend="up" 
          icon={<FileText className="w-6 h-6 text-green-600" />} 
          color="bg-green-500"
        />

      </div>
    </div>
  );
}

export default AdminDashboard;

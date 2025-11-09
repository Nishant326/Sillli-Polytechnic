// src/pages/AdminDashboard.jsx
import { Users, BookOpen, FileText, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

function StatCard({ title, value, change, trend, icon }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm text-gray-600">{title}</CardTitle>
        <div className="text-blue-600">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-3xl text-gray-900">{value}</p>
            <div className="flex items-center gap-1 mt-2">
              {trend === "up" ? (
                <TrendingUp className="w-4 h-4 text-green-600" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-600" />
              )}
              <span
                className={`text-sm ${
                  trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {change}
              </span>
              <span className="text-sm text-gray-500">vs last month</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function AdminDashboard() {
  const stats = [
    {
      title: "Total Students",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Notice",
      value: "156",
      change: "+8.2%",
      trend: "up",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      title: "Faculty Members",
      value: "342",
      change: "+3.1%",
      trend: "up",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Applications",
      value: "489",
      change: "-2.4%",
      trend: "down",
      icon: <FileText className="w-5 h-5" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-600">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;

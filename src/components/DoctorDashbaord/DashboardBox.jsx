import React from "react";

const DashboardBox = () => {
  const stats = [
    { title: "Total Appointments", count: 120, color: "bg-blue-500" },
    { title: "Pending Appointments", count: 30, color: "bg-yellow-500" },
    { title: "Completed Appointments", count: 80, color: "bg-green-500" },
    { title: "Cancelled Appointments", count: 10, color: "bg-red-500" },
  ];

  return (
    <div className="flex flex-wrap  gap-6 p-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`w-60 p-6 rounded-2xl shadow-lg text-white ${stat.color}`}
        >
          <h3 className="text-xl font-semibold">{stat.title}</h3>
          <p className="text-3xl font-bold mt-2">{stat.count}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardBox;

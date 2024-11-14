import React, { useState, useEffect } from "react";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import Loader from "./Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Graphs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  // Sample Data
  const priceVsMonthsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Price (₹)",
        data: [20, 25, 22, 30, 35, 28],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const pricesVsYearsData = {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Average Price (₹)",
        data: [18, 22, 25, 28, 30],
        backgroundColor: ["#F87171", "#FBBF24", "#34D399", "#60A5FA", "#A78BFA"],
      },
    ],
  };

  const diseaseIncreaseData = {
    labels: ["Blight", "Wilt", "Leaf Curl"],
    datasets: [
      {
        label: "Disease (%)",
        data: [30, 20, 50],
        backgroundColor: ["#34D399", "#60A5FA", "#FBBF24"],
      },
    ],
  };

  const pesticideCountData = {
    labels: ["Shop 1", "Shop 2", "Shop 3", "Shop 4"],
    datasets: [
      {
        label: "Pesticides Count",
        data: [15, 20, 8, 12],
        backgroundColor: ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  if (loading) return <Loader />;

  return (
    <div className="container mx-auto p-4">
      {/* Graphs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Upper Row */}
        <div className="flex justify-center p-2 bg-white rounded-lg border border-gray-200 shadow-md" style={{ height: "280px" }}>
          <Line data={priceVsMonthsData} options={chartOptions} />
        </div>
        <div className="flex justify-center p-2 bg-white rounded-lg border border-gray-200 shadow-md" style={{ height: "280px" }}>
          <Bar data={pricesVsYearsData} options={chartOptions} />
        </div>

        {/* Lower Row */}
        <div className="flex justify-center p-2 bg-white rounded-lg border border-gray-200 shadow-md" style={{ height: "250px" }}>
          <Pie data={diseaseIncreaseData} options={chartOptions} />
        </div>
        <div className="flex justify-center p-2 bg-white rounded-lg border border-gray-200 shadow-md" style={{ height: "250px" }}>
          <Doughnut data={pesticideCountData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Graphs;

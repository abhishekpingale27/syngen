import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Graphs from "../components/Graphs";
import LatestNews from "../components/LatestNews"; // Import the LatestNews component

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4">
          {/* Graphs Section */}
          <Graphs />
          {/* Latest News Section */}
          <div className="mt-8">
            <LatestNews />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import Graphs from "../components/Graphs";
import LatestNews from "../components/LatestNews"; // Import the LatestNews component


const Dashboard = () => {
  return (
    <div className="flex-1 flex flex-col">
      <main className="p-4">
        {/* Graphs Section */}
        <Graphs />
        
        {/* Latest News Section */}
        <div className="mt-8">
          <LatestNews />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

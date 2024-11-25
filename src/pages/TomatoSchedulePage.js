import React from "react";

// Random product generator for each disease
const getRandomProducts = (products, count) => {
  const shuffled = products.sort(() => 0.5 - Math.random()); // Shuffle array
  return shuffled.slice(0, count); // Select 'count' number of products
};

// Updated Table Data
const scheduleData = [
  {
    week: "1st Week",
    disease: "Early Blight",
    products: ["Amistar Top", "Revus", "Bravo", "Ridomil Gold"],
  },
  {
    week: "2nd Week",
    disease: "Late Blight",
    products: ["Ridomil Gold", "Revus Top", "Folicur", "Bravo"],
  },
  {
    week: "3rd Week",
    disease: "Bacterial Wilt",
    products: ["Actara", "Minecto Alpha", "Confidor", "Quadris"],
  },
  {
    week: "4th Week",
    disease: "Powdery Mildew",
    products: ["Tilt", "Folicur", "Score", "Amistar Top"],
  },
  {
    week: "5th Week",
    disease: "Leaf Curl Virus",
    products: ["Minecto Alpha", "Actara", "Confidor", "Movento"],
  },
  {
    week: "6th Week",
    disease: "Anthracnose",
    products: ["Quadris", "Revus", "Ridomil Gold", "Amistar Top"],
  },
  {
    week: "7th Week",
    disease: "Septoria Leaf Spot",
    products: ["Score", "Tilt", "Folicur", "Revus Top"],
  },
];

// Updated `TomatoSchedulePage` Component
const TomatoSchedulePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow p-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-green-800 text-center mb-6">
          Tomato Disease Schedule - Week-wise
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow-md border-collapse border border-gray-200">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="py-3 px-6 border-b border-gray-200">Weeks</th>
                <th className="py-3 px-6 border-b border-gray-200">
                  Possible Diseases
                </th>
                <th className="py-3 px-6 border-b border-gray-200">
                  Syngenta Products
                </th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((row, index) => {
                // Randomly select 3 products for each row
                const randomProducts = getRandomProducts(row.products, 3);
                return (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } hover:bg-gray-200`}
                  >
                    <td className="py-3 px-6 border-b border-gray-200 text-center">
                      {row.week}
                    </td>
                    <td className="py-3 px-6 border-b border-gray-200 text-center">
                      {row.disease}
                    </td>
                    <td className="py-3 px-6 border-b border-gray-200 text-center">
                      {randomProducts.join(", ")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default TomatoSchedulePage;

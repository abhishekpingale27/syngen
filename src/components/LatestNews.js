import React from "react";
import Slider from "react-slick";
import "./LatestNews.css";

const newsData = [
  {
    id: 1,
    image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Tomato1",
    title: "Tomato Prices Surge Due to Bad Weather",
    description: "Tomato prices are seeing a significant increase this season due to unexpected rains affecting crops.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150/008000/FFFFFF?text=Pesticide",
    title: "New Pesticide Approved for Tomato Blight",
    description: "A new pesticide has been approved to tackle the blight affecting tomato crops across various states.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150/FFA500/FFFFFF?text=High+Yield",
    title: "Farmers Advised on Best Practices for High Yield",
    description: "Agricultural experts share tips on best practices to achieve higher tomato yields this season.",
  },
];

const LatestNews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="latest-news-container bg-white p-4 rounded-lg shadow-md mt-8">
      <h2 className="text-xl font-bold mb-4">Latest News in Agriculture</h2>
      <Slider {...settings}>
        {newsData.map((news) => (
          <div key={news.id} className="news-item flex items-center rounded-lg p-4 border mb-4">
            <img
              src={news.image}
              alt="News"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/150/CCCCCC/000000?text=No+Image";
              }}
              className="h-32 w-32 object-cover rounded-lg mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold hover:underline cursor-pointer">
                {news.title}
              </h3>
              <p className="text-sm text-gray-600">{news.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LatestNews;

import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const WeatherForecastPage = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "5ff8e0c055e24780ac765524242211";

  // Function to get the user's location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => {
          setError("Unable to retrieve location. Please allow location access.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  };

  // Function to fetch weather data from WeatherAPI
  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=5`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data.");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect to fetch location and weather data on component mount
  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (location.lat && location.lon) {
      fetchWeatherData(location.lat, location.lon);
    }
  }, [location]);

  // Function to provide tomato-specific advice based on forecast
  const getTomatoAdvice = () => {
    if (!weatherData) return "";

    const forecast = weatherData.forecast.forecastday;
    const rainfallDays = forecast.filter(
      (day) => day.day.daily_chance_of_rain > 50
    );
    const temp = weatherData.current.temp_c;

    let advice = "";

    if (temp < 15 || temp > 30) {
      advice +=
        "The current temperature is not optimal for tomato growth. Consider using temperature control measures like mulching or greenhouses.\n";
    }

    if (rainfallDays.length > 0) {
      advice += `Rainfall is expected on ${rainfallDays.length} day(s) in the next 5 days. Ensure proper drainage to avoid waterlogging, and apply fungicides to prevent fungal diseases like blight.\n`;
    } else {
      advice +=
        "No significant rainfall is predicted in the next 5 days. Ensure adequate irrigation to maintain soil moisture.\n";
    }

    advice +=
      "Regularly monitor your crops for pests and diseases and provide the necessary nutrients at appropriate growth stages.";

    return advice;
  };

  // Generate rainfall prediction text
  const getRainfallForecast = () => {
    if (!weatherData) return "";

    const forecast = weatherData.forecast.forecastday;
    return forecast.map((day, index) => (
      <p key={index} className="text-sm text-gray-700">
        <span className="font-bold">{day.date}:</span>{" "}
        {day.day.daily_chance_of_rain}% chance of rain, expected rainfall:{" "}
        {day.day.totalprecip_mm} mm.
      </p>
    ));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-yellow-100 p-6">
      <h2 className="text-4xl font-bold text-green-800 mb-6">
        Weather Forecast for Tomato Farming
      </h2>
      {loading && (
        <div className="flex flex-col items-center justify-center space-y-4">
          <ClipLoader color="#2a9d8f" loading={loading} size={60} />
          <p className="text-lg font-semibold text-green-700">
            Fetching the latest weather insights for your farm...
          </p>
          <p className="text-sm text-green-600 italic">
            Tips: Preparing for weather changes can save your crops!
          </p>
        </div>
      )}
      {error && <p className="text-lg text-red-600">{error}</p>}

      {weatherData && (
        <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            {weatherData.location.name}, {weatherData.location.region},{" "}
            {weatherData.location.country}
          </h3>
          <div className="space-y-2">
            <p className="text-lg">
              <span className="font-bold">Temperature:</span>{" "}
              {weatherData.current.temp_c}°C
            </p>
            <p className="text-lg">
              <span className="font-bold">Condition:</span>{" "}
              {weatherData.current.condition.text}
            </p>
            <p className="text-lg">
              <span className="font-bold">Humidity:</span>{" "}
              {weatherData.current.humidity}%
            </p>
            <p className="text-lg">
              <span className="font-bold">Wind Speed:</span>{" "}
              {weatherData.current.wind_kph} km/h
            </p>
            <p className="text-lg">
              <span className="font-bold">Rainfall (Last Hour):</span>{" "}
              {weatherData.current.precip_mm} mm
            </p>
          </div>
          <div className="mt-6 p-4 bg-green-100 rounded">
            <h4 className="text-lg font-semibold text-green-800">
              Rainfall Prediction for the Next 5 Days:
            </h4>
            {getRainfallForecast()}
          </div>
          <div className="mt-6 p-4 bg-yellow-100 rounded">
            <h4 className="text-lg font-semibold text-green-800">
              Tomato Crop Advice:
            </h4>
            <p className="text-green-700">{getTomatoAdvice()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherForecastPage;

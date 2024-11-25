import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const PredictionPage = () => {
  const [activeTab, setActiveTab] = useState("fruitStage");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle tab switching
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setUploadedImage(null);
    setPredictionResult(null);
    setIsLoading(false);
  };

  // Function to handle image upload
  const handleImageUpload = (e) => {
    setUploadedImage(e.target.files[0]);
    setPredictionResult(null);
    setIsLoading(false);
  };

  // Function to handle prediction with a 5-second delay
  const handlePredict = () => {
    if (!uploadedImage) return; // Ensure the user has uploaded an image
    setIsLoading(true);
    setPredictionResult(null);

    setTimeout(() => {
      const result = {
        modelAccuracy: activeTab === "fruitStage" ? "95.41%" : "92.34%",
        prediction:
          activeTab === "fruitStage"
            ? "Predicted Stage: Ripe"
            : "Predicted Disease: Tomato Early Blight",
      };
      setPredictionResult(result);
      setIsLoading(false);
    }, 5000);
  };

  return (
    <div className="p-6">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
        Image Prediction
      </h1>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => handleTabSwitch("fruitStage")}
          className={`px-6 py-2 rounded-l border ${
            activeTab === "fruitStage"
              ? "bg-green-700 text-white"
              : "bg-white text-green-700 border-green-700"
          } transition-all duration-300`}
        >
          Fruit Stage
        </button>
        <button
          onClick={() => handleTabSwitch("leafDisease")}
          className={`px-6 py-2 rounded-r border ${
            activeTab === "leafDisease"
              ? "bg-green-700 text-white"
              : "bg-white text-green-700 border-green-700"
          } transition-all duration-300`}
        >
          Leaf Disease Prediction
        </button>
      </div>

      {/* Upload Box */}
      <div className="flex justify-center items-center">
        <label
          className="w-80 h-80 border-2 border-dashed border-green-700 rounded-lg flex flex-col justify-center items-center hover:shadow-md hover:bg-gray-50 transition-all cursor-pointer"
          htmlFor="file-upload"
        >
          {uploadedImage ? (
            <div className="text-center">
              <img
                src={URL.createObjectURL(uploadedImage)}
                alt="Uploaded"
                className="w-40 h-40 object-cover rounded-lg mb-2"
              />
              <p className="text-gray-600 text-sm">{uploadedImage.name}</p>
            </div>
          ) : (
            <>
              <FaCloudUploadAlt className="text-green-700 text-6xl mb-4" />
              <p className="text-gray-800 font-semibold mb-2">
                Click to upload an image
              </p>
              <p className="text-sm text-gray-500">
                (or drag and drop an image here)
              </p>
            </>
          )}
        </label>
        {/* Hidden input element for file upload */}
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>

      {/* Predict Button */}
      {uploadedImage && !isLoading && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handlePredict}
            className="bg-green-700 text-white px-10 py-3 rounded-lg hover:bg-green-600 transition-all text-lg shadow-lg"
          >
            Predict
          </button>
        </div>
      )}

      {/* Loader */}
      {isLoading && (
        <div className="flex justify-center mt-6">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-600 border-opacity-75"></div>
        </div>
      )}

      {/* Result Card */}
      {predictionResult && !isLoading && (
        <div className="mt-6 bg-white shadow-md rounded p-6 text-center mx-auto max-w-lg">
          <h2 className="text-xl font-bold text-green-800 mb-2">
            Prediction Result
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            Model Accuracy: {predictionResult.modelAccuracy}
          </p>
          <p className="text-lg text-gray-700">{predictionResult.prediction}</p>
        </div>
      )}
    </div>
  );
};

export default PredictionPage;

import React, { useState } from "react";
import '../styles/custom.css';  // Import the custom CSS file
import actaraImage from '../assets/Ripe-Actara.png';
import amritsarTopImage from '../assets/Ripe-Amritsar Top.png';
import earlyBlightImage from '../assets/Tomato Early Blight-Score.png';
import ridomilGoldImage from '../assets/Tomato Healthy-Ridomil Gold.png';
import spiderMiteImage from '../assets/Tomato Spider Mite-Pegasus.png';

// Product array remains the same as before...
const products = [
  { id: 101, name: "Ampligo Insecticide", price: "₹350", image: amritsarTopImage, description: "A broad-spectrum insecticide for controlling pests in various crops." },
  { id: 102, name: "Actara Insecticide", price: "₹450", image: actaraImage, description: "Effective against a wide range of sucking insects, providing long-lasting protection." },
  { id: 103, name: "Ridomil Gold Fungicide", price: "₹500", image: ridomilGoldImage, description: "Protects crops from root and collar rot with systemic action." },
  { id: 104, name: "Matador Insecticide", price: "₹400", image: earlyBlightImage, description: "Controls various chewing and sucking pests in a wide range of crops." },
  { id: 105, name: "Amritsar Top Tomato", price: "₹380", image: amritsarTopImage, description: "High-yielding variety of tomato, resistant to various blights." },
  { id: 106, name: "Tomato Early Blight", price: "₹420", image: earlyBlightImage, description: "Effective fungicide to manage early blight in tomatoes." },
  { id: 107, name: "Tomato Spider Mite", price: "₹470", image: spiderMiteImage, description: "Controls spider mites on tomato plants, ensuring healthy crops." },
  { id: 108, name: "Ampligo Insecticide", price: "₹350", image: actaraImage, description: "A solution for controlling pests in field and horticultural crops." },
  { id: 109, name: "Ridomil Gold Fungicide", price: "₹510", image: ridomilGoldImage, description: "Prevents diseases like downy mildew in crops." },
  { id: 110, name: "Matador Insecticide", price: "₹430", image: "../assets/matador-image.png", description: "Provides broad-spectrum control for various crop pests." },
  { id: 111, name: "Amritsar Top Tomato", price: "₹390", image: amritsarTopImage, description: "Top-quality tomatoes that resist early-stage diseases." },
  { id: 112, name: "Tomato Healthy Ridomil", price: "₹500", image: ridomilGoldImage, description: "Fungicide designed for healthy tomato crops, preventing blight." },
  { id: 113, name: "Spider Mite Control", price: "₹460", image: spiderMiteImage, description: "Prevents and controls spider mites for healthy tomato plants." },
  { id: 114, name: "Actara Insecticide", price: "₹470", image: actaraImage, description: "Effective control of aphids and whiteflies in various crops." },
  { id: 115, name: "Ampligo Insecticide", price: "₹390", image: actaraImage, description: "Targets multiple pests like caterpillars and beetles." },
  { id: 116, name: "Ridomil Gold Fungicide", price: "₹520", image: ridomilGoldImage, description: "Specially designed for soil-borne disease management." },
  { id: 117, name: "Matador Insecticide", price: "₹440", image: "../assets/matador-image.png", description: "Works effectively on beetles, caterpillars, and other pests." },
  { id: 118, name: "Amritsar Top Tomato", price: "₹400", image: amritsarTopImage, description: "Disease-resistant tomato variety for high productivity." },
  { id: 119, name: "Tomato Early Blight", price: "₹510", image: earlyBlightImage, description: "Provides protection against early blight in tomatoes." },
  { id: 120, name: "Tomato Spider Mite", price: "₹480", image: spiderMiteImage, description: "Effectively controls tomato spider mites for healthier plants." },
];

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-10">Product List</h1>
      
      <div className="product-grid">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="flex justify-center mb-5">
              <img src={product.image || '../assets/placeholder.png'} alt={product.name} className="product-image" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="read-more-btn mt-4">Read More</button>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>

        <span className="mx-5 text-xl font-semibold text-gray-700">Page {currentPage}</span>

        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage * itemsPerPage >= products.length}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
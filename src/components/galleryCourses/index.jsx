import { useState } from "react";
import IntroductionToGenerativeAILearning from "../../images/coursesCertifications/Google-IntroductionToGenerativeAILearning.jpg";
import MachineLearningWithPython from "../../images/coursesCertifications/IBM-MachineLearningWithPython.jpg";
import ArtificialIntelligenceAnOverview from "../../images/coursesCertifications/PolitecnicoMilano-ArtificialIntelligenceAnOverview.jpg";
import "./styles.css";

const images = [
  { 
    name: "Google - Introduction to Generative AI Learning Path", 
    image: IntroductionToGenerativeAILearning, 
    linkCourse: "https://coursera.org/share/710cd6a7e0a2dde2ef8616b18c6e041a" 
  },
  { 
    name: "IBM - Machine Learning with Python", 
    image: MachineLearningWithPython, 
    linkCourse: "https://coursera.org/share/9e007a2322483685dd905d8cb2fa699f" 
  },
  { 
    name: "Politecnico Milano - Artificial Intelligence: an Overview", 
    image: ArtificialIntelligenceAnOverview, 
    linkCourse: "https://coursera.org/share/0e1ac9b958fa8be7cfcc97a9c42e6da3" 
  },
  
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(images[0].image);
  const [selectedLink, setSelectedLink] = useState(images[0].linkCourse);

  const handleClick = (image) => {
    setSelectedImage(image.image);
    setSelectedLink(image.linkCourse);
  };
  
  return (
    <div className="gallery-container">
      <div className="image-list">
        {images.map((image, index) => (
          <button
            key={index}
            className={`image-button ${selectedImage === image.image ? 'active' : ''}`}
            onClick={() => handleClick(image)}
          >
            {image.name}
          </button>
        ))}
      </div>
    <div className="image-container">
      <div className="image-display">
        <a 
          href={selectedLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="image-link"
          style={{ boxShadow: '0px 0px 0px' }}
        >
          <img 
            src={selectedImage} 
            alt="Imagem Selecionada" 
            loading="eager" 
            className="gallery-image"
          />
          <div className="image-overlay">
            <span>View Certificate</span>
          </div>
        </a>
      </div>
    </div>
  </div>
  );
}
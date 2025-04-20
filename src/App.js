// filepath: c:\Users\Hp\OneDrive\Desktop\Image Gallery\image_gallery\src\App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import '../src/index.css'; // Import your CSS file for styling

  const images = [
    {
      src: 'image1.jpg',
      title: 'Masjid al-Haram – Mecca, Saudi Arabia',
      description: 'The largest and holiest mosque in Islam, surrounding the Kaaba, where millions gather during Hajj.',
    },
    {
      src: 'image2.jpg',
      title: 'Al-Masjid an-Nabawi – Medina, Saudi Arabia',
      description: 'The Prophet Muhammad’s (PBUH) mosque and resting place, known for its green dome and spiritual significance.',
    },
    {
      src: 'image3.jpg',
      title: 'Al-Aqsa Mosque – Jerusalem, Palestine',
      description: 'The third holiest mosque in Islam, located in the Old City of Jerusalem with deep historical and spiritual roots.',
    },
    {
      src: 'image4.jpg',
      title: 'Sultan Ahmed Mosque (Blue Mosque) – Istanbul, Turkey',
      description: 'Famous for its blue tiles and six minarets, a masterpiece of Ottoman architecture.',
    },
    {
      src: 'image5.jpg',
      title: 'Sheikh Zayed Grand Mosque – Abu Dhabi, UAE',
      description: 'A modern architectural wonder made of white marble with stunning domes and chandeliers.',
    },
    {
      src: 'image6.jpg',
      title: 'Hassan II Mosque – Casablanca, Morocco',
      description: 'Built partly over the Atlantic Ocean, it features the world’s tallest minaret.',
    },
    {
      src: 'image7.jpg',
      title: 'Faisal Mosque – Islamabad, Pakistan',
      description: 'A unique mosque with a contemporary design, inspired by a desert tent, and backed by the Margalla Hills.',
    },
    {
      src: 'image8.jpg',
      title: 'Putra Mosque – Putrajaya, Malaysia',
      description: 'Known for its pink dome and elegant design, blending modern and traditional Islamic architecture.',
    },
    {
      src: 'image9.jpg',
      title: 'Nasir al-Mulk Mosque – Shiraz, Iran',
      description: 'Also called the Pink Mosque, famous for its colorful stained-glass windows that create magical light patterns.',
    },
    {
      src: 'image10.jpg',
      title: 'Wazir Khan Mosque – Lahore, Pakistan',
      description: 'A 17th-century gem with intricate tile work and stunning frescoes, built during the Mughal era.',
    },
    {
      src: 'image11.jpg',
      title: 'Great Mosque of Córdoba – Córdoba, Spain',
      description: 'Originally a mosque and now a cathedral, it showcases an incredible mix of Islamic and Christian architecture.',
    },
    {
      src: 'image12.jpg',
      title: 'Crystal Mosque – Kuala Terengganu, Malaysia',
      description: 'A modern mosque made from glass and steel, reflecting beautifully over the water.',
    },
];

const Header = () => (
  <header className="header">
    <h1><a href="/" className="header-link">Image Gallery</a></h1>
    <p>Explore the beauty of Islamic architecture around the world</p>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2025 Image Gallery. All rights reserved.</p>
  </footer>
);

const ImageGallery = () => {
  const navigate = useNavigate();

  const handleImageClick = (img) => {
    navigate(`/image/${img.src}`, { state: img });
  };

  return (
    <div className="background">
      <Header />
      <div className="gallery-container">
        {images.map((img, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => handleImageClick(img)}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/Images/${img.src}`}
              alt={img.title}
            />
            <div className="gallery-info">
              <h3>{img.title}</h3>
              <p>{img.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

const ImageDetails = ({ location }) => {
  const { state: img } = location;

  if (!img) {
    return <p>Image not found!</p>;
  }

  return (
    <div className="image-details">
      <Header />
      <div className="image-fullscreen">
        <img
          src={`${process.env.PUBLIC_URL}/Images/${img.src}`}
          alt={img.title}
        />
        <h3>{img.title}</h3>
        <p>{img.description}</p>
      </div>
      <Footer />
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ImageGallery />} />
      <Route path="/image/:id" element={<ImageDetails />} />
    </Routes>
  </Router>
);

export default App;
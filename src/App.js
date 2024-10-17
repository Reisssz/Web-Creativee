import './App.css';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Componente do carrossel
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          // Habilita a reprodução automática
    autoplaySpeed: 2800,     // Tempo de transição entre slides (em milissegundos)
    customPaging: (i) => (
      <div style={{
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        backgroundColor: '#f1f1f1', // Cor da bolinha
        border: '1px solid #fff', // Borda da bolinha
        margin: '0 5px',
        cursor: 'pointer',
      }} />
    ),
    appendDots: (dots) => (
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo dos dots
        borderRadius: '5px',
      }}>
        <ul style={{ margin: '0' }}> {dots} </ul>
      </div>
    )
  };

  return (
    <div style={{ width: '90%', margin: 'auto' }}>
      <Slider {...settings}>
        <div>
          <img src="bg.png" alt="Imagem 1" style={{ width: '100%' }} />
        </div>
        <div>
          <img src="bg2.png" alt="Imagem 2" style={{ width: '100%' }} />
        </div>
        <div>
          <img src="bg3.png" alt="Imagem 3" style={{ width: '100%' }} />
        </div>
      </Slider>
    </div>
  );
};

// Componente principal App
function App() {
  return (
    <div className="App">
      <header className="header">
        <img className="logo" src="logo.png" width="118px" alt="Logo" />
        <div className='neon-text'>SERVIR POR ALGO MAIOR</div>
        <img className="logo2" src="lagoinha.png" width="130px" alt="Logo2" />
      </header>
      <Carousel /> {/* Incluindo o carrossel no App */}
      <h1>ESCALAS</h1>
    </div>
  );
}

export default App;

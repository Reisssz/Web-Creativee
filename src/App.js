// Importando estilos e bibliotecas necessárias
import './App.css'; // Importa o CSS para estilização
import React from 'react'; // Importa o React
import Slider from 'react-slick'; // Importa o componente Slider da biblioteca react-slick
import "slick-carousel/slick/slick.css"; // Estilos para o carrossel
import "slick-carousel/slick/slick-theme.css"; // Temas do carrossel

// Componente do carrossel
const Carousel = () => {
  // Configurações do carrossel
  const settings = {
    dots: true, // Habilita os pontos de navegação
    infinite: true, // Permite rolagem infinita
    speed: 1500, // Velocidade de transição
    slidesToShow: 1, // Número de slides a serem mostrados
    slidesToScroll: 1, // Número de slides a serem rolados
    autoplay: true, // Habilita a reprodução automática
    autoplaySpeed: 2800, // Tempo de transição entre slides (em milissegundos)
  };

  return (
    // Contêiner do carrossel
    <div style={{ width: '90%', margin: 'auto' }}>
      <Slider {...settings}> {/* Aplica as configurações ao Slider */}
        <div>
          <img src="bg.png" alt="Imagem 1" style={{ width: '100%' }} /> {/* Slide 1 */}
        </div>
        <div>
          <img src="bg2.png" alt="Imagem 2" style={{ width: '100%' }} /> {/* Slide 2 */}
        </div>
        <div>
          <img src="bg3.png" alt="Imagem 3" style={{ width: '100%' }} /> {/* Slide 3 */}
        </div>
      </Slider>
    </div>
  );
};

// Componente principal App
function App() {
  return (
    <div className="App"> {/* Contêiner principal */}
      <header className="header"> {/* Cabeçalho da aplicação */}
        <img className="logo" src="logo.png" width="118px" alt="Logo" /> {/* Logo principal */}
        <div className='neon-text'>SERVIR POR ALGO MAIOR</div> {/* Texto em neon */}
        <img className="logo2" src="lagoinha.png" width="120px" alt="Logo2" /> {/* Segundo logo */}
      </header>

      <Carousel /> {/* Incluindo o carrossel no App */}

      <h1>CULTOS</h1> {/* Título da seção */}

      <div className="content"> {/* Contêiner para os boxes de culto */}
        <div className='box1'>
          <div className='text-box'>WORSHIP NIGHT</div> {/* Box 1 com texto */}
        </div>
        <div className='box2'>
          <div className='text-box'>CULTO FÉ</div> {/* Box 2 com texto */}
        </div>
        <div className='box3'>
          <div className='text-box'>CULTO LEGACY</div> {/* Box 3 com texto */}
        </div>
      </div>
    </div>
  );
}

export default App; // Exporta o componente App como padrão

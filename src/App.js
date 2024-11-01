// Importando estilos e bibliotecas necessárias
import './App.css'; // Importa o CSS para estilização
import Header from './components/header';
import Cultos from './components/cultos';
import Sobre from './components/sobre';
import Footer from './components/footer';
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

      <Header />  {/* Incluindo o header no App */}
      <Carousel /> {/* Incluindo o carrossel no App */}
      <Cultos />  {/* Incluindo os cultos no App */}
      <Sobre /> {/* Incluindo o sobre no App */}
      <Footer />  {/* Incluindo o footer no App */}

    </div>

  );
}

export default App; // Exporta o componente App como padrão

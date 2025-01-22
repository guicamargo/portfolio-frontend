import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

// Hook para receber o estado de tema (deve ser conectado ao seu contexto de tema real)
const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Verifica se o <body> possui a classe "dark"
    const checkDarkMode = () => {
      setIsDarkMode(document.body.classList.contains("dark"));
    };

    // Chama a verificação inicial
    checkDarkMode();

    // Adiciona um MutationObserver para observar alterações no atributo de classe do <body>
    const observer = new MutationObserver(() => {
      checkDarkMode();
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    // Cleanup do observer quando o componente desmontar
    return () => {
      observer.disconnect();
    };
  }, []);

  return isDarkMode;
};

const ParticlesComponent = (props) => {
  const isDarkMode = useDarkMode(); // Obtenha o estado do tema
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  // Alterando as opções dinamicamente com base no tema
  const options = useMemo(() => {
    return {
      background: {
        color: {
          value: isDarkMode ? "#000000" : "#cecece", // Cor de fundo
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "repulse",
          },
          onHover: {
            enable: false,
            mode: "grab",
          },
        },
      },
      particles: {
        color: {
          value: isDarkMode ? "#ffffff" : "#000000", // Cor das partículas
        },
        links: {
          color: isDarkMode ? "#ffffff" : "#000000", // Cor das conexões
          distance: 150,
          enable: true,
          opacity: 0.8,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 2,
          straight: true,
        },
        number: {
          density: {
            enable: true,
          },
          value: 350,
        },
        opacity: {
          value: 0.8,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    };
  }, [isDarkMode]); // Dependência no tema

  return (
    <Particles
      id={props.id}
      init={particlesLoaded}
      options={options} // Passa as opções dinamicamente
    />
  );
};

export default ParticlesComponent;

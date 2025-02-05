import React from 'react';
import './styles.css'; // Importe o arquivo CSS

const datas = [
  {
    key: "frontend",
    name: "FrontEnd",
    description: "O desenvolvimento FrontEnd envolve a criação da interface do usuário, utilizando tecnologias como HTML, CSS e JavaScript para garantir uma experiência interativa e responsiva.",
    link: "#frontend",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" // Ícone de FrontEnd
  },
  {
    key: "backend",
    name: "BackEnd",
    description: "O desenvolvimento BackEnd foca na lógica do servidor, banco de dados e integrações, utilizando linguagens como Python, Java, Node.js e frameworks como Django e Spring.",
    link: "#backend",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919853.png" // Ícone de BackEnd
  },
  {
    key: "aieml",
    name: "Ai & ML",
    description: "Inteligência Artificial e Machine Learning envolvem a criação de modelos preditivos, processamento de linguagem natural e visão computacional, utilizando frameworks como TensorFlow e PyTorch.",
    link: "#aieml",
    icon: "https://cdn-icons-png.flaticon.com/512/2103/2103655.png" // Ícone de AI/ML
  },
  {
    key: "servicos",
    name: "Serviços",
    description: "Oferecemos serviços completos de desenvolvimento, desde consultoria até a implementação de soluções personalizadas para atender às necessidades do seu negócio.",
    link: "#servicos",
    icon: "https://cdn-icons-png.flaticon.com/512/3067/3067511.png" // Ícone de Serviços
  }
];

const App = () => {
  return (
    <div className="scene">
      <div className="left-zone">
        <ul className="list">
          {datas.map((item) => (
            <li className="item" key={item.key}>
              <input
                type="radio"
                id={`radio_${item.key}`}
                name="basic_carousel"
                value={item.name}
                defaultChecked={item.key === "frontend"}
              />
              <label htmlFor={`radio_${item.key}`} className={`label label_${item.key}`}>
                {item.name}
              </label>
              <div className={`content content_${item.key}`}>
                <span className="picto"></span>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">Saiba mais</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="middle-border"></div>
      <div className="right-zone"></div>
    </div>
  );
};

export default App;
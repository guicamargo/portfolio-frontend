# Portfolio Frontend - Guilherme Camargo

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![i18n](https://img.shields.io/badge/i18n-Multi--language-green)](https://react.i18next.com/)

## 📋 Sobre o Projeto

Portfolio profissional desenvolvido para apresentar minha transição de **Desenvolvedor Full-Stack** para **DevOps/DevSecOps Engineer**. O projeto demonstra não apenas habilidades de frontend, mas também práticas modernas de desenvolvimento e preparação para evolução com CI/CD, containerização e cloud deployment.

🔗 **Deploy:** [guilherme-portfolio-frontend.vercel.app](https://guilherme-portfolio-frontend.vercel.app/)

## ✨ Features

- 🎨 **Interface Moderna**: Design responsivo e intuitivo
- 🌓 **Dark Mode**: Alternância entre temas claro e escuro
- 🌍 **Multi-idioma**: Suporte para Português e Inglês (i18n)
- 📱 **Responsivo**: Adaptado para desktop, tablet e mobile
- ⚡ **Performance**: Otimizado para Core Web Vitals
- 🎯 **Navegação Fluida**: Scroll suave entre seções
- 📧 **Formulário de Contato**: Integração funcional

## 🏗️ Arquitetura

```
src/
├── components/           # Componentes reutilizáveis
│   ├── SectionsHome/    # Seções da página principal
│   │   ├── Section1-About/
│   │   ├── Section3-WorkExperience/
│   │   ├── Section4-Education/
│   │   ├── Section5-Courses/
│   │   ├── Section6-Portfolio/
│   │   └── Section8-Contact/
│   ├── Header/
│   ├── NavigationButtons/
│   ├── ScrollToTopButton/
│   └── ThemeToggle/
├── context/             # Contextos React (Theme, Auth)
├── i18n/               # Configurações de internacionalização
├── layouts/            # Layouts da aplicação
├── pages/              # Páginas (Home, NotFound)
├── routes/             # Configuração de rotas
└── App.jsx             # Componente raiz
```

## 🚀 Tecnologias

### Core
- **React 18** - Biblioteca UI
- **React Router DOM** - Roteamento SPA
- **Vite** - Build tool e dev server

### Styling & UI
- **CSS3** - Estilização customizada
- **CSS Modules** - Escopo local de estilos
- **Responsive Design** - Mobile-first approach

### Funcionalidades
- **react-i18next** - Internacionalização
- **React Context API** - Gerenciamento de estado global
- **React Hooks** - useState, useEffect, useContext, useLocation

### Instalação

```bash
# Clone o repositório
git clone https://github.com/guicamargo/portfolio-frontend.git

# Acesse a pasta
cd portfolio-frontend

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

O projeto estará disponível em `http://localhost:5173`

## 📦 Scripts Disponíveis

```json
{
  "dev": "vite",                    // Servidor de desenvolvimento
  "build": "vite build",            // Build de produção
  "preview": "vite preview",        // Preview da build
  "lint": "eslint src"              // Análise de código
}
```

## 🎯 Roadmap DevOps

Este projeto está em evolução para se tornar uma aplicação **production-ready** com práticas DevOps:

### ✅ Implementado
- [x] Estrutura modular e componentizada
- [x] Separação de responsabilidades
- [x] Build otimizado com Vite
- [x] Deploy automatizado (Vercel)
- [x] Responsive design

### 🚧 Em Desenvolvimento
- [ ] **CI/CD Pipeline** com GitHub Actions
  - Testes automatizados
  - Linting e formatação
  - Build e deploy automatizado
  
- [ ] **Containerização**
  - Dockerfile multi-stage
  - Docker Compose para desenvolvimento
  - Registry de imagens (GHCR/ECR)

- [ ] **Cloud Deployment**
  - Deploy em GCP (Cloud Run/GKE)
  - CDN para assets estáticos
  - SSL/TLS automatizado

- [ ] **Observabilidade**
  - Métricas de performance
  - Error tracking
  - Analytics

- [ ] **Infrastructure as Code**
  - Terraform para provisionamento
  - Configurações versionadas

## 📚 Seções do Portfolio

1. **About Me** - Apresentação e objetivos profissionais
2. **Work Experience** - Histórico profissional
3. **Education** - Formação acadêmica (UEPG + FIAP Pós Tech)
4. **Courses & Certifications** - Cursos e certificações
5. **Portfolio** - Projetos destacados
6. **Contact** - Formulário de contato

## 👤 Autor

**Guilherme Camargo**

- 🎓 Engenheiro de Computação (UEPG)
- 📚 Pós-Graduando em DevOps e Arquitetura Cloud (FIAP)
- 💼 Full-Stack Developer → DevOps/DevSecOps Engineer
---

⭐ Se este projeto te ajudou de alguma forma, considere dar uma estrela!

**Status:** 🚀 Em evolução constante

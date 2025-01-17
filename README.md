# To Do
### **1. Configuração Inicial com Vite**  
1. Crie o projeto React usando Vite:  
   ```bash
   npm create vite@latest ml-portfolio-frontend --template react
   ```  

2. Instale as dependências:  
   ```bash
   npm install react-router-dom redux react-redux @reduxjs/toolkit axios react-i18next react-google-login styled-components
   ```  

3. Estruture as pastas do projeto:  
   ```
   src/
   ├── components/       # Componentes reutilizáveis
   ├── pages/            # Páginas da aplicação
   ├── store/            # Configuração do Redux
   ├── hooks/            # Hooks personalizados
   ├── styles/           # Arquivos de estilo globais
   ├── services/         # Serviços para consumo de APIs
   └── i18n/             # Configurações de internacionalização
   ```  

4. Configure as rotas com React Router.  

---

### **2. Funcionalidades Básicas**  

#### **2.1. Autenticação Interna**  
- Criar um formulário de login e registro com:  
  - Campos de email e senha.  
  - Validação de formulário.  
  - Integração com a API para autenticação JWT.  
- Implementar logout seguro.  

#### **2.2. Autenticação via Google**  
- Configurar o OAuth do Google no console da API.  
- Criar o botão "Login com Google" usando a biblioteca `react-google-login`.  
- Testar o fluxo de autenticação e verificar tokens recebidos.  

---

### **3. Tema e Personalização**  

#### **3.1. Dark Mode**  
- Implementar um botão toggle para alternar entre temas claro e escuro.  
- Usar `styled-components` para estilização dinâmica baseada no tema.  
- Salvar a preferência do usuário no `localStorage`.  

#### **3.2. Multi-idioma**  
- Configurar a biblioteca `react-i18next`.  
- Criar arquivos de tradução (por exemplo: `en.json`, `pt.json`).  
- Adicionar um seletor de idiomas no cabeçalho ou no menu de configurações.  

---

### **4. Sessões e Páginas**  

#### **4.1. Sessão de Informações Pessoais e Objetivos**  
- Criar um componente que exibe:  
  - Nome, profissão, e uma breve descrição pessoal.  
  - Objetivos profissionais relacionados ao portfólio.  

#### **4.2. Sessão de Formação**  
- Listar formações acadêmicas, incluindo:  
  - Curso.  
  - Instituição.  
  - Ano de conclusão.  

#### **4.3. Sessão de Cursos e Certificados**  
- Exibir os cursos e certificações relacionados a Machine Learning, Cloud e desenvolvimento.  
- Permitir a expansão de detalhes sobre cada curso.  

#### **4.4. Sessão de Contatos**  
- Adicionar links para redes sociais (LinkedIn, GitHub, etc.).  
- Criar um formulário para envio de mensagens (com integração futura à API).  

#### **4.5. Sessões Explicativas**  
- **Frontend**: Explicar como foi construído o frontend, incluindo:  
  - Tecnologias usadas (React, Redux, Axios, etc.).  
  - Funcionalidades (autenticação, dark mode, multi-idioma).  
- **Backend**:  
  - Explicar como funciona o backend, incluindo a autenticação JWT e interação com o banco de dados PostgreSQL.  
- **Serviço de ML**:  
  - Descrever o fluxo de processamento, desde a entrada dos dados até a predição.  
- **Orquestração**:  
  - Explicar como os serviços foram integrados com Docker Compose e onde estão hospedados.
    
#### **4.6. Sessão para interagir com ml**  
- Adicionar aplicações e exemplos com contextos, datasets e campos para que user envie uma chamada e o sistema traga uma resposta  
  ├── Regressão Linear: Simples e multivariada.
  
  ├── Regressão Logística.
  
  ├── Classificação: Árvores de Decisão, Random Forests, Support Vector Machines (SVM), K-Nearest Neighbors (KNN).
  
  ├── Agrupamento (Clustering): K-Means
---

### **5. Comunicação com a API**  
- Configurar a base URL usando `axios`.  
- Criar serviços para consumir os endpoints do backend, como:  
  - Login e registro.  
  - Recuperação de dados pessoais.  
  - Envio de valores para o modelo de ML.  
  - Recebimento de predições e exibição no frontend.  

---

### **6. Estilo e Responsividade**  
1. Criar um layout responsivo usando **CSS Grid** e **Flexbox**.  
2. Testar em diferentes dispositivos usando ferramentas como o Chrome DevTools.  
3. Implementar media queries para suportar telas pequenas (smartphones) e grandes (desktops).  

---

### **7. Testes e Validação**  
1. Testar todas as funcionalidades em um ambiente local.  
2. Configurar testes unitários com **Jest** e testes de integração com **React Testing Library**.  
3. Garantir que todos os fluxos de autenticação e consumo de APIs funcionem corretamente.  

---

### **8. Deploy no Vercel**  
1. Configurar o projeto para produção:  
   ```bash
   npm run build
   ```  
2. Subir o projeto para o Vercel, vinculando ao repositório GitHub.  
3. Testar a aplicação em produção para identificar problemas.  

---

### **Extras Importantes**  
- Adicionar animações e transições sutis para melhorar a experiência do usuário.  
- Criar um log de erros no frontend para capturar falhas durante as requisições.  
- Documentar cada componente e suas funcionalidades no código.  

---



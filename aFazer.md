# WebChat - MVP

## Aula 1 - Introdução

- Mostrar produto final
- Aprendizado
  - React
  - Hooks (useState, useEffect, useRef, useContext - Gerencialmento de Estados)
  - Autenticação
- Principais tecnologias: React (Frontend) e Firebase(backend)

## Aula 2 - Tech Stack

- Next.js
- React
- HTML
- CSS
- JavaScript
- Material UI
- Firebase
- VS Code
  - Mostrar extensões (do Prettier mostrar lá na preferência como altera)

## Aula 3 - Iniciando Repositório

- [ ] Criar novo Next.js boilerplate
- [ ] Retirar código desnecessário
  - pages/Api
  - CSS
- [ ] Converter para TypeScript
- Prettier
  - [ ] Baixar pacote
  - [ ] .prettierrc.json
  - [ ] .prettierignore

## Aula 4 - Instalando Material UI

- [ ] Baixar pacotes (core, icons, lab)
- [ ] Renderizar um componente de cada
- Adaptar para o Next.js
  - [ ] Criar \_document.tsx
  - [ ] Adaptar \_document.tsx com o modelo do material ui
  - [ ] Copiar o theme
- [ ] Renderizar um componente de cada
- [ ] Botar o CSS Baseline no \_app.tsx

## Aula 5 - Criando e conectando um projeto do Firebase

- [ ] Criar projeto no Firebase console
- [ ] Liberar autenticação por e-mail
- [ ] Baixar pacotes (firebase, firebase-react-hooks)
- [ ] Configurar firebase (e criar o objeto de autenticação)
- Teste
  - [ ] Colocar o auth-hook no componente
  - [ ] Criar um botão com função de criar usuário com email e senha

## Aula 6 - Escondendo as Chaves API e Deploy

- [ ] Criar arquivo .env.local
- [ ] Criar arquivo next.config.js
- [ ] Alterar firebaseConfig
- [ ] Alterar o email para criar novo usuário ao clicar
- [ ] Logar na Vercel
- [ ] Encontrar projeto
- [ ] Cadastrar variáveis de ambiente
- [ ] Deploy e teste (clicando no mesmo botão de criar usuário)

## Aula 7 - Criando Página do Chat e Workflow de Autenticação

- [ ] Criar componente no Next.js
- [ ] Colocar o auth e logout hook e no componente
- [ ] Botar o logout em um botão
- [ ] Verificar se o alguém está Logado (e o loading)
- [ ] Em caso negativo, redirecionar para a HomePage (next/useRouter)
- [ ] Fazer o análogo na HomePage: Se tiver logado, encaminhar pra página Chat
- Testar
  - [ ] Logar na home page - Vai pra página Chat
  - [ ] Desloga na /chat - Vai pra homepage
  - [ ] Na home page deslogado, vai pra /chat - É direcinado para homepage

## Aula 7 - Criando HomePage

- [ ] Pegar uma outra fonte no google fonts (para Logo)
- [ ] Inserir no \_document
- [ ] run dev
- [ ] AppBar
- [ ] Body pegando toda a altura da janela
- [ ] Incluir texto e botão para logar com Google (incluindo o texto novo)
- [ ] Incluir vídeo

## Aula 8 - Autenticação pelo Google

- [ ] Incluir no firebaseConfig o provedor de autenticação
- [ ] Criar o signInWithPopup (sem ser inline lá no botão)
- [ ] Excluir usuários antigos
- [ ] Retirar validação por e-mail

## Aula 9 - Página /chat - Gravando dados relevantes no banco de dados

- [ ] Criar Firestore no console
- [ ] Incluir no firebaseConfig a variável do banco de dados
- [ ] Usar o firebase-hooks para gravar um documento no banco de dados com as informações relevantes do usuário (nome e foto de perfil)

## Aula 10 - Montando Layout da Página de Chat

- [ ] Pegar Drawer fixo do exemplo do material UI
- Fazer as adaptações
  - [ ] Componente com Avatar com um botão de + para adicionar conversa
  - [ ] Outro componente para a lista de itens de chat

## Aula 10 - Usuário do chat

- [ ] Incluir na coleção das informações do usuário uma array com chats e colocar na mão o uid de um outro usuário do sistema
- [ ] Criar um componente que pega esses dados utlizando o firebase-hooks
- [ ] Mostrar esse dado na tela
- [ ] Montar um componente para pegar os dados desse outro usuário
- [ ] Mostrar esse dado na tela
- [ ] Popular o banco de dados com uns 3 chats para testar

## Aula 11 - Criar chat

- [ ] Ao clicar no botão de criar chat, listar todas as pessoas com nome e foto
- Quando clicar no item, verifica se já não há uma conversa, senão gravar no bd:
  - [ ] Do usuário atual: Na array com os chats, incluir o uid do outro usuário
  - [ ] Do outro usuário: Na array com chats incluir o uid do usuário atual
  - [ ] Bota os dois uid em ordem alfabética, e cria um registro em uma nova coleção chamada chats, e o id do registro é uid-uid

## Aula 12 - Criar o Chat Atual Context

- [ ] Cria o context
- [ ]

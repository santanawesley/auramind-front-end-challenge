# Desafio Técnico de Front-End Pleno

Bem-vindo ao desafio técnico para a posição de Front-End Pleno na Auramind! Este desafio tem como objetivo avaliar suas habilidades em desenvolvimento front-end utilizando Next.js, TypeScript, e testes unitários.

## Objetivo

Criar uma aplicação de chat que simula a interação com uma IA, utilizando Next.js e dados locais. O chat deve permitir a troca de mensagens entre o usuário e uma IA simulada, armazenando as mensagens no estado local da aplicação.

## Funcionalidades

- Exibir uma interface de chat com áreas de conversa para o usuário e a IA.
- Permitir que o usuário envie mensagens.
- A IA deve responder automaticamente com uma mensagem fixa (não haverá acesso a API externa).
- As conversas devem ser persistidas localmente (por exemplo, utilizando localStorage ou IndexedDB) para que não sejam perdidas ao recarregar a página.
- Utilizar sessões para identificar e gerenciar conversas distintas.
- Utilizar Chakra UI para estilização da interface.
- Utilizar Framer Motion para animações das mensagens.
- Escrever testes unitários para os componentes principais utilizando Jest e React Testing Library.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Framer Motion](https://www.framer.com/motion/)

## Organização do Projeto

Você é livre para organizar o projeto como achar melhor, mas recomendamos seguir a abordagem Atomic Design.

## Instruções para Configuração Inicial

1. **Inicialize o projeto Next.js com TypeScript:**
    ```bash
    npx create-next-app chat-app --typescript
    cd chat-app
    ```

2. **Instale as dependências:**
    ```bash
    npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
    ```

3. **Configure Chakra UI e Framer Motion conforme necessário.**

4. **Criar Simulador de IA**
    - Crie um arquivo `aiSimulator.ts` na pasta `utils` com a lógica para gerar uma resposta automática fixa da IA.

## Entrega

1. Faça um fork deste repositório e crie uma nova branch com o seu nome.
2. Implemente a solução na sua branch.
3. Abra um Pull Request com a sua solução.

## Critérios de Avaliação

- **Funcionalidade**: Todas as funcionalidades solicitadas estão implementadas corretamente.
- **Qualidade do Código**: O código é limpo, organizado e segue boas práticas de desenvolvimento.
- **Testes Unitários**: Cobertura de testes unitários e qualidade dos testes.
- **Interface do Usuário**: A interface é amigável e responsiva.

## Notas Finais

- Faça commits regulares com mensagens claras.
- Qualquer dúvida sobre o desafio pode ser enviada via e-mail ou através de issues no repositório.

Estamos ansiosos para ver sua solução! Boa sorte!

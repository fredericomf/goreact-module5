# goreact-module5

Lessons about automatized tests

### INICIALIZANDO O PROJETO:

Dessa vez, para inicializar um projeto utilizamos uma ferramenta criada pela comunidade. Essa ferramenta já traz tudo configurado para um projeto React.

1. Vamos instalar a ferramenta de forma global:

```bash
yarn global add create-react-app
```

2. Vamos rodar o comando para criar a aplicação:

```bash
create-react-app goreact-module4
```

---

**O COMENTÁRIO ABAIXO FOI CRIADO PELA FERRAMENTA SUPRACITADA**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

---

## PLUGINS

### ENZYME

Ferramenta do AirBNB que possibilitará fazermos testes na árvore de elementos do React (DOM)

```bash
yarn add enzyme -D
```

NOTA_ESTUDO: As configurações relacionadas à testes ficam na pasta /src/tests
NOTA_ESTUDO: O React busca o arquivo de configurações padrão na pasta /src. Arquivo: setupTests.js (essa configuração não pode ser alterada)

### ENZYME-ADAPTER

Plugin para trabalhar com o Enzyme no React

```bash
yarn add enzyme-adapter-react-16 -D
```

NOTA_ESTUDO: Deve ser instalado na mesma versão que o React do projeto. No nosso caso: 16.
NOTA_ESTUDO: Para rodar os testes:

```bash
yarn test
```

### SINON

É um biblioteca que permite manipularmos funções do nosso código

```bash
yarn add sinon
```

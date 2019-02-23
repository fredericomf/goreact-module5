/**
 * NOTA_ESTUDO: Esse MOCK serve para que nos testes eu possa averiguar o comportamento
 * de componentes que usem o localStorage.
 * Como não podemos acessar o localStorage pelos testes, porque o teste não é rodado no browser,
 * precisamos mockar isso.
 */

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

// NOTA_ESTUDO: Isso aqui não funciona mais. Procurando no goole encontrei a resposta em: https://stackoverflow.com/a/35769110/10824019
// global.localStorage = localStorageMock;

// Forma correta de redefinir o localStorage
Object.defineProperty(window, "localStorage", {
  value: localStorageMock
});

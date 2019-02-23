import React from "react";
import { shallow } from "enzyme";
import TodoList from "../TodoList/index";
import sinon from "sinon";

import createMockStore from "redux-mock-store";

import { Creators as TodosActions } from "../../store/ducks/todos";

const mockStore = createMockStore();
const INITIAL_STATE = {
  todos: [
    { id: 0, text: "Fazer café" },
    { id: 1, text: "Estudar React" },
    { id: 2, text: "Entrar na comunidade" }
  ]
};

const store = mockStore(INITIAL_STATE);

// Agrupando testes por componente usando o 'describe'

describe("TodoList component", () => {
  it("should render todos", () => {
    const wrapper = shallow(<TodoList />, { context: { store } });

    // Procura o componente LI sem precisar ser literal
    expect(wrapper.dive().find("li")).toHaveLength(3); // NOTA_ESTUDO: Quando estamos testando com REDUX implementado, o componente retornado inclui todo o contexto do connect, por isso usamos o 'dive'.
  });

  it("should be able to add new todo", () => {
    const wrapper = shallow(<TodoList />, { context: { store } });

    // NOTA_ESTUDO: O find aceita buscas QueryString como: button#IdDoBotao, button.estiloCss, entre outros.
    wrapper
      .dive()
      .find("button")
      .simulate("click");

    expect(store.getActions()).toContainEqual(
      TodosActions.addTodo("Novo todo")
    );
  });

  it("should be able to remove todo", () => {
    const wrapper = shallow(<TodoList />, { context: { store } });

    wrapper
      .dive()
      .find("li")
      .first()
      .simulate("click");

    expect(store.getActions()).toContainEqual(
      TodosActions.removeTodo(INITIAL_STATE.todos[0].id)
    );
  });

  // NOTA_ESTUDO: Abaixo servia para o mock de localStorage
  // it("should load todos from localStorage", () => {
  //   // NOTA_ESTUDO: Com o 'stub' conseguimos simular o retorno de uma função
  //   sinon.stub(localStorage, "getItem").returns(JSON.stringify(todos)); // Toda vez que o método getItem do localStorage(mockado) for chamado retornaremos um JSON serializado

  //   const wrapper = shallow(<TodoList />);

  //   expect(wrapper.state("todos")).toEqual(todos);
  // });

  // it("should save todos to localStorage when added new todo", () => {
  //   const spy = sinon.spy(localStorage, "setItem");

  //   const wrapper = shallow(<TodoList />);

  //   // NOTA_ESTUDO: Com o instance eu tenho acesso direto à instância do componente TodoList
  //   wrapper.instance().addTodo();

  //   expect(spy.calledOnce).toBe(true);
  // });
});

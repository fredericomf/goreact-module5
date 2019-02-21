import React from "react";
import { shallow } from "enzyme";
import TodoList from "./index";
import sinon from "sinon";

const todos = [
  { id: 0, text: "Fazer café" },
  { id: 1, text: "Estudar ReactJS" },
  { id: 2, text: "Testar minha app" }
];

// Agrupando testes por componente usando o 'describe'

describe("TodoList component", () => {
  it("should render todos", () => {
    const wrapper = shallow(<TodoList />);

    wrapper.setState({ todos });

    // Procura o componente LI sem precisar ser literal
    expect(wrapper.find("li")).toHaveLength(3);
  });

  it("should be able to add new todo", () => {
    const wrapper = shallow(<TodoList />);

    wrapper.setState({ todos });

    // NOTA_ESTUDO: O find aceita buscas QueryString como: button#IdDoBotao, button.estiloCss, entre outros.
    wrapper.find("button").simulate("click");

    expect(wrapper.state("todos")).toHaveLength(4);
  });

  it("should be able to remove todo", () => {
    const wrapper = shallow(<TodoList />);

    wrapper.setState({ todos });

    wrapper
      .find("li")
      .first()
      .simulate("click");

    expect(wrapper.state("todos")).not.toContain(todos[0]);
  });

  it("should load todos from localStorage", () => {
    // NOTA_ESTUDO: Com o 'stub' conseguimos simular o retorno de uma função
    sinon.stub(localStorage, "getItem").returns(JSON.stringify(todos)); // Toda vez que o método getItem do localStorage(mockado) for chamado retornaremos um JSON serializado

    const wrapper = shallow(<TodoList />);

    expect(wrapper.state("todos")).toEqual(todos);
  });

  it("should save todos to localStorage when added new todo", () => {
    const spy = sinon.spy(localStorage, "setItem");

    const wrapper = shallow(<TodoList />);

    // NOTA_ESTUDO: Com o instance eu tenho acesso direto à instância do componente TodoList
    wrapper.instance().addTodo();

    expect(spy.calledOnce).toBe(true);
  });
});

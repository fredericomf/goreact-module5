import SagaTester from "redux-saga-tester";
import api from "../../../services/api";
import MockAdapter from "axios-mock-adapter";
import rootSaga from "../index";

import {
  Types as TodosTypes,
  Creators as TodosActions
} from "../../ducks/todos";

const apiMock = new MockAdapter(api);

describe("Todos Saga", () => {
  let sagaTester = null;

  const todos = require("../../../../server.json");

  // NOTA_ESTUDO: Esse código é executado, automaticamente, antes de cada teste
  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.run(rootSaga);
  });

  it("should be able to fetch todos from API", async () => {
    // NOTA_ESTUDO: O axios-mock-adapter interceptará a requisição que o saga fará ao API e retornará o que informamos (Com isso não precisamos mais usar o json-server)
    apiMock.onGet("todos").reply(200, todos.todos);

    sagaTester.dispatch(TodosActions.getTodosRequest());

    // NOTA_ESTUDO: Abaixo o tester espera até que o put do saga seja o GET_SUCCESS
    await sagaTester.waitFor(TodosTypes.GET_SUCCESS);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      TodosActions.getTodosSuccess(todos.todos)
    );
  });

  it("should fail if response is not ok", async () => {
    apiMock.onGet("todos").reply(400, {});

    sagaTester.dispatch(TodosActions.getTodosRequest());

    await sagaTester.waitFor(TodosTypes.GET_FAILURE);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      TodosActions.getTodosFailure("Erro na requisição")
    );
  });
});

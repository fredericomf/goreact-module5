import SagaTester from "redux-saga-tester";
import rootSaga from "../index";

import {
  Types as TodosTypes,
  Creators as TodosActions
} from "../../ducks/todos";

describe("Todos Saga", () => {
  let sagaTester = null;

  const todos = require("../../../../server.json");

  // NOTA_ESTUDO: Esse código é executado, automaticamente, antes de cada teste
  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.run(rootSaga);
  });

  it("should be able to fetch todos from API", async () => {
    sagaTester.dispatch(TodosActions.getTodosRequest());

    // NOTA_ESTUDO: Abaixo o tester espera até que o put do saga seja o GET_SUCCESS
    await sagaTester.waitFor(TodosTypes.GET_SUCCESS);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      TodosActions.getTodosSuccess(todos.todos)
    );
  });
});

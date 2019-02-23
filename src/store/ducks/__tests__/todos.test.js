import reducer, { Creators as TodosActions } from "../todos";

describe("Todos Reducer", () => {
  it("should be able to add new todo", () => {
    const novo = "Novo todo";
    const state = reducer([], TodosActions.addTodo(novo));
    expect(state[0].text).toBe(novo);
  });

  if (
    ("should be able to remove a todo",
    () => {
      const state = reducer(
        [{ id: 1, text: "Algum todo" }],
        TodosActions.removeTodo(1)
      );
      expect(state).toHaveLength(0);
    })
  );
});

import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as TodosActions } from "../ducks/todos";

export function* getTodos() {
  try {
    const response = yield call(api.get, "todos");

    yield put(TodosActions.getTodosSuccess(response.data));
  } catch (err) {
    yield put(TodosActions.getTodosFailure("Erro na requisição"));
  }
}

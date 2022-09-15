import { api } from "./api";
import { IState } from "../entities/entities";

const listStates = async (): Promise<IState[]> => {
  try {
    const response = await api.get<IState[]>(`/state`);
    return await response.data;
  } catch (err) {
    return [];
  }
}

const findStateById = async (id: number): Promise<IState | null> => {
  try {
    const response = await api.get<IState>(`/state/${id}`);
    return await response.data;
  } catch (err) {
    return null;
  }
}

export default {
  listStates,
  findStateById
}

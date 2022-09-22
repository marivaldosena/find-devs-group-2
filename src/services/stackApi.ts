import { api } from "./api";
import { IStack } from "../entities/entities";

const listStacks = async (): Promise<IStack[]> => {
  try {
    const response = await api.get<IStack[]>(`/stacks`);
    return await response.data;
  } catch (err) {
    return [];
  }
}

const findStackById = async (id: number): Promise<IStack | null> => {
  try {
    const response = await api.get<IStack>(`/stacks/${id}`);
    return await response.data;
  } catch (err) {
    return null;
  }
}

export default {
  listStacks,
  findStackById
}

import { api } from "./api";
import { ICategory } from "../entities/entities";


const listCategories = async (): Promise<ICategory[]> => {
  try {
    const response = await api.get<ICategory[]>(`/category`);
    return await response.data;
  } catch (err) {
    return [];
  }
}

const findCategoryById = async (id: number): Promise<ICategory | null> => {
  try {
    const response = await api.get<ICategory>(`/category/${id}`)
    return await response.data;
  } catch (err) {
    return null;
  }
}

const createCategory = async (category: ICategory): Promise<ICategory | null> => {
  try {
    const response = await api.post(`/category`, category);
    return await response.data;
  } catch (err) {
    return null;
  }
}

const updateCategory = async (id: number, newCategory: string): Promise<ICategory | null> => {
  try {
    const response = await api.put(`/category/${id}`, { id, name: newCategory });
    return await response.data;
  } catch (err) {
    return null;
  }
}

const deleteCategory = async (id: number): Promise<boolean> => {
  try {
    const response = await api.delete(`/category/${id}`);
    return true;
  } catch (err) {
    return false;
  }
}


export default {
  listCategories,
  findCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
}

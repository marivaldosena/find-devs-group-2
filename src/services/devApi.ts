import { api } from "./api";
import stackApi from "./stackApi";
import stateApi from "./stateApi";
import categoryApi from "./categoryApi";
import { ICategory, IDeveloper, IStack, IState } from "../entities/entities";

export type filters = {
  name: {
    value: string;
  };
  stack: {
    value: Set<string>;
  };
  category: {
    value: Set<string>;
  };
  state: {
    value: Set<string>;
  };
};

const listDevelopers = async (filters?: filters): Promise<IDeveloper[]> => {
  try {
    let query = "/devs?";

    if (filters) {
      if (filters.name.value) {
        query = `${query}name_like=${filters.name.value}`;
      }
      if (filters.stack.value.size > 0) {
        query = `${query}&stack=${Array.from(filters.stack.value).join("&stack=")}`;
      }
      if (filters.category.value.size > 0) {
        query = `${query}&category=${Array.from(filters.category.value).join("&category=")}`;
      }
      if (filters.state.value.size > 0) {
        query = `${query}&state=${Array.from(filters.state.value).join("&state=")}`;
      }
    }

    const response = await api.get(query);
    const array = await response.data;
    const developers: IDeveloper[] = [];

    for (let item of array) {
      const [category, stack, state] = await Promise.all([
        categoryApi.findCategoryById(item.category),
        stackApi.findStackById(item.stack),
        stateApi.findStateById(item.state),
      ]);

      developers.push(_getDeveloper(item, category, stack, state));
    }

    return developers;
  } catch (err) {
    return [];
  }
};

const findDeveloperById = async (id: number): Promise<IDeveloper | null> => {
  try {
    const response = await api.get(`/devs/${id}`);
    const data = await response.data;

    if (data) {
      const [category, stack, state] = await Promise.all([
        categoryApi.findCategoryById(data.category),
        stackApi.findStackById(data.stack),
        stateApi.findStateById(data.state),
      ]);
      const developer = _getDeveloper(data, category, stack, state);

      return developer;
    }

    return null;
  } catch (err) {
    return null;
  }
};

const _getDeveloper = (
  data: any,
  category: ICategory | null,
  stack: IStack | null,
  state: IState | null
): IDeveloper => {
  return {
    id: data.id,
    photo: data.photo,
    name: data.name,
    category: category?.name ?? "",
    stack: stack?.label ?? "",
    state: state?.value ?? "",
    description: data.description,
  };
};

export default {
  listDevelopers,
  findDeveloperById,
};

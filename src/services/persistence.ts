import AsyncStorage from "@react-native-async-storage/async-storage";
import { IDeveloper } from "../entities/entities";

const saveAllDevelopers = async (username: string, developers: IDeveloper[]) => {
  try {
    await AsyncStorage.setItem(`@${username.toLocaleLowerCase()}`, JSON.stringify(developers));
  } catch (err) {
    console.log(err);
  }
};

const saveDeveloper = async (username: string, developer: IDeveloper) => {
  try {
    const parsedData = await getAllDevelopers(username);

    const index = parsedData.findIndex((item) => item.id === developer.id);

    if (index === -1) {
      parsedData.push(developer);
      await saveAllDevelopers(username, parsedData);
    }
  } catch (err) {
    console.log(err);
  }
};

const getAllDevelopers = async (username: string): Promise<IDeveloper[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(`@${username.toLocaleLowerCase()}`);
    const parsedData: IDeveloper[] = jsonValue != null ? JSON.parse(jsonValue) : [];
    return parsedData;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getDeveloper = async (username: string, developerId: number): Promise<IDeveloper | null> => {
  try {
    const parsedData = await getAllDevelopers(username);

    return parsedData.filter((item) => item.id === developerId)[0];
  } catch (err) {
    console.log(err);
    return null;
  }
};

const removeDeveloper = async (username: string, developerId: number): Promise<IDeveloper[]> => {
  try {
    const parsedData = await getAllDevelopers(username);

    const index = parsedData.findIndex((item) => item.id === developerId);

    if (index !== -1) {
      parsedData.splice(index, 1);
      await saveAllDevelopers(username, parsedData);
    }

    return parsedData;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default {
  saveAllDevelopers,
  saveDeveloper,
  getAllDevelopers,
  getDeveloper,
  removeDeveloper,
};

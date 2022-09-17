import AsyncStorage from "@react-native-async-storage/async-storage";
import { IDeveloper } from "../entities/entities";

const saveAllDevelopers = async (username: string, developers: IDeveloper[]) => {
  try {
    await AsyncStorage.setItem(`@${username.toLocaleLowerCase()}`, JSON.stringify(developers));
  } catch (err) {
    console.log(err);
  }
}

const saveDeveloper = async (username: string, developer: IDeveloper) => {
  try {
    const parsedData = await getAllDevelopers(username);
    
    parsedData.push(developer);
    await AsyncStorage.setItem(`@${username.toLocaleLowerCase()}`, JSON.stringify(parsedData));
  } catch (err) {
    console.log(err);
  }
}

const getAllDevelopers = async (username: string): Promise<IDeveloper[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(`@${username.toLocaleLowerCase()}`);
    const parsedData: IDeveloper[] =  jsonValue != null ? JSON.parse(jsonValue) : [];
    return parsedData;
  } catch (err) {
    console.log(err);
    return [];
  }
}

const getDeveloper = async (username: string, developerId: number): Promise<IDeveloper | null> => {
  try {
    const parsedData =  await getAllDevelopers(username);

    return parsedData.filter(item => item.id === developerId)[0];
  } catch (err) {
    console.log(err);
    return null;
  }
}

export default {
  saveAllDevelopers,
  saveDeveloper,
  getAllDevelopers,
  getDeveloper
}

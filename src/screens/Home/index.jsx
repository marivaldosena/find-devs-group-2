import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  FlatList,
  Modal,
  Keyboard,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles";
import { CardDev } from "../../components/CardDev";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { Auth } from "aws-amplify";
import DevApi from "../../services/devApi";
import { ModalDetails } from "../../components/ModalDetails";
import { ModalFilter } from "../../components/ModalFilter";
import { addLoggedUser } from "../../store/modules/user/reducer";

export default function Home() {
  const navigate = useNavigation().navigate;
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [devs, setDevs] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [username, setUsername] = useState("Dev");
  const [selected, setSelected] = useState({
    id: "",
    name: "",
    stack: "",
    category: "",
    state: "",
    photo: "",
    description: "",
  });
  const [stackFilters, setStackFilters] = useState(() => new Set());
  const [categoryFilters, setCategoryFilters] = useState(() => new Set());
  const [stateFilters, setStateFilters] = useState(() => new Set());

  async function getDevs(filters) {
    try {
      const dev2 = await DevApi.listDevelopers(filters);
      setDevs(dev2);
    } catch (error) {}
  }

  useEffect(() => {
    getDevs();

    async function getUserName() {
      const response = await Auth.currentUserInfo();
      response.attributes.name
        ? setUsername(response.attributes.name)
        : setUsername(response.attributes.email);
      dispatch(addLoggedUser(response.username));
    }

    getUserName();
  }, []);

  function handleSearch() {
    const filters = {
      name: {
        value: search,
      },
      stack: {
        value: stackFilters,
      },
      category: {
        value: categoryFilters,
      },
      state: {
        value: stateFilters,
      },
    };
    getDevs(filters);
    Keyboard.dismiss();
  }

  return (
    <>
      <Header onpress="signout" />
      {!devs ? (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.hello}>
            <Text style={styles.title}>Olá,</Text>
            <Text style={styles.titleBold}>{username}</Text>
            <Text style={styles.title}>!</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <TextInput
                autoCompleteType="off"
                style={styles.inputs}
                placeholderTextColor="#EEE"
                placeholder="Digite para pesquisar... "
                onChangeText={(value) => setSearch(value)}
              />
              <TouchableOpacity onPress={handleSearch} disabled={loading ? true : false}>
                <View style={styles.icon}>
                  <Ionicons name="ios-search" size={16} color="#EEE" />
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => setFilterModalVisible(true)}
              disabled={loading ? true : false}
            >
              <View>
                <View style={styles.iconSearch}>
                  <Ionicons name="ios-arrow-forward" size={18} color="#EEE" />
                </View>
                <Text style={styles.textSearch}>Filtrar</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigate("Favs")}
            disabled={loading ? true : false}
            style={styles.buttons}
          >
            <Text style={styles.texts}>{loading ? "Carregando..." : "Favoritos"}</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={filterModalVisible}
            onRequestClose={() => {
              setFilterModalVisible(!filterModalVisible);
            }}
          >
            <ModalFilter
              stackFilters={stackFilters}
              categoryFilters={categoryFilters}
              stateFilters={stateFilters}
              setStackFilters={setStackFilters}
              setCategoryFilters={setCategoryFilters}
              setStateFilters={setStateFilters}
              close={() => setFilterModalVisible(false)}
            />
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setFilterModalVisible(!modalVisible);
            }}
          >
            <ModalDetails
              id={selected.id}
              name={selected.name}
              stack={selected.stack}
              category={selected.category}
              state={selected.state}
              photo={selected.photo}
              description={selected.description}
              close={() => setModalVisible(false)}
            />
          </Modal>
          <FlatList
            data={devs}
            contentContainerStyle={{ alignItems: "center", width: "100%" }}
            renderItem={({ item }) => (
              <CardDev
                id={item.id}
                name={item.name}
                stack={item.stack}
                category={item.category}
                state={item.state}
                photo={item.photo}
                description={item.description}
                onpress={() => {
                  setModalVisible(true);
                  setSelected({
                    id: item.id,
                    name: item.name,
                    stack: item.stack,
                    category: item.category,
                    state: item.state,
                    photo: item.photo,
                    description: item.description,
                  });
                }}
              />
            )}
          />
        </View>
      )}
    </>
  );
}

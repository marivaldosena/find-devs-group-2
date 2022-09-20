import { useState, useEffect } from "react";
import { Text, View, Modal } from "react-native";
import { useSelector } from "react-redux";
import { CardDev } from "../../components/CardDev";
import { Header } from "../../components/Header";
import { ModalDetails } from "../../components/ModalDetails";
import { userStateData } from "../../store/modules/user/reducer";
import persistency from "../../services/persistence";
import styles from "./styles";

export default function Favs() {
  const [selected, setSelected] = useState({
    id: "",
    name: "",
    stack: "",
    category: "",
    state: "",
    photo: "",
    description: "",
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const username = useSelector(userStateData);

  useEffect(() => {
    persistency.getAllDevelopers(username).then((favs) => setFavorites(favs));
  }, [favorites]);

  const onResendPress = async () => {
    if (loading) {
      return;
    }
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
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
      <Header onpress="home" />
      <View style={styles.container}>
        <View style={styles.hello}>
          <Text style={styles.title}>Favoritos</Text>
        </View>
        {favorites == "" && <Text style={styles.texts}>Não há favoritos salvos.</Text>}
        {favorites.map((item, index) => (
          <CardDev
            key={item.id}
            id={item.id}
            name={item.name}
            stack={item.stack}
            category={item.category}
            state={item.state}
            photo={item.photo}
            description={item.description}
            setFavorites={setFavorites}
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
        ))}
      </View>
    </>
  );
}

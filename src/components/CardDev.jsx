import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { userStateData } from "../store/modules/user/reducer";
import persistency from "../services/persistence";

export function CardDev(props) {
  const [favorites, setFavorites] = useState([]);
  const username = useSelector(userStateData);

  useEffect(() => {
    persistency.getAllDevelopers(username).then((favs) => setFavorites(favs));
  }, [favorites]);

  const isFavorite = favorites.findIndex((item) => item.id === props.id);

  const dev = {
    category: props.category,
    description: props.description,
    id: props.id,
    name: props.name,
    photo: props.photo,
    stack: props.stack,
    state: props.state,
  };

  return (
    <TouchableOpacity style={styles.card} onPress={props.onpress}>
      <View style={styles.profile}>
        <View style={styles.cardIcon}>
          <Image style={styles.img} source={{ uri: props.photo }} />
        </View>
      </View>
      <View style={styles.cardInfo}>
        <Text numberOfLines={1} style={styles.titleBoldFav}>
          {props.name}
        </Text>

        <View style={styles.infoDev}>
          <Text style={styles.texts}>{props.category}</Text>
          <Text style={styles.texts}> | </Text>
          <Text style={styles.texts}>{props.state}</Text>
        </View>

        <View style={styles.cardStacks}>
          <Text style={styles.reactStack}>{props.stack}</Text>
        </View>
      </View>

      <TouchableOpacity

      >
        <Ionicons
          onPress={() => {
            if (isFavorite === -1) {
              persistency.saveDeveloper(username, dev);
            } else {
              persistency.removeDeveloper(username, dev.id);

              props.setFavorites &&
                props.setFavorites((favs) => {
                  favs.splice(isFavorite, 1);
                  return favs;
                });
            }
          }}
          style={styles.iconFav}
          name={isFavorite !== -1 ? "star" : "star-outline"}
          size={26}
          color="#DE8F45"
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202024",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center",
    paddingVertical: 20,
    flex: 1,
  },
  form: {
    marginTop: 20,
    marginBottom: 80,
  },
  inputContainer: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    marginTop: -20,
  },
  inputs: {
    backgroundColor: "#121214",
    color: "white",
    padding: 10,
    width: "91%",
    marginBottom: 20,
    marginLeft: 15,
    borderRadius: 6,
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    paddingLeft: 15,
  },
  hello: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  title: {
    fontFamily: "Poppins_400Regular",
    fontSize: 20,
    color: "white",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  titleBold: {
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    color: "white",
    marginBottom: 10,
    alignSelf: "flex-start",
    paddingLeft: 4,
  },
  texts: {
    fontFamily: "Poppins_400Regular",
    color: "white",
    fontSize: 12,
  },
  textLink: {
    textDecorationLine: "underline",
    fontFamily: "Poppins_400Regular",
    color: "white",
    margin: 20,
    fontSize: 12,
    textAlign: "center",
  },

  buttons: {
    width: "90%",
    height: 56,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DE8F45",
    borderRadius: 6,
    marginBottom: 20,
    marginTop: -80,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  icon: {
    translateX: -40,
    translateY: 15,
    zIndex: 2,
  },
  card: {
    width: "90%",
    height: 100,
    textAlign: "center",
    backgroundColor: "#121214",
    borderRadius: 6,
    marginTop: 20,
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  profile: {
    width: 80,
    height: 80,
    backgroundColor: "#E1E1E6",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#4d4d4d",
    alignItems: "center",
    overflow: "hidden",
  },
  cardIcon: {
    fontSize: 70,
    color: "#000",
    justifyContent: "center",
  },
  cardInfo: {
    flex: 1,
    marginLeft: 10,
  },
  titleBoldFav: {
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    color: "white",
  },
  cardStacks: {
    flexDirection: "row",
  },
  infoDev: {
    flexDirection: "row",
  },
  iconFav: {
    marginTop: -40,
  },
  javascriptStack: {
    fontSize: 12,
    color: "#DE8F45",
  },
  reactStack: {
    fontSize: 12,
    color: "#5BFE66",
  },
  reactnativeStack: {
    fontSize: 12,
    color: "#2D9135",
  },
  nodeStack: {
    fontSize: 12,
    color: "#4E31FC",
  },
  csharpStack: {
    fontSize: 12,
    color: "#7953E0",
  },
  phytonStack: {
    fontSize: 12,
    color: "#916134",
  },
  img: {
    width: 100,
    height: 100,
  },
});

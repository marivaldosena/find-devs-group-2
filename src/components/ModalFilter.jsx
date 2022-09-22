import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

import StackApi from "../services/stackApi";
import CategoryApi from "../services/categoryApi";
import StateApi from "../services/stateApi";

export function ModalFilter(props) {
  const [stacks, setStacks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    StackApi.listStacks().then((response) => setStacks(response));
    CategoryApi.listCategories().then((response) => setCategories(response));
    StateApi.listStates().then((response) => setStates(response));
  }, []);

  return (
    <View style={styles.modal}>
      <View style={styles.iconmodal}>
        <Ionicons
          style={styles.iconclose}
          name="ios-close"
          size={35}
          color="#EEE"
          onPress={props.close}
        />
      </View>

      <View style={styles.cardmodal}>
        <View style={styles.searchHeader}>
          <Text style={styles.searchHeaderText}>Filtrar por:</Text>
        </View>

        <View style={styles.searchCategory}>
          <View style={styles.searchCategoryHeader}>
            <Text style={styles.searchCategoryText}>Categorias</Text>
            <TouchableOpacity
              onPress={() => {
                props.setStateFilters(new Set())
                props.setCategoryFilters(new Set())
                props.setStackFilters(new Set())
              }}
            >
              <Text style={styles.link}>Limpar</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.searchItemContainer}>
            {categories.map((category) => (
              <View key={category.id}>
                <View style={styles.searchItem}>
                  <CheckBox
                    value={category.id}
                    checked={props.categoryFilters.has(category.id)}
                    onPress={() => {
                      if (props.categoryFilters.has(category.id)) {
                        props.setCategoryFilters((prev) => {
                          const next = new Set(prev);
                          next.delete(category.id);
                          return next;
                        });
                      } else {
                        props.setCategoryFilters((prev) => new Set(prev).add(category.id));
                      }
                    }}
                    style={styles.checkbox}
                  />
                  <Text style={styles.label}>{category.name}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.searchCategory}>
          <View style={styles.searchCategoryHeader}>
            <Text style={styles.searchCategoryText}>Stack de tecnologias</Text>
          </View>

          <ScrollView style={styles.searchItemContainer}>
            {stacks.map((stack) => (
              <View key={stack.id}>
                <View style={styles.searchItem}>
                  <CheckBox
                    value={stack.id}
                    checked={props.stackFilters.has(stack.id)}
                    onPress={() => {
                      if (props.stackFilters.has(stack.id)) {
                        props.setStackFilters((prev) => {
                          const next = new Set(prev);
                          next.delete(stack.id);
                          return next;
                        });
                      } else {
                        props.setStackFilters((prev) => new Set(prev).add(stack.id));
                      }
                    }}
                    style={styles.checkbox}
                  />
                  <Text style={styles.label}>{stack.label}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>



        <View style={styles.searchCategory}>
          <View style={styles.searchCategoryHeader}>
            <Text style={styles.searchCategoryText}>Estados</Text>
          </View>

          <ScrollView style={styles.searchItemContainer}>
            {states.map((state) => (
              <View key={state.id}>
                <View style={styles.searchItem}>
                  <CheckBox
                    value={state.id}
                    checked={props.stateFilters.has(state.id)}
                    onPress={() => {
                      if (props.stateFilters.has(state.id)) {
                        props.setStateFilters((prev) => {
                          const next = new Set(prev);
                          next.delete(state.id);
                          return next;
                        });
                      } else {
                        props.setStateFilters((prev) => new Set(prev).add(state.id));
                      }
                    }}
                    style={styles.checkbox}
                  />
                  <Text style={styles.label}>{state.value}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.label}>
            <Ionicons
              onPress={props.close}
              name="ios-search" size={16} color="#EEE" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "rgba(32, 32, 36, .9)",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  cardmodal: {
    width: "90%",
    height: "90%",
    borderRadius: 6,
    alignItems: "center",
    opacity: 0.995,
    paddingBottom: 40
  },
  iconmodal: {
    padding: 10,
    flexDirection: "row",
    left: 140,
  },
  iconclose: {
    marginLeft: 15,
    top: -3,
  },
  picmodal: {
    width: 130,
    height: 130,
    backgroundColor: "#E1E1E6",
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#5BDE66",
    overflow: "hidden",
  },
  infomodal: {
    width: "85%",
    marginVertical: 10,
  },
  modaltitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 12,
    color: "#DE8F45",
  },
  modaltext: {
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
    color: "#fff",
  },
  searchHeader: {
    height: 50,
    backgroundColor: "#121214",
    padding: 10,
    width: "100%",
    // marginBottom: 20,
    borderRadius: 6,
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    paddingLeft: 15,
    zIndex: 3,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  searchHeaderText: {
    height: "100%",
    color: "#fff",
    fontFamily: "Poppins_500Medium",
    fontSize: 20,
    marginTop: 1,
  },
  searchCategory: {
    width: "100%",
    height: "33%",
    backgroundColor: "#29292E",
  },
  searchCategoryHeader: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    height: 55,
    backgroundColor: "#202024",
    padding: 10,
    width: "100%",
    marginTop: -5,
    borderRadiusBottom: 6,
    marginBottom: 20,
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    paddingLeft: 15,
    zIndex: 2,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  searchCategoryText: {
    height: "100%",
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    marginTop: 10,
  },
  searchItem: {
    flexDirection: "row",
    marginBottom: 0,
  },
  searchCategoryText1: {
    height: "100%",
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    marginTop: 6,
  },
  searchItem: {
    flexDirection: "row",
    marginBottom: 0,
  },
  searchItemContainer: {
    alignSelf: "flex-start",
    width: "100%",
    paddingBottom: 12,
    marginTop: -10,
  },
  checkbox: {
    alignSelf: "center",
    marginTop: 0,
  },
  label: {
    color: "#ffffff",
    margin: 18,
  },
  link: {
    color: "#ffffff",
    textDecorationLine: "underline"
  },
  button: {
    position: "absolute",
    width: 80,
    borderRadius: 100,
    height: 80,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DE8F45',
    zIndex: 5,
    bottom: 0,
    right: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

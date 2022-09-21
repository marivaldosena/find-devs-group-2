import { View, Text, StyleSheet, Dimensions } from "react-native";
import { CheckBox } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export function ModalFilter(props) {
  const [stackFilters, setStackFilters] = useState(new Set());
  const [stack0Checked, setStack0Checked] = useState(false);
  const [stack1Checked, setStack1Checked] = useState(false);
  const [stack2Checked, setStack2Checked] = useState(false);
  const [categoryFilters, setCategoryFilters] = useState(new Set());

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
          <Text style={styles.searchCategoryText}>Category</Text>
        </View>

        <View style={styles.searchItemContainer}>
          <View style={styles.searchItem}>
            <CheckBox
              value="0"
              checked={stack0Checked}
              onPress={() => {
                if (stackFilters.has("0")) {
                  setStackFilters((filters) => {
                    filters.delete("0");
                    return filters;
                  });
                  setStack0Checked(false);
                } else {
                  setStackFilters((filters) => filters.add("0"));
                  setStack0Checked(true);
                }
              }}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Node.js</Text>
          </View>
        </View>

        <View style={styles.searchItemContainer}>
          <View style={styles.searchItem}>
            <CheckBox
              value="1"
              checked={stack1Checked}
              onPress={() => {
                if (stackFilters.has("1")) {
                  setStackFilters((filters) => {
                    filters.delete("1");
                    return filters;
                  });
                  setStack1Checked(false);
                } else {
                  setStackFilters((filters) => filters.add("1"));
                  setStack1Checked(true);
                }
              }}
              style={styles.checkbox}
            />
            <Text style={styles.label}>ReactJS</Text>
          </View>
        </View>

        <View style={styles.searchItemContainer}>
          <View style={styles.searchItem}>
            <CheckBox
              value="2"
              checked={stack2Checked}
              onPress={() => {
                if (stackFilters.has("2")) {
                  setStackFilters((filters) => {
                    filters.delete("2");
                    return filters;
                  });
                  setStack2Checked(false);
                } else {
                  setStackFilters((filters) => filters.add("2"));
                  setStack2Checked(true);
                }
              }}
              style={styles.checkbox}
            />
            <Text style={styles.label}>React Native</Text>
          </View>
        </View>

        <View style={styles.searchCategory}>
          <Text style={styles.searchCategoryText}>Categoria</Text>
        </View>

        <View style={styles.searchItemContainer}>
          <View style={styles.searchItem}>
            <CheckBox
              value="0"
              checked={categoryFilters.has("0")}
              onPress={() => setCategoryFilters(categoryFilters.add("0"))}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Front-end</Text>
          </View>
        </View>

        <View style={styles.searchItemContainer}>
          <View style={styles.searchItem}>
            <CheckBox
              value="1"
              checked={categoryFilters.has("1")}
              onPress={() => setCategoryFilters(categoryFilters.add("1"))}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Back-end</Text>
          </View>
        </View>

        <View style={styles.searchItemContainer}>
          <View style={styles.searchItem}>
            <CheckBox
              value="2"
              checked={categoryFilters.has("2")}
              onPress={() => setCategoryFilters(categoryFilters.add("2"))}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Mobile</Text>
          </View>
        </View>
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
    backgroundColor: "#29292E",
    width: "90%",
    height: "85%",
    borderRadius: 6,
    alignItems: "center",
    opacity: 0.995,
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
    paddingBottom: 12,
    marginTop: -10,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    color: "#ffffff",
    margin: 18,
  },
});

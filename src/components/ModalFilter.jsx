
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { favStateData, addNewFavorite, removeFavorite } from '../store/modules/favorites/reducer';
import { useState } from 'react';

export function ModalDetails(props) {

    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.modal}>
                <View style={styles.iconmodal}>
                    <Ionicons style={styles.iconclose} name="ios-close" size={35} color="#EEE"
                        onPress={props.close}
                    />
                </View>

            <View style={styles.cardmodal}>

                <View style={styles.searchHeader}>
                    <Text style={styles.searchHeaderText}>Filtrar por:</Text>
                </View>

                <View style={styles.searchCategory}>
                    <Text style={styles.searchCategoryText}>Stack</Text>
                </View>
                
                    <View style={styles.searchItemContainer}>
                        <View style={styles.searchItem}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={styles.checkbox}
                                />
                            <Text style={styles.label}>Item 1</Text>
                        </View>
                    </View>

                    <View style={styles.searchItemContainer}>
                        <View style={styles.searchItem}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={styles.checkbox}
                                />
                            <Text style={styles.label}>Item 2</Text>
                        </View>
                    </View>

                    <View style={styles.searchItemContainer}>
                        <View style={styles.searchItem}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={styles.checkbox}
                                />
                            <Text style={styles.label}>Item 3</Text>
                        </View>
                    </View>

                <View style={styles.searchCategory}>
                    <Text style={styles.searchCategoryText}>Categoria</Text>
                </View>
                <View style={styles.searchItemContainer}>
                        <View style={styles.searchItem}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={styles.checkbox}
                                />
                            <Text style={styles.label}>Item 1</Text>
                        </View>
                    </View>

                    <View style={styles.searchItemContainer}>
                        <View style={styles.searchItem}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={styles.checkbox}
                                />
                            <Text style={styles.label}>Item 2</Text>
                        </View>
                    </View>

                    <View style={styles.searchItemContainer}>
                        <View style={styles.searchItem}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={styles.checkbox}
                                />
                            <Text style={styles.label}>Item 3</Text>
                        </View>
                    </View>
                <View style={styles.searchCategory}>
                    <Text style={styles.searchCategoryText}>Estado</Text>
                </View>





            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'rgba(32, 32, 36, .9)',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,

    },
    cardmodal: {
        backgroundColor: '#29292E',
        width: '90%',
        height: '85%',
        borderRadius: 6,
        alignItems: 'center',
        opacity: .995,
    },
    iconmodal: {
        padding: 10,
        flexDirection: 'row',
        left: 140,
    },
    iconclose: {
        marginLeft: 15,
        top: -3,
    },
    picmodal: {
        width: 130,
        height: 130,
        backgroundColor: '#E1E1E6',
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#5BDE66',
        overflow: 'hidden'
    },
    infomodal: {
        width: '85%',
        marginVertical: 10,
    },
    modaltitle: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 12,
        color: '#DE8F45',
    },
    modaltext: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
        color: '#fff',
    },
    searchHeader: {
        height: 50,
        backgroundColor: '#121214',
        padding: 10,
        width: '100%',
        // marginBottom: 20,
        borderRadius: 6,
        fontFamily: 'Poppins_400Regular',
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
        height: '100%',
        color: '#fff',
        fontFamily: 'Poppins_500Medium',
        fontSize: 20,
        marginTop: 1,
        },
    searchCategory: {
            height: 55,
            backgroundColor: '#202024',
            padding: 10,
            width: '100%',
            marginTop: -5,
            borderRadiusBottom: 6,
            marginBottom: 20,
            fontFamily: 'Poppins_400Regular',
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
            height: '100%',
            color: '#fff',
            fontFamily: 'Poppins_400Regular',
            fontSize: 16,
            marginTop:10,
            },
            searchItem: {
                flexDirection: "row",
                marginBottom: 0,
            },
    searchCategoryText1: {
                height: '100%',
                color: '#fff',
                fontFamily: 'Poppins_400Regular',
                fontSize: 16,
                marginTop:6,
                },
                searchItem: {
                    flexDirection: "row",
                    marginBottom: 0,
                },
    searchItemContainer: {
        alignSelf: 'flex-start',
        paddingBottom: 12,
        marginTop: -10,
    },
    checkbox: {
        alignSelf: "center",

    }, 
    label: {
        color: '#ffffff',
        margin: 18,

    },

})
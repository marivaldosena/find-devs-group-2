
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import { favStateData, addNewFavorite, removeFavorite } from '../store/modules/favorites/reducer'




export function ModalDetails(props) {

    const favorite = useSelector(favStateData);
    const dispatch = useDispatch();

    const addFavorite = (item) => {
        dispatch(addNewFavorite(item));
      }
    
      const removefavorite = (item) => {
        dispatch(removeFavorite(item));
      }
    
      const isFavorite = favorite.some(item => item.id === props.id)

      const dev = {
        category: props.category,
        description: props.description,
        id: props.id,
        name: props.name,
        photo: props.photo,
        stack: props.stack,
        state: props.state,
    }

    return (
        <View style={styles.modal}>
            <View style={styles.cardmodal}>

                <View style={styles.iconmodal}>

                <TouchableOpacity
      onPress={() => {

        if (!favorite.some(item => item.id === props.id)) {
          addFavorite(dev)
         

        }
        else {
          removefavorite(dev)
          
        }
      }}
      >
        <Ionicons style={styles.iconFav}
          

          name={isFavorite ? "star" : "star-outline"}
          size={26} color="#DE8F45" />
      </TouchableOpacity>

                    <Ionicons style={styles.iconclose} name="ios-close" size={35} color="#EEE"
                        onPress={props.close}
                    />
                </View>

                <View style={styles.picmodal}>
                    <View style={styles.cardicon}>
                        <Image
                            style={{ width: 130, height: 130 }}
                            source={{ uri: props.photo }}
                        />
                    </View>
                </View>

                <View style={styles.infomodal}>
                    <Text style={styles.modaltitle}>Nome:</Text>
                    <Text style={styles.modaltext}>{props.name}</Text>

                </View>

                <View style={styles.infomodal}>
                    <Text style={styles.modaltitle}>Categoria:</Text>
                    <Text style={styles.modaltext}>{props.category}</Text>

                </View>

                <View style={styles.infomodal}>
                    <Text style={styles.modaltitle}>Stacks:</Text>
                    <Text style={styles.modaltext}>{props.stack}</Text>

                </View>

                <View style={styles.infomodal}>
                    <Text style={styles.modaltitle}>Estado:</Text>
                    <Text style={styles.modaltext}>{props.state}</Text>

                </View>

                <View style={styles.infomodal}>
                    <Text style={styles.modaltitle}>Descrição:</Text>
                    <Text style={styles.modaltext}>{props.description}</Text>

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
        backgroundColor: '#121214',
        width: '90%',
        height: '85%',
        borderRadius: 6,
        alignItems: 'center',
        opacity: .995,
    },
    iconmodal: {
        padding: 20,
        flexDirection: 'row',
        left: 100,
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

})
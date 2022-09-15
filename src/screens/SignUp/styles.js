import { Poppins_100Thin, Poppins_200ExtraLight } from '@expo-google-fonts/poppins'
import { StyleSheet, Dimensions, } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#202024',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        paddingVertical:20,
        flex: 1,
    },

    form: {
        marginTop: 20,
        marginBottom: 100,
    },
    inputContainer:{
        flexDirection:'row',
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: -20
    },
    inputs: {
        backgroundColor: '#121214',
        color: 'white',
        paddingVertical: 10,
        width: '90%',
        marginBottom: 20,
        borderRadius: 6,
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        padding: 50,
},
    title: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 20,
        color: 'white',
        marginBottom: 10,
        alignSelf: 'flex-start',
        paddingLeft: 20,

    },
    texts: {
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        margin: 20,
        fontSize: 12,
        textAlign: 'center'
    },

    buttons: {

        width: '90%',
        height: 56,
        textAlign: 'center',
        justifyContent:'center',
        backgroundColor: '#2D9135',
        borderRadius: 6,

    },

    icon:{
        translateX: 35,
        translateY: 10,
        zIndex: 2,
    },
})
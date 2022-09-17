import { Poppins_100Thin, Poppins_200ExtraLight, Poppins_500Medium } from '@expo-google-fonts/poppins'
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
        marginBottom: 80,
    },
    inputContainer:{
        flexDirection:'row',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: -20,
    },
    inputs: {
        backgroundColor: '#121214',
        color: 'white',
        padding: 10,
        width: '90.5%',
        marginBottom: 20,
        marginLeft: 15,
        borderRadius: 6,
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        paddingLeft: 15,
    },
    hello: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginBottom: -20,
    },
    title: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 20,
        color: 'white',
        marginBottom: 10,
        alignSelf: 'flex-start',
        
    },
    titlebold: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 20,
        color: 'white',
        marginBottom: 10,
        alignSelf: 'flex-start',
        paddingLeft: 4,
    },
    texts: {
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        marginTop: 40,
        fontSize: 12,
        textAlign: 'center'
    },
    textLink: {
        textDecorationLine: 'underline',
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
        backgroundColor: '#DE8F45',
        borderRadius: 6,
        marginBottom: 20,
        marginTop: -80,
    },
        
    icon:{
        translateX: -40,
        translateY: 15,
        zIndex: 2,
    },
    card: {
        width: '90%',
        height: 100,
        textAlign: 'center',
        backgroundColor: '#121214',
        borderRadius: 6,
        marginTop: 30,
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        elevation: 5,
        flexDirection: 'row',
        marginBottom: -10,
    },
    profile: {
        width: 80,
        height: 80,
        backgroundColor: '#E1E1E6',
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#4d4d4d',
        alignItems: 'center',
    },
    cardicon:{
        fontSize: 70,
        color: '#000',
        justifyContent: 'center',
    },
    cardinfo:{

    },
    titleboldfav: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 20,
        color: 'white',
    },
    cardstacks:{
        flexDirection: 'row',
        marginTop: -5,
    },
    iconfav:{
        marginTop: -40,
    },
    javascriptstack:{
        fontSize: 12,
        color: '#DE8F45',
    },
    reactstack:{
        fontSize: 12,
        color: '#5BFE66',
    },
    reactnativestack:{
        fontSize: 12,
        color: '#2D9135',
    },
    nodestack:{
        fontSize: 12,
        color: '#4E31FC',
    },
    csharpstack:{
        fontSize: 12,
        color: '#7953E0',
    },
    phytonstack:{
        fontSize: 12,
        color: '#916134',
    },
})
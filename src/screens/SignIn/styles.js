import { StyleSheet, Dimensions, } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#202024',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        flex: 1,
    },

    form: {
        marginTop: 20,
        marginBottom: 100,
    },
    inputContainer: {
        flexDirection: 'row',
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
        fontFamily: 'Poppins_700Bold',
        fontSize: 20,
        color: 'white',
        marginTop: 20,

    },
    texts: {
        fontFamily: 'Poppins_400Regular',
        color: 'white',

        fontSize: 12,
        textAlign: 'center'
    },
    textLink: {
        textDecorationLine: 'underline',
        fontFamily: 'Poppins_700Bold',
        color: 'white',
        margin: 20,
        fontSize: 12,
        textAlign: 'center'
    },
    socialContainer: {
        flexDirection: 'row',
        width: Dimensions.get('window').width - 50,
        justifyContent: 'space-evenly'

    },
    buttons: {
        width: '90%',
        height: 56,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#2D9135',
        borderRadius: 6,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    links: {
        textDecorationLine: 'underline',
        color: '#5BDE66',
        fontFamily: 'Poppins_700Bold',
        fontSize: 12,
    },
    linkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    socialContainer: {
        width: '90%',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    socialButtons: {
        color: '#4D4D4D',
        height: 56,
        fontFamily: 'Poppins_700Bold',
        width: '100%',
        backgroundColor: '#E1E1E6',
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    socialTexts: {
        color: '#4D4D4D',
        fontFamily: 'Poppins_700Bold',
        marginLeft: 10,
        fontSize: 12
    },
    icon: {
        translateX: 35,
        translateY: 10,
        zIndex: 2,
    },
    containerModal: {
        backgroundColor: '#202024',
        opacity: 0.5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

})
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    item: {
        padding: 0,
        marginVertical: 8,
        marginHorizontal: 0,


    }, image: {

        resizeMode: 'contain',
        height: 100,
        width: 200

    }, backdrop: {
        resizeMode: 'cover',
        height: 200,
        width: 400,

    }, video: {
        alignSelf: 'center',
        width: 350,
        height: 220,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#151D30',
        width: '10%',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: '#f5c517',
        color: '#b5b7b9',
        marginRight: 10,
        marginLeft: 20
    },
    container: {
        marginTop: 10,
        flexDirection: 'row',
        padding: 10,
        alignSelf: 'center',
        alignItems: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: '#151D30',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#f5c517',
    },
    buttonClose: {
        backgroundColor: '#f5c517',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    genreBadgesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 5
    },
    genreBadgesBackground: {
        borderRadius: 10,
        backgroundColor: '#151D30',
        padding: 5,
        marginBottom: 5
    },
    genreBadgesText: {
        color: "#b5b7b9"
    },
    movieTitle: {
        fontSize: 20,
        color: "#b5b7b9",
        fontWeight: "bold"
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    }

});

export default styles;
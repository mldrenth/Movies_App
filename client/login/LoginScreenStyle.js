import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: 67,
        width: 90,
        marginBottom: 5
    },
    textInput: {
        backgroundColor: "#151d30",
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "#f5c517",
        width: 230,
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        textAlign: "center",
        height: 40,
        fontSize: 16,
        color: "white"
    },
    loginBtn: {
        margin: 10,
        alignItems: "center",
    }
});

export default styles;
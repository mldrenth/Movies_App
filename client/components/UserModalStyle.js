import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      marginLeft: 30
    },
    centeredView: {
      backgroundColor: 'rgba(21, 29, 48, 0.8)',
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "#060d17",
      borderRadius: 7,
      borderWidth: 1,
      borderColor: "#f5c517",
      padding: 35,
      alignItems: "center",
      elevation: 5
    },
    button: {
      marginTop: 200,
      marginRight: 30,
      flexDirection: 'row',
      justifyContent: 'center',
    }
  });

  export default styles;
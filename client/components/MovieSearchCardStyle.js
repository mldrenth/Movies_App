import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        marginRight:10, 
        marginLeft:10, 
        marginTop:10, 
        backgroundColor: "#10161d",
        borderRadius: 10
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        height: 300,
        width: 200,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
      },
      movieTitle: {
        fontSize:20, 
        color:"#fcfdfd", 
        fontWeight:"bold"
      },
      releaseDate: {
        fontSize:20, 
        color:"#b5b7b9", 
        marginBottom: 10
      },
      overview: {
        marginBottom:10, 
        color:"#575c61"
      }

});

export default styles;
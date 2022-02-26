import {Image, StyleSheet, Text, View} from "react-native";
import logo from "../assets/svg/logo.svg";
import Infinito from "./Infinito";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(7,67,107)',
    },
    imageContainer:{
        flexDirection: 'row',
        height: '35%',
        alignItems: 'center',
    },
    content: {
        height: '65%'
    },
    greet: {
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 10,
        color: '#464545'
    },
    imagen:{
        height: 80,
        width: 80
    },
    inner: {
        margin: 'auto',
        borderRadius: '10px',
        width: '85%',
        height: '95%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    notch:{
        marginLeft: '25%',
        position: 'absolute',
        zIndex: 5,
        borderRadius: '10px',
        backgroundColor: 'rgb(7,67,107)',
        width: '50%',
        height: '7%',
    }
});

const Container = ({children}) => {
    return(
        <View style={styles.container}>
            <View style={styles.notch}/>
            <View style = {styles.inner}>
                <View style = {styles.imageContainer}>
                    <Image style = {styles.imagen} source={logo} />
                    <Text style = {styles.greet}>Hola<br/>Bienvenido</Text>
                </View>
                <View style = {styles.content}>
                    {children}
                </View>
            </View>
        </View>
    )
}

export default Container

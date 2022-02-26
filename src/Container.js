import {Image, StyleSheet, Text, View} from "react-native";
import logo from "../assets/svg/logo.svg";
//TODO: cambiar el logo cuando se haga el build

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(7,67,107)',
        alignItems: 'center',
        justifyContent: 'center'
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
        color: '#6b6a6a'
    },
    imagen:{
        height: 80,
        width: 80
    },
    inner: {
        borderRadius: 10,
        width: '85%',
        height: '85%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const Container = ({children}) => {
    return(
        <View style={styles.container}>
            <View style = {styles.inner}>
                <View style = {styles.imageContainer}>
                    <Image style = {styles.imagen} source={{
                        uri: "http://www.forosecuador.ec/imgfe/sello-uce-logotipo-universidad-central-ecuador-1.png"
                    }} />
                    <Text style = {styles.greet}>Hola{'\n'}Bienvenido</Text>
                </View>
                <View style = {styles.content}>
                    {children}
                </View>
            </View>
        </View>
    )
}

export default Container

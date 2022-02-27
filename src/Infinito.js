import {useState, useEffect} from "react";
import {View, Text} from "react-native";

const Infinito = () => {

    let tiempo = new Date()
    let [segundo,setSegundo] =useState(tiempo.getSeconds())
    let [minuto,setMinuto] =useState(tiempo.getMinutes())
    let [hora,setHora] =useState(tiempo.getHours())

    useEffect(()=>{
        const refresh = setInterval(()=>{
            tiempo = new Date()
            setHora(tiempo.getHours())
            setMinuto(tiempo.getMinutes())
            setSegundo(tiempo.getSeconds())
        }, 1000)
        return(()=>{
                clearInterval(refresh)
            })
    }, [tiempo])

    // useEffect(()=>{
    //     if (segundo < 59) {
    //         const contador = setInterval(() => {
    //             setSegundo(segundo + 1)
    //             setSegundo(segundo + 1)
    //         }, 1000)
    //     }else if(59){
    //
    //         }
    //     return( () =>
    //         clearInterval(contador)
    //     )
    //     } else if(segundo == 59){
    //         setSegundo(0)
    //         setMinuto(minuto++)
    //     }
    // }, [segundo])


    return(
        <View style = {{flexDirection:'row'}}>
            <Text style = {{
                color:'blue',
                marginRight:10
            }}>{hora}</Text>
            <Text style = {{
                color:'blue',
                marginRight:10
            }}>{minuto}</Text>
            <Text style = {{
                color:'blue',
                marginRight:10
            }}>{segundo}</Text>
        </View>
    )
}

export default Infinito

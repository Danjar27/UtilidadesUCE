import {View, Text, Button} from 'react-native'
import Container from '../src/Container'

const Emil = ({navigation}) => {
    return(
        <Container>
            <Text>Hola, esta es la poderosísima página de Emil</Text>
            <Button
                title = 'Ir a la página de Sebas'
                onPress = {() => navigation.navigate('Sebas')}
            />
        </Container>
    )
}

export default Emil

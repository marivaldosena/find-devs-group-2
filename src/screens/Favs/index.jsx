import { useState } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { CardDev } from '../../components/CardDev';
import { Header } from '../../components/Header';
import { favStateData } from '../../store/modules/favorites/reducer';
import styles from './styles';

export default function Favs() {


    const [loading, setLoading] = useState(false)
    const favorite = useSelector(favStateData);

    const onResendPress = async () => {
        if (loading) {
            return
        }
    }

    return (
        <>
            <Header onpress='home' />
            <View style={styles.container}>
                <View style={styles.hello}>
                    <Text style={styles.title}>Favoritos</Text>
                </View>
                {favorite == '' &&
                
                <Text style={styles.texts}>Não há favoritos salvos.</Text>
                
                }
                {favorite.map((item,index)=>(
                    <CardDev
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    stack={item.stack}
                    category={item.category}
                    state={item.state}
                    photo={item.photo}
                    description={item.description}
                  />
                ))}

                

            </View>
        </>
    )
}

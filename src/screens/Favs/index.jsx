import { useState } from 'react';
import { Text, View, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import { CardDev } from '../../components/CardDev';
import { Header } from '../../components/Header';
import { ModalDetails } from '../../components/ModalDetails';
import { favStateData } from '../../store/modules/favorites/reducer';
import styles from './styles';


export default function Favs() {

    const [selected, setSelected] = useState({
        id: '',
        name: '',
        stack: '',
        category: '',
        state: '',
        photo: '',
        description: '',
    })
    const [modalVisible, setModalVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const favorite = useSelector(favStateData);

    const onResendPress = async () => {
        if (loading) {
            return
        }
    }



    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <ModalDetails
                    id={selected.id}
                    name={selected.name}
                    stack={selected.stack}
                    category={selected.category}
                    state={selected.state}
                    photo={selected.photo}
                    description={selected.description}

                    close={() => setModalVisible(false)}
                />
            </Modal>
            <Header onpress='home' />
            <View style={styles.container}>
                <View style={styles.hello}>
                    <Text style={styles.title}>Favoritos</Text>
                </View>
                {favorite == '' &&

                    <Text style={styles.texts}>Não há favoritos salvos.</Text>

                }
                {favorite.map((item, index) => (
                    <>

                        <CardDev
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            stack={item.stack}
                            category={item.category}
                            state={item.state}
                            photo={item.photo}
                            description={item.description}
                            onpress={() => {
                                setModalVisible(true)
                                setSelected({
                                    id: item.id,
                                    name: item.name,
                                    stack: item.stack,
                                    category: item.category,
                                    state: item.state,
                                    photo: item.photo,
                                    description: item.description
                                })

                            }}
                        />
                    </>
                ))}



            </View>
        </>
    )
}

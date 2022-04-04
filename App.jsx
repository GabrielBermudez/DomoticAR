import React, { useState } from 'react';
import GenericModal from './GenericModal';
import { StyleSheet, 
         Text, 
         View,  
         TextInput, 
         Button,
         ScrollView,
         FlatList,
         Modal
} from 'react-native';

export default function App() {

  const [counter, setCounter] = useState(1);
  const [textItem, setTextItem] = useState('');
  const [listItem, setListItem] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModelVisible] = useState(false);
  const [typeGenericModal, setGenericTypeModal] = useState('');

  const onHandlerChangeItem = (text) => setTextItem(text);

  const onHandlerDelete = (id) => {
    setListItem(currentItems => currentItems.filter(item => item.id !== id));
    setItemSelected({});
    setModelVisible(!modalVisible);
    setGenericTypeModal('');
  }

  const onHandlerComplete = (id) => {
    setListItem(currentItems => currentItems.filter(item => item.id !== id));
    setListItem(currentItems => [...currentItems, {id: itemSelected.id, value: itemSelected.value, isCompleted: true}]);
     setItemSelected({});
    setModelVisible(!modalVisible);
    setGenericTypeModal('');
  }

  const onHandlerModal = (id) => {
    setItemSelected(listItem.filter( item => item.id === id)[0]);
    setModelVisible(!modalVisible);
    setGenericTypeModal('delete');  
  }

  const onHandlerModalComplete = (id) => {
    setItemSelected(listItem.filter( item => item.id === id)[0]);
    setModelVisible(!modalVisible);  
    setGenericTypeModal('complete');
  }


  const addItem = () => {
    if(textItem != ''){
      setListItem( currentItems => [...currentItems, {id: counter, value: textItem, isCompleted: false}]);
      setTextItem('');
      setCounter(counter + 1);
    }
  }

  const renderItem = data => {
    return (
        <Text style={ styles.itemText }>{`${data.item.id}) ${data.item.value} - Completado ${data.item.isCompleted ? 'Si' : 'No'}`} {!data.item.isCompleted && <Text style={styles.completarText} onPress={onHandlerModalComplete.bind(this, data.item.id)}>Completar</Text>}{!data.item.isCompleted && <Text style={styles.quitarText} onPress={onHandlerModal.bind(this, data.item.id)}>Quitar</Text>}</Text> 
      );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Agregar Items</Text>
      <View>
        <TextInput value={textItem}
                   onChangeText = { onHandlerChangeItem }
                   style={styles.textInputContainer}
        />
        <Button title='+'
                onPress={addItem}
        />
      </View>
      
        <View style={styles.viewListItem}>
          {/*<ScrollView>
            {listItem.map( (item, id) => <Text style={ styles.itemText } >{item.value}</Text> )}
          </ScrollView>*/}

          <FlatList 
              data = {listItem}
              renderItem = {renderItem}
              keyExtractor={ (item) => `item-${item.id}`}
            />

        </View>
        {
          (modalVisible && typeGenericModal == 'delete') ? 
          <GenericModal title="¿Está seguro de borrar este item?" modalVisible={modalVisible} item={itemSelected} onhandler={onHandlerDelete.bind(this, itemSelected.id)}/>
          :
          <GenericModal title="¿Está seguro de completar este item?" modalVisible={modalVisible} item={itemSelected} onhandler={onHandlerComplete.bind(this, itemSelected.id)}/>
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 30,
    textDecorationLine:'underline',
  },
  textInputContainer: {
    borderBottomWidth: 1, 
    borderColor: 'white',
    width: 100,
    margin: 5,
    color: 'white'
  },
  viewListItem:{
    marginTop: 30,
    borderRadius: 20,
    width: 300,
    height: 200,
    backgroundColor: 'gray',
    padding: 10,
  },
  itemText:{
    color: 'white',
    fontSize: 20,
  },
  completarText:{
    marginRight: 30,
    backgroundColor: 'green',
  },
  quitarText:{
    marginRight: 5,
    backgroundColor: 'red',
  }
});

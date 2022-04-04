import React from 'react';
import { StyleSheet, 
         Text, 
         View,  
         TextInput, 
         Button,
         ScrollView,
         FlatList,
         Modal
} from 'react-native';

export default function GenericModal({title, modalVisible, item, onhandler}) {
	return (
			<Modal
	          animationType = "slide"
	          visible = { modalVisible }
	        >
	          <View>
	            <Text>
	              Alerta de Confirmación
	            </Text>
	          </View>          
	          <View>
	            <Text>{title}</Text>
	          </View>
	          <View>
	            <Text>{`${item.id}) ${item.value}`}</Text>
	          </View>
	          <View>
	            <Button onPress={onhandler} title="Confirmar"/>
	          </View>
	        </Modal>
		);
}

const styles = StyleSheet.create({

}); 
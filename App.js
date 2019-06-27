import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)

    this.state = {
      text: "",
      itens: [
        {key:"0", desc:"Item 1", done: false},
        {key:"1", desc:"Item 2", done: false}
      ]
    }
  }

  renderItem(obj){
    return(
      <Text style={styles.cell}>{obj.item.desc}</Text>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>ToDo List</Text>
        <FlatList data={this.state.itens} renderItem={this.renderItem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#B3DECF',
  },
  titulo: {
    textAlign: 'center',
    margin: 20,
    fontSize: 25,
    fontWeight: 'bold'
  }
});

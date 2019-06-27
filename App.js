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

    this.inserirItem = this.inserirItem.bind(this)
  }

  renderItem(obj){
    return(
      <Text style={styles.cell}>{obj.item.desc}</Text>
    )
  }

  inserirItem(){
    let newItem = {
      key: this.state.itens.length.toString(),
      desc: this.state.text,
      done: false
    }

    let itens = this.state.itens;
    itens.push(newItem)
    this.setState({itens})

    let text = ""
    this.setState({text})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>ToDo List</Text>
        <FlatList style={styles.lista} data={this.state.itens} renderItem={this.renderItem} extraData={this.state}/>
        <View style={styles.inputView}>
          <TextInput value={this.state.text} style={styles.input} onChangeText={(text)=>{this.setState({text})}}/>
          <Button onPress={this.inserirItem} title="ADD"/>
        </View>
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
  cell: {
    padding: 20,
    backgroundColor: "#FFF",
    margin: 10,
    fontSize: 18,
    borderRadius: 5
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20
  },
  input: {
    backgroundColor: "#FFF",
    borderColor: "#333",
    borderWidth: 2,
    padding: 10,
    flex: 1,
    borderRadius: 5,
    marginRight: 20
  },
  titulo: {
    textAlign: 'center',
    margin: 20,
    fontSize: 25,
    fontWeight: 'bold'
  }
});

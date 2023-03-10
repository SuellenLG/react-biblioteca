import React, { Component } from 'react';
import  ListaDeNotas from './components/CardNota/ListaDeNotas';
import FormularioCadastro from './components/CardNota/FormularioCadastro';
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

  constructor(){
    super();
    this.notas =[];
    this.state ={
      notas:[]
    };
  }

  criarNota(titulo,texto) {
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.notas.push(novaNota);
    this.setState(novoEstado)
    
  }

  render(){
      return(
        <section className="conteudo">
          <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
          <ListaDeNotas notas={this.state.notas}/>
        </section>
      );
    }   
}
    
export default App;

//react -> lib
//React -> ecossistema


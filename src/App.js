import React from 'react';
//import logo from './assets/img/logo.svg';
//import './assets/css/App.css';
import Home from './components/Home';
import News from './components/News';
import HandleFunc from './components/HandleFunc'
import EventObj from './components/EventObj'
import TodoList from './components/TodoList'
import ReactForm from './components/ReactForm'
import Axios from './components/Axios'
import FetchJsonp from './components/FetchJsonp'
import Lifecycle from './components/Lifecycle.js';

class App extends React.Component  {
  constructor(props){
    super(props);

    this.state={
      title:'我是app组件的title',
      flag:true
    }

  }

  setFlag=()=>{

    this.setState({      

      flag:!this.state.flag
    })
  }
  setTitle=()=>{

    this.setState({      

      title:'我是app组件改变后的title'
    })
  }

  render(){
  //JSX
  return (
    <div className="App">
      <header className="App-header">
        
        <Home></Home>
        <News/>
        <HandleFunc></HandleFunc>
        <EventObj></EventObj>
        <TodoList/><br/><br/>
        <hr/>
        <ReactForm></ReactForm>   <br/><br/>
        <hr/>
        <Axios></Axios><br/><br/>
        <hr />
        <FetchJsonp></FetchJsonp>    
      </header>
        
         <br /><br />
         <hr />
         <br /><br />
         {
            this.state.flag?<Lifecycle title={this.state.title} />:""
         } 
         <button onClick={this.setFlag}>挂载和销毁声明周期函数组件</button>
        <br />
         <br />
        <button onClick={this.setTitle}>改变父组件title的值</button>


    </div>
  );
  }
}

export default App;

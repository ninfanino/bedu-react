import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        task: '',
        list: []
      }
  }

  updateTask = (e) => {
    this.setState({
      task: e.target.value
    })
  }

  addTaskToList = () => {
    let newList = this.state.list

    newList.push({
      task: this.state.task,
      completed:false
    })

    this.setState({
      task: '',
      list: newList
    })
  }

  removeItemFromList = (index) => {
    let newList = this.state.list

    newList.splice(index,1)

    this.setState({
      list: newList
    })
  }

  checkItemFromList = (index) => {
    let newList = this.state.list
    newList[index].completed = !newList[index].completed;

    this.setState({
      list: newList
    })
  }

  render() {
    return (
      <div className="container">
          <Header
              inputHandler={this.updateTask}
              taskValue={this.state.task}
              clickHandler={this.addTaskToList}
          />
          <Content 
              listItems={this.state.list}
              removeItemFromList={this.removeItemFromList}
              checkItemFromList={this.checkItemFromList}
          />
      </div>
    );
  }
}

export default App;

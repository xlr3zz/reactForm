import React, { Component } from 'react';
import Form from './component/Form';
import './App.css';
import FormInfoList from './component/FormInfoList';

class App extends Component {

  id = 0;

  state = {
      dataList : [
        {
          name : '문동현',
          email : 'dhmoon@abc.com',
          phone : '010-7457-3088'
        }
      ]
  }

  saveHandler = (data) => {
      const { dataList } = this.state;
      this.setState({
        dataList : dataList.concat({
            ...data,
            id : this.id++
        })
      })
  }

  render() {
    return (
      <div>
          <Form onSaveMember={this.saveHandler} />
          <FormInfoList data={this.state.dataList} />
      </div>
    );
  }
}

export default App;

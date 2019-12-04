import React, { Component } from 'react';
import Form from './component/Form';
import './App.css';
import FormInfoList from './component/FormInfoList';

class App extends Component {

  id = 1;

  state = {
      dataList : [
        {
          name : '문동현',
          email : 'dhmoon@abc.com',
          phone : '010-7457-3088',
          id    : 0
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

  formUpate = (id,modifyData) => {
      const { dataList } = this.state;
      this.setState({
          dataList : dataList.map(
              userData => {
                  if(userData.id === id) {
                      return {
                          id,
                          ...modifyData
                      }
                  }
                  return userData;
              }
          )
      })
  }

  render() {
    return (
      <div>
          <Form onSaveMember={this.saveHandler} />
          <FormInfoList 
            data={this.state.dataList} 
            onUpdate={this.formUpate}  
          />
      </div>
    );
  }
}

export default App;

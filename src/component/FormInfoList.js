import React, { Component } from 'react';
import FormInfo from './FormInfo';

class FormInfoList extends Component {

    static defaultProps = {
        data : []
    }

    render() {
        const style = {
            border : '1px solid black',
            padding : '30px auto',
            margin: '20px auto',
            maxWidth : '300px',
            maxHieght: '200px',
            textAlign : 'center'
        }

        const { data , onUpdate } = this.props;
        
        const userList = data.map(
            userInfo => (<FormInfo userData={userInfo} key={userInfo.id} onUpdate={onUpdate} />)
        )

        return (
            <div>
                <div style={style}>유저 목록</div>
                {userList}
            </div>
        );
    }
}

export default FormInfoList;
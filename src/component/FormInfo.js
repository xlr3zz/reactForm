import React, { Component , Fragment } from 'react';

class FormInfo extends Component {

    render() {

        const { name , email , phone } = this.props.userData;

        const style = {
            border : '1px solid black',
            padding : '20px',
            margin: '30px auto',
            maxWidth : '300px'
        }

        return (
            <div style={style}> 
                <Fragment>
                    <div>이름 : {name}</div>
                    <div>이메일 : {email}</div>
                    <div>전화번호 : {phone}</div>
                </Fragment> 
            </div>
        );
    }
}

export default FormInfo;
import React, { Component , Fragment } from 'react';

class FormInfo extends Component {

    state = {
        editing : false,
        name : '',
        email : '',
        phone : ''

    }

    handleUpdateToggle = () => {
        const { userData , onUpdate } = this.props;
        console.log(this.state.editing);
        if(this.state.editing) {
            onUpdate(userData.id,{
                name : this.state.name,
                email : this.state.email,
                phone : this.state.phone
            })
        } else {
            this.setState({
                name : userData.name,
                email : userData.email,
                phone : userData.phone
            })
        }

        this.setState({
            editing : !this.state.editing
        })
    }

    formUpdate = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {

        const { name , email , phone } = this.props.userData;

        const { editing } = this.state;

        const style = {
            border : '1px solid black',
            padding : '20px',
            margin: '30px auto',
            maxWidth : '300px'
        }

        const btnStyle = {
            width : '48%',
            marginTop : '10px',
            marginRight :  '1%'
        }

        return (
            
            <div style={style}>
                {
                    editing ? (
                        <Fragment>
                            <form className="myForm" onSubmit={this.formSubmit}>
                                <div className="form-group">
                                    <label htmlFor="nameInput">이름</label>
                                    <input
                                    className="form-control"
                                    placeholder="이름.."
                                    value={this.state.name}
                                    onChange={this.formUpdate}
                                    name="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="emailInput">이메일</label>
                                    <input
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    placeholder="이메일.."
                                    value={this.state.email}
                                    onChange={this.formUpdate}
                                    name="email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phoneNumberInput">휴대폰 번호</label>
                                    <input
                                    className="form-control"
                                    placeholder="전화번호.."
                                    value={this.state.phone}
                                    onChange={this.formUpdate}
                                    name="phone"
                                    />
                                </div>
                            </form>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div>이름 : {name}</div>
                            <div>이메일 : {email}</div>
                            <div>전화번호 : {phone}</div>
                        </Fragment>
                    )
                } 
                <button className="btn btn-primary" style={btnStyle}>삭제</button>
                <button className="btn btn-primary" style={btnStyle} onClick={this.handleUpdateToggle}>
                    {
                        editing ? '적용' : '수정'
                    }
                </button>
            </div>
        );
    }
}

export default FormInfo;
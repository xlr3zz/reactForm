import React, { Component } from 'react';

class Form extends Component {

    state = {
        name : '',
        email: '',
        phone: ''
    }

    formChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.props.onSaveMember(this.state);
        this.setState({
            name : '',
            email : '',
            phone : ''
        });
    }

    render() {
        return (
            <div>
                <form className="myForm" onSubmit={this.formSubmit}>
                    <div className="form-group">
                        <label htmlFor="nameInput">이름</label>
                        <input
                        className="form-control"
                        placeholder="이름.."
                        value={this.state.name}
                        onChange={this.formChange}
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
                        onChange={this.formChange}
                        name="email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumberInput">휴대폰 번호</label>
                        <input
                        className="form-control"
                        placeholder="전화번호.."
                        value={this.state.phone}
                        onChange={this.formChange}
                        name="phone"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                        Submit
                    </button>
                </form>
            </div>            
        );
    }
}

export default Form;
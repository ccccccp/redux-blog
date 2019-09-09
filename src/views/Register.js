import React, { Component } from 'react'
import fetchGet from '@/utils/fetchGet.js';
const registerTypes = {
  1: 'phone',
  2: 'email'
}

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registerType: 1,
      username: '',
      password: '',
      useremail: '',
      userphone: ''
    }
  }
  register = () => {
    const { registerType, useremail, username, userphone } = this.state;
    if (registerType === 1) {
      return alert("暂不支持手机注册")
    }
    if (!useremail || !username) {
      return alert("请完善信息")
    }

    fetchGet("/api2/register", {
      registerType,
      username,
      useremail
    }).then((res) => {
      if (res.errcode === 0) {
        alert("注册成功！请前往邮箱激活");
        this.isRegistered = true;
      }
    })

  }
  changeForm(key, val) {
    this.setState({
      [key]: val
    })
  }
  render() {
    const {
      registerType,
      username,
      password,
      useremail,
      userphone
    } = this.state;
    if (this.isRegistered && registerType === 2) {
      const emailOrigin = 'mail.' + useremail.slice(useremail.indexOf("@") + 1)
      return <div className="register-page">
        <a href={emailOrigin}>点击跳转至邮箱登录</a>
      </div>
    }
    return (
      <div className="register-page">
        <div className="tab-title">
          <div className={registerType === 1 ? 'active tab-item' : 'tab-item'}>手机号注册</div>
          <div className={registerType === 2 ? 'active tab-item' : 'tab-item'}>邮箱注册</div>
        </div>
        <div className="register-container">
          {
            registerType === 1
              ?/**手机号注册*/
              <div>
                <input type="text" value={userphone} />
              </div>

              :/**邮箱注册*/
              <div>
                <div className="form-group">
                  <label>用户名:<input type="text" value={username} onChange={({ target }) => this.changeForm("username", target.value)} /></label>
                </div>

                <div className="form-group">
                  <label>邮箱地址:<input type="text" value={useremail} onChange={({ target }) => this.changeForm("useremail", target.value)} /></label>
                </div>

              </div>
          }
          <div>
            <button className="submit-btn" onClick={this.register}>立即注册</button>
          </div>
        </div>
      </div>
    )
  }
}

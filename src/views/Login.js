import React, { Component } from 'react'
import fetchGet from '@/utils/fetchGet'
import { withRouter } from 'react-router-dom'
import request from '@/utils/request'
import getQueryString from '@/utils/getQueryString'

@withRouter
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  handleFormChange(name,val){
    this.setState({
      [name]:val
    })
  }
  handleSubmit = ()=>{
    console.log("登录")
    const {username,password} = this.state;
    request.post("/api2/user/login",{
      username,
      password
    }).then((res)=>{
      if(res.errcode ===0){
        alert("登录成功");
        const redirPath = getQueryString("redir") || '/'
        this.props.history.replace(redirPath)
      }else{
        alert("请检查用户名密码")
      }
    }).catch((e)=>{
      console.log(e);
    })
  }
  render() {
    const {
      username='',
      password=''
    } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label><span>用户名：</span><input type="text" value={username} onChange={(e)=>this.handleFormChange("username",e.target.value)} /></label>
        </div>
        <div class="form-group">
          <label><span>密码：</span><input type="password" value={password} onChange={(e)=>this.handleFormChange("password",e.target.value)} /></label>
        </div>
        <div><input onClick={this.handleSubmit} value="登录"/></div>
        </form>
      </div>
    )
  }
}

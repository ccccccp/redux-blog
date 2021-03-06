import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import styles from './frame.modules.less'
class Nav extends Component {
    render() {
        return (
                <div className={styles["nav"]}>
                    <NavLink to="/" exact={true}>首页</NavLink>
                    <NavLink to="/detail/222">详情</NavLink>
                </div>
        );
    }
}

export default Nav;
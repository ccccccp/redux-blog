import React, { Component } from 'react';
import Nav from './Nav.jsx';
import logoSrc from '@/assets/images/big.jpg';
import styles from './frame.modules.less'
class Frame extends Component {
    render() {
        console.log("render-frame")
        return (
            <div className={styles['app-layout']}>
                <div className={styles['header']}>
                    <div className={styles['logo']}>
                        <img src={logoSrc} alt="" />
                    </div>
                    <Nav />
                </div>
                <div className={styles['section']}>
                    {this.props.children}
                </div>
                <div className={styles['footer']}>
                    footer
                
                </div>
            </div>
        );
    }
}

export default Frame;
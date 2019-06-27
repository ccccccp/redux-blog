import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LeftNav from '@/components/commons/LeftNav.jsx';
import styles from '@/layouts/frame.modules.less';
import Preview from "@/components/Home/Preview";
@withRouter
export default class extends Component {
    render() {
        console.log("rendeee",this.props)
        const {id} = this.props.match.params;
        return (
            <div>
                <div className={styles["app-left"]}>
                    <LeftNav match={this.props.match} />
                </div>
                <div className={styles["app-section"]}>
                    <Preview id={id}/>
                </div>
                <div className={styles["app-right"]}>

                </div>
            </div>   
        );
    }
}
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '@/less/left-nav.less';
import * as navListActions from './LeftNavRedux.js';
@connect(state => ({ ...state.nav }), (dispatch) => {
    return {
        ...bindActionCreators(navListActions, dispatch)
    }
})
export default class extends Component {
    static defaultProps = {
        navData: []
    }
    static propTypes = {
        loadNav: PropTypes.func,
        loading: PropTypes.bool,
        error: PropTypes.bool,
        navData: PropTypes.array
    }
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.loadNav();
    }
    render() {
        const {loading,error,navData} = this.props;
        return (
            <div className={styles['left-nav']}>
                {
                    loading ?
                        (<a>导航加载中...</a>)
                        : error ?
                            (<a>首页</a>)
                            : (Array.isArray(navData) && navData.map(nav =>
                                <NavLink key={nav.name} to={`/app/preview/${nav.name}`}>{nav.text}</NavLink>
                            ))
                }
            </div>
        )

    }
}

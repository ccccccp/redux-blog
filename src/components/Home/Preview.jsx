import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PreviewList from '@/components/commons/PreviewList.js';
import LeftNav from '@/components/commons/LeftNav.jsx';
import { prevListActions } from '@/views/HomeRedux.js';
@connect(
  state => ({prevList: state.home.prevList}),
  dispatch => ({...bindActionCreators(prevListActions, dispatch)})
)
export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        let id = this.props.id || 0;
        this.props.loadArticles({ id });
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.id != nextProps.id) {
            this.props.loadArticles({ id: nextProps.id });
        }
    }
    render() {
        return (
            <PreviewList
                history={this.props.history}
                {...this.props.prevList} />
        );
    }
}

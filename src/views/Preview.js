import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PreviewList from '@/components/commons/PreviewList.js';
import { prevListActions } from './PreviewRedux.js';
@connect((state) => {
    return {
        prevList: state.preview.prevList
    }
}, (dispatch) => {
    return {
        ...bindActionCreators(prevListActions,dispatch)
    }
})
export default class Preview extends Component {
    static propTypes = {
        prevList: PropTypes.object,
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string.isRequired
            })
        })
    }
    static defaultProps = {
        match:{
            params:{
                id:0
            }
        }
    }
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.id != nextProps.match.params.id) {
            this.props.loadArticles({ id: nextProps.match.params.id });
        }
    }
    componentWillMount() {
        this.props.loadArticles({ id: this.props.match.params.id });
    }
    render() {
        return (
            <div>
                <div className="app-section">
                    <PreviewList
                        history={this.props.history}
                        {...this.props.prevList} />
                </div>
                <div className="app-right">

                </div>
            </div>
        );
    }
}
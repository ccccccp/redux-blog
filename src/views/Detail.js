import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {detailDataAction} from './DetailRedux.js';
import Detail from '@/components/Detail/Detail.jsx'
@connect((state)=>{
    return {
        detailData:state.detail.detailData
    }
},(dispatch)=>{
    return {
        ...bindActionCreators(detailDataAction,dispatch)
    }
})

export default class DetailPage extends Component {
    componentWillMount() {
        let id = this.props.match.params.id;
        this.props.loadDetail({id})
    }
    render() {
        const {loading,error} = this.props.detailData
        if(loading){
            return <div>文章正在加载中........</div>
        }
        if(error){
            return <div>文章加载失败!!</div>
        }
        return (
            <Detail {...this.props.detailData.detailData}/>
        );
    }
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PreviewItem from './PreviewItem.js';
import styles from '@/less/preview-list.less'
export default class PreviewList extends Component {
    static propTypes = {
        loading: PropTypes.bool,
        error: PropTypes.bool,
        articleList: PropTypes.arrayOf(PropTypes.object)
    }
    static defaultProps = {
        articleList: []
    }
    render() {
        const { loading, error, articleList} = this.props;
        console.log(this.props)
        if (error) {
            return <div>列表获取失败</div>
        }
        if (loading) {
            return <div>loading...</div>
        }
        return <div className={styles["preview-list-container"]}>
            {

                articleList.map((article, i) =>
                    <PreviewItem {...article} key={article.id}/>)
            }
        </div>
    }
}
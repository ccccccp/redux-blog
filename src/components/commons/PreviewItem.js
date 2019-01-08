import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
export default class Preview extends PureComponent {
    static proptypes = {
        id:PropTypes.number.isRequired,
        title:PropTypes.string.isRequired,//文章标题
        date:PropTypes.string,//文章日期
        desc:PropTypes.string//文章描述
    }
    render() {
        const {title,date,desc,id,link} = this.props;
        return (
            <NavLink to={`/detail/${link}`} className="article-preview-item">
                <h1 className="title">{title}</h1>
                <p className="desc">{desc}</p>
                <div className="bottom">
                    <span className="date">{date}</span>
                </div>
                
            </NavLink>
        );
    }
}
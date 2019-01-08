import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '@/less/detail.less';
const maxHeight = 1000;
class DetailTop extends Component {
    static propTypes = {
        detailTitle: PropTypes.string,
        detailTime: PropTypes.string,
        readNumber: PropTypes.string,
        detailContent: PropTypes.string
    }
    static defaultProps = {
        detailTitle: '',
        detailTime: '',
        readNumber: '',
        detailContent: ''
    }
    constructor(props) {
        super(props);
        this.createMarkup = this.createMarkup.bind(this);
        this.handleShowMore = ::this.handleShowMore;
    }
    state = {
        detailStyle: {},
        hasShowMore: false
    }
    componentDidMount() {
        console.log(this.refs.detailHtml.offsetHeight)
        if (this.refs.detailHtml.offsetHeight > 1000) {
            this.setState({
                hasShowMore: true,
                detailStyle: {
                    height: 1000
                }
            })
        }
    }
    componentWillUnmount() {
        this.createMarkup("")
    }
    createMarkup(__html) {
        return { __html };
    }
    handleShowMore() {
        this.setState({
            detailStyle: {
                height: "auto"
            },
            hasShowMore: false
        })
    }
    render() {
        const {
            detailTitle,
            detailTime,
            readNumber,
            detailContent
        } = this.props;
        const { detailStyle, hasShowMore } = this.state;
        return (
            <div className={styles['detail-container']}>
                <div className={styles["main"]}>
                    <div className={styles["detail-top"]}>
                        <h2 className={styles["detail-title"]}>{detailTitle}</h2>
                        <div className={styles["tips"]}>
                            <span classname={styles["detail-time"]}>{detailTime}</span>
                            <div className={styles["read-number"]}>{readNumber}</div>
                        </div>
                    </div>
                    <div className={styles["detail-content"]}>
                        <div className={styles["detail-html"]}
                            ref="detailHtml"
                            style={detailStyle}
                            dangerouslySetInnerHTML={this.createMarkup(detailContent)}>
                        </div>
                        {
                            hasShowMore &&
                            <div className={styles["show-more"]}>
                                <a onClick={this.handleShowMore}>阅读全文</a>
                            </div>
                        }
                    </div>
                </div>
                <aside>
                    right
                </aside>

            </div>
        );
    }
}

export default DetailTop;
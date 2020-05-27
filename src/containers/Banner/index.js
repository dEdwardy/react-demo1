import React, { Component } from 'react';
import { connect } from 'react-redux'
import './index.scss'
import { getBanners } from '../../store/modules/banner/actionCreator'
import { Carousel } from 'antd'
import {  createFromIconfontCN } from "@ant-design/icons";
const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_1841865_jfeau4m4mee.js",
});
class Banner extends Component {
    state = { colors: [], current: 0 }
    constructor(props) {
        super(props)
        console.log(this.props.getBanner)
    }

    componentDidMount() { }

    beforeChange(from, to) {

    }
    prev(){
        this.refs.banner.prev()
    }
    next(){
        this.refs.banner.next()
    }
    componentDidMount() {
        this.props.getBanner();
    }
    render() {
        return (
            <div className="banner-wrap" >
                <div className="banner-content">
                    <Carousel ref="banner" autoplay >
                        {
                            this.props.banners.banners.map((item, index) => {
                                return (
                                    <img key={index} src={item.src} />

                                );
                            })
                        }

                    </Carousel>
                    <a className="arrow-left" onClick={() => this.prev()}>
                        <IconFont type="iconzuo"  style={{fontSize:'40px'}} />
                    </a> 
                    <a className="arrow-right" onClick={() => this.next()}>
                        <IconFont type="iconyou" style={{fontSize:'40px'}} />
                    </a> 
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        banners: state.banner
    }
}

const mapDispatchToProps = dispatch => ({
    getBanner() {
        let action = getBanners()
        console.log(action)
        dispatch(action)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Banner)
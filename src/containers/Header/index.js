import React, { Fragment } from "react";
import { Input, Dropdown, Menu } from "antd";
import { SearchOutlined, createFromIconfontCN } from "@ant-design/icons";
import img from '../../assets/img/top.png'
import "./index.scss";
const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_1841865_rgqy6x91w1.js",
});
export default function () {
    const menuList = [
        {
            text: "我的主页",
            icon: "iconuser",
        },
        {
            text: "我的消息",
            icon: "iconemail",
        },
        {
            text: "我的等级",
            icon: "icondengji",
        },
        {
            text: "VIP会员",
            icon: "iconVIP",
        },
        {
            text: "个人设置",
            icon: "iconuser",
        },
        {
            text: "实名认证",
            icon: "iconrenzheng",
        },
        {
            text: "退出",
            icon: "icontuichu",
        },
    ];
    const subNav = [
        {
            text: "推荐",
            id: 0,
        },
        {
            text: "排行榜",
            id: 1,
        },
        {
            text: "歌单",
            id: 2,
        },
        {
            text: "主播电台",
            id: 3,
        },
        {
            text: "歌手",
            id: 4,
        },
        {
            text: "新碟上台",
            id: 5,
        },
    ];
    const nav = ["发现音乐", "我的音乐", "朋友", "商城", "音乐人", "下载客户端"];
    const menu = (
        <Menu theme="dark" style={{ backgroundColor: "#000" }}>
            {menuList.map((item, index) => (
                <Menu.Item key={index}>
                    <div style={{ padding: "0 12px" }}>
                        <a>
                            <IconFont type={item.icon} style={{ marginRight: "6px" }} />
                            {item.text}
                        </a>
                    </div>
                </Menu.Item>
            ))}
        </Menu>
    );
    const prefix = <SearchOutlined className="pointer" />;
    return (
        <Fragment>
            <div className="header">
                <div className="header-top">
                    <div className="content">
                        <h1 className="logo">Cloud Music</h1>
                        <ul>
                            {nav.map((item, index) => (
                                <li key={index} style={{position:'relative'}}>
                                    <a>{item}</a>
                                    <span className="cor" style={{backgroundImage:'+rl('+img+') no-repeat 0 9999px'}}>&nbsp;</span>
                                    {/* <IconFont className="cor" type="icontriangle" /> */}
                                </li>
                            ))}
                        </ul>
                        <div className="header-user">
                            <Dropdown placement="bottomCenter" overlay={menu}>
                                <img src="http://p4.music.126.net/48zE_x_DOiz5pfcWPm2EZA==/1371091002525122.jpg?param=30y30" />
                            </Dropdown>
                        </div>
                        <a className="header-creator">创作者中心</a>

                        <div className="header-input">
                            <Input className="top-search-input" prefix={prefix} allowClear />
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-wrap">
                        <ul>
                            {subNav.map((item) => (
                                <li key={item.id}>
                                    <a>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

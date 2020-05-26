import React, { Component } from 'react';
import './index.scss'
import { Carousel } from 'antd'
export default class Banner extends Component {
    state = { colors: [], current: 0 }
    constructor(props) {
        super(props)
    }



    beforeChange(from, to) {
        console.log(from, to)
    }
    render() {
        const list = [
            {
                src: 'http://p1.music.126.net/DpzcCKT0Rui51f5LUltiUg==/109951165016275773.jpg?imageView&quality=89'
            }, {
                src: 'http://p1.music.126.net/6LxsGneAC2BPO_5VkMnEfQ==/109951165016281402.jpg?imageView&quality=89'
            }, {
                src: 'http://p1.music.126.net/R8GPoYxPNsotz5Mcai9qvw==/109951165014157731.jpg?imageView&quality=89'
            }, {
                src: 'http://p1.music.126.net/xn2iAm2aUuIWIiN3b-LhWw==/109951165014179896.jpg?imageView&quality=89'
            }, {
                src: 'http://p1.music.126.net/6g3zhWHZUe-WzRguFxd-oA==/109951165016301546.jpg?imageView&quality=89'
            }, {
                src: 'http://p1.music.126.net/A-jGOclY9kcBBqrgvlvCkw==/109951165014193788.jpg?imageView&quality=89'
            }, {
                src: 'http://p1.music.126.net/vEvHoukKrLKsaatA_8ktbg==/109951165014270091.jpg?imageView&quality=89'
            }, {
                src: 'http://p1.music.126.net/JCahgwy7T3V35qtG9720OA==/109951165014273671.jpg?imageView&quality=89'
            }, {
                src: 'http://p1.music.126.net/Z-RBlvTjR__WaRXl_hjW0w==/109951165014818029.jpg?imageView&quality=89'
            }

        ]

        return (
            <div className="banner-wrap" >
                <div className="banner-content">
                    <Carousel autoplay beforeChange={this.beforeChange.bind(this)}>
                        {
                            list.map((item, index) => {
                                return (
                                    <img key={index} src={item.src} />

                                );
                            })
                        }

                    </Carousel>

                </div>

            </div>
        )
    }
}
//@flow
import * as React from 'react';
import classnames from 'classnames';
import './Banner.less';

// SVGs
import background from '../../assets/2018/pixelOslo_background_l1.svg';
import fogLayer from '../../assets/2018/pixelOslo_fog_l2.svg';
import cityLayer from '../../assets/2018/pixelOslo_new_city-02.svg';
import logo from '../../assets/2018/pixelOslo_logo_no_text_l4.svg';
import cloud1 from '../../assets/2018/cloud_1.svg';
import cloud2 from '../../assets/2018/cloud_2.svg';
import cloud3 from '../../assets/2018/cloud_3.svg';
import cloud4 from '../../assets/2018/cloud_4.svg';
import cloud5 from '../../assets/2018/cloud_5.svg';

type BannerProps = {
}

type BannerState = {
    bannerHeight: number
}

class Banner extends React.Component<BannerProps, BannerState> {
    render() {

        let bannerClass = classnames({
            'banner': true
        })

        return (
            <div className={bannerClass}>
                <img className="background" src={background} />
                <img className="fog-layer" src={fogLayer} />
                <img className="city-layer" src={cityLayer} />
                <img className="cloud1-layer" src={cloud1} />
                <img className="cloud2-layer" src={cloud2} />
                <img className="cloud3-layer" src={cloud3} />
                <img className="cloud4-layer" src={cloud4} />
                <img className="cloud5-layer" src={cloud5} />
                <img className="cloud6-layer" src={cloud4} />
                <img className="cloud7-layer" src={cloud3} />
                <img className="cloud8-layer" src={cloud2} />
                <img className="logo-layer" src={logo} />
                <div className="logo-text">
                    <h1>JAVAZONE 2018</h1>
                </div>
            </div>
        )
    }
}

export default Banner;
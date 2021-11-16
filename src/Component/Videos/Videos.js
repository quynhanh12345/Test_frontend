import React, { Component } from 'react';
import video1 from '../../imgs/videos/video_1.png';
import error from '../../imgs/videos/error.png';
import arrow from '../../imgs/videos/arrow.png';
import h from '../../imgs/videos/h.png';
import drink from '../../imgs/videos/drink.png';
import angry from '../../imgs/videos/angry.png';
import hwhite from '../../imgs/videos/hwhite.png';
import heartwhite from '../../imgs/videos/heartwhite.png';
import w from '../../imgs/videos/w.png';
import boom from '../../imgs/videos/boom.png';

class Videos extends Component {
    render() {
        return (
            <div className="video">
                <div className="text">
                    <h2 className="font-h2 mb-2">WHAT HAPPENED</h2>
                    <span className="font-text-contentMont mt-1">
                        How to create mobile-optimized videos in minutes. Not a designer,
                        every team makes a lot of videos Can be trimmed. Take the first
                    </span>
                    <button className="see-more mb-5">
                        <span className="text-button">SEE MORE</span>
                    </button>
                </div>
                <div className="video">
                    <img src={video1} alt="" />
                </div>
                <div className="decorative-video-01">
                    <img src={error} alt="" />
                </div>
                <div className="decorative-video-02">
                    <img src={arrow} alt=""
                    />
                </div>
                <div className="decorative-video-03">
                    <img src={h} alt=""
                    />
                </div>
                <div className="decorative-video-04">
                    <img src={drink} alt=""
                    />
                </div>
                <div className="decorative-video-05">
                    <img src={hwhite} alt=""
                    />
                </div>
                <div className="decorative-video-06">
                    <img src={heartwhite} alt="" />
                </div>
                <div className="decorative-video-07">
                    <img src={w} alt="" />
                </div>
                <div className="decorative-video-08">
                    <img src={angry} alt="" />
                </div>
                <div className="decorative-video-09">
                    <img src={boom} alt="" />
                </div>
            </div>
        );
    }
}

export default Videos;
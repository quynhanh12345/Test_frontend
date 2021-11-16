import React, { Component } from 'react';
import issue_01 from '../../imgs/news/issue_01.png';
import issue_02 from '../../imgs/news/issue_02.png';
import issue_03 from '../../imgs/news/issue_03.png';
import issue_04 from '../../imgs/news/issue_04.png';
import issue_05 from '../../imgs/news/issue_05.png';
import issue_06 from '../../imgs/news/issue_06.png';
import issue_07 from '../../imgs/news/issue_07.png';
import issue_08 from '../../imgs/news/issue_08.png';
import issue_09 from '../../imgs/news/issue_09.png';
import hot from '../../imgs/news/hot.png';

class Issues extends Component {
    render() {
        return (
            <div className="issues">
                <div className="header">
                    <h2 className="font-h2 mb-2">HAPPENED’S ISSUE</h2>
                    <span className="NotoSans">
                        모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
                        아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한
                        첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                    </span>
                    <button className="see-more">
                        <span className="text-button">SEE MORE</span>
                    </button>
                </div>
                <div className="content">
                    <div className="content-items items-01">
                        <h1 className="font-h2">WHPN ISSUE</h1>
                        <img src={issue_01} alt="" className="img_icon" />
                        <div className="content-object-01">
                            <img src={issue_02} alt="" />
                        </div>
                    </div>
                    <div className="content-items items-02">
                        <h2 className="font-h3">B BRAND</h2>
                        <img src={issue_03} alt="" className="img_image" />

                        <div className="content-object-04">
                            <img src={hot} alt="" />
                        </div>
                    </div>
                    <div className="content-items">
                        <h2 className="font-h3">C BRAND</h2>
                        <img src={issue_04} alt="" className="img_image"
                        />
                    </div>
                    <div className="content-items">
                        <h2 className="font-h3">D BRAND</h2>
                        <img src={issue_05} alt="" className="img_image"
                        />
                    </div>
                    <div className="content-items items-05">
                        <h2 className="font-h3">E BRAND</h2>
                        <img src={issue_06} alt="" className="img_image" />
                        <div className="content-object-05">
                            <img src={issue_07} alt="" />
                        </div>
                    </div>
                </div>

                <div className="content-object-02">
                    <img src={issue_08} alt=""
                    />
                </div>
                <div className="content-object-03">
                    <img src={issue_09} alt="" />
                </div>
            </div>

        );
    }
}

export default Issues;
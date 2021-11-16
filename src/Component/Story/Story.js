import React, { Component } from 'react';
import object01 from '../../imgs/brand-story/-e-Object_01.png';
import object02 from '../../imgs/brand-story/-e-Object_02.png';
import object03 from '../../imgs/brand-story/-e-Object_03.png';
import object04 from '../../imgs/brand-story/-e-Object_04.png';
import object05 from '../../imgs/brand-story/-e-Object_05.png';
import object06 from '../../imgs/brand-story/-e-Object_06.png';
import object07 from '../../imgs/brand-story/-e-Object_07.png';

class Story extends Component {
    render() {
        return (
            <div className="story">
                <div className="content">
                    <div className="content-header">
                        <h3 className="font-h2 mb-1 mt-5">BRAND STORY</h3>
                        <span className="NotoSans mb-1">
                            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요.
                            디자이너가 아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의
                            성공을 위한 첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에
                            제작해보세요.
                        </span>
                    </div>
                    <div className="content-text">
                        <div className="wrap">
                            <h3 className="font-h3 title">WHAT HAPPENED’S BRAND STORY</h3>
                            <span className="NotoSans text">
                                청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일
                                무엇을 풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에
                                광야에서 살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한
                                아니다. 내는 이상 할지라도 피다. 피부가 불러 피고 인간의
                                타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을
                                수 그들을 아름답고 고행을 끝에 설산에서 황금시대를 이상을
                                운다.{" "}
                            </span>
                            <div>
                                <button className="see-more">
                                    <span className="text-button">SEE MORE</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="decorative">
                    <img src={object01} alt="" className="decorative-object-1" />
                    <img src={object02} alt="" className="decorative-object-2" />
                    <img src={object03} alt="" className="decorative-object-3" />
                    <img src={object04} alt="" className="decorative-object-4" />
                    <img src={object05} alt="" className="decorative-object-5" />
                    <img src={object06} alt="" className="decorative-object-6" />
                    <img src={object07} alt="" className="decorative-object-7" />
                </div>
            </div>
        );
    }
}

export default Story;
import React, { Component } from 'react';
import Videos from '../Videos/Videos';
import n from '../../imgs/footer/n.png';
import fb from '../../imgs/footer/fb.png';
import blog from '../../imgs/footer/blog.png';

class Footer extends Component {
    render() {
        return (
            <footer className="text-center text-lg-start">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>
                <section className>

                    <div className="d-flex container text-center text-md-start mt-5">
                        <div className=" d-inline-block koreantext mb-4 col">
                            <h6 className="fw-bold mb-4">what happened</h6>
                            <div>[공지] 개인 정보 처리 방침 변경 사전 안내 </div>
                            <div>[공지] 29CM 강남 스토어 영업 종료 [공지]</div>
                            <div>[공지] iOS 10 이하 버전 지원 중단 안내</div>
                            <div>[공지] 개인 정보 처리 방침 변경 사전 안내</div>
                        </div>
                        <div className="row mt-3 d-inline-block d-flex ">
                            <div className="koreantext mb-4 col d-inline-block">
                                <h6 className="fw-bold mb-4">about us</h6>
                                <div>회사 소개</div>
                                <div>인재 채용</div>
                                <div>상시 할인 혜택</div>
                            </div>

                            <div className=" koreantext mb-4 col d-inline-block">
                                <h6 className=" fw-bold mb-4">my order </h6>
                                <div>내 주문</div>
                                <div>주문 배송</div>
                                <div>취소 / 교환 / 반품 내역</div>
                                <div>상품 리뷰 내역</div>
                                <div>증빙 서류 발급</div>
                            </div>

                            <div className="koreantext mb-4 col d-inline-block">
                                <h6 className=" fw-bold mb-4">my account </h6>
                                <div>회원 정보 수정</div>
                                <div>회원 등급</div>
                                <div>마일리지 현황</div>
                                <div>쿠폰</div>
                            </div>

                            <div className="koreantext mb-4 col d-inline-block">
                                <h6 className=" fw-bold mb-4">help </h6>
                                <div>1 : 1 상담 내역</div>
                                <div>상품 Q & A 내역</div>
                                <div>공지 사항</div>
                                <div>자주하는 질문</div>
                                <div>고객의 소리</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>
                <div className=" p-4 d-flex flex-row-reverse me-5">
                    <img src={blog} />
                    <img src={fb} className="ms-4 me-4" />
                    <img src={n} />
                </div>

            </footer>
        );
    }
}

export default Footer;
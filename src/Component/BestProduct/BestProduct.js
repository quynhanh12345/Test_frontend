import React, { Component } from 'react';
import bestproduct1 from '../../imgs/best-products/스크린샷 2021-04-16 오후 3.01.27.png';
import producticon1 from '../../imgs/best-products/producticon1.png';
import producticon2 from '../../imgs/best-products/producticon2.png';
import producticon3 from '../../imgs/best-products/producticon3.png';
import bestproduct2 from '../../imgs/best-products/Layer 674.png';
import bestproduct3 from '../../imgs/best-products/Rectangle 670 copy 2.png';



class BestProduct extends Component {
    render() {
        return (
            <div className="product">
                <div className="bestProduct " >
                    <div className="bestProduct-intro">
                        <h3 className="font-h2 mb-1 mt-5">BEST PRODUCT</h3>
                        <span className="Montserrat">
                            How to create mobile-optimized videos in minutes. Not a
                            designer, every team makes a lot of videos Can be trimmed. Take
                            the first
                        </span>
                    </div>
                    <div className="bestProduct-content">
                        <div className="product">
                            <div className="product-items">
                                <img src={bestproduct1} alt="" className="product-items-img" />
                                <img src={producticon1} alt="" className="product-items-order" />
                                <div className="product-items-intro">
                                    <span className="Montserrat">How to create mobile-optimized</span>
                                    <button className="Montserrat">Go</button>
                                </div>
                            </div>

                            <div className="product-items">
                                <img src={bestproduct2} alt="" className="product-items-img" />
                                <img src={producticon2} alt="" className="product-items-order"
                                />
                                <div className="product-items-intro">
                                    <span className="Montserrat">How to create mobile-optimized</span>
                                    <button className="Montserrat">Go</button>
                                </div>
                            </div>

                            <div className="product-items">
                                <img src={bestproduct3} alt="" className="product-items-img" />
                                <img src={producticon3} alt="" className="product-items-order" />
                                <div className="product-items-intro">
                                    <span className="Montserrat">How to create mobile-optimized</span>
                                    <button className="Montserrat">Go</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default BestProduct;
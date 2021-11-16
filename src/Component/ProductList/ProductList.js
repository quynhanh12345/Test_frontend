import React, { Component } from 'react';
import img_01 from '../../imgs/products/img_01.png';
import img_02 from '../../imgs/products/img_02.png';
import img_03 from '../../imgs/products/img_03.png';
import img_04 from '../../imgs/products/img_04.png';
import img_05 from '../../imgs/products/img_05.png';
import img_06 from '../../imgs/products/img_06.png';
import img_07 from '../../imgs/products/img_07.png';
import img_08 from '../../imgs/products/img_08.png';
import img_09 from '../../imgs/products/img_09.png';
import img_010 from '../../imgs/products/img_010.png';
import img_011 from '../../imgs/products/img_011.png';
import img_012 from '../../imgs/products/img_012.png';
import img_013 from '../../imgs/products/img_013.png';
import img_014 from '../../imgs/products/img_014.png';
import img_015 from '../../imgs/products/img_015.png';
import img_016 from '../../imgs/products/img_016.png';
import img_017 from '../../imgs/products/img_017.png';
import img_018 from '../../imgs/products/img_018.png';
import img_019 from '../../imgs/products/img_019.png';
import img_020 from '../../imgs/products/img_020.png';
import img_021 from '../../imgs/products/img_021.png';
import img_022 from '../../imgs/products/img_022.png';
import img_023 from '../../imgs/products/img_023.png';
import img_024 from '../../imgs/products/img_024.png';
import img_025 from '../../imgs/products/img_025.png';
import hearticon from '../../imgs/products/Heart icon.png';


class ProductList extends Component {
    render() {
        let productList = [img_01, img_02, img_03, img_04, img_05, img_06, img_07, img_08, img_09, img_010, img_011, img_012, img_013, img_014, img_015, img_016, img_017, img_018, img_019, img_020, img_021, img_022, img_023, img_024, img_025]
        let arr_product = new Array(25).fill(0);
        return (
            <div className="normalProduct">
                <div className="row row-cols-5 ">
                    {arr_product.map((val, i) => {
                        console.log(val);
                        return (
                            <div className="product" key={i}>
                                <div className="product-img">
                                    <img src={productList[i]} alt="" />
                                </div>
                                <div className="product-info">
                                    <div>
                                        <span className="product-info-title font-product-title">
                                            [What happen] How to create{" "}
                                        </span>
                                    </div>
                                    <div className="test">
                                        <span className="product-info-price font-product-blur">
                                            2,500 won
                                        </span>
                                        <div className="product-info-like font-product-blur">
                                            <img src={hearticon} alt="" />
                                            <span>236</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <button className="see-more">
                        <span className="text-button">SEE MORE</span>
                    </button>
                </div>
            </div>

        );
    }
}

export default ProductList;
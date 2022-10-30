import React from 'react'
import './chitietsp.css';
const ChiTietSP = () => {
    return (
        <div>
            <div className="product-detail">
                <div className="grid">
                    <div className="hero-content">
                        <h1>Thông tin sản phẩm</h1>
                    </div>
                    <div className="product_ct1">
                        {/* html render */}
                        <div className="product-slide">
                            <img className="product-img" src="https://levents.asia/wp-content/uploads/2022/08/z3745137680825_c872ef151b0e7d2ea41877ab3e0d8815-400x500.jpg" alt="sp" />
                        </div>
                        <div className="product-infomation">
                            <div className="product-title">
                                <h1>LEVENTS® | DORAEMON POPULAR CAT TEE</h1>
                            </div>
                            <span style={{ color: 'rgb(122, 122, 122)' }} className="product-id">Mã sản phẩm: 13548</span>
                            <div className="pro-price">
                                <h3>395.000 VNĐ</h3>
                            </div>
                            <form id="add-item-form" className="add-item-form" name="variant-form" action="#">
                                <div className="quantity-area">
                                    <input id="reduce-quantity-btn" type="button" defaultValue="-" className="change-quantity-btn" />
                                    <input id="quantity" min={1} name="quantity" type="text" defaultValue={1} />
                                    <input id="raise-quantity-btn" type="button" defaultValue="+" className="change-quantity-btn" />
                                </div>
                                <div className="underline">
                                    <button id="add-product-to-cart" className="hero-btn-full" type="submit">
                                        THÊM VÀO GIỎ
                                    </button>
                                    <button id="add-product-to-cart" className="hero-btn-full" type="submit">
                                        MUA HÀNG
                                    </button>
                                </div>
                            </form>
                            <div className="description-section section">
                                <h3>Mô tả</h3>
                                <ul>
                                    <li className="mota-sp">
                                        LEVENTS® | DORAEMON POPULAR CAT TEE MATERIAL: LÌ VEN
                                        ORIGINAL – Phiên bản bề mặt vải không đổ lông mang cảm giác
                                        thoáng mát SIZE: 1/2/3/4 Sản phẩm thuộc Special Collection
                                        “Make everything popular” DORAEMON | LEVENTS®
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChiTietSP
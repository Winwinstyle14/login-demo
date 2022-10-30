import React from 'react'

const ShopAo = () => {
    return (
        <div>
            <div className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col l-2 m-0 c-0">
                            <nav className="category">
                                <h4 className="category_heading">Danh mục sản phẩm</h4>
                                <ul className="category_list">
                                    <li className="category_list_item category_item_active">
                                        <a href className="category_link">Áo Cộc Tay</a>
                                    </li>
                                    <li className="category_list_item">
                                        <a href className="category_link">Áo Dài tay</a>
                                    </li>
                                    <li className="category_list_item">
                                        <a href className="category_link">Áo Khoác</a>
                                    </li>
                                    <li className="category_list_item">
                                        <a href className="category_link">Áo Hoodie</a>
                                    </li>
                                    <li className="category_list_item">
                                        <a href className="category_link">Quần Dài</a>
                                    </li>
                                    <li className="category_list_item">
                                        <a href className="category_link">Quần Short</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col l-10 m-12 c-12">
                            <div className="home_product">
                                <div className="row">
                                    {/* sp1 */}
                                    <div className="grid__column2_4 m-4 c-6">
                                        <div className="product-card">
                                            <a href="/chitietsanpham.html" className="product_link">
                                                <div className="product-frame">
                                                    <img src="https://levents.asia/wp-content/uploads/2022/08/z3745137680825_c872ef151b0e7d2ea41877ab3e0d8815-400x500.jpg" className="product-img" alt="" />
                                                </div>
                                                <div className="product-caption">
                                                    <p className="product-name">
                                                        LEVENTS® | DORAEMON POPULAR CAT TEE
                                                    </p>
                                                    <p className="product-price">395.000 vnđ</p>
                                                </div>
                                                <div className="product-action">
                                                    <span><i className="fa-solid fa-cart-plus" /></span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    {/* sp1 */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShopAo
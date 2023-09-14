// import React from 'react';
import style from './Added.module.css'

const Added = () => {
    const savedFormData = localStorage.getItem('formData');
    const formData = savedFormData ? JSON.parse(savedFormData) : null;

    return (
        <div className={style['wrapper']}>
            <div className={style['product__added']}>
                <div className={style['product__added-navbar']}>
                    <h3 className={style['added__navbar-h3']}>Name</h3>

                    <h3 className={style['added__navbar-h3']}>Price</h3>
                    <h3 className={style['added__navbar-h3']}>Category</h3>
                </div>
                <div className={style['product__added-item']}>
                    {formData && (
                        <div className={style['added__item']}>
                            <h3 className={style['added__navbar-h3']}>{formData.productName}</h3>
                            <h3 className={style['added__navbar-h3']}>{formData.productPrice}</h3>
                            <h3 className={style['added__navbar-h3']}>{formData.productCategory}</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Added

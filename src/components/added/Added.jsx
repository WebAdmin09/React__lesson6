import style from './Added.module.css'

const Added = () => {
    return (
        <div>
            <div className={style['product__added']}>
                <div className={style['product__added-navbar']}>
                    <h4 className={style['added__navbar-h3']}>ID</h4>
                    <h3 className={style['added__navbar-h3']}>Name</h3>
                    <h3 className={style['added__navbar-h3']}>Price</h3>
                    <h3 className={style['added__navbar-h3']}>Category</h3>
                </div>
                <div className={style['product__added-item']}>
                    
                </div>
            </div>
        </div>
    )
}

export default Added

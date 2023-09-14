import style from './ProductForm.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Button } from 'react-bootstrap';
import { useState } from 'react';
import Added from '../added/Added';
import { category } from '../categoriesData';

const ProductForm = () => {
    const [formData, setFormData] = useState({
        productName: '',
        productPrice: '',
        productCategory: 'option1',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className={style['some']}>
            <div className={style['wrapper']}>
                <div className="container">
                    <div className={style['product__add']}>
                        <div className={style['product__form']}>
                            <form className="w-50 mx-auto" onSubmit={handleSubmit}>
                                <Row>
                                    <Form.Group className="mb-3" controlId="productName">
                                        <Form.Label>Product Name</Form.Label>
                                        <Form.Control
                                            name="productName"
                                            onChange={handleChange}
                                            value={formData.productName}
                                            required
                                            type="text"
                                            placeholder="Product name"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3" md={6} controlId="productPrice">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control
                                            name="productPrice"
                                            onChange={handleChange}
                                            value={formData.productPrice}
                                            required
                                            type="number"
                                            placeholder="Product price"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3" md={6} controlId="productCategory">
                                        <Form.Label>Todo category</Form.Label>
                                        <Form.Select
                                            name="productCategory"
                                            onChange={handleChange}
                                            value={formData.productCategory}>
                                            {category.map((el) => (
                                                <option key={el} value={el}>
                                                    {el}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Button className={style['product__btn']} type="submit">Add</Button>
                            </form>
                        </div>
                        <Added />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductForm;

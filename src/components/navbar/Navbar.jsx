import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css'
import { category } from '../categoriesData';
import style from './Navbar.module.css'

const logout = () => {
    localStorage.clear();
    window.location.reload();
}


const Navbar = () => {
    return (
        <div className={style['wrapper']}>
            <div className="container">
                <nav className={style['navbar']}>
                    <h1 className={style['heading']}>Products</h1>
                    <Form className={style['form']}>
                        <InputGroup className={style['input']}>
                            <Form.Control
                                type='search'
                                className={style['search__input']}
                                placeholder="Search..."
                            />
                            <Form.Select>
                                {category.map((el) => (
                                    <option key={el} value={el}>
                                        {el}
                                    </option>
                                ))}
                            </Form.Select>
                        </InputGroup>
                    </Form>
                </nav>
                <div className={style['back-wrapper']}>
                    <button onClick={logout} className={style['reload__btn']}>LogOut</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar

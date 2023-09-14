import { useRef } from 'react'
import HomePage from './HomePage'
import './LoginPage.scss'

const LoginPage = () => {
    const email = useRef()
    const password = useRef()

    const getEmail = localStorage.getItem('emailData')
    const getPasswrod = localStorage.getItem('passwordData')
    const handleSubmit = () => {
        if (email.current.value === 'admin@gmail.com' && password.current.value === '12345') {
            localStorage.setItem('emailData', 'admin@gmail.com')
            localStorage.setItem('passwordData', '12345')
        }
    }

    return (
        <div>
            {getEmail && getPasswrod ? <HomePage /> :
                <div className='wrapper'>
                    <div className="session">
                        <div className="left">
                        </div>
                        <form onSubmit={handleSubmit} className="log-in">
                            <h4>This is<span> PRODUCT </span>project.</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <div className="floating-label">
                                <input placeholder="Email" type="email" name="email" id="email" ref={email} />
                                <label htmlFor="email">Email:</label>
                            </div>
                            <div className="floating-label">
                                <input placeholder="Password" type="password" name="password" id="password" ref={password} />
                                <label htmlFor="password">Password:</label>
                            </div>
                            <button type="submit">Log in</button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default LoginPage

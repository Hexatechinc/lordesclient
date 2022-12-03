import {useState} from 'react'
import { useFormik } from 'formik'
import Helmet from 'react-helmet'
import Button from '../components/Button'



const UserForm = ({formType, action}) => {
    const [values, setValues] = useState()

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            role: ''
        },
        onSubmit: (values) => {
            console.log(values)
            action({
                variables: {
                    ...values
                }
            })
        },
        onChange: event => {
            setValues({
            ...values,
            [event.target.name]: event.target.value
            });
        }
    })

    return(
    <main className="">
        <Helmet>
            <meta charSet="utf-8" />
            {formType === 'signup'? <title>Sign Up - Lordes'</title> : <title>Sign In - Lordes'</title>}
        </Helmet>
        <header className="">
            <div className="">
            {formType === 'signup'? <h1>Sign Up</h1> : <h1 className="">Sign In</h1>}
            {/* <img src="" alt="" /> */}
            </div>
        </header>
        <form onSubmit={formik.handleSubmit} className="">
            <section className="">
                <label htmlFor="username" className="">Username:</label>
                <input
                    required
                    id="username"
                    name="username"
                    type="text"
                    placeholder=" enter a username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    className=""
                />
                </section>
                <section className="">
                <label htmlFor="email" className="">Email:</label>
                <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    placeholder=" enter your email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className=""
                />
                </section>
                <section className="">
                <label htmlFor="password" className="">Password:</label>
                <input
                    required
                    id="password"
                    name="password"
                    type="password"
                    placeholder=" enter your password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className=""
                />
                </section>
                {formType === 'signup' && (
                    <>
                        <section role="group" aria-labelledby='radio-button-group' >
                            <h3>I'm signing up as:</h3>
                            <input
                                id="client"
                                type="radio"
                                name="role"
                                value="client"
                                required
                                onChange={formik.handleChange}
                            />
                            <label htmlFor="role">client</label>
                            <br/>
                            <input
                                id="stylist"
                                type="radio"
                                name="role"
                                value="stylist"
                                required
                                onChange={formik.handleChange}
                            />
                            <label htmlFor="role">stylist</label>
                        </section>
                    </>
                )}
                <Button 
                    isPrimary={true} 
                    type='submit'
                    btnname={formType === 'signup'? 'SignUp': 'SignIn'} 
                    className=""
                    />
        </form>
    </main>)
}

export default UserForm
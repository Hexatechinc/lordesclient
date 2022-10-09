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
    <main className="w-full flex items-center justify-between flex-row-reverse p-4 rounded-md bg-neutral-100">
        <Helmet>
            <meta charSet="utf-8" />
            {formType === 'signup'? <title>Sign Up - Lordes'</title> : <title>Sign In - Lordes'</title>}
        </Helmet>
        <header className="p-1 relative border-2 border-black w-2/5 h-screen flex justify-center items-center font-semibold text-4xl">
            <div className="bg-rose-100 w-full h-full">
            {formType === 'signup'? <h1>Sign Up</h1> : <h1 className="relative top-3 left-16">Sign In</h1>}
            {/* <img src="" alt="" /> */}
            </div>
        </header>
        <form onSubmit={formik.handleSubmit} className="bg-neutral-100 relative w-3/5 h-screen flex flex-col justify-around items-start">
            <section className="relative left-28 w-8/12 flex justify-between items-center ">
                <label htmlFor="username" className="font-medium">Username:</label>
                <input
                    required
                    id="username"
                    name="username"
                    type="text"
                    placeholder=" enter a username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    className="border-b-2 border-black outline-none w-96 bg-neutral-100"
                />
                </section>
                <section className="relative left-28 w-8/12 flex justify-between items-center">
                <label htmlFor="email" className="font-medium">Email:</label>
                <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    placeholder=" enter your email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="outline-none border-b-2 border-black w-96 bg-neutral-100"
                />
                </section>
                <section className="relative left-28 w-8/12 flex justify-between items-center">
                <label htmlFor="password" className="font-medium">Password:</label>
                <input
                    required
                    id="password"
                    name="password"
                    type="password"
                    placeholder=" enter your password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="outline-none border-b-2 border-black w-96 bg-neutral-100"
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
                    className="relative left-1/4 mx-14"
                    />
        </form>
    </main>)
}

export default UserForm
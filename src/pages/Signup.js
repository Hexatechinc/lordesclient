import {useEffect, useState} from 'react'
import {useFormik} from 'formik'

const SignUp = () => {

    const [values, setValues] = useState()

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            username: '', 
            email: '',
            password: ''
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))
        }
    })

    useEffect(() => {
        document.title = 'Sign Up - Lordes'
    })
    
    return(
        <main>
            <header>
                <h1>Sign Up</h1>
            </header>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstname">First Name</label>
                <input
                    required
                    id="firstname"
                    name="firstname"
                    type="text"
                    placeholder="firstname"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                <label htmlFor="firstname">Last Name</label>
                <input
                    required
                    id="lastname"
                    name="lastname"
                    type="text"
                    placeholder="lastaname"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                <label htmlFor="username">Username</label>
                <input
                    required
                    id="username"
                    name="username"
                    type="text"
                    placeholder="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                <label htmlFor="email">email</label>
                <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <label htmlFor="password">email</label>
                <input
                    required
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />

                <button type='submit'>SignUp</button>
                <button type='submit'>SignUp as a stylist</button>
            </form>
        </main>
    )
}


export default SignUp
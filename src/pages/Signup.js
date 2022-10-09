import UserForm from '../templates/UserForm'
import {gql, useMutation} from '@apollo/client'
import {isSignedInVar} from '../cache'
import {useNavigate} from 'react-router-dom'

export const SIGNUP_USER = gql`
    mutation signUp($username: String!, $email: String!, $password: String!, $role: String!){
        signUp(username: $username, email: $email, password: $password, role: $role)
    }
`


const SignUp = () => {
    const navigate = useNavigate()
    const [signUp, {loading, error}] = useMutation(SIGNUP_USER, {
        onCompleted({signUp}) {
            if (signUp) {
                localStorage.setItem('token', signUp.token);
                isSignedInVar(true)
                navigate('/')
            }
        }
    })

    if(loading) return <p>loading...</p>
    if(error) return <p>An error occured</p>

    return(
        <UserForm action={signUp} formType="signup"/>
    )
}

export default SignUp
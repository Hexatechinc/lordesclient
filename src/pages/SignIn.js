import UserForm from '../templates/UserForm'
import {gql, useMutation} from '@apollo/client'
import {isSignedInVar} from '../cache'
import {useNavigate} from 'react-router-dom'

export const SIGNIN_USER = gql`
    mutation signIn($username: String, $email: String, $password: String!){
        signIn(username: $username, email: $email, password: $password)
    }
`


const SignIn = () => {
    const navigate = useNavigate()
    const [signIn, {loading, error}] = useMutation(SIGNIN_USER, {
        onCompleted({signIn}) {
            if (signIn) {
                localStorage.setItem('token', signIn);
                isSignedInVar(true)
                navigate('/')
            }
        }
    })

    if(loading) return <p>loading...</p>
    if(error) return <p>An error occured</p>

    return(
        <UserForm action={signIn} formType="signin"/>
    )
}

export default SignIn
import { useMutation, gql } from '@apollo/client'
import { isSignedInVar } from '../../cache'
import {useNavigate} from 'react-router-dom'
import ProfileForm from '../../templates/ProfileForm'


export const NEW_PROFILE = gql`
    mutation createProfile($bio: String, $profilePic: String ){
        createProfile(bio: $bio, profilePic: $profilePic) {
            id
            bio
            profilePic
            user{
                username
                role
            }
        }
}`


const NewProfile = () => {
    const navigate = useNavigate()
    const [data, { loading, error }] = useMutation(NEW_PROFILE, {
        onCompleted({ data }) {
            if (data.createProfile.user.role === 'USER') {
                isSignedInVar(true)
                navigate('/')
            }

            if (data.createProfile.user.role === 'STYLIST') {
                isSignedInVar(true)
                navigate('/onboarding/createcatalogue')
            }
        }
    })


    if(loading) return <p>loading...</p>
    if(error) return <p>An error occured</p>
    return (
        <>
            <ProfileForm action={data} userType={() => {
                if (data.createProfile.user.role === 'USER') {
                    return 'user'
                } else {
                    return 'stylist'
                }
            }} />
        </>
    )
}

export default NewProfile
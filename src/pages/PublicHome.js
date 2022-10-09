import {gql, useQuery} from '@apollo/client'
import Nav from '../components/Nav'


export const GET_USERS = gql`
    query GetUsers{
        users{
            id
            username
            email
        }
    }
`


const PublicHome = () => {
    const {data, loading, error} = useQuery(GET_USERS)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error</p>
    if(!data) return <p>NOT FOUND</p>
    // console.log(data)
    
    return(
        <>
        <Nav />
        <h1>This is the public home page!!</h1>
        {data.users&&
        data.users.map(user => (
            <div key={user.id}>
                <h2>{user.username}</h2>
                <p>{user.email}</p>
            </div>
        ))}
        </>
    )
}

export default PublicHome
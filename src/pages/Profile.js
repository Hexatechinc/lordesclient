import {gql, useQuery} from '@apollo/client'
import Nav from '../components/Nav'
// import {USER_DATA} from './Home'

export const GET_MY_PROFILE = gql`
  query GetMyProfile {
    me {
      username
      profile {
        bio
        profilePic
      }
      role
      sentRequests {
        id
        catItem {
          id
          itemCost
          itemName
          provider {
            username
          }
        }
      }
      services
      catalogue {
        itemCost
        itemDesc
        itemName
      }
    }
  }
`;

const Profile = () => {

    const {data, loading, error} = useQuery(GET_MY_PROFILE, {fetchPolicy: 'network-only'})
    if(loading) return <p>loading...</p>
    if(error) return <p>Error: {error.message}</p>
    if(data === undefined) return <p>ERROR</p>
    return(
        <main className="">
        <Nav />
        <h2>{data.me.username}</h2>
        <p>{data.me.profile.bio}</p>
        <p>{data.me.role}</p>
        </main>
    )
}


export default Profile
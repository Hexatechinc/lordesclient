import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import {gql, useQuery} from '@apollo/client'



export const GET_MY_DASHBOARD = gql`
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


const DashBoard = () => {
  const{data, loading, error } = useQuery(GET_MY_DASHBOARD)
  if (loading) return <p>loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if(data === undefined) return <p>ERROR</p>
    return(
        <main className="">
            <Nav />
            <main className="">
            <SideBar />
            <section className="">
                {`This is your dashboard!`}
            </section>
            </main>
        </main>
    )
}


export default DashBoard
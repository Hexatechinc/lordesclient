// import {useState} from 'react'
import {gql, useQuery} from '@apollo/client'
import DashBoard from './DashBoard'
import PublicHome from './PublicHome'


const IS_SIGNED_IN = gql`
    query IsUserSignedIn {
        isSignedIn @client
    }
`


const Home = () => {
    
    
    return(
        <>
        <IsSignedIn />
        </>
    )
}

export function IsSignedIn() {
    const { data } = useQuery(IS_SIGNED_IN);
    // console.log(data)
    return data.isSignedIn ? <DashBoard /> : <PublicHome />;
  }

export default Home

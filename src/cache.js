import {makeVar, InMemoryCache} from '@apollo/client'


export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                isSignedIn: {
                    read() {
                        return isSignedInVar()
                    }
                }
            }
        }
    }
})

export const isSignedInVar = makeVar(!!localStorage.getItem('token'))
import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Middleware operation
export const middleware = new ApolloLink( ( operation, forward ) => {
	// If session data exist in local storage, set value as session header.
	const session = ( process.browser ) ?  localStorage.getItem( "berre-session" ) : null;

	if ( session ) {
		operation.setContext( ( { headers = {} } ) => ( {
			headers: {
				"woocommerce-session": `Session ${ session }`
			}
		} ) );
	}
	return forward( operation );

} );

//Afterware operation.

export const afterware = new ApolloLink( ( operation, forward ) => {

	return forward( operation ).map( response => {
		//Check for session header and update session in local storage accordingly.

		const context = operation.getContext();
		const { response: { headers } }  = context;
		const session = headers.get( "woocommerce-session" );

		if ( session ) {
			if (process.browser ) {
				// Remove session data if session destroyed.
				if ( "false" === session ) {
					
					localStorage.removeItem( "berre-session" );
					// Update session new data if changed.
				} else if ( localStorage.getItem( "berre-session" ) !== session ) {
					localStorage.setItem( "berre-session", headers.get( "woocommerce-session" ) );
				}
			}
		}

		return response;

	} );
} );



//SECURITY TOKEN ADDING

const authLink = setContext((_, { headers }) => {
	// const router = useRouter()
	let token
	// get the authentication token from local storage if it exists
	if (typeof window !== 'undefined') {
		token = localStorage.getItem('auth');
	}
	// return the headers to the context so httpLink can read them
	return {
		headers: {
		...headers,
		authorization: token ? `Bearer ${token}` : "",
		}
	}
});

// Apollo GraphQL client.
const client = new ApolloClient({
	link:  middleware.concat( authLink.concat ( afterware.concat( createHttpLink({
		uri: 'https://shop.berre.ca/graphql'
	}) ) ) ),
	cache: new InMemoryCache(),
	defaultOptions: {
		watchQuery: {
		  fetchPolicy: 'no-cache',
		  errorPolicy: 'ignore',
		},
		query: {
		  fetchPolicy: 'no-cache',
		  errorPolicy: 'all',
		},
	  }
  
});


export default client;



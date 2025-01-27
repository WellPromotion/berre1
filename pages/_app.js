import '../styles/globals.scss'
import 'react-multi-carousel/lib/styles.css';
import { ApolloProvider } from '@apollo/client'
import client from '../Components/ApolloClient'
import { AppProvider } from "../Components/Context/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
    </ApolloProvider>
  )
  
}

export default MyApp

import "../styles/tailwind.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import Layout from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apollo";
function MyApp({ Component, pageProps }) {
  console.log(
    `${process.env.AUTH0_BASE_URL}/api/graphql`,
    "`${process.env.AUTH0_BASE_URL}/api/graphql`"
  );

  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </UserProvider>
  );
}

export default MyApp;

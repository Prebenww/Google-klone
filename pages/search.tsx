import Head from "next/head";
import Header from "../components/Header";
import {API_KEY, CONTEXT_KEY} from "../keys";
import {responseSymbol} from "next/dist/server/web/spec-compliant/fetch-event";

const Search = ({results}) => {
    console.log(results)
    return (
       <div>
           <Head>
               <title>Search Results</title>
           </Head>

           {/*Header*/}
            <Header/>
           {/*Search results*/}
       </div>


    )
}

export default Search;

export async function getServerSideProps(context) {
    const useDummyData = false;

    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`
    ).then(response => response.json());


    //pass to client after server ahs rendered
    return {
        props: {
            results: data
        }
    }

}
import Head from "next/head";
import Header from "../components/Header";

const Search = () => {
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
import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Avatar from "../components/Avatar";
import {MicrophoneIcon, ViewGridIcon} from "@heroicons/react/solid";
import {SearchIcon} from "@heroicons/react/outline";
import Footer from "../components/Footer";
import {useRef} from "react";
import {useRouter} from "next/router";

const Home: NextPage = (props) => {
    // @ts-ignore
    const router = useRouter();
    const searchInputRef = useRef(null);

    // @ts-ignore
    const search = (e) => {
        e.preventDefault();
        // @ts-ignore
        const term = searchInputRef.current.value;

        if(!term) return;
        router.push(`/search?term=${term}`)
    }


    return (
        <div className='flex flex-col items-center  justify-center h-screen'>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>


            {/*header*/}
            <header
                className='flex w-full p-5 justify-between
            text-gray-700 text-sm'>

                {/*left*/}
                <div className={'flex space-x-4 items-center'}>
                    <p className='link'>About</p>
                    <p className='link'>Store</p>
                </div>

                {/*right*/}
                <div className={'flex space-x-4 items-center'}>
                    <p className='link'>Gmail</p>
                    <p className='link'>Images</p>

                    {/*Icon*/}
                    <ViewGridIcon className='h-10 w-10'/>
                    {/*Avatar*/}
                    <Avatar
                        url='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fso%2Frandom%2F&psig=AOvVaw2j4Sh608aCMe_vLe0xrxh4&ust=1648901270452000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJi6hofq8vYCFQAAAAAdAAAAABAD'/>
                </div>
            </header>

            {/*body*/}
            <form className='flex flex-col items-center mt-44 flex-grow w-4/5 '>
                <Image
                    src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png'
                    height={100}
                    width={300}
                />
                <div className='
                flex w-full mt-5
                hover:shadow-lg
                focus-within:shadow-lg
                max-w-md rounded-full border
                border-gray-200 px-5 py-3
                 sm:max-w-xl
                 xl:max-w-2xl
                 '
                >
                    <SearchIcon className='h-5 mr-3 text-gray-500 '/>
                    <input ref={searchInputRef} type='text' className='flex-grow focus:outline-none '/>
                    <MicrophoneIcon className='h-5'/>
                </div>
                <div
                    className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
                    <button onClick={search} className='btn'>Google Search</button>
                    <button onClick={search} className='btn'>I'm feeling lucky</button>
                </div>
            </form>
            {/*footer*/}
            <Footer/>
        </div>
    )
}

export default Home

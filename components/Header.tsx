import Image from "next/image";
import {useRouter} from "next/router";
import {useRef} from "react";
import {MicrophoneIcon, SearchIcon, XIcon} from "@heroicons/react/solid";
import Avatar from "./Avatar";
import {Head} from "next/document";
import HeaderOptions from "./HeaderOptions";


const Header = () => {
    const router = useRouter();
    const searchInputRef = useRef(null)

    // @ts-ignore
    const search = (e) => {
        e.preventDefault();

        // @ts-ignore
        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`)
    }

    return (
        <header className='sticky top-0 bg-white '>
            <div className='flex w-full p-6 items-center'>
                <Image
                    onClick={() => router.push('/')}
                    height={40}
                    width={120}
                    className='cursor-pointer'
                    src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png'/>
                <form
                    className='flex flex-grow border border-gray-100 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5 '>
                    <input className='flex-grow w-full focus:outline-none' ref={searchInputRef} type='text'/>
                    <XIcon
                        onClick={() => (searchInputRef.current.value = '')}
                        className='sm:mr-3 h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'/>
                    <MicrophoneIcon
                        className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'/>
                    <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex'/>
                    <button hidden type='submit' onClick={search}>
                    </button>
                </form>
                <Avatar className='ml-auto' url='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fso%2Frandom%2F&psig=AOvVaw2j4Sh608aCMe_vLe0xrxh4&ust=1648901270452000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJi6hofq8vYCFQAAAAAdAAAAABAD' />
            </div>
            {/*Header Options*/}
            <HeaderOptions />
        </header>
    )
}
export default Header;
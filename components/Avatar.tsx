import Image from "next/image";

const Avatar = ({url, className}) => {
    return (


        <img
            className={`rounded-full h-10 cursor-pointer 
            transition duration-150 transform hover:scale-110 
            ${className}`}
            loading='lazy'
            alt='profile-picture'
            src='/preben.jpeg'
        />

    )
}

export default Avatar;
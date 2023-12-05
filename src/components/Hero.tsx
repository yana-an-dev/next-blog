import Image from 'next/image'
import Link from 'next/link'
import profileImage from '../../public/images/yana-profile.jpeg'
export default function Hero() {
    return <section className='text-center'>
        <Image
            priority
            className='rounded-full mx-auto'
            src={profileImage} alt='picture of the author' width={200} height={200}></Image>
        <h2 className='text-3xl font-bold mt-2'>{'hi, I am Yana'}</h2>
        <h3 className='text-xl font-semibold'>Frontend engineer</h3>
        <p>A passionate programmer</p>
        <Link href='/contact'>
            <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">Contact me</button>
        </Link>
    </section>
}
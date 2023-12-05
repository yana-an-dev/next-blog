import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Post } from '@/service/posts';

type Prop = {
    post: Post;
    type: 'prev' | 'next';
}

export default function AdjacentPostCard({ post: { path, title, description }, type }: Prop) {
    return <Link className='relative w-full bg-black max-h-56'
        href={`/posts/${path}`}>
        <Image
            className='w-full opacity-40'
            src={`/images/posts/${path}.png`}
            alt={title}
            width={150}
            height={100}
        />
        <div>
            {type === 'prev' && <FaArrowLeft className='text-5xl m-4 text-yellow-300 transition-all hover:text-6xl' />}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col justify-around items-center text-white'>
                <h3 className='text-3xl font-bold'>{title}</h3>
                <p className=' font-bold'>{description}</p>
            </div>
            {type === 'next' && <FaArrowRight className='text-5xl m-4' />}
        </div>
    </Link>;
}
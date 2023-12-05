import { getPostData } from '../../../service/posts'
import Image from 'next/image'
import PostContent from '../../../components/PostContent';
import AdjacentPostCard from '../../../components/AdjacentPostCard';

type Props = {
    params: {
        slug: string;
    }
}


export default async function PostPage({ params: { slug } }: Props) {
    const postData = await getPostData(slug);
    const { title, path, prev, next } = postData;
    return (
        <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-md m-4'>
            <Image className='w-full h-1/5 max-h-[400px]' width={760} height={420} alt={title} src={`/images/posts/${path}.png`} />
            <PostContent post={postData} />
            <section className='flex shadow-md'>
                {prev && <AdjacentPostCard post={prev} type={'prev'} />}
                {next && <AdjacentPostCard post={next} type={'next'} />}
            </section>
        </article>);
}
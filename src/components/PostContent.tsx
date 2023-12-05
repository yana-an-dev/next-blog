import MarkdownViewer from './MarkdownViewer';
import { AiOutlineCalendar } from "react-icons/ai";
import { PostData } from '../service/posts';

export default function PostContent({ post }: { post: PostData }) {
    const { title, description, date, content } = post;
    return (
        <section className='flex flex-col p-4'>
            <div className='flex item-center self-end text-sky-600'>
                <AiOutlineCalendar />
                <p className='font-semibold ml-2'>{date.toString()}</p>
            </div>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='text-xl font-bold'>{description}</p>
            <div className='w-44 border-2 border-sky-500 mt-4 mb-8'></div>
            <MarkdownViewer content={content} />
        </section>
    )
}
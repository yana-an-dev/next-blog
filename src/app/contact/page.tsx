import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import ContactForm from '../../components/ContactForm';

const LINKS = [
    { icon: <AiFillGithub />, url: 'https://github.com/yana-an-dev' },
    { icon: <AiFillLinkedin />, url: 'https://www.linkedin.com/in/yana-an-dev/' },
    { icon: <AiFillYoutube />, url: 'www.youtube.com' }];

export default function ContactPage() {
    return <section className='flex flex-col items-center'>
        <h2 className='text-3xl font-bold my-2'>Contact me</h2>
        <ul className='flex'>
            {LINKS.map((link, index) =>
                <a className='flex gap-4 my-2 text-3xl hover:text-yellow-400' key={index} href={link.url} target='_blank' rel='noreferrer' >{link.icon}
                </a>)}
        </ul>
        <h2 className='text-3xl font-bold my-8'>Or send me an email!</h2>
        <ContactForm />
    </section >
}
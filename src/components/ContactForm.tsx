'use client'

import { useState, ChangeEvent, FormEvent } from 'react';
import Banner, { BannerData } from './Banner';
type Form = {
    from: string,
    subject: string,
    message: string
}
export default function ContactForm() {
    const [form, setForm] = useState<Form>({
        from: '',
        subject: '',
        message: ''
    })

    const [banner, setBanner] = useState<BannerData | null>(null);

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }))
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form);
        setBanner({ message: 'success!', state: 'error' });
        // setTimeout(() => {
        //     setBanner(null)
        // }, 3000)

    }
    return <section className='max-w-lg w-full '>
        {banner && <Banner banner={banner} />}
        <form onSubmit={onSubmit} className='w-full flex flex-col gap-2 my-4 p-4 bg-slate-900 rounded-lg text-white'>
            <label htmlFor='from' className='font-semibold'>Email</label>
            <input
                type='email'
                id='from' name='from' required autoFocus
                value={form.from}
                onChange={onChange}
                className='text-black'
            />
            <label htmlFor='subject' className='font-semibold'>Subject</label>
            <input
                type='text'
                id='subject' name='subject' required
                value={form.subject}
                onChange={onChange}
                className='text-black'
            />
            <label htmlFor='subject' className='font-semibold'>Subject</label>
            <textarea
                rows={10}
                id='message' name='message' required
                value={form.message}
                onChange={onChange}
                className='text-black'
            />
            <button className='bg-yellow-300 text-black hover:bg-yellow-200 p-1 rounded-md'>Submit</button>
        </form>
    </section>;
}
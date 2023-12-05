import Hero from '../../components/Hero';
const TITLE_CLASS = 'text-2xl front-bold text-gray-800 m-4'
export default function AboutPage() {
    return <section className='bg-gray-100 shadow-lg p-8 m-8 text-center'>
        <Hero />

        <h2 className={TITLE_CLASS}> Who Am I ?</h2>
        <p>

            I love front end development and build web apps to help people.<br />
            Currently I make health care applications to empower australians find the best health specialists.
                </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>HealthShare (-Now) <br />
        Agoda(-2020)<br />
        Samsung Electronics(-2016) </p>



    </section>
}
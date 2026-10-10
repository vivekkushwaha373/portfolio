import man from '../../assets/man.jpg'
import TypingEffect from 'react-typing-effect'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-scroll'
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa'

const focusAreas = ['Spring Boot', 'React', 'Node.js', 'AI Integrations', 'Microservices']
const proofPoints = [
    ['40+', 'agentic workflows'],
    ['10+', 'accounting modules'],
    ['6', 'microservices'],
]

const Home = () => {
    useGSAP(() => {
        const timeline = gsap.timeline()
        timeline.from('.hero-copy > *', {
            y: 28,
            duration: 0.75,
            opacity: 0,
            stagger: 0.08,
            ease: 'power3.out',
        })
        gsap.from('.hero-portrait', {
            scale: 0.94,
            y: 24,
            duration: 1,
            opacity: 0,
            ease: 'power3.out',
        })
    })

    return (
        <section id="home" className="section-shell min-h-screen pt-32 sm:pt-36 lg:pt-40">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="hero-copy">
                    <div className="eyebrow">Hello, I&apos;m</div>
                    <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
                        Vivek Kushwaha
                    </h1>
                    <div className="mt-5 min-h-12 text-2xl font-semibold text-cobalt sm:text-3xl">
                        <TypingEffect
                            text={['Full Stack Engineer', 'Java & Spring Boot Expert', 'React & Node.js Developer', 'AI Integrations Specialist']}
                            speed={80}
                            eraseSpeed={40}
                            eraseDelay={1500}
                            cursor="|"
                        />
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                        {focusAreas.map((area) => (
                            <span key={area} className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink/70 shadow-line">
                                {area}
                            </span>
                        ))}
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        <Link to="contact" spy={true} smooth={true} duration={500} offset={-92}>
                            <button type="button" className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 text-sm font-bold text-white shadow-glow transition hover:bg-cobalt">
                                Let&apos;s Connect <FaArrowRight />
                            </button>
                        </Link>
                        <a href="https://github.com/vivekkushwaha373" target="_blank" rel="noopener noreferrer" className="grid h-12 w-12 place-items-center rounded-full border border-ink/10 bg-white text-xl text-ink transition hover:border-ink hover:bg-ink hover:text-white" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/vivekkushwaha373" target="_blank" rel="noopener noreferrer" className="grid h-12 w-12 place-items-center rounded-full border border-ink/10 bg-white text-xl text-ink transition hover:border-cobalt hover:bg-cobalt hover:text-white" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                    </div>

                    <div className="mt-12 grid max-w-2xl gap-3 sm:grid-cols-3">
                        {proofPoints.map(([value, label]) => (
                            <div key={label} className="rounded-lg border border-ink/10 bg-white p-5 shadow-line">
                                <div className="text-3xl font-extrabold text-ink">{value}</div>
                                <div className="mt-1 text-sm font-semibold text-ink/60">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hero-portrait relative">
                    <div className="absolute -left-4 top-12 hidden h-24 w-24 rounded-lg bg-mint/20 lg:block"></div>
                    <div className="absolute -right-4 bottom-20 hidden h-28 w-28 rounded-full bg-clay/20 lg:block"></div>
                    <div className="relative overflow-hidden rounded-lg border border-ink/10 bg-white p-3 shadow-glow">
                        <img src={man} alt="Vivek Kushwaha" className="aspect-[4/5] w-full rounded-lg object-cover object-top" />
                        <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-white/90 p-4 shadow-line backdrop-blur">
                            <div className="text-sm font-bold text-ink">Full Stack Developer</div>
                            <div className="mt-1 text-sm text-ink/60">Hyderabad / Bangalore</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home

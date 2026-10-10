import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const profileSections = [
    {
        title: 'Personal Info',
        items: [
            ['NAME:', 'Vivek Kushwaha'],
            ['LOCATION:', 'Hyderabad / Bangalore'],
            ['EMAIL:', 'vivekkushwaha734@gmail.com'],
            ['LANGUAGES:', 'Hindi, English'],
        ],
    },
    {
        title: 'Education',
        items: [
            ['DEGREE:', 'B.Tech in Computer Science'],
            ['COLLEGE:', 'Jawaharlal Nehru University, New Delhi'],
            ['DURATION:', '2021 - 2025'],
        ],
    },
    {
        title: 'Technical Skills',
        items: [
            ['Languages:', 'Java, JavaScript, TypeScript, C, C++'],
            ['FullStack:', 'Spring Boot, Spring Security, Hibernate/JPA, Microservices, REST APIs, Resilience4j, Multithreading, NodeJS, React.js'],
            ['Databases & Messaging:', 'MongoDB, MySQL, Redis, Kafka'],
            ['Dev Tools:', 'Git, GitHub, VS Code, Cursor, Antigravity, Codex, Claude, Vite, Postman, Vercel, Netlify, Render'],
            ['DevOps & Cloud:', 'CI/CD (GitHub Actions), Docker, AWS, GKE, Kubernetes, Nginx'],
        ],
    },
]

const techStack = [
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', 'Java'],
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', 'JavaScript'],
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg', 'Spring Boot'],
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', 'React'],
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', 'Node.js'],
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg', 'Kubernetes'],
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', 'Docker'],
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', 'AWS'],
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg', 'Kafka'],
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', 'MongoDB'],
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', 'MySQL'],
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg', 'Redis'],
    ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg', 'Nginx'],
]

const About = () => {
    useGSAP(() => {
        gsap.from('.about-panel', {
            y: 48,
            duration: 0.8,
            opacity: 0,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#about',
                start: 'top 70%',
            },
        })
    })

    return (
        <section id="about" className="py-24 sm:py-28">
            <div className="section-shell">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <div className="eyebrow">About</div>
                        <h2 className="section-title mt-4 max-w-xl">
                            Personal Info, Education, and Technical Skills
                        </h2>

                        <div className="about-panel mt-8 flex flex-wrap gap-3">
                            <a href="https://github.com/vivekkushwaha373" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-cobalt">
                                <FaGithub /> GitHub
                            </a>
                            <a href="https://linkedin.com/in/vivekkushwaha373" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-bold text-ink transition hover:border-cobalt hover:text-cobalt">
                                <FaLinkedin /> LinkedIn
                            </a>
                            <a href="mailto:vivekkushwaha734@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-bold text-ink transition hover:border-clay hover:text-clay">
                                <FaEnvelope /> Email
                            </a>
                        </div>

                        <div className="about-panel mt-10 rounded-lg border border-ink/10 bg-white p-6 shadow-line">
                            <h3 className="text-xl font-extrabold text-ink">Tech Stack</h3>
                            <div className="mt-6 grid grid-cols-5 gap-3 sm:grid-cols-10 lg:grid-cols-5">
                                {techStack.map(([src, label]) => (
                                    <div key={label} className="grid aspect-square place-items-center rounded-lg border border-ink/10 bg-paper p-3" title={label}>
                                        <img src={src} alt={label} className="h-10 w-10 object-contain" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-5">
                        {profileSections.map((section) => (
                            <article key={section.title} className="about-panel rounded-lg border border-ink/10 bg-white p-6 shadow-line sm:p-7">
                                <h3 className="text-2xl font-extrabold text-ink">{section.title}</h3>
                                <div className="mt-5 grid gap-3">
                                    {section.items.map(([label, value]) => (
                                        <div key={label} className="grid gap-1 border-b border-ink/10 pb-3 last:border-b-0 last:pb-0 sm:grid-cols-[12rem_1fr]">
                                            <span className="text-sm font-bold text-cobalt">{label}</span>
                                            <span className="text-base leading-7 text-ink/70">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

import Card from '../ProjectCards/Card'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import aiinterv from '../../assets/autointerv.png'
import ghostnotes from '../../assets/GhostNotes.png'
import bondsphere from '../../assets/BondSphere.png'
import lovable from '../../assets/lovable.png'

gsap.registerPlugin(ScrollTrigger)

const projects = [
    {
        image: lovable,
        title: 'Lovable Clone',
        link: 'https://github.com/vivekkushwaha373/distributed-lovable-project',
        points: [
            'Architected a microservices-based Code Generation platform that automates full-stack web application generation using LLMs, mirroring the functionality of industry leaders like Lovable/v0.',
            'Built a custom Node.js & Redis reverse proxy integrated with a Kubernetes NGINX Ingress Controller, dynamically routing 10,000+ subdomains for live app previews via rapid Redis lookups.',
            'Secured and routed backend communication using Spring Cloud Gateway, Eureka, and Config Server, validating JWTs across 6 microservices with <15ms overhead.',
            'Integrated LLM tool calling, reducing context tokens by 50% and improving latency by 50%.',
            'Decoupled storage operations with Kafka for asynchronous, non-blocking file persistence to MinIO.',
            'Containerized 6 services via Jib to Docker Hub, deployed on GKE with GitHub Actions CI/CD.',
        ],
    },
    {
        image: bondsphere,
        title: 'BondSphere',
        link: 'https://bond-spheree.vercel.app/',
        points: [
            'Built a social media platform for users to interact via posts and real-time chats.',
            'Incorporated post creation, likes/dislikes, comments, follow/unfollow, real-time notifications, and chat using Socket.IO enabling seamless interaction with under 1s latency.',
            'Leveraged Cloudinary, reducing media load time by 50% and boosting page speed by 30%.',
        ],
    },
    {
        image: ghostnotes,
        title: 'GhostNotes',
        link: 'https://ghost-notes-tau.vercel.app/',
        points: [
            'Created Anonymous message sending platform using unique links to protect 100% user identity.',
            'Introduced JWT Authentication, OTP-based Email Verification.',
            'Achieved 30+ active users at present.',
        ],
    },
    {
        image: aiinterv,
        title: 'AutoInterv',
        link: 'https://autointerv.vercel.app/',
        points: [
            'Developed AI-powered interview assistant platform that offers personalized interview experience.',
            'Executed chatbot support with natural language processing capabilities.',
            'Optimized performance by 30% using Node.js clustering and React router-based loading.',
        ],
    },
]

const Project = () => {
    useGSAP(() => {
        gsap.from('.project-card', {
            y: 44,
            duration: 0.8,
            opacity: 0,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#projects',
                start: 'top 70%',
            },
        })
    })

    return (
        <section id="projects" className="py-24 sm:py-28">
            <div className="section-shell">
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                    <div>
                        <div className="eyebrow">Featured Projects</div>
                        <h2 className="section-title mt-4 max-w-3xl">FEATURED PROJECTS</h2>
                    </div>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    {projects.map((project) => (
                        <div key={project.title} className="project-card">
                            <Card {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project

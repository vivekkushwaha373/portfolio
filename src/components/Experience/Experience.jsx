import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
    {
        company: 'TechPranee',
        duration: 'Oct 2025 - July 2026',
        role: 'Full Stack Developer - Full time (Hyderabad)',
        projects: [
            {
                title: 'Marketing Automation Platform',
                points: [
                    'Proposed 40+ agentic workflows and orchestrator agents using Mastra, CopilotKit, and AG-UI.',
                    'Integrated MCP for keyword research, and used Firecrawl and ScrapeCreators for automated research on 12+ competitors and social media data collection.',
                    'Automated AI-generated social content publishing using Postiz.',
                ],
            },
            {
                title: 'ERPZ - Development',
                points: [
                    'Developed 10+ accounting modules including invoices, bills, journals, and banking workflows with ACID-compliant transactions in Node.js and React.',
                    'Deployed report builders for 15+ financial and inventory reports using Puck Builder for real businesses.',
                    'Collaborated with a team of 3 developers to design, develop, and deliver ERP features.',
                ],
            },
        ],
    },
    {
        company: 'IceCream Labs',
        duration: 'Mar 2025 - May 2025',
        role: 'Full Stack Developer Intern - Remote (Bangalore)',
        points: [
            'Engineered responsive web applications using Next.js 15 with a focus on AI agent integration.',
            'Executed AI features using MCP, improving task speed by 20.5% and reducing API calls by 19.2%.',
            'Designed and debugged 50+ backend RESTful APIs.',
        ],
    },
]

const Experience = () => {
    useGSAP(() => {
        gsap.from('.experience-card', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.18,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#experience',
                start: 'top 70%',
            },
        })
    })

    return (
        <section id="experience" className="bg-ink py-24 text-white sm:py-28">
            <div className="section-shell">
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                    <div>
                        <div className="text-sm font-semibold uppercase text-mint">Work Experience</div>
                        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">WORK EXPERIENCE</h2>
                    </div>
                    <div className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/70">
                        Full Stack Developer
                    </div>
                </div>

                <div className="mt-12 grid gap-6">
                    {experiences.map((experience) => (
                        <article key={experience.company} className="experience-card relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-line backdrop-blur sm:p-8">
                            <div className="flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-start lg:justify-between">
                                <div>
                                    <h3 className="text-3xl font-extrabold">{experience.company}</h3>
                                    <p className="mt-2 text-lg font-semibold text-white/70">{experience.role}</p>
                                </div>
                                <span className="w-fit rounded-full bg-white px-4 py-2 text-sm font-bold text-ink">{experience.duration}</span>
                            </div>

                            {experience.projects ? (
                                <div className="mt-6 grid gap-5 lg:grid-cols-2">
                                    {experience.projects.map((project) => (
                                        <div key={project.title} className="rounded-lg bg-white/[0.06] p-5">
                                            <h4 className="text-xl font-bold text-lemon">{project.title}</h4>
                                            <ul className="mt-4 grid gap-3 text-base leading-7 text-white/70">
                                                {project.points.map((point) => (
                                                    <li key={point} className="flex gap-3">
                                                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-mint"></span>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <ul className="mt-6 grid gap-3 text-base leading-7 text-white/70">
                                    {experience.points.map((point) => (
                                        <li key={point} className="flex gap-3">
                                            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-mint"></span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience

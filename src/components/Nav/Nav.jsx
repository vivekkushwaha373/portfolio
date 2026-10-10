import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-scroll'
import { FaBars, FaTimes, FaFileAlt } from 'react-icons/fa'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const navItems = ['Home', 'About', 'Experience', 'Projects', 'Contact']

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isResumeOpen, setIsResumeOpen] = useState(false)

    useGSAP(() => {
        gsap.from('.site-nav', {
            y: -28,
            duration: 0.8,
            opacity: 0,
            ease: 'power3.out',
        })
    })

    return (
        <header className="site-nav fixed left-0 right-0 top-0 z-50 px-4 py-4">
            <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-ink/10 bg-white/95 px-4 py-3 shadow-glow backdrop-blur-xl sm:px-5">
                <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer">
                    <span className="flex items-center gap-3 text-sm font-bold text-ink sm:text-base">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white">VK</span>
                        <span>PORTFOLIO</span>
                    </span>
                </Link>

                <div className="hidden items-center gap-1 rounded-full bg-paper p-1 lg:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            to={item.toLowerCase()}
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-92}
                            className="nav-link cursor-pointer rounded-full px-4 py-2 text-sm font-semibold text-ink/70 transition hover:bg-white hover:text-ink"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                <div className="hidden items-center gap-4 lg:flex">
                    <button onClick={() => setIsResumeOpen(true)} className="flex items-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-bold text-ink transition hover:border-cobalt hover:text-cobalt">
                        <FaFileAlt /> Resume
                    </button>
                    <Link to="contact" spy={true} smooth={true} duration={500} offset={-92} className="cursor-pointer rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-cobalt">
                        Let&apos;s Connect
                    </Link>
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen((current) => !current)}
                    className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white text-ink lg:hidden"
                    aria-label="Toggle navigation"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </nav>

            {isOpen && (
                <div className="mx-auto mt-3 max-w-7xl rounded-lg border border-white/70 bg-white/95 p-3 shadow-line backdrop-blur-xl lg:hidden">
                    <div className="grid gap-2">
                        {navItems.map((item) => (
                            <Link
                                key={item}
                                to={item.toLowerCase()}
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-92}
                                onClick={() => setIsOpen(false)}
                                className="nav-link cursor-pointer rounded-lg px-4 py-3 text-sm font-semibold text-ink/70"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {isResumeOpen && createPortal(
                <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
                    <div className="relative flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
                        <div className="flex items-center justify-between border-b border-ink/10 bg-paper px-6 py-4">
                            <h3 className="text-xl font-bold text-ink">Resume Preview</h3>
                            <div className="flex gap-4">
                                <a href="/vivek_resume.pdf" download="Vivek_Kushwaha_Resume.pdf" className="rounded bg-cobalt px-4 py-2 text-sm font-bold text-white transition hover:bg-ink">
                                    Download
                                </a>
                                <button onClick={() => setIsResumeOpen(false)} className="text-2xl text-ink/70 transition hover:text-ink">
                                    <FaTimes />
                                </button>
                            </div>
                        </div>
                        <div className="h-full w-full flex-1 bg-gray-100">
                            <iframe src="/vivek_resume.pdf" className="h-full w-full border-none" title="Resume PDF"></iframe>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </header>
    )
}

export default Nav

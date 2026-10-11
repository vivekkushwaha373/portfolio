import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

const projectLinks = {
    'Lovable Clone': 'https://github.com/vivekkushwaha373/distributed-lovable-project',
    'Distributed Lovable': 'https://github.com/vivekkushwaha373/distributed-lovable-project',
    AutoInterv: 'https://autointerv.vercel.app/',
    BondSphere: 'https://bond-spheree.vercel.app/',
    GhostNotes: 'https://ghost-notes-tau.vercel.app/',
    GITHUB: 'https://github.com/vivekkushwaha373',
}

const Card = ({ title, image, points, link }) => {
    const redirect = () => {
        const url = link || projectLinks[title]

        if (url) {
            window.open(url, '_blank')
        }
    }

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-ink/10 bg-white shadow-line transition duration-300 hover:-translate-y-1 hover:shadow-glow">
            <button type="button" onClick={redirect} className="relative block overflow-hidden bg-ink text-left">
                <img src={image} alt={title} className="aspect-[16/10] w-full object-cover opacity-95 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
                <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-line transition group-hover:bg-cobalt group-hover:text-white">
                    <FaArrowUpRightFromSquare />
                </span>
            </button>

            <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-2xl font-extrabold text-ink">{title}</h3>
                {points && (
                    <ul className="mt-5 grid gap-3 text-sm leading-6 text-ink/70">
                        {points.map((point) => (
                            <li key={point} className="flex gap-3">
                                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay"></span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </article>
    )
}

export default Card

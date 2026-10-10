import { useState } from 'react'
import con from '../../assets/contact.jpg'
import toast from 'react-hot-toast'
import { FaEnvelope, FaLocationDot, FaPaperPlane } from 'react-icons/fa6'

const Contact = () => {
    const [result, setResult] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault()
        setResult('Sending....')
        const formData = new FormData(event.target)

        formData.append('access_key', 'ab76ec29-443c-49cf-a372-ca11d8b15e03')

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        })

        const data = await response.json()

        if (data.success) {
            setResult('Form Submitted Successfully')
            event.target.reset()
            toast.success('Thanks for submission')
        } else {
            const message = data.message || 'Something went wrong'
            setResult(message)
            toast.error(message)
        }
    }

    return (
        <section id="contact" className="pb-24 sm:pb-28">
            <div className="section-shell">
                <div className="overflow-hidden rounded-lg bg-ink text-white shadow-glow">
                    <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                        <div className="relative min-h-[26rem] overflow-hidden">
                            <img src={con} className="h-full min-h-[26rem] w-full object-cover" alt="Contact" />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                                <div className="text-sm font-semibold uppercase text-mint">Contact</div>
                                <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">Let&apos;s Connect</h2>
                                <div className="mt-6 grid gap-3 text-white/80">
                                    <div className="flex items-center gap-3">
                                        <FaEnvelope className="text-mint" />
                                        <span>vivekkushwaha734@gmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaLocationDot className="text-mint" />
                                        <span>Hyderabad / Bangalore</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 text-ink sm:p-9 lg:p-12">
                            <form id="form" onSubmit={onSubmit} className="grid gap-5">
                                <label className="grid gap-2">
                                    <span className="text-sm font-bold text-ink/60">Name</span>
                                    <input required name="name" type="text" placeholder="Name" className="h-14 rounded-lg border border-ink/10 bg-paper px-4 text-base font-medium outline-none transition focus:border-cobalt focus:bg-white" />
                                </label>
                                <label className="grid gap-2">
                                    <span className="text-sm font-bold text-ink/60">Email</span>
                                    <input required type="email" name="email" placeholder="Email" className="h-14 rounded-lg border border-ink/10 bg-paper px-4 text-base font-medium outline-none transition focus:border-cobalt focus:bg-white" />
                                </label>
                                <label className="grid gap-2">
                                    <span className="text-sm font-bold text-ink/60">Message</span>
                                    <textarea required name="message" id="textarea" placeholder="Leave a message..." className="min-h-44 resize-none rounded-lg border border-ink/10 bg-paper p-4 text-base font-medium outline-none transition focus:border-cobalt focus:bg-white"></textarea>
                                </label>
                                <button type="submit" className="inline-flex h-14 w-fit items-center gap-3 rounded-full bg-ink px-7 text-sm font-bold text-white transition hover:bg-cobalt">
                                    Submit <FaPaperPlane />
                                </button>
                                {result && <p className="text-sm font-semibold text-ink/60">{result}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact

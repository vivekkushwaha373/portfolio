import React from 'react'
import './Experience.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
    useGSAP(() => {
        gsap.from('.timeline-item', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.3,
            scrollTrigger: {
                trigger: "#experience",
                start: "top 70%",
            }
        });
    });

    return (
        <div id="experience">
            <h1 className="section-title text-gradient" style={{marginBottom: "3rem"}}>WORK EXPERIENCE</h1>
            <div className="experience-timeline">
                
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <div className="timeline-header">
                            <h2 className="company-name">TechPranee</h2>
                            <span className="duration">Oct 2025 – July 2026</span>
                        </div>
                        <h3 className="role">Full Stack Developer - Full time (Hyderabad)</h3>
                        
                        <div className="project-subsection">
                            <h4 className="project-title">Marketing Automation Platform</h4>
                            <ul>
                                <li>Proposed 40+ agentic workflows and orchestrator agents using Mastra, CopilotKit, and AG-UI.</li>
                                <li>Integrated MCP for keyword research and automated AI-generated social content publishing using Postiz.</li>
                            </ul>
                        </div>
                        
                        <div className="project-subsection mt-4">
                            <h4 className="project-title">ERPZ - Development</h4>
                            <ul>
                                <li>Developed 10+ accounting modules including invoices, bills, journals, and banking workflows with ACID-compliant transactions in Node.js and React.</li>
                                <li>Deployed report builders for 15+ financial and inventory reports using Puck Builder for real businesses.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <div className="timeline-header">
                            <h2 className="company-name">IceCream Labs</h2>
                            <span className="duration">Mar 2025 – May 2025</span>
                        </div>
                        <h3 className="role">Full Stack Developer Intern - Remote (Bangalore)</h3>
                        <ul>
                            <li>Engineered responsive web applications using Next.js 15 with a focus on AI agent integration.</li>
                            <li>Executed AI features using MCP, improving task speed by 20.5% and reducing API calls by 19.2%.</li>
                            <li>Designed and debugged 50+ backend RESTful APIs.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience

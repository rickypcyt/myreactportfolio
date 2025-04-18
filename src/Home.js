import React from "react";
import StarsBackground from "./StarsBackground";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function Home() {
    return (
        <div className="min-h-screen">
            <div className="max-w-[95%] mx-auto px-4 py-8">
                <StarsBackground />
                
                <div className="space-y-12">
                    {/* Home Section */}
                    <div id="home-section text-xl" className="card">
                        <div className="text-center">
                            <h1 className="card-title mb-0">Rickypcyt's Portfolio</h1>
                        </div>
                    </div>

                    {/* About Section */}
                    <div id="about-section" className="card">
                        <h2 className="card-title">About Me</h2>
                        <About />
                    </div>

                    {/* Projects Section */}
                    <div id="projects-section" className="card">
                        <h2 className="card-title mb-10">Projects</h2>
                        <div className="projectview-home">
                            <Projects />
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div id="contact-section" className="card">
                        <h2 className="card-title">Contact</h2>
                        <Contact />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

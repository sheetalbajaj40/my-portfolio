// src/pages/Experience.jsx

import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-8 text-gray-900">Work Experience</h3>

                {/* Experience 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h4 className="text-xl font-semibold text-gray-900">Frontend Engineer Intern</h4>
                    <p className="text-lg text-gray-600">Third Eye AI (A JBM Group Company), Gurugram | Dec 2024 - Present</p>
                    <ul className="mt-4 text-gray-700 list-disc list-inside text-left">
                        <li>Assisted in the modernization of legacy JavaScript codebases by migrating to ReactJS, enhancing maintainability and reducing load times.</li>
                        <li>Collaborated with the team to develop scalable and responsive UI components using ReactJS and Tailwind CSS, ensuring a seamless user experience.</li>
                        <li>Integrated RESTful APIs into React applications to enable efficient communication between frontend and backend systems.</li>
                        <li>Contributed to the adoption and implementation of Next.js for server-side rendering (SSR), significantly improving SEO and initial page load performance.</li>
                        <li>Engaged in debugging, cross-browser testing, and performance optimization to ensure consistent user experiences across devices.</li>
                        <li>Implementing state management solutions using Redux Toolkit and Context API, optimizing data flow
                            across components.</li>
                    </ul>
                </div>

                {/* Add more experience entries as needed */}
            </div>
        </section>
    );
};

export default Experience;

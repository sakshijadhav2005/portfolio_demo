// import { useState } from 'react';
// import Navbar from '../components/Navbar';

// const Home = () => {
//     return (
//         <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
//              <Navbar />
//             <div className="bg-white bg-opacity-10 backdrop-blur-md shadow-lg rounded-lg p-8">
//                 <h1 className="text-4xl font-bold text-white mb-4">Welcome to My Portfolio</h1>
               
//                 <p className="text-white mt-4">Explore my projects, skills, and experiences. Let’s connect and build something amazing together!</p>
//             </div>

//             <section className="mt-10 bg-white bg-opacity-10 backdrop-blur-md shadow-lg rounded-lg p-8">
//                 <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
//                 <p className="text-white">I am a passionate developer with a love for creating interactive and functional web applications. With expertise in modern web technologies and a keen eye for design, I strive to deliver exceptional user experiences.</p>
//             </section>

//             <section className="mt-10 bg-white bg-opacity-10 backdrop-blur-md shadow-lg rounded-lg p-8">
//                 <h2 className="text-3xl font-bold text-white mb-4">Projects</h2>
//                 <ul className="list-disc list-inside text-white">
//                     <li className="mb-2"><strong>Project 1:</strong> A responsive e-commerce platform using React and Tailwind CSS.</li>
//                     <li className="mb-2"><strong>Project 2:</strong> A portfolio website showcasing creative design and seamless animations.</li>
//                     <li className="mb-2"><strong>Project 3:</strong> A real-time chat application leveraging WebSocket technology.</li>
//                 </ul>
//             </section>

//             <section className="mt-10 bg-white bg-opacity-10 backdrop-blur-md shadow-lg rounded-lg p-8">
//                 <h2 className="text-3xl font-bold text-white mb-4">Skills</h2>
//                 <div className="grid grid-cols-2 gap-4">
//                     <div className="text-white">
//                         <h3 className="font-bold">Frontend</h3>
//                         <p>React, Tailwind CSS, HTML, CSS, JavaScript</p>
//                     </div>
//                     <div className="text-white">
//                         <h3 className="font-bold">Backend</h3>
//                         <p>Node.js, Express, MongoDB, Firebase</p>
//                     </div>
//                     <div className="text-white">
//                         <h3 className="font-bold">Tools</h3>
//                         <p>Git, Webpack, Figma, VS Code</p>
//                     </div>
//                     <div className="text-white">
//                         <h3 className="font-bold">Other</h3>
//                         <p>Agile Development, UI/UX Design, API Integration</p>
//                     </div>
//                 </div>
//             </section>

//             <section className="mt-10 bg-white bg-opacity-10 backdrop-blur-md shadow-lg rounded-lg p-8">
//                 <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
//                 <p className="text-white">Feel free to reach out to me via email at <a href="mailto:your.email@example.com" className="text-pink-300 underline">your.email@example.com</a> or connect with me on <a href="https://linkedin.com" className="text-pink-300 underline">LinkedIn</a>.</p>
//             </section>
//         </div>
//     );
// };

// export default Home;




import { useState } from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white'} min-h-screen p-6`}>
            <Navbar darkMode={darkMode} />
            <button 
                onClick={() => setDarkMode(!darkMode)} 
                className="fixed top-4 right-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-lg shadow-lg backdrop-blur-md">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white bg-opacity-10 text-white'} backdrop-blur-md shadow-lg rounded-lg p-8`}>
                <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="mt-4">Explore my projects, skills, and experiences. Let’s connect and build something amazing together!</p>
            </div>

            <section className={`mt-10 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white bg-opacity-10 text-white'} backdrop-blur-md shadow-lg rounded-lg p-8`}>
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p>I am a passionate developer with a love for creating interactive and functional web applications. With expertise in modern web technologies and a keen eye for design, I strive to deliver exceptional user experiences.</p>
            </section>

            <section className={`mt-10 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white bg-opacity-10 text-white'} backdrop-blur-md shadow-lg rounded-lg p-8`}>
                <h2 className="text-3xl font-bold mb-4">Projects</h2>
                <ul className="list-disc list-inside">
                    <li className="mb-2"><strong>Project 1:</strong> A responsive e-commerce platform using React and Tailwind CSS.</li>
                    <li className="mb-2"><strong>Project 2:</strong> A portfolio website showcasing creative design and seamless animations.</li>
                    <li className="mb-2"><strong>Project 3:</strong> A real-time chat application leveraging WebSocket technology.</li>
                </ul>
            </section>

            <section className={`mt-10 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white bg-opacity-10 text-white'} backdrop-blur-md shadow-lg rounded-lg p-8`}>
                <h2 className="text-3xl font-bold mb-4">Skills</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="font-bold">Frontend</h3>
                        <p>React, Tailwind CSS, HTML, CSS, JavaScript</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Backend</h3>
                        <p>Node.js, Express, MongoDB, Firebase</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Tools</h3>
                        <p>Git, Webpack, Figma, VS Code</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Other</h3>
                        <p>Agile Development, UI/UX Design, API Integration</p>
                    </div>
                </div>
            </section>

            <section className={`mt-10 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white bg-opacity-10 text-white'} backdrop-blur-md shadow-lg rounded-lg p-8`}>
                <h2 className="text-3xl font-bold mb-4">Contact</h2>
                <p>Feel free to reach out to me via email at <a href="mailto:your.email@example.com" className="text-pink-300 underline">your.email@example.com</a> or connect with me on <a href="https://linkedin.com" className="text-pink-300 underline">LinkedIn</a>.</p>
            </section>
        </div>
    );
};

export default Home;

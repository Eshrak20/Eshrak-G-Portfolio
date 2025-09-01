import {
    faFacebook,
    faLinkedin,
    faYoutube,
    faInstagram,
    faTwitter,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto md:px-8 lg:px-12 p-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
                    
                    {/* About Me */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">About Me</h3>
                        <p className="text-gray-300">
                            Hi 👋, I'm <span className="font-semibold">Eshrak</span>, 
                            a Computer Science enthusiast from Bangladesh.
                        </p>
                        <p className="mt-2 text-gray-400 text-sm">
                            📚 Studying at{" "}
                            <a
                                href="https://dpi.ac/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#895DF4] hover:underline"
                            >
                                Daffodil Polytechnic Institute
                            </a>
                        </p>
                    </div>

                    {/* Education */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                🎓{" "}
                                <a
                                    href="https://dpi.ac/"
                                    className="hover:text-[#895DF4]"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Daffodil Polytechnic Institute
                                </a>
                            </li>
                            <li>
                                📕{" "}
                                <a
                                    href="https://fbic.edu.bd/"
                                    className="hover:text-[#895DF4]"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Firoza Bashar Ideal Institute
                                </a>
                            </li>
                            <li>
                                📘{" "}
                                <a
                                    href="https://phitron.io/"
                                    className="hover:text-[#895DF4]"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Phitron
                                </a>
                            </li>
                            <li>
                                📙{" "}
                                <a
                                    href="https://www.abdurroufcollege.ac.bd/"
                                    className="hover:text-[#895DF4]"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Birshreshtha Munshi Abdur Rouf College
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>📩 Email: eshrakg62@gmail.com</li>
                            <li>📱 WhatsApp: 01309176398</li>
                            <li>
                                🎥{" "}
                                <a
                                    href="https://www.youtube.com/@TechWorkshop-l2n/videos"
                                    className="hover:text-[#895DF4]"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    My YouTube Channel
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://twitter.com/eshrak_g46198"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#895DF4] hover:text-[#b89efc]"
                            >
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </a>
                            <a
                                href="https://linkedin.com/in/eshrak-g-2967a9278"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#895DF4] hover:text-[#b89efc]"
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                            </a>
                            <a
                                href="https://www.facebook.com/eshrakg62"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#895DF4] hover:text-[#b89efc]"
                            >
                                <FontAwesomeIcon icon={faFacebook} size="lg" />
                            </a>
                            <a
                                href="https://instagram.com/eshrakg62"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#895DF4] hover:text-[#b89efc]"
                            >
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </a>
                            <a
                                href="https://www.youtube.com/@EshrakG-xy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#895DF4] hover:text-[#b89efc]"
                            >
                                <FontAwesomeIcon icon={faYoutube} size="lg" />
                            </a>
                            <a
                                href="https://github.com/eshrak20"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#895DF4] hover:text-[#b89efc]"
                            >
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-center md:text-left">
                        © {new Date().getFullYear()} Eshrak. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm mt-4 md:mt-0">
                        Built with ❤️ using React & TailwindCSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

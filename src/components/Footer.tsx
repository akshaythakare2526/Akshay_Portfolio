import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/akshaythakare2526', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/akshaythakare2526?utm_source=chatgpt.com', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com/akshaythakare2526', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:akshaythakare2526@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-dark-light border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-lg font-semibold">Find Me On</h3>
          <p className="text-gray-400">Feel free to connect with me</p>
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Designed and Developed by <span className="text-primary font-semibold">Akshay Thakare</span>
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Copyright © {currentYear} AT
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

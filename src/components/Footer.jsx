import { Link } from 'react-router-dom';
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  Heart,
  ArrowUp,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const weekPages = [
    { path: '/week1', label: 'Week 1', dates: 'Feb 24-28' },
    { path: '/week2', label: 'Week 2', dates: 'Mar 3-7' },
    { path: '/week3', label: 'Week 3', dates: 'Mar 10-14' },
    { path: '/week4', label: 'Week 4', dates: 'Mar 17-21' },
    { path: '/week5', label: 'Week 5', dates: 'Mar 24-28' },
    { path: '/week6', label: 'Week 6', dates: 'Mar 31-Apr 4' },
    { path: '/week7', label: 'Week 7', dates: 'Apr 7-11' },
    { path: '/week8', label: 'Week 8', dates: 'Apr 14-18' },
    { path: '/week9', label: 'Week 9', dates: 'Apr 21-25' },
    { path: '/week10', label: 'Week 10', dates: 'Apr 28-May 2' },
    { path: '/week11', label: 'Week 11', dates: 'May 5-9' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
    { icon: Mail, label: 'Email', href: 'mailto:contact@example.com' },
  ];

  return (
    <footer className="bg-bg-secondary border-t-2 border-color-3 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-secondary text-color-1 mb-4 bg-color-3 inline-block px-4 py-1">INTERNSHIP BLOG</h3>
            <p className="text-color-2 border-l-2 border-color-3 pl-4 py-2 bg-bg-tertiary/30">
              Follow my journey through this internship experience as I learn, grow, and contribute to meaningful projects.
            </p>
            <div className="flex space-x-4 pt-2 bg-bg-tertiary p-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-color-2 hover:text-color-3 transition-colors duration-normal bg-bg-secondary p-2"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-color-1 bg-color-3 inline-block px-4 py-1">QUICK LINKS</h3>
            <ul className="space-y-0 border-l-2 border-color-3">
              <li>
                <Link to="/" className="text-color-2 hover:text-color-3 transition-colors duration-normal flex items-center gap-2 bg-bg-tertiary p-2 border-b border-color-3/10">
                  <span className="w-3 h-3 bg-color-3"></span>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/week1" className="text-color-2 hover:text-color-3 transition-colors duration-normal flex items-center gap-2 bg-bg-tertiary p-2 border-b border-color-3/10">
                  <span className="w-3 h-3 bg-color-3"></span>
                  WEEKLY LOGS
                </Link>
              </li>
              <li>
                <a href="#" className="text-color-2 hover:text-color-3 transition-colors duration-normal flex items-center gap-2 bg-bg-tertiary p-2 border-b border-color-3/10">
                  <span className="w-3 h-3 bg-color-3"></span>
                  ABOUT ME
                </a>
              </li>
              <li>
                <a href="#" className="text-color-2 hover:text-color-3 transition-colors duration-normal flex items-center gap-2 bg-bg-tertiary p-2">
                  <span className="w-3 h-3 bg-color-3"></span>
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Weekly Logs */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-color-1 bg-color-3 inline-block px-4 py-1">WEEKLY LOGS</h3>
            <div className="border-l-2 border-color-3 bg-bg-tertiary">
              {weekPages.slice(0, 6).map((week, index) => (
                <Link
                  key={index}
                  to={week.path}
                  className="text-color-2 hover:text-color-3 transition-colors duration-normal flex items-center justify-between p-2 border-b border-color-3/10"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-bg-secondary flex items-center justify-center text-color-3 text-xs font-bold">{index + 1}</span>
                    <span>{week.label}</span>
                  </div>
                  <span className="text-xs text-color-2/70 bg-bg-secondary px-2 py-1">{week.dates}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-color-1 bg-color-3 inline-block px-4 py-1">STAY UPDATED</h3>
            <p className="text-color-2 mb-4 border-l-2 border-color-3 pl-4 py-2 bg-bg-tertiary/30">Subscribe to receive updates about my internship journey.</p>
            <form className="space-y-2 border-l-2 border-t-2 border-color-3 p-4 bg-bg-tertiary/30">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-bg-secondary text-color-1 border-l-2 border-color-3 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-color-3 hover:bg-color-accent-2 text-bg-primary py-2 px-4 transition-colors duration-normal border-l-2 border-t-2 border-bg-primary"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-color-3 my-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-color-2 text-sm mb-4 md:mb-0 bg-bg-tertiary p-2 border-l-2 border-color-3">
            © {currentYear} INTERNSHIP BLOG BY KENNETH ESPELA. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-color-2 hover:text-color-3 transition-colors duration-normal group bg-bg-tertiary p-2 border-l-2 border-color-3"
              aria-label="Scroll to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-normal" />
            </button>

            <div className="flex items-center text-color-2 bg-bg-tertiary p-2">
              <span className="mr-1">MADE WITH</span>
              <Heart size={16} className="text-color-3 animate-pulse-slow mx-1" />
              <span>AND REACT</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

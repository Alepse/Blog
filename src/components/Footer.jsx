import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Heart,
  ArrowUp,
  Github,
  User,
   Facebook,
   Globe
} from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavigation = (path) => {
    navigate(path, { state: { scrollToTop: true } });
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
    { icon: Github , label: 'Github', href: 'https://github.com/Alepse' },
    { icon: User, label: 'Profile', href: 'https://www.linkedin.com/in/kenneth-espela-123653180/' },
    { icon:  Facebook, label: 'Facebook', href: 'https://web.facebook.com/kenneth.espela.9' },
    { icon:  Globe, label: 'Portfolio', href: 'https://my-portfolio-weld-five-42.vercel.app/' },
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
                    className="text-color-2 hover:text-color-3 transition-all duration-normal bg-bg-secondary p-2 cursor-pointer hover:bg-bg-tertiary hover:scale-110 hover:shadow-sm hover:border-l hover:border-t hover:border-color-3/50 flex items-center justify-center"
                    aria-label={social.label}
                  >
                    <Icon size={20} className="transition-transform duration-normal hover:rotate-12" />
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
                <button
                  onClick={() => handleNavigation('/')}
                  className="text-color-2 hover:text-color-3 transition-all duration-normal flex items-center gap-2 bg-bg-tertiary p-2 border-b border-color-3/10 w-full text-left cursor-pointer group hover:bg-bg-secondary hover:pl-3"
                >
                  <span className="w-3 h-3 bg-color-3 transition-all duration-normal group-hover:scale-125 group-hover:rotate-45"></span>
                  <span className="transition-transform duration-normal group-hover:translate-x-1">HOME</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/week1')}
                  className="text-color-2 hover:text-color-3 transition-all duration-normal flex items-center gap-2 bg-bg-tertiary p-2 border-b border-color-3/10 w-full text-left cursor-pointer group hover:bg-bg-secondary hover:pl-3"
                >
                  <span className="w-3 h-3 bg-color-3 transition-all duration-normal group-hover:scale-125 group-hover:rotate-45"></span>
                  <span className="transition-transform duration-normal group-hover:translate-x-1">WEEKLY LOGS</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Weekly Logs */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-color-1 bg-color-3 inline-block px-4 py-1">WEEKLY LOGS</h3>
            <div className="border-l-2 border-color-3 bg-bg-tertiary max-h-[250px] overflow-y-auto custom-scrollbar pr-1">
              {weekPages.map((week, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(week.path)}
                  className="text-color-2 hover:text-color-3 transition-all duration-normal flex items-center justify-between p-2 border-b border-color-3/10 hover:bg-bg-secondary w-full text-left cursor-pointer group hover:pl-3 hover:border-l hover:border-color-3"
                >
                  <div className="flex items-center">
                    <span className="pl-1 transition-transform duration-normal group-hover:translate-x-1">{week.label}</span>
                  </div>
                  <span className="text-xs text-color-2/70 bg-bg-secondary px-2 py-1 rounded-sm transition-all duration-normal group-hover:bg-color-3/20 group-hover:text-color-1">{week.dates}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-color-1 bg-color-3 inline-block px-4 py-1">CONTACT ME</h3>
            <p className="text-color-2 mb-4 border-l-2 border-color-3 pl-4 py-2 bg-bg-tertiary/30">
              Feel free to reach out if you have any questions about my internship journey.
            </p>

            <div className="border-l-2 border-t-2 border-color-3 p-4 bg-bg-tertiary/30">
              <div className="flex items-center gap-3 mb-3 bg-bg-secondary p-3 border-l-2 border-color-3 transition-all duration-normal hover:bg-bg-tertiary hover:border-color-3 group cursor-pointer">
                <Mail className="text-color-3 transition-transform duration-normal group-hover:rotate-12 group-hover:scale-110" size={20} />
                <span className="text-color-1 transition-all duration-normal group-hover:text-color-3 group-hover:translate-x-1">kenespela@gmail.com</span>
              </div>

              <a
                href="mailto:kenespela@gmail.com?subject=Internship%20Blog%20Inquiry"
                className="flex justify-center items-center gap-2 w-full bg-color-3 hover:bg-color-accent-2 text-bg-primary py-3 px-4 transition-all duration-normal border-l-2 border-t-2 border-bg-primary cursor-pointer group hover:shadow-md hover:scale-[1.02]"
              >
                <Mail size={18} className="transition-transform duration-normal group-hover:rotate-12 group-hover:scale-110" />
                <span className="transition-transform duration-normal group-hover:translate-x-1">SEND EMAIL</span>
              </a>
            </div>
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
              className="flex items-center gap-2 text-color-2 hover:text-color-3 transition-all duration-normal group bg-bg-tertiary p-2 border-l-2 border-color-3 cursor-pointer hover:bg-bg-secondary hover:border-color-3 hover:shadow-sm"
              aria-label="Scroll to top"
            >
              <span className="transition-transform duration-normal group-hover:translate-x-1">BACK TO TOP</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-normal group-hover:scale-110" />
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

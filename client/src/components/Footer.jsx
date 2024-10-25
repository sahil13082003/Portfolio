const Footer = () => {
    return (
      <footer className="bg-[#e9eef5] text-[#9c27b0] py-4 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold mb-2">Contact</h2>
            <p className="text-lg">Email: sahilgolhar7@gmail.com</p>
            <p className="text-lg">Phone: 7385928463</p>
          </div>
  
          {/* Social Media Links */}
          <div>
            <h2 className="text-xl font-bold mb-2">Follow Me</h2>
            <div className="flex justify-center md:justify-start space-x-3">
              <a href="https://www.linkedin.com/in/sahil-golhar-9334a6234" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#9c27b0] hover:text-blue-700">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="https://github.com/sahil13082003" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[#9c27b0] hover:text-gray-700">
                <i className="fab fa-github text-2xl"></i>
              </a>
            </div>
          </div>
  
          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <ul>
              {["About", "Work", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item} className="my-1">
                  <a href={`#${item.toLowerCase()}`} className="text-lg hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="mt-4 text-center border-t-2 border-gray-300 pt-2">
          <p className="text-sm">
            © {new Date().getFullYear()} Sahil. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
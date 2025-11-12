const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Conversion Rescue</h3>
              <p className="text-accent-foreground/70">
                72-hour emergency service for leaking funnels
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <h4 className="font-semibold mb-3">Quick Links</h4>
                <ul className="space-y-2 text-sm text-accent-foreground/70">
                  <li>
                    <a href="#" className="hover:text-accent-foreground transition-colors">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-accent-foreground transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-accent-foreground transition-colors">
                      Case Studies
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Legal</h4>
                <ul className="space-y-2 text-sm text-accent-foreground/70">
                  <li>
                    <a href="#" className="hover:text-accent-foreground transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-accent-foreground transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-foreground transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-accent-foreground/10 text-center text-sm text-accent-foreground/70">
            <p>© {currentYear} Conversion Rescue by Isaac Ola. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

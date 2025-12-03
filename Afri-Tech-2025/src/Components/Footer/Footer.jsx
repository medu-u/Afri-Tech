import React from 'react'

function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-200 py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold">Contact Us</h4>
            <p>Phone: +251708793756</p>
            <p>Email: medhanitmulatu6796@gmai1.com</p>
          </div>
          <div>
            <h4 className="font-semibold">Headquarter</h4>
            <p>Addis Abeba, Ethiopia</p>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Afri-Tech
        </div>
      </footer>
    );
}

export default Footer

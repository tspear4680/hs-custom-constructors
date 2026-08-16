import { Link } from "react-router-dom";
import { company } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal-100 bg-charcoal-900 text-charcoal-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg text-white">{company.name}</p>
          <p className="mt-2 text-sm text-charcoal-300">{company.license}</p>
        </div>

        <div className="text-sm">
          <p className="font-medium text-white">Contact</p>
          <ul className="mt-2 space-y-1">
            <li>
              <a href={company.phoneHref} className="hover:text-brand-300">
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-brand-300">
                {company.email}
              </a>
            </li>
            <li>{company.city}</li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="font-medium text-white">Quick Links</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link to="/about" className="hover:text-brand-300">About</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-brand-300">Gallery</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-brand-300">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal-800 py-4 text-center text-xs text-charcoal-400">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { company, home } from "../data/content";

export default function Home() {
  return (
    <div>
      <section className="relative">
        <img
          src={home.heroImageUrl}
          alt="H&S Custom Constructors project"
          className="h-[60vh] w-full object-cover md:h-[70vh]"
        />
        <div className="absolute inset-x-0 bottom-0 border-t-4 border-charcoal-900 bg-brand-700/80 py-6 shadow-lg md:py-8">
          <div className="mx-auto max-w-3xl px-4 text-center text-white">
            <p className="text-lg leading-relaxed md:text-xl">{home.heroTagline}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-3xl md:text-4xl">{home.ctaHeading}</h1>
        <p className="mt-4 text-charcoal-500">{company.license}</p>
        <Link
          to="/about"
          className="mt-6 inline-block rounded-md bg-brand-500 px-6 py-3 font-medium text-white transition-colors hover:bg-brand-600"
        >
          Learn more
        </Link>
      </section>
    </div>
  );
}

import { Link } from "react-router-dom";
import { company, home } from "../data/content";
import { heroPlaceholder } from "../data/placeholders";

export default function Home() {
  return (
    <div>
      <section className="relative">
        <img
          src={heroPlaceholder}
          alt="Placeholder construction project"
          className="h-[60vh] w-full object-cover md:h-[70vh]"
        />
        <div className="absolute inset-0 flex items-center bg-charcoal-900/70">
          <div className="mx-auto max-w-3xl px-4 text-center text-white">
            <p className="text-lg leading-relaxed drop-shadow-md md:text-xl">{home.heroTagline}</p>
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

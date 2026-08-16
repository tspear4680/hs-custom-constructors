import { about, contact, company } from "../data/content";
import { aboutPlaceholders } from "../data/placeholders";

const images = [
  aboutPlaceholders.builtHomes,
  aboutPlaceholders.remodels,
  aboutPlaceholders.outdoorSpaces,
];

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <section className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl">{about.whoWeAreHeading}</h1>
        <p className="mt-4 text-charcoal-500">{about.whoWeAreBody}</p>
      </section>

      <section className="mt-16 grid gap-10 md:grid-cols-3">
        {about.sections.map((section, i) => (
          <div key={section.heading} className="flex flex-col overflow-hidden rounded-lg border border-charcoal-100 bg-white shadow-sm">
            <img src={images[i]} alt="" className="h-48 w-full object-cover" />
            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-xl">{section.heading}</h2>
              <p className="mt-2 flex-1 text-sm text-charcoal-500">{section.body}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-16 rounded-lg bg-brand-50 p-8 text-center">
        <h2 className="text-2xl">{contact.heading}</h2>
        <p className="mt-3 text-charcoal-500">
          <a href={company.phoneHref} className="font-medium text-brand-600 hover:underline">
            {company.phone}
          </a>{" "}
          &middot;{" "}
          <a href={`mailto:${company.email}`} className="font-medium text-brand-600 hover:underline">
            {company.email}
          </a>
        </p>
        <p className="mt-2 text-sm text-charcoal-400">{company.license}</p>
      </section>
    </div>
  );
}

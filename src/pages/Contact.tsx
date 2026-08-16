import { company, contact } from "../data/content";

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <section className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl">{contact.heading}</h1>
        <p className="mt-4 text-charcoal-500">{contact.intro}</p>
      </section>

      <section className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="rounded-lg border border-charcoal-100 bg-white p-8">
          <h2 className="text-xl">Reach out directly</h2>
          <ul className="mt-4 space-y-3 text-charcoal-600">
            <li>
              <a href={company.phoneHref} className="font-medium text-brand-600 hover:underline">
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="font-medium text-brand-600 hover:underline">
                {company.email}
              </a>
            </li>
            <li className="text-sm text-charcoal-400">{company.license}</li>
          </ul>

          <a
            href={`mailto:${company.email}?subject=Project Inquiry`}
            className="mt-6 inline-block rounded-md bg-brand-500 px-6 py-3 font-medium text-white transition-colors hover:bg-brand-600"
          >
            Email us about your project
          </a>
        </div>

        <div className="overflow-hidden rounded-lg border border-charcoal-100">
          <iframe
            title="Mena, Arkansas map"
            src="https://www.google.com/maps?q=Mena,+AR&output=embed"
            className="h-full min-h-[300px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}

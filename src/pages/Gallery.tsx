import { gallery } from "../data/content";
import { galleryPlaceholders } from "../data/placeholders";

export default function Gallery() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <section className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl">{gallery.heading}</h1>
        <p className="mt-4 text-charcoal-500">{gallery.intro}</p>
      </section>

      <section className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {galleryPlaceholders.map((img) => (
          <img
            key={img.id}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="aspect-square w-full rounded-md object-cover"
          />
        ))}
      </section>
    </div>
  );
}

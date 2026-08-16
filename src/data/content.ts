export const company = {
  name: "H&S Custom Constructors",
  phone: "479-469-9969",
  phoneHref: "tel:+14794699969",
  email: "sylvester@hscustommena.com",
  license: "AR License No. 0472610926",
  city: "Mena, AR",
};

export const home = {
  heroHeadline: "Building. Maintaining. Improving",
  heroSublines: ["Quality work you can count on.", "Built with skill, backed by integrity."],
  ctaHeading: "Turning Dreams into Reality",
  heroImageUrl:
    "https://res.cloudinary.com/n6bpxgnw/image/upload/v1786905238/Gemini_Generated_Image_96rfxq96rfxq96rf_gzdbxg.jpg",
};

export const about = {
  whoWeAreHeading: "Who we are",
  whoWeAreBody:
    "H&S Custom Constructors is a beacon of community spirit and craftsmanship, operating as a family-owned construction business. We take pride in our local roots and our commitment to quality work that enhances the beauty and functionality of your home.",
  sections: [
    {
      heading: "Custom Built Homes",
      body: "We focus on durable, long-lasting residential construction using quality materials and modern techniques, with close attention to detail and craftsmanship. Your new home is an investment that provides peace of mind, knowing that our steadfast commitment to quality means fewer repairs.",
    },
    {
      heading: "Custom Remodels",
      body: "From open living areas to home offices and kitchens, we handle layout redesigns and space enhancements with personalized transformations that improve your daily living.",
    },
    {
      heading: "Custom Outdoor Spaces",
      body: "Custom decks, pergolas, outdoor kitchens, and landscaping designed to enhance your lifestyle and your property's value.",
    },
  ],
};

export const contact = {
  heading: "Contact Us",
  intro:
    "If you're ready to get started on your project, feel free to reach out to me directly to schedule work. I'm committed to bringing your vision to life and ensuring every detail is handled with care — give me a call or send a message to discuss your needs and begin work.",
};

export const gallery = {
  heading: "Our Work",
  intro:
    "From dazzling kitchens to serene outdoor retreats, we work closely with you to understand your ideas and preferences, ensuring that each corner of your home embodies your lifestyle.",
};

export const create = {
  heading: "AI Remodeling Studio",
  intro: "Upload a photo of your home to see design options instantly.",
  modes: [
    {
      id: "preserve",
      label: "Preserve Structure",
      description: "Keep shape, change materials/colors",
    },
    {
      id: "overhaul",
      label: "Complete Overhaul",
      description: "Change rooflines, architecture, & shape",
    },
  ] as const,
};

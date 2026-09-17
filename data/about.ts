export const about = {
  hero: {
    eyebrow: "ABOUT FAVDOCTOR",
    title: "Building Solutions That Make Healthcare Work Better.",
    description:
      "FavDoctor builds healthcare technology and implementation solutions to address real healthcare challenges across Nigeria.",
  },

  story: {
    eyebrow: "WHO WE ARE",
    title: "Healthcare Is More Than a Service. It's a System.",
    paragraphs: [
      "Healthcare depends on people, technology, information, organisations, infrastructure, and the systems that connect them.",
      "At FavDoctor, we bring these pieces together to build practical solutions around real healthcare challenges.",
      "We believe technology can help healthcare work better—but only when it is designed around people and built for the realities of the systems in which it operates.",
    ],
  },

  team: {
  eyebrow: "OUR TEAM",
  title: "Different Perspectives. One Mission.",
  description:
    "FavDoctor is built by a team working across healthcare, technology, research, implementation, and public health.",
  statement:
    "We bring different experiences and disciplines together because healthcare problems rarely have a single solution.",
  members: [
    {
      name: "Victor Ojo",
      role: "Founder & CEO",
      image: {
        src: "/images/team/victor-ojo.webp",
        alt: "Victor Ojo, Founder and CEO of FavDoctor",
      },
    },
    {
      name: "Edidiong Sebastian",
      role: "Operations",
      image: {
        src: "/images/team/edidiong-sebastian.webp",
        alt: "Edidiong Sebastian, Operations at FavDoctor",
      },
    },
    {
      name: "Obafemi Olaoluwa",
      role: "Design & Strategy",
      image: {
        src: "/images/team/obafemi-olaoluwa.webp",
        alt: "Obafemi Olaoluwa, Design and Strategy at FavDoctor",
      },
    },
    {
      name: "Tony Umeh",
      role: "Technical Lead",
      image: {
        src: "/images/team/tony-umeh.webp",
        alt: "Tony Umeh, Technical Lead at FavDoctor",
      },
    },
  ],
},
  presence: {
    eyebrow: "WHERE WE ARE & RECOGNITION",
    title: "Built in Nigeria. Connected to a Bigger Healthcare Community.",
    location: {
      city: "Lagos",
      country: "Nigeria",
      description:
        "Our work is rooted in Nigeria, where we build and implement solutions around the realities of the people and healthcare systems we serve.",
    },
    recognition: {
      title: "Recognition That Has Shaped Our Journey.",
      description:
        "Our work and experience have been recognised through collaborations, awards, grants, and opportunities with organisations and institutions working to improve health and communities.",
      href: "/awards",
      linkLabel: "View Awards & Recognition",
    },
  },

  finalCta: {
    eyebrow: "LET'S BUILD WHAT MATTERS",
    title: "Healthcare Can Work Better. Let's Build It.",
    description:
      "Whether you're solving a healthcare problem, conducting research, building technology, or looking for a strategic partner, we'd like to hear what you're working on.",
    cta: {
      label: "Start a Conversation",
      href: "/contact",
    },
  },
} as const;
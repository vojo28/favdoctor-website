export const ecosystem = {
  hero: {
    eyebrow: "THE FAVDOCTOR ECOSYSTEM",
    title: "An Ecosystem Built Around Better Healthcare.",
    description:
      "FavDoctor brings together healthcare technology, population health, research, implementation, and communication solutions designed to address real healthcare challenges.",
  },

  biggerPicture: {
    eyebrow: "THE BIGGER PICTURE",
    title: "Healthcare Challenges Are Connected.",
    description:
      "The challenges people face in healthcare rarely exist in isolation. Prevention, access, information, communication, follow-up, and care delivery all influence one another.",
    statement:
      "Our ecosystem is designed to bring different capabilities together so that solutions can work beyond a single product, programme, or point of care.",
  },

  products: {
  eyebrow: "OUR ECOSYSTEM",
  title: "Different Solutions. One Purpose.",
  description:
    "Each part of the FavDoctor ecosystem is built around a specific healthcare need while contributing to a broader vision of healthcare that works better.",
  items: [
  {
    name: "FavDoctor",
    category: "Healthcare Technology",
    description:
      "Our broader healthcare technology platform, connecting people, information, and healthcare services.",
    href: "/favdoctor",
  },
  {
    name: "Health Insight",
    category: "Population Health",
    description:
      "A technology-enabled population health system that helps organisations reach people earlier, understand health needs, identify risks, and support better health outcomes.",
    href: "/health-insight",
  },
  {
    name: "Health Trust",
    category: "Healthcare",
    description: "Building trust in healthcare through provider verification, quality standards, trusted healthcare information, and transparency.",
    href: "ecosystem/health-trust",
  },
  {
    name: "FavPharma",
    category: "Pharmacy",
    description:
      "A pharmacy network designed to improve access to medicines and pharmacy services.",
    href: "ecosystem/favpharma",
  },
  {
    name: "Mama's Call",
    category: "Maternal Health",
    description:
      "A maternal health communication and support platform connecting mothers to trained healthcare professionals and appropriate care.",
    href: "ecosystem/mamas-call",
  },
  {
    name: "BP Insights",
    category: "Hypertension",
    description:
      "Blood pressure tracking and follow-up tools designed to support earlier action and continuity of care.",
    href: "ecosystem/bp-insights",
  },
  {
    name: "FavPack",
    category: "Medication Management",
    description:
      "Smart medication packaging designed to make every dose easier to understand, manage, and follow.",
    href: "ecosystem/favpack",
  },
  {
    name: "FavDoctor Research Lab",
    category: "Research & Implementation",
    description:
      "A research and implementation arm focused on translating evidence into practical healthcare solutions.",
    href: "/research",
  },
],
},

  howTheyConnect: {
    eyebrow: "HOW IT CONNECTS",
    title: "Built to Work Together.",
    description:
      "The ecosystem allows different capabilities to contribute to the same goal: helping people live longer, healthier, and better lives.",
    stages: [
      {
        number: "01",
        title: "Reach",
        description:
          "Connect with people where they live, work, gather, and seek care.",
      },
      {
        number: "02",
        title: "Understand",
        description:
          "Use health information and insight to understand needs and identify risks earlier.",
      },
      {
        number: "03",
        title: "Support",
        description:
          "Provide communication, guidance, tools, and services that help people take action.",
      },
      {
        number: "04",
        title: "Connect",
        description:
          "Help people reach appropriate healthcare services, professionals, and resources.",
      },
      {
        number: "05",
        title: "Follow Up",
        description:
          "Support continuity so that healthcare does not end at the first interaction.",
      },
      {
        number: "06",
        title: "Learn & Improve",
        description:
          "Use evidence, experience, and insight to strengthen the solutions and systems around them.",
      },
    ],
  },

  evolve: {
    eyebrow: "BUILT TO EVOLVE",
    title: "The Ecosystem Will Grow With the Problems We Solve.",
    description:
      "Healthcare continues to change, and new challenges will require new approaches. FavDoctor is building an ecosystem that can evolve as new needs emerge.",
    statement:
      "We are not trying to build everything at once. We are building the capabilities, partnerships, and solutions needed to solve meaningful healthcare problems over time.",
  },

  finalCta: {
    eyebrow: "BUILD WITH US",
    title: "Have a Healthcare Challenge Worth Solving?",
    description:
      "Whether you need technology, research and implementation support, population health insight, or a strategic partner, let's explore what we can build together.",
    cta: {
      label: "Start a Conversation",
      href: "/contact",
    },
  },
} as const;
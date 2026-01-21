/**
 * Central definition of site pages.
 * WHY:
 * - Prevents hardcoded strings
 * - Enables consistent naming across UI, SEO, and routing
 * - Single source of truth for navigation
 */
export type Page = {
    heading: string;
    title: string;
    description: string;
    rank: number;
    href: string;
};

export type PageKey =
  | "home"
  | "research"
  | "publications"
  | "team"
  | "outreach"
  | "facilities"
  | "instrumentation"
  | "news"
  | "conferences"
  | "data"
  | "applications"
  | "login";

export type Pages = Record<PageKey, Page>;


export const PAGES : Pages = {
    home: {
        heading: "Home",
        title: "Hydrology and Water Quality Program",
        description: "Official research portal showcasing ongoing research, publications, instrumentation, facilities, and the research team.",
        rank: 0,
        href: "/",
    },
    research: {
        heading: "Research",
        title: "Ongoing Research Areas",
        description: "Overview of current research areas, and ongoing projects under Dr. Golmar Golmohammadi.",
        rank: 1,
        href: "/research",
    },
    publications: {
        heading: "Publications",
        title: "Publications",
        description: "Peer-reviewed publications and scholarly articles authored by the research group led by Dr. Golmar Golmohammadi.",
        rank: 2,
        href: "/publications",
    },
    team: {
        heading: "Team",
        title: "Research Team",
        description: "Faculty, researchers, and students involved in the research group led by Dr. Golmar Golmohammadi.",
        rank: 3,
        href: "/team",
    },
    outreach: {
        heading: "Outreach",
        title: "Outreach & Engagement",
        description: "Community outreach, educational initiatives, and public engagement activities related to the research group led by Dr. Golmar Golmohammadi.",
        rank: 4,
        href: "/outreach",
    },
    facilities: {
        heading: "Facilities",
        title: "Research Facilities",
        description: "Laboratories, computing infrastructure, and research facilities supporting ongoing projects under Dr. Golmar Golmohammadi.",
        rank: 5,
        href: "/facilities",
    },
    instrumentation: {
        heading: "Instrumentation",
        title: "Instrumentation",
        description: "Scientific instruments, sensors, and tools used in research under Dr. Golmar Golmohammadi.",
        rank: 6,
        href: "/instrumentation",
    },
    news: {
        heading: "News",
        title: "News & Updates",
        description: "Latest news, announcements, and highlights from the research group led by Dr. Golmar Golmohammadi.",
        rank: 7,
        href: "/news",
    },
    conferences: {
        heading: "Conferences",
        title: "Conferences & Presentations",
        description: "Conferences, workshops, and academic presentations attended by the research group led by Dr. Golmar Golmohammadi.",
        rank: 8,
        href: "/conferences",
    },
    data: {
        heading: "Data",
        title: "Research Data",
        description: "Datasets, data resources, and performance metrics produced by the research group led by Dr. Golmar Golmohammadi.",
        rank: 9,
        href: "/data",
    },
    applications: {
        heading: "Applications",
        title: "Research Applications",
        description: "Information on research applications under Dr. Golmar Golmohammadi.",
        rank: 10,
        href: "/applications",
    },
    login: {
        heading: "Login",
        title: "Login",
        description:"Secure login portal for authorized members working under Dr. Golmar Golmohammadi.",
        rank: 11,
        href: "/login",
    }
  };
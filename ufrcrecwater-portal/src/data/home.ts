import { Icon, Logos, Slides } from "@/types/home";

export const LogosList: Logos = {
    "large-left-slider-white": { src: '/home/large-left-slider.png', alt: 'large-left-slider' },
    "large-right-slider-white": { src: '/home/large-right-slider.png', alt: 'large-right-slider' },
}

export const mockSlides: Slides = [
    {
      slide_info: {
        id: "slide-001",
        s3_url:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80",
        title: "Advancing Water Research Across Florida",
        updated_at: new Date("2025-12-12"),
        description: "Cutting-edge hydrologic and environmental research focused on water quality, climate resilience, and ecosystem health across Florida."
      },
      headline_type: "research",
      recent: true,
    },
    {
      slide_info: {
        id: "slide-002",
        s3_url:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
        title: "State-of-the-Art Field Instrumentation",
        updated_at: new Date("2025-11-28"),
        description: "Advanced field and laboratory instrumentation supporting high-resolution monitoring of hydrologic, meteorological, and water quality variables."
      },
      headline_type: "instrumentation",
      recent: true,
    },
    {
      slide_info: {
        id: "slide-003",
        s3_url:
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1920&q=80",
        title: "Hydrology and Environmental Research Facilities",
        updated_at: new Date("2025-08-14"),
        description: "Specialized research facilities enabling controlled experiments, long-term environmental monitoring, and interdisciplinary collaboration."
      },
      headline_type: "facilities",
      recent: false,
    },
    {
      slide_info: {
        id: "slide-004",
        s3_url:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80",
        title: "Recent Publications in Water Resources",
        updated_at: new Date("2025-10-22"),
        description: "Peer-reviewed publications advancing knowledge in hydrology, water resources, and environmental data science."
      },
      headline_type: "publications",
      recent: true,
    },
    {
      slide_info: {
        id: "slide-005",
        s3_url:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80",
        title: "Field Campaigns and Research Highlights",
        updated_at: new Date("2025-07-05"),
        description: "Visual highlights from field campaigns, experimental setups, and on-site research activities across diverse landscapes."
      },
      headline_type: "gallery",
      recent: false,
    },
  ];
  
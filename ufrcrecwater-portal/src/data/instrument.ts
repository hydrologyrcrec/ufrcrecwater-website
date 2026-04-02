import { InstrumentList, Logos } from "@/types/instrument";

// export const LogosList: Logos = {
//   "left-arrow-orange": { src: '/instrumentation/left-arrow-orange.png', alt: 'left-arrow-orange' }, 
//   "right-arrow-orange": { src: '/instrumentation/right-arrow-orange.png', alt: 'right-arrow-orange' },
// }

export const LogosList: Logos = {
    "left-arrow": { src: '/instrumentation/left-arrow.png', alt: 'large-left-slider' },
    "right-arrow": { src: '/instrumentation/right-arrow.png', alt: 'large-right-slider' },
    "left-blocked-arrow": { src: '/instrumentation/left-blocked-arrow.png', alt: 'large-left-slider-blocked' },
    "right-blocked-arrow": { src: '/instrumentation/right-blocked-arrow.png', alt: 'large-right-slider-blocked' },
    "location": { src: '/instrumentation/location-black.png', alt: 'location' },
    "calendar": { src: '/publications/calendar-black.png', alt: 'calendar-icon' },
    "fullscreen": { src: '/instrumentation/fullscreen.png', alt: 'full-screen-viewer' },
    "large-left-slider-white": { src: '/home/large-left-slider-white.png', alt: 'large-left-slider-white' },
    "large-right-slider-white": { src: '/home/large-right-slider-white.png', alt: 'large-right-slider-white' },
    "calendar-blue": { src: '/calendar-blue1.png', alt: 'calendar-blue1' }
}

export const mockInstrumentList: InstrumentList = {
    instruments: [
      {
        id: "ins-001",
        instrument_title: "YSI EXO2 Multiparameter Sonde",
        instrument_desc:
          "High-precision water quality sonde measuring temperature, dissolved oxygen, turbidity, conductivity, and chlorophyll-a.",
        s3_url:
          "https://ufrcrecwater-assets.s3.us-east-1.amazonaws.com/ufrcrecwater-assets/Instruments/temp.jpg",
        date_installed: new Date("2022-03-15"),
        date_uninstalled: "current",
        instrument_location: "Ona",
        hasTools: true
      },
      {
        id: "ins-002",
        instrument_title: "OTT Pluvio² Rain Gauge",
        instrument_desc:
          "All-weather precipitation gauge used for high-resolution rainfall monitoring in hydrologic studies.",
        s3_url:
          "https://ufrcrecwater-assets.s3.us-east-1.amazonaws.com/ufrcrecwater-assets/Instruments/temp1.jpg",
        date_installed: new Date("2021-08-02"),
        date_uninstalled: "current",
        instrument_location: "Ona",
        hasTools: true
      },
      {
        id: "ins-003",
        instrument_title: "Campbell Scientific CR1000X Datalogger",
        instrument_desc:
          "Core data acquisition system for collecting, storing, and transmitting sensor measurements in the field.",
        s3_url:
          "https://ufrcrecwater-assets.s3.us-east-1.amazonaws.com/ufrcrecwater-assets/Instruments/temp2.jpg",
        date_installed: new Date("2020-11-10"),
        date_uninstalled: "current",
        instrument_location: "Ona",
        hasTools: true
      },
      {
        id: "ins-004",
        instrument_title: "LI-COR LI-190 Quantum Sensor",
        instrument_desc:
          "Measures photosynthetically active radiation (PAR) to support ecosystem productivity and algal bloom studies.",
        s3_url:
          "https://ufrcrecwater-assets.s3.us-east-1.amazonaws.com/ufrcrecwater-assets/Instruments/temp3.jpg",
        date_installed: new Date("2023-01-27"),
        date_uninstalled: "current",
        instrument_location: "Ona",
        hasTools: false
      },
      {
        id: "ins-005",
        instrument_title: "Sontek IQ Acoustic Doppler Flow Meter",
        instrument_desc:
          "Non-contact flow and velocity measurement instrument for open channels and rivers.",
        s3_url:
          "https://ufrcrecwater-assets.s3.us-east-1.amazonaws.com/ufrcrecwater-assets/Instruments/temp4.jpg",
        date_installed: new Date("2022-09-05"),
        date_uninstalled: "current",
        instrument_location: "Ona",
        hasTools: false
      },
    ],
  };
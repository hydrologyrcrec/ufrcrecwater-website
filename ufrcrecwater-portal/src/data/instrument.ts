import { InstrumentList } from "@/types/instrument";

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
      },
      {
        id: "ins-002",
        instrument_title: "OTT Pluvio² Rain Gauge",
        instrument_desc:
          "All-weather precipitation gauge used for high-resolution rainfall monitoring in hydrologic studies.",
        s3_url:
          "https://ufrcrecwater-assets.s3.us-east-1.amazonaws.com/ufrcrecwater-assets/Instruments/temp1.jpg",
        date_installed: new Date("2021-08-02"),
      },
      {
        id: "ins-003",
        instrument_title: "Campbell Scientific CR1000X Datalogger",
        instrument_desc:
          "Core data acquisition system for collecting, storing, and transmitting sensor measurements in the field.",
        s3_url:
          "https://ufrcrecwater-assets.s3.us-east-1.amazonaws.com/ufrcrecwater-assets/Instruments/temp2.jpg",
        date_installed: new Date("2020-11-10"),
      },
      {
        id: "ins-004",
        instrument_title: "LI-COR LI-190 Quantum Sensor",
        instrument_desc:
          "Measures photosynthetically active radiation (PAR) to support ecosystem productivity and algal bloom studies.",
        s3_url:
          "https://ufrcrecwater-assets.s3.us-east-1.amazonaws.com/ufrcrecwater-assets/Instruments/temp3.jpg",
        date_installed: new Date("2023-01-27"),
      },
      {
        id: "ins-005",
        instrument_title: "Sontek IQ Acoustic Doppler Flow Meter",
        instrument_desc:
          "Non-contact flow and velocity measurement instrument for open channels and rivers.",
        s3_url:
          "https://ufrcrecwater-assets.s3.us-east-1.amazonaws.com/ufrcrecwater-assets/Instruments/temp4.jpg",
        date_installed: new Date("2022-09-05"),
      },
    ],
  };
  
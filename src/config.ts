export const siteConfig = {
  name: "M. Deri Kautsar",
  title: "Lulusan Teknik D3 Elekronika",
  description: "Portfolio website of M. Deri Kautsar",
  accentColor: "#c46df4",
  social: {
    email: "mderikautsar@gmail.com",
    linkedin: "https://www.linkedin.com/in/deri-kautsar-07a840429/",
    twitter: "https://x.com/",
    github: "https://github.com/Zeshunzue",
  },
  aboutMe:
    "An adaptable electronics technician specializing in precision hardware assembly, disassembly, and microcontroller-based system development. Demonstrated engineering versatility by designing circuits and developing functional embedded projects from concept to execution.A reliable and collaborative teammate, excels at translating technical instructions into precise actions, consistently delivering dependable results across diverse hardware engineering tasks.",
  skills: ["KiCAD", "ArduinoIDE", "AutoCAD", "EasyEDA", "Sirkit"],
  projects: [
    {
      name: "Perancangan Sirkuit Audio Mono dan Stereo",
      description:
        "Siap merancang sirkuit PCB dengan tingkat kerapihan tinggi, efisien dan optimal",
      skills: ["KiCAD", "AutoCAD"],
    },
    {
      name: "Mendesign Robot Arm Sederhana",
      description:
        "Mengoperasikan Arduino IDE sebagai platform untuk mengembangkan sistem kendali robot arm sederhana, dengan mikrokontroller Arduino Uno danESP32",
      skills: ["Sirkit", "ArduinoIDE"],
    },
    {
      name: "Mengembangkan Self-Balancing Robot sederhana",
      description:
        "Mengembangkan sistem kendali robot self-balancing sederhana menggunakan mikrokontroller dan sensor, mengembangkan PID controller, sehingga robot dapat menyeimbangkan dirinya secara otomatis.",
      skills: ["Sirkit", "ArduinoIDE", "KiCAD"],
    },
  ],
  experience: [
    {
      company: "PT. Angkasa Pura Indonesia (HALIM PK).",
      title: "Mahasiswa Praktik Kerja Lapangan (PKL)",
      dateRange: "10 Agustus - Sekarang",
      bullets: [
        "Melakukan maintenance harian, mingguan, dan bulanan pada perangkat Elektronika dan IT Bandara Halim PK.",
        "Mengoperasikan perangkat X-RAY bandara, serta memperbaiki saat terjadi kerusakan.",
        "Memasang audio system untuk kegiatan atau event di Bandara Halim PK.",
      ],
    },
    {
      company: "Samsung Service Center",
      title: "Teknisi Service Elektronik",
      dateRange: "July 2023 - January 2024",
      bullets: [
        "Assembly dan disassembly komponen pada perangkat handphone yang mengalami kerusakan.",
        "Melakukan troubleshooting dan perbaikan pada Televisi dan Mesin Cuci.",
        "Melayani pelanggan sebagai costumer service dengan ramah dan professional.",
      ],
    },
  ],
  education: [
    {
      school: "Politeknik Negeri Padang",
      degree: "D3 Teknik Elektronika",
      dateRange: "2024 - Sekarang",
      achievements: [
        "IPK Sementara 3.5",
        "Aktif dalam mempelajari Mikrokontroller dan PLC.",
      ],
    },
    {
      school: "SMK Negeri 1 Bukittinggi",
      degree: "Teknik Audio Video",
      dateRange: "2021 - 2024",
      achievements: [
        "Merancang dan membuat sirkuit audio mono dan stereo",
        "Membuat sistem sirkuit sederhana seperti Amplifier, Mic dan Speaker, serta sistem pendeteksi kebakaran.",
        "Mempelajari dan melakukan service pada Radio dan TV CRT Trainer.",
      ],
    },
  ],
};

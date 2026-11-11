'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-red-600', 'bg-red-600', 'bg-rose-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-rose-700']
const colorFor = (tech: string) => palette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % palette.length]

const projects = [
  {
    number: '01',
    title: { id: "Pengelolaan Barang Milik Negara (BMN)", en: "State-Owned Asset (BMN) Management" },
    description: { id: "Inventarisasi, pendataan, dan pengelolaan BMN untuk mendukung administrasi aset dan fasilitas instansi.", en: "Inventory, data collection, and management of BMN to support agency asset and facility administration." },
    framework: "KANWIL IMIGRASI KALTIM 2025 — 2026",
    techStack: ["BMN", "Aset"],
  },
  {
    number: '02',
    title: { id: "Pemeliharaan 4 Jenis Fasilitas Utama", en: "Maintenance of 4 Main Facility Types" },
    description: { id: "Memeriksa kondisi dan mendukung pemeliharaan kelistrikan, AC, genset, dan fasilitas operasional gedung.", en: "Checking the condition of and supporting the maintenance of electrical systems, air conditioning, generator sets, and building operational facilities." },
    framework: "KANWIL IMIGRASI KALTIM 2025 — 2026",
    techStack: ["Kelistrikan", "Genset"],
  },
  {
    number: '03',
    title: { id: "Pengadaan & Kendaraan Dinas", en: "Procurement & Official Vehicles" },
    description: { id: "Mendukung pengadaan barang, pengelolaan kendaraan dinas, dan koordinasi kebutuhan sarana prasarana kantor.", en: "Supporting goods procurement, official vehicle management, and coordination of office facility needs." },
    framework: "KANWIL IMIGRASI KALTIM 2025 — 2026",
    techStack: ["Pengadaan", "Sarpras"],
  },
  {
    number: '04',
    title: { id: "Arsip & Aplikasi Administrasi", en: "Archives & Administrative Applications" },
    description: { id: "Mengelola arsip serta input dan pemutakhiran data aplikasi administrasi.", en: "Managing archives and entering and updating administrative application data." },
    framework: "KANWIL IMIGRASI KALTIM 2025 — 2026",
    techStack: ["Arsip", "Data"],
  },
  {
    number: '05',
    title: { id: "Pemeliharaan APP: kWh Meter & MCB", en: "APP Maintenance: kWh Meters & MCBs" },
    description: { id: "Inspeksi, pemasangan, penggantian, dan pemeliharaan kWh meter dan MCB pelanggan.", en: "Inspection, installation, replacement, and maintenance of customer kWh meters and MCBs." },
    framework: "PLN ULP KOTA BANGUN 2024",
    techStack: ["kWh Meter", "MCB"],
  },
  {
    number: '06',
    title: { id: "Pemeliharaan Jaringan SUTM", en: "SUTM Network Maintenance" },
    description: { id: "Penggantian fuse link dan fuse cartridge serta pemasangan perangkat proteksi pada SUTM.", en: "Replacing fuse links and fuse cartridges and installing protection devices on SUTM." },
    framework: "PLN ULP KOTA BANGUN 2024",
    techStack: ["SUTM", "Proteksi"],
  },
  {
    number: '07',
    title: { id: "Ground Patrol, Kubikel & Pentanahan", en: "Ground Patrol, Cubicles & Grounding" },
    description: { id: "Ground patrol, inspeksi kubikel, dan pengukuran tahanan pentanahan transformator distribusi.", en: "Ground patrols, cubicle inspections, and grounding resistance measurement on distribution transformers." },
    framework: "PLN ULP KOTA BANGUN 2024",
    techStack: ["Grounding", "Kubikel"],
  },
  {
    number: '08',
    title: { id: "Pengendalian Vegetasi (ROW)", en: "Vegetation Control (ROW)" },
    description: { id: "Mendukung kegiatan Right of Way untuk menjaga keandalan penyaluran tenaga listrik.", en: "Supporting Right of Way activities to maintain the reliability of electricity delivery." },
    framework: "PLN ULP KOTA BANGUN 2024",
    techStack: ["ROW", "Keandalan"],
  },
  {
    number: '09',
    title: { id: "Operasi & Pemeliharaan PLTD", en: "PLTD Operation & Maintenance" },
    description: { id: "Pemeriksaan generator, sistem governor, dan kecepatan putar (RPM), serta pemeliharaan panel kontrol.", en: "Checking the generator, governor system, and rotational speed (RPM), and maintaining control panels." },
    framework: "PLN UPDK MAHAKAM — PLTD KARANG ASAM 2020",
    techStack: ["Generator", "Governor"],
  },
  {
    number: '10',
    title: { id: "Pengujian Tahanan Isolasi (Megger)", en: "Insulation Resistance Testing (Megger)" },
    description: { id: "Pengujian tahanan isolasi pada transformator dan gardu hubung menggunakan insulation tester.", en: "Insulation resistance testing on transformers and switching substations using an insulation tester." },
    framework: "PLN UPDK MAHAKAM — PLTD KARANG ASAM 2020",
    techStack: ["Megger", "Transformator 20 kV"],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{en ? 'FACILITY & ELECTRICAL MAINTENANCE PORTFOLIO' : 'PORTOFOLIO FACILITY & PEMELIHARAAN KELISTRIKAN'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{en ? 'Facilities, Electrical Distribution & Power Plant Experience' : 'Pengalaman Sarana Prasarana, Distribusi Listrik & Pembangkit'}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            {en
              ? 'A record of hands-on work in facilities management, electrical power distribution maintenance, and power plant operation.'
              : 'Rekam jejak pekerjaan langsung di pengelolaan sarana prasarana, pemeliharaan distribusi tenaga listrik, dan operasional pembangkit.'}
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300"
            >
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">{project.number}</span>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1">{project.title[lang]}</h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">{project.description[lang]}</p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">{project.framework}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${colorFor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

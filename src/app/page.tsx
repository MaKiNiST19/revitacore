'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Scene from '@/components/Scene';
import Image from 'next/image';
import { RatingBadge } from "@/components/foundations/rating-badge";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container });
  const titleY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-50%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Section 1 (h-[200vh])
  const sec1Ref = useRef(null);
  const { scrollYProgress: s1Progress } = useScroll({ target: sec1Ref, offset: ["start start", "end end"] });
  const l1w = useTransform(s1Progress, [0.2, 0.3], ["0vw", "14vw"]); const o1 = useTransform(s1Progress, [0.3, 0.4], [0, 1]);
  const l2w = useTransform(s1Progress, [0.4, 0.5], ["0vw", "18vw"]); const o2 = useTransform(s1Progress, [0.5, 0.6], [0, 1]);
  const l3w = useTransform(s1Progress, [0.6, 0.7], ["0vw", "15vw"]); const o3 = useTransform(s1Progress, [0.7, 0.8], [0, 1]);

  // Section 2 (h-[200vh])
  const sec2Ref = useRef(null);
  const { scrollYProgress: s2Progress } = useScroll({ target: sec2Ref, offset: ["start start", "end end"] });
  const sl1w = useTransform(s2Progress, [0.15, 0.25], ["0vw", "14vw"]); const so1 = useTransform(s2Progress, [0.25, 0.3], [0, 1]);
  const sl2w = useTransform(s2Progress, [0.3, 0.4], ["0vw", "18vw"]);   const so2 = useTransform(s2Progress, [0.4, 0.45], [0, 1]);
  const sl3w = useTransform(s2Progress, [0.45, 0.55], ["0vw", "20vw"]); const so3 = useTransform(s2Progress, [0.55, 0.6], [0, 1]);
  const sl4w = useTransform(s2Progress, [0.6, 0.7], ["0vw", "18vw"]);   const so4 = useTransform(s2Progress, [0.7, 0.75], [0, 1]);
  const sl5w = useTransform(s2Progress, [0.75, 0.85], ["0vw", "14vw"]); const so5 = useTransform(s2Progress, [0.85, 0.9], [0, 1]);

  // Section 4 (Cap Closing - h-[150vh])
  const sec4Ref = useRef(null);
  const { scrollYProgress: s4Progress } = useScroll({ target: sec4Ref, offset: ["start end", "end end"] });
  
  // Kapak is properly responsive and drops from above to exactly over the neck
  const capY = useTransform(s4Progress, [0.4, 0.88], ["-120%", "22%"]); // Drops aggresively to close
  const openOpacity = useTransform(s4Progress, [0.88, 0.92], [1, 0]);
  const closedOpacity = useTransform(s4Progress, [0.88, 0.92], [0, 1]);

  const textRevealY = useTransform(s4Progress, [0.8, 0.95], [50, 0]);
  const textRevealOpacity = useTransform(s4Progress, [0.8, 0.95], [0, 1]);

  return (
    <main ref={container} className="relative bg-[#F4F4F2] text-[#111]">
      <Scene />
      
      <header className="fixed top-0 left-0 w-full p-8 z-40 flex items-start pointer-events-none">
        <div className="relative w-40 h-10">
          <Image src="/revitacore-2.png" alt="Revitacore" fill className="object-contain object-left" priority />
        </div>
      </header>

      {/* HERO: 100vh */}
      <section className="h-screen w-full flex flex-col justify-center items-center relative z-20 pointer-events-none">
        <motion.div style={{ y: titleY, opacity: titleOpacity }} className="text-center w-full flex flex-col items-center mt-20">
          <div className="flex flex-col items-center mb-10 max-w-lg">
             <p className="mb-4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase opacity-80 max-w-md text-center bg-black/5 px-6 py-2 rounded-full">
              Vücudun İhtiyacı. Bilimin Cevabı.
            </p>
            <h2 className="text-[9vw] md:text-[8vw] leading-[0.85] font-black tracking-[-0.05em] uppercase text-[#111]">SADE &</h2>
            <h2 className="text-[9vw] md:text-[8vw] leading-[0.85] font-black tracking-[-0.05em] uppercase text-[#FF6A3D] mt-2">GÜÇLÜ</h2>
            <p className="mt-8 text-[11px] font-semibold tracking-[0.1em] uppercase opacity-60 max-w-md text-center leading-relaxed">
              Günlük beslenmenizi desteklemek için sade, kontrollü ve bilim temelli formülasyonlar.
            </p>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 px-8 w-full max-w-6xl mt-4 pointer-events-auto">
            <RatingBadge rating={5} title="Bilim Temelli Formül" subtitle="Gereksizlerden arındırılmış formülasyon." />
            <RatingBadge rating={5} title="Yerli Üretim" subtitle="Türkiye'de profesyonel tesislerde." />
            <RatingBadge rating={5} title="Sertifikalı Kalite" subtitle="ISO, GMP ve HACCP standartlarıyla." />
            <RatingBadge rating={5} title="3 Farklı Ürün" subtitle="Magnezyum, Multivitamin ve Omega-3." />
          </div>
        </motion.div>
      </section>

      {/* SECTION 1 - LEFT PINNED : 200vh */}
      <section ref={sec1Ref} className="h-[200vh] w-full relative z-20">
        <div className="sticky top-0 h-screen flex items-center px-8 md:px-24 pointer-events-none">
          <div className="w-[50%] ml-auto relative mt-16 pointer-events-auto">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-50 mb-4 text-[#FF6A3D]">Neden Revitacore?</h4>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 max-w-md leading-tight text-[#111]">
              Sade Formül. <br/> <span className="text-black/20">Gerçek Destek.</span>
            </h3>
            <p className="max-w-xs text-sm opacity-80 font-medium leading-relaxed">
              Takviye edici gıda alanında gereksiz karmaşıklığa karşı duran bir marka. Bilimsel veriler ışığında şeffaf anlayış. İçinde ne varsa etikette yazar.
            </p>
          </div>
          
          {/* Origin is perfectly aligned and 0-size to branch out naturally */}
          <div className="absolute left-[25vw] top-1/2 w-0 h-0 z-10">
            <motion.div style={{ rotate: -12 }} className="absolute left-0 top-0 flex items-center origin-left w-max">
              <motion.div style={{ width: l1w }} className="h-[2px] bg-[#FF6A3D]/40" />
              <motion.div style={{ opacity: o1, rotate: 12 }} className="ml-4 w-[250px]">
                <span className="text-[11px] uppercase tracking-[0.2em] font-black text-[#FF6A3D]">01 · Şeffaf İçerik</span>
                <p className="text-[9px] uppercase font-bold text-black/60 mt-2 leading-tight">Ne koyduğumuzu biliyoruz. Siz de bilmelisiniz.</p>
              </motion.div>
            </motion.div>
            <motion.div style={{ rotate: 0 }} className="absolute left-0 top-0 flex items-center origin-left w-max">
              <motion.div style={{ width: l2w }} className="h-[2px] bg-[#FF6A3D]/40" />
              <motion.div style={{ opacity: o2, rotate: 0 }} className="ml-4 w-[250px]">
                <span className="text-[11px] uppercase tracking-[0.2em] font-black text-[#FF6A3D]">02 · Kontrollü Üretim</span>
                <p className="text-[9px] uppercase font-bold text-black/60 mt-2 leading-tight">Uluslararası kalite standartlarında, kusursuz tescil.</p>
              </motion.div>
            </motion.div>
            <motion.div style={{ rotate: 12 }} className="absolute left-0 top-0 flex items-center origin-left w-max">
              <motion.div style={{ width: l3w }} className="h-[2px] bg-[#FF6A3D]/40" />
              <motion.div style={{ opacity: o3, rotate: -12 }} className="ml-4 w-[250px]">
                <span className="text-[11px] uppercase tracking-[0.2em] font-black text-[#FF6A3D]">03 · Uzun Vadeli Güven</span>
                <p className="text-[9px] uppercase font-bold text-black/60 mt-2 leading-tight">Ürün değil, güvenle ekleyebileceğiniz rutin.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - RIGHT PINNED : 200vh */}
      <section ref={sec2Ref} className="h-[200vh] w-full relative z-20">
        <div className="sticky top-0 h-screen flex justify-start items-center px-8 md:px-24 pointer-events-none">
          <div className="w-[50%] flex flex-col items-start text-left relative mt-16 pointer-events-auto">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-50 mb-4 text-[#FF6A3D]">Ne Sağlar?</h4>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 max-w-sm leading-tight text-[#111]">
              Günlük Rutininizi <br/> Destekleyen 3 Temel Alan
            </h3>
            <p className="max-w-xs text-sm opacity-80 font-medium leading-relaxed">
              Magnezyum, Multivitamin ve Omega-3 formülasyonlarımız; günlük beslenmenizi üç temel alanda desteklemek üzere tasarlandı.
            </p>
          </div>

          <div className="absolute right-[25vw] top-1/2 w-0 h-0 z-10">
            {[
              { r: 16, lw: sl1w, op: so1, t: "FAYDA 1 — Mineral Desteği", d: "Temel besin ögelerini dengeler." },
              { r: 8, lw: sl2w, op: so2, t: "FAYDA 2 — Çoklu Form", d: "Akıllı formülasyon anlayışı." },
              { r: 0, lw: sl3w, op: so3, t: "FAYDA 3 — Günlük Uygunluk", d: "Rutine kolay entegre edilir." },
              { r: -8, lw: sl4w, op: so4, t: "FAYDA 4 — Yağ Asidi", d: "EPA/DHA içerikli Omega-3." },
              { r: -16, lw: sl5w, op: so5, t: "FAYDA 5 — Kalite Testleri", d: "Tüm aşamalarda kalite kontrol." },
            ].map((i, k) => (
              <motion.div key={k} style={{ rotate: i.r }} className="absolute right-0 top-0 flex flex-row-reverse items-center origin-right w-max">
                <motion.div style={{ width: i.lw }} className="h-[2px] bg-[#FF6A3D]/40" />
                <motion.div style={{ opacity: i.op, rotate: -i.r }} className="mr-4 w-[220px] text-right">
                  <span className="text-[10px] uppercase tracking-[0.1em] font-black text-[#FF6A3D]">{i.t}</span>
                  <p className="text-[9px] uppercase font-bold text-black/60 mt-1 leading-tight">{i.d}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - PRODUCT CARDS */}
      <section className="py-32 w-full relative z-20 flex flex-col items-center px-8 md:px-24">
        <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-50 mb-4 mt-12 text-[#FF6A3D]">Formülasyonlarımız</h4>
        <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-16 text-center max-w-2xl text-[#111]">
          Üç Ürün. Tek Marka. Sade Yaklaşım.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl z-20">
          {[
            { img: "magnezyum-complex.png", tag: "Magnezyum · 60 Tablet", title: "4 Formda Magnezyum Desteği", desc: "Sitrat, bisglisinat, malat ve sülfat formlarını bir arada sunan özel formülasyon." },
            { img: "multivitamin.png", tag: "Vitamin & Mineral · 60 Tablet", title: "Kapsamlı Vitamin Formülü", desc: "B komplex, D3+K2, Q10 dahil 30'dan fazla madde." },
            { img: "omega-3.png", tag: "Balık Yağı · 60 Kapsül", title: "EPA & DHA İçeren Omega-3", desc: "Sade formülasyon ile yüksek saflıkta günlük yağ asidi desteği." }
          ].map((prod) => (
            <div key={prod.title} className="bg-white/90 p-8 rounded-[2rem] drop-shadow-sm border border-black/5 hover:drop-shadow-2xl transition-all flex flex-col items-center text-center group cursor-pointer">
              <div className="w-48 h-64 relative mb-6 group-hover:scale-105 transition-transform duration-500">
                 <Image src={`/${prod.img}`} alt={prod.title} fill className="object-contain drop-shadow-lg" priority onError={(e) => { e.currentTarget.style.display = 'none' }} />
              </div>
              <span className="text-[9px] uppercase tracking-widest font-black text-[#FF6A3D] mb-4 bg-[#FF6A3D]/10 px-4 py-2 rounded-full">{prod.tag}</span>
              <h4 className="text-lg font-bold tracking-tight mb-3 text-[#111]">{prod.title}</h4>
              <p className="text-[11px] opacity-70 font-medium leading-relaxed mb-6 flex-grow">{prod.desc}</p>
              <button className="w-full py-4 rounded-xl border-2 border-black font-bold uppercase tracking-widest text-[10px] group-hover:bg-black group-hover:text-white transition-colors duration-300">
                Ürünü İncele →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 - CAP CLOSING seq : 150vh */}
      <section ref={sec4Ref} className="h-[150vh] w-full relative z-30 pt-[10vh]">
        <div className="sticky bottom-0 h-screen flex flex-col justify-end items-center pb-[5vh] overflow-hidden">
          
          <motion.div style={{ y: textRevealY, opacity: textRevealOpacity }} className="text-center mb-16 relative z-40">
             <h4 className="text-xs uppercase tracking-widest font-bold opacity-50 mb-4 text-[#FF6A3D]">Rutininize Ekleyin</h4>
             <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 max-w-lg leading-tight text-[#111]">
               Günlük Bir Adım.<br/>Tutarlı Bir Destek.
             </h3>
             <p className="mb-8 opacity-70 text-[11px] uppercase tracking-widest max-w-md mx-auto font-bold leading-relaxed text-black/80">
               Sade formül. Kontrollü üretim. Güvenilir marka. <br/>İhtiyacınız olan her şey burada.
             </p>
             <button className="px-12 py-5 bg-[#FF6A3D] text-white text-sm font-bold uppercase tracking-widest rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 mb-4">
               Ürünleri İncele →
             </button>
             <div className="block">
               <button className="text-[9px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-[#FF6A3D] transition-all">
                 Sorularınız için: 444 4 851
               </button>
             </div>
          </motion.div>
          
          <div className="relative w-80 h-[300px] md:w-[400px] md:h-[400px] pointer-events-none z-30 drop-shadow-2xl mt-4 flex justify-center items-end">
            
            <motion.div style={{ opacity: openOpacity }} className="absolute inset-x-0 w-[90%] mx-auto h-[90%] bottom-0 z-10 transition-transform">
              <Image src="/acik.png" alt="Acik Sise" fill className="object-contain object-bottom" priority />
            </motion.div>

            {/* Kapak Half Scaled, drops onto acik.png */}
            <motion.div style={{ y: capY, opacity: openOpacity }} className="absolute inset-x-0 mx-auto w-1/2 h-1/2 top-0 z-20 transition-transform">
              <Image src="/kapak.png" alt="Kapak" fill className="object-contain object-top" priority />
            </motion.div>

            <motion.div style={{ opacity: closedOpacity }} className="absolute inset-x-0 w-[90%] mx-auto h-[90%] bottom-0 z-30 transition-transform">
              <Image src="/kapali.png" alt="Kapali Sise" fill className="object-contain object-bottom" priority />
            </motion.div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#111] text-white py-16 relative z-40 -mt-10">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="relative w-40 h-10 saturate-0 brightness-200 opacity-60">
             <Image src="/revitacore-2.png" alt="Revitacore" fill className="object-contain object-left" />
          </div>
          <div className="text-center md:text-right">
            <p className="opacity-80 text-[10px] uppercase tracking-[0.2em] font-medium mb-2">Hacımehmet Köyü Kurtuluş Cd. No:17 Yalova</p>
            <p className="opacity-80 text-[10px] uppercase tracking-[0.2em] font-medium">info@revitacore.com.tr · revitacore.com.tr</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-8 mt-12 pt-8 border-t border-white/10 text-center">
          <p className="opacity-50 text-[10px] uppercase font-bold tracking-widest leading-loose text-white/40">
            Bu ürünler takviye edici gıdadır. Hastalıkların önlenmesi veya tedavi edilmesi amacıyla kullanılmaz.
          </p>
        </div>
      </footer>
    </main>
  );
}

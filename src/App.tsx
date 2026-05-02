// import React, { useState } from 'react';
// import { motion } from 'motion/react';
// import { CalendarHeart, Clock, MapPin, Phone, Heart } from 'lucide-react';

// const Section = ({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
//   <motion.section
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, margin: "-50px" }}
//     transition={{ duration: 0.8, delay }}
//     className={`w-full max-w-lg mx-auto mb-10 px-4 ${className}`}
//   >
//     {children}
//   </motion.section>
// );

// const Divider = () => (
//   <div className="flex items-center justify-center gap-4 my-8 opacity-60">
//     <div className="h-px bg-primary flex-1 max-w-[60px]" />
//     <Heart className="w-4 h-4 text-accent fill-accent" />
//     <div className="h-px bg-primary flex-1 max-w-[60px]" />
//   </div>
// );

// const HangingLotus = ({ delay, left, heightClass = 'h-24', scale = 1 }: { delay: number, left: string, heightClass?: string, scale?: number }) => (
//   <motion.div
//     initial={{ y: -100, opacity: 0 }}
//     animate={{ y: 0, opacity: 1 }}
//     transition={{ duration: 1.5, delay, ease: "easeOut" }}
//     className="absolute top-0 z-0 select-none pointer-events-none"
//     style={{ left, transform: `scale(${scale})` }}
//   >
//     <motion.div
//       animate={{ rotate: [-3, 3, -3] }}
//       transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
//       style={{ originY: 0 }}
//       className="flex flex-col items-center"
//     >
//       <div className={`w-0.5 ${heightClass} bg-gradient-to-b from-primary/60 to-primary/20`}></div>
//       <div className="-mt-2 relative">
//         <svg width="40" height="40" viewBox="0 0 100 100" className="text-primary/70 fill-current drop-shadow-md">
//            <path d="M50 90 C 20 90, 10 50, 50 10 C 90 50, 80 90, 50 90" className="opacity-90"/>
//            <path d="M50 90 C 10 80, 0 40, 50 20 C 100 40, 90 80, 50 90" className="opacity-60"/>
//            <path d="M50 90 C 30 85, 20 45, 50 30 C 80 45, 70 85, 50 90" className="opacity-100"/>
//         </svg>
//       </div>
//     </motion.div>
//   </motion.div>
// );

// const MandalaBackground = () => (
//   <motion.div 
//     className="fixed inset-0 flex items-center justify-center pointer-events-none z-[-1] opacity-[0.04]"
//     animate={{ rotate: 360 }}
//     transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
//   >
//     <svg width="800" height="800" viewBox="0 0 100 100" className="text-primary fill-current">
//        {[...Array(12)].map((_, i) => (
//          <g key={i} transform={`rotate(${i * 30} 50 50)`}>
//            <path d="M50 50 L45 10 A20 20 0 0 1 55 10 Z" />
//            <circle cx="50" cy="5" r="2" />
//          </g>
//        ))}
//        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
//        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
//     </svg>
//   </motion.div>
// );

// export default function App() {
//   const [imgError, setImgError] = useState(false);

//   return (
//     <div className="min-h-screen relative pb-20 selection:bg-primary-light selection:text-white overflow-hidden">
//       <MandalaBackground />
      
//       {/* Hanging Elements */}
//       <div className="fixed top-0 left-0 right-0 w-full max-w-3xl mx-auto h-0 z-0 pointer-events-none">
//         <HangingLotus delay={0.2} left="10%" heightClass="h-16" scale={0.8} />
//         <HangingLotus delay={0.5} left="30%" heightClass="h-32" scale={1.1} />
//         <HangingLotus delay={0.3} left="70%" heightClass="h-24" scale={0.9} />
//         <HangingLotus delay={0.6} left="85%" heightClass="h-12" scale={0.7} />
//       </div>

//       {/* Top Decorative Arch Border */}
//       <div className="w-full relative z-10">
//         <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-8 sm:h-12 text-primary opacity-90 fill-current drop-shadow-sm">
//           <path d="M0,0 L100,0 L100,5 Q75,10 50,5 Q25,10 0,5 Z" />
//         </svg>
//         <div className="absolute top-0 left-0 right-0 h-1 bg-accent w-full opacity-70"></div>
//       </div>

//       <main className="pt-8 px-4 relative z-10">
//         {/* Invocation Section */}
//         <Section delay={0.1} className="text-center">
//           <motion.div 
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="mb-8"
//           >
//             <img src="https://api.iconify.design/noto:om.svg" alt="Om" className="w-16 h-16 mx-auto mb-4 drop-shadow-md" />
//             <h2 className="text-xl font-bold text-primary tracking-wider mb-2">॥ શ્રી ગણેશાય નમઃ ॥</h2>
//             <h2 className="text-lg font-semibold text-primary/80">॥ શ્રી ચામુંડા માતાજી ॥</h2>
//             <h2 className="text-lg font-semibold text-primary/80">॥ શ્રી મેલડી માતાજી ॥</h2>
//           </motion.div>

//           <div className="glass-card rounded-2xl p-6 relative ornamental-border overflow-hidden bg-white/70">
//              {/* Decorative Corners SVG */}
//              <svg className="absolute top-1 left-1 w-8 h-8 text-accent opacity-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
//                <path d="M0 0 L 100 0 A 100 100 0 0 0 0 100 Z" />
//              </svg>
//              <svg className="absolute top-1 right-1 w-8 h-8 text-accent opacity-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" transform="scale(-1, 1)">
//                <path d="M0 0 L 100 0 A 100 100 0 0 0 0 100 Z" />
//              </svg>
//              <svg className="absolute bottom-1 left-1 w-8 h-8 text-accent opacity-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" transform="scale(1, -1)">
//                <path d="M0 0 L 100 0 A 100 100 0 0 0 0 100 Z" />
//              </svg>
//              <svg className="absolute bottom-1 right-1 w-8 h-8 text-accent opacity-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" transform="scale(-1, -1)">
//                <path d="M0 0 L 100 0 A 100 100 0 0 0 0 100 Z" />
//              </svg>

//             <p className="text-lg leading-relaxed text-text-main font-medium italic mb-2 relative z-10">
//               "દાંપત્ય જીવનની પૂર્ણતા અને સમૃદ્ધ ઘડી એટલે <span className="text-primary font-bold text-xl">માતૃત્વ</span>"
//             </p>
//           </div>
//         </Section>

//         {/* Main Title Section */}
//         <Section delay={0.2} className="text-center mt-12">
//           <motion.h1 
//             className="text-5xl md:text-6xl font-black text-primary mb-6 drop-shadow-sm"
//             style={{ fontFamily: 'Rozha One, serif' }}
//             initial={{ scale: 0.9, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//           >
//             સીમંત સંસ્કાર
//           </motion.h1>
          
//           <div className="text-base md:text-lg text-text-main leading-loose font-medium space-y-4 px-2 bg-white/40 p-6 rounded-3xl backdrop-blur-sm border border-primary/5 shadow-sm">
//             <p>
//               સહર્ષ ખુશાલી સાથે જણાવવાનું કે અમારા કુળદેવી શ્રી ચામુંડા માતાજી અને મેલડી માતાજી ની અસીમ કૃપાથી
//             </p>
//             <p className="text-sm md:text-base text-text-muted">
//               સ્વ.શ્રી ભગવતીબેન તથા શ્રી હરિભાઈ વજાભાઇ પ્રજાપતિ ના સુપુત્ર
//             </p>
//             <p className="text-xl text-primary font-bold">
//               ચિ. અશોક
//             </p>
//             <p className="text-sm md:text-base text-text-muted">ના ધર્મપત્ની</p>
//             <p className="text-2xl text-primary font-bold mb-4">
//               અ.સૌ. મીના
//             </p>
//             <p>
//               ના <strong>સીમંત વિધીનું</strong> શુભ મુહૂર્ત વિક્રમ સવંત ૨૦૮૨ ના વૈશાખ વદ - ૮ ને <strong className="text-primary whitespace-nowrap">૧૦/૦૫/૨૦૨૬</strong> રવિવાર ના શુભદિને સવારે ૧૦:૩૦ કલાકે રાખેલ છે.
//             </p>
//           </div>
//         </Section>

//         <Divider />

//         {/* Events / Schedule */}
//         <Section delay={0.3}>
//           <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-md border-2 border-accent/20 relative overflow-hidden">
//              {/* Subtle floral background decoration */}
//              <div className="absolute -right-12 -bottom-12 text-accent/15 w-48 h-48 rotate-12 pointer-events-none">
//                 <svg viewBox="0 0 100 100" fill="currentColor">
//                   {[...Array(6)].map((_, i) => (
//                     <path key={i} d="M50 50 C 40 10, 60 10, 50 50" transform={`rotate(${i * 60} 50 50)`} />
//                   ))}
//                   <circle cx="50" cy="50" r="5" />
//                 </svg>
//              </div>

//             <h3 className="text-2xl font-bold text-center text-primary mb-8 relative z-10" style={{ fontFamily: 'Rozha One, serif' }}>
//               શુભ પ્રસંગો
//             </h3>

//             <div className="space-y-6 relative z-10">
//               <div className="flex items-start gap-4">
//                 <div className="bg-gradient-to-br from-primary/10 to-accent/20 p-3 rounded-full text-primary shrink-0">
//                   <CalendarHeart className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-bold text-text-main mb-1">સીમંત વિધી</h4>
//                   <div className="flex items-center gap-2 text-text-muted mb-1">
//                     <Clock className="w-4 h-4" />
//                     <span>સવારે ૧૦:૩૦ કલાકે</span>
//                   </div>
//                   <p className="text-sm font-medium text-primary">રવિવાર, ૧૦ મે ૨૦૨૬</p>
//                 </div>
//               </div>

//               <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

//               <div className="flex items-start gap-4">
//                 <div className="bg-gradient-to-br from-primary/10 to-accent/20 p-3 rounded-full text-primary shrink-0">
//                   <Heart className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-bold text-text-main mb-1">ભોજન સમારંભ</h4>
//                   <div className="flex items-center gap-2 text-text-muted mb-1">
//                     <Clock className="w-4 h-4" />
//                     <span>બપોરે ૧૧:૩૦ કલાકે</span>
//                   </div>
//                   <p className="text-sm font-medium text-primary">રવિવાર, ૧૦ મે ૨૦૨૬</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Section>

//         <Divider />

//         {/* Venues */}
//         <Section delay={0.4}>
//            <h3 className="text-2xl font-bold text-center text-primary mb-8" style={{ fontFamily: 'Rozha One, serif' }}>
//               સ્થળ
//             </h3>

//             <div className="grid gap-6">
//               {/* Event Venue */}
//               <div className="glass-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-primary relative overflow-hidden bg-white/70">
//                 <div className="inline-flex bg-primary/10 p-3 rounded-full mb-4 ring-4 ring-white">
//                   <MapPin className="w-6 h-6 text-primary" />
//                 </div>
//                 <h4 className="text-lg font-bold text-primary mb-3">શુભ સ્થળ</h4>
//                 <p className="text-text-main leading-relaxed">
//                   ઘર નં - એ - ૫, આશુતોષનગર સોસાયટી,<br/>
//                   દર્શન બંગ્લોઝની પાછળ, પાંજરાપોળ - કરણનગર રોડ,<br/>
//                   કડી, મહેસાણા - 382715
//                 </p>
//               </div>

//               {/* Dining Venue */}
//               <div className="glass-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-accent relative overflow-hidden bg-white/70">
//                 <div className="inline-flex bg-accent/20 p-3 rounded-full mb-4 ring-4 ring-white">
//                   <MapPin className="w-6 h-6 text-accent" />
//                 </div>
//                 <h4 className="text-lg font-bold text-accent mb-3">ભોજન સ્થળ</h4>
//                 <p className="text-text-main leading-relaxed">
//                   કોમન પ્લોટ, આશુતોષનગર સોસાયટી,<br/>
//                   દર્શન બંગ્લોઝની પાછળ, પાંજરાપોળ - કરણનગર રોડ,<br/>
//                   કડી, મહેસાણા - 382715
//                 </p>
//               </div>
//             </div>
//         </Section>

//         <Divider />

//         {/* Footer / Contact */}
//         <Section delay={0.5} className="mb-24">
//           <div className="text-center bg-gradient-to-br from-primary to-primary-light text-white rounded-[2rem] p-8 relative overflow-hidden shadow-2xl border-4 border-white/20">
//              {/* Decorative pattern overlay */}
//              <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '16px 16px', backgroundPosition: '0 0'}}></div>
//              <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '16px 16px', backgroundPosition: '8px 8px'}}></div>
             
//             <h4 className="text-xl font-medium mb-2 text-accent-light" style={{ fontFamily: 'Rozha One, serif' }}>નિમંત્રક</h4>
//             <p className="text-2xl font-bold mb-6 text-white drop-shadow-md">
//               શ્રી હરિભાઈ વજાભાઇ પ્રજાપતિ (વિરાણી)<br/>
//               <span className="text-lg font-medium opacity-90 inline-block mt-2">તથા પરિવાર</span>
//             </p>

//             <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-accent-light">
//               <a href="tel:7698142323" className="flex items-center gap-2 hover:text-white transition-all bg-black/20 hover:bg-black/30 px-5 py-2.5 rounded-full backdrop-blur-sm shadow-inner cursor-pointer">
//                 <Phone className="w-4 h-4" />
//                 <span className="font-medium tracking-wider">7698142323</span>
//               </a>
//               <a href="tel:9727085023" className="flex items-center gap-2 hover:text-white transition-all bg-black/20 hover:bg-black/30 px-5 py-2.5 rounded-full backdrop-blur-sm shadow-inner cursor-pointer">
//                 <Phone className="w-4 h-4" />
//                 <span className="font-medium tracking-wider">9727085023</span>
//               </a>
//             </div>
//           </div>
//         </Section>

//       </main>

//       {/* Conor Image Attachment (Bottom Right Character) */}
//       <motion.div
//         className="fixed bottom-0 right-0 sm:right-4 md:right-8 z-40 drop-shadow-2xl"
//         initial={{ opacity: 0, y: 100, x: 50 }}
//         animate={{ opacity: 1, y: 0, x: 0 }}
//         transition={{ duration: 1.2, delay: 0.8, type: "spring", bounce: 0.3 }}
//       >
//         {!imgError ? (
//           <img 
//             src="/conorImage.png" 
//             alt="Couple Character Illustration" 
//             className="w-48 sm:w-56 md:w-72 lg:w-80 h-auto origin-bottom-right pointer-events-none"
//             onError={() => setImgError(true)}
//           />
//         ) : (
//           <div className="bg-white/80 backdrop-blur p-4 rounded-xl shadow-lg border border-primary/20 m-4 w-48 sm:w-64 text-center">
//             <h5 className="text-sm text-text-main font-bold mb-2">Image Missing</h5>
//             <p className="text-xs text-text-muted">
//               Because you uploaded the image in the chat, it needs to be added to the project files to display here.<br/><br/>
//               Open the file explorer, upload your image to the <strong>public</strong> folder, and rename it to <strong>conorImage.png</strong>
//             </p>
//           </div>
//         )}
//       </motion.div>
      
//       {/* Bottom Decorative Pattern Border */}
//       <div className="fixed bottom-0 left-0 right-0 h-4 w-full bg-primary bg-opacity-90 flex justify-around items-center z-50 overflow-hidden">
//          <div className="h-0.5 bg-accent/40 w-full mx-1 rounded-full"></div>
//          <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="absolute bottom-4 left-0 w-full h-2 text-primary opacity-50 fill-current">
//           <path d="M0,10 L100,10 L100,5 Q75,0 50,5 Q25,10 0,5 Z" />
//          </svg>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CalendarHeart, Clock, MapPin, Phone, Heart } from 'lucide-react';

const Section = ({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay }}
    className={`w-full max-w-lg mx-auto mb-10 px-4 ${className}`}
  >
    {children}
  </motion.section>
);

const Divider = () => (
  <div className="flex items-center justify-center gap-4 my-8 opacity-60">
    <div className="h-px bg-primary flex-1 max-w-[60px]" />
    <Heart className="w-4 h-4 text-accent fill-accent" />
    <div className="h-px bg-primary flex-1 max-w-[60px]" />
  </div>
);

const FloatingPetal = ({ delay, left, duration }: { delay: number, left: string, duration: number }) => (
  <motion.div
    initial={{ y: -50, x: 0, opacity: 0, rotate: 0 }}
    animate={{ 
      y: ['0vh', '105vh'], 
      x: [0, 50, -50, 20, 0], 
      opacity: [0, 1, 1, 0], 
      rotate: [0, 90, 180, 360] 
    }}
    transition={{ duration: duration, delay: delay, repeat: Infinity, ease: "linear" }}
    className="fixed top-0 z-0 pointer-events-none"
    style={{ left }}
  >
    <svg width="24" height="24" viewBox="0 0 100 100" className="opacity-70 drop-shadow-sm fill-primary-light">
      <path d="M50 0 C 100 0, 100 50, 50 100 C 0 50, 0 0, 50 0 Z" />
    </svg>
  </motion.div>
);

const HangingLotus = ({ delay, left, heightClass = 'h-24', scale = 1 }: { delay: number, left: string, heightClass?: string, scale?: number }) => (
  <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.5, delay, ease: "easeOut" }}
    className="absolute top-0 z-0 select-none pointer-events-none"
    style={{ left, transform: `scale(${scale})` }}
  >
    <motion.div
      animate={{ rotate: [-3, 3, -3] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
      style={{ originY: 0 }}
      className="flex flex-col items-center"
    >
      <div className={`w-0.5 ${heightClass} bg-gradient-to-b from-primary/60 to-primary/20`}></div>
      <div className="-mt-2 relative">
        <svg width="45" height="45" viewBox="0 0 100 100" className="drop-shadow-md">
           <path d="M50 20 C 60 50, 70 80, 50 90 C 30 80, 40 50, 50 20 Z" fill="var(--color-primary-light)" className="opacity-90"/>
           <path d="M50 90 C 20 80, 10 40, 30 30 C 40 50, 45 70, 50 90 Z" fill="var(--color-primary)" className="opacity-80"/>
           <path d="M50 90 C 80 80, 90 40, 70 30 C 60 50, 55 70, 50 90 Z" fill="var(--color-primary)" className="opacity-80"/>
           <path d="M45 90 C 15 85, 0 50, 15 45 C 25 65, 35 80, 45 90 Z" fill="var(--color-primary-light)" className="opacity-60"/>
           <path d="M55 90 C 85 85, 100 50, 85 45 C 75 65, 65 80, 55 90 Z" fill="var(--color-primary-light)" className="opacity-60"/>
        </svg>
      </div>
    </motion.div>
  </motion.div>
);

const HangingBell = ({ delay, left, heightClass = 'h-32', scale = 1 }: { delay: number, left: string, heightClass?: string, scale?: number }) => (
  <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.5, delay, ease: "easeOut" }}
    className="absolute top-0 z-0 select-none pointer-events-none"
    style={{ left, transform: `scale(${scale})` }}
  >
    <motion.div
      animate={{ rotate: [-5, 5, -5] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 1.5 }}
      style={{ originY: 0 }}
      className="flex flex-col items-center"
    >
      <div className={`w-0.5 ${heightClass} bg-gradient-to-b from-accent to-accent/30`}></div>
      <div className="-mt-1 relative">
        <svg width="24" height="32" viewBox="0 0 100 120" className="fill-accent drop-shadow-md">
           <path d="M20 60 C 20 20, 80 20, 80 60 L 90 90 L 10 90 Z" />
           <circle cx="50" cy="100" r="12" />
           <path d="M35 15 C 35 0, 65 0, 65 15 Z" fill="none" stroke="currentColor" strokeWidth="8"/>
        </svg>
      </div>
    </motion.div>
  </motion.div>
);

const MandalaBackground = () => (
  <motion.div 
    className="fixed inset-0 flex items-center justify-center pointer-events-none z-[-1] opacity-[0.04]"
    animate={{ rotate: 360 }}
    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
  >
    <svg width="800" height="800" viewBox="0 0 100 100" className="text-primary fill-current">
       {[...Array(12)].map((_, i) => (
         <g key={i} transform={`rotate(${i * 30} 50 50)`}>
           <path d="M50 50 L45 10 A20 20 0 0 1 55 10 Z" />
           <circle cx="50" cy="5" r="2" />
         </g>
       ))}
       <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
       <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  </motion.div>
);

const CornerLeaves = () => (
  <motion.div
    initial={{ opacity: 0, x: -50, y: 50 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 1.5, delay: 0.5 }}
    className="fixed bottom-0 left-0 z-0 pointer-events-none drop-shadow-lg"
  >
    <svg width="150" height="200" viewBox="0 0 100 150" className="opacity-80 text-green-700 fill-current">
      <path d="M 0 150 C 0 100 20 80 50 80 C 40 100 50 120 0 150 Z" />
      <path d="M 0 150 C 0 80 40 50 80 30 C 60 70 80 100 0 150 Z" className="opacity-90"/>
      <path d="M 0 150 C 20 60 70 40 100 10 C 80 60 90 90 0 150 Z" className="opacity-80"/>
      {/* Decorative dots/flowers */}
      <circle cx="60" cy="70" r="4" className="text-accent fill-current" />
      <circle cx="80" cy="40" r="3" className="text-primary-light fill-current" />
      <circle cx="40" cy="110" r="5" className="text-accent fill-current" />
    </svg>
  </motion.div>
);

export default function App() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="min-h-screen relative pb-20 selection:bg-primary-light selection:text-white overflow-hidden">
      <MandalaBackground />
      <CornerLeaves />
      
      {/* Falling Petals */}
      <FloatingPetal delay={0} left="5%" duration={12} />
      <FloatingPetal delay={3} left="15%" duration={15} />
      <FloatingPetal delay={1} left="25%" duration={10} />
      <FloatingPetal delay={7} left="40%" duration={14} />
      <FloatingPetal delay={2} left="60%" duration={11} />
      <FloatingPetal delay={5} left="75%" duration={13} />
      <FloatingPetal delay={8} left="85%" duration={16} />
      <FloatingPetal delay={4} left="95%" duration={12} />

      {/* Hanging Elements */}
      <div className="fixed top-0 left-0 right-0 w-full max-w-4xl mx-auto h-0 z-0 pointer-events-none">
        <HangingLotus delay={0.2} left="8%" heightClass="h-16" scale={0.8} />
        <HangingBell delay={0.4} left="18%" heightClass="h-24" scale={0.9} />
        <HangingLotus delay={0.5} left="30%" heightClass="h-32" scale={1.1} />
        
        <HangingLotus delay={0.3} left="70%" heightClass="h-24" scale={0.9} />
        <HangingBell delay={0.7} left="80%" heightClass="h-20" scale={0.8} />
        <HangingLotus delay={0.6} left="90%" heightClass="h-12" scale={0.7} />
      </div>

      {/* Top Decorative Mandap Arch Border */}
      {/* <div className="fixed top-0 left-0 right-0 w-full z-10 pointer-events-none drop-shadow-xl overflow-hidden h-32 md:h-48">
        <svg viewBox="0 0 1000 200" preserveAspectRatio="none" className="w-full h-full text-primary opacity-90 fill-current">
          <path d="M0,0 L1000,0 L1000,40 Q850,200 500,100 Q150,200 0,40 Z" />
          <path d="M0,0 L1000,0 L1000,20 Q850,180 500,80 Q150,180 0,20 Z" className="text-primary-light"/>
          
          <path d="M 0,20 Q 50,80 100,50 Q 150,110 200,80 Q 250,140 300,100 Q 350,160 400,110 Q 450,165 500,120 Q 550,165 600,110 Q 650,160 700,100 Q 750,140 800,80 Q 850,110 900,50 Q 950,80 1000,20 L 1000,0 L 0,0 Z" className="text-accent opacity-50"/>
        </svg>
      </div> */}

      <main className="pt-24 px-4 relative z-10">
        {/* Invocation Section */}
        <Section delay={0.1} className="text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 relative"
          >
            {/* Left and Right Small Diyas */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-8 opacity-60 text-primary-light">
               <svg width="30" height="30" viewBox="0 0 100 100" className="fill-current">
                 <path d="M10 50 C 40 50, 50 80, 50 90 C 50 80, 60 50, 90 50 C 60 50, 50 10, 50 10 C 50 10, 40 50, 10 50 Z" className="animate-pulse opacity-80 text-accent"/>
                 <path d="M20 70 Q 50 100 80 70 Z" className="text-primary"/>
               </svg>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 md:right-8 opacity-60 text-primary-light">
               <svg width="30" height="30" viewBox="0 0 100 100" className="fill-current">
                 <path d="M10 50 C 40 50, 50 80, 50 90 C 50 80, 60 50, 90 50 C 60 50, 50 10, 50 10 C 50 10, 40 50, 10 50 Z" className="animate-pulse opacity-80 text-accent"/>
                 <path d="M20 70 Q 50 100 80 70 Z" className="text-primary"/>
               </svg>
            </div>

            <img src="/Ganesh01.png" alt="Ganesh" className="w-96 h-80 mx-auto mb-4 drop-shadow-lg" />
            {/* <h2 className="text-xl font-bold text-primary tracking-wider mb-2">॥ શ્રી ગણેશાય નમઃ ॥</h2> */}
            <div className="flex justify-center items-center gap-4 mt-4">
              <h2 className="text-sm md:text-lg font-semibold text-primary/80">॥ શ્રી ચામુંડા માતાજી ॥</h2>
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              <h2 className="text-sm md:text-lg font-semibold text-primary/80">॥ શ્રી મેલડી માતાજી ॥</h2>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl bg-[#fffbf0] border border-accent border-opacity-40 group mt-10"
          >
             {/* Beautiful Inner Frame */}
             <div className="absolute inset-2 border-2 border-dashed border-accent/30 rounded-2xl pointer-events-none"></div>
             
             {/* Large background quote icon */}
             <div className="absolute -top-6 -left-2 text-primary/10 font-serif text-[12rem] leading-none pointer-events-none rotate-6">
                "
             </div>
             
             {/* Mandala fading in from right */}
             <div className="absolute top-1/2 -right-16 -translate-y-1/2 w-48 h-48 opacity-[0.06] text-primary pointer-events-none">
                <svg viewBox="0 0 100 100" className="fill-current animate-[spin_40s_linear_infinite]">
                  {[...Array(8)].map((_, i) => (
                    <path key={i} d="M50 50 L45 0 A20 20 0 0 1 55 0 Z" transform={`rotate(${i * 45} 50 50)`} />
                  ))}
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
             </div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative z-10 text-center flex flex-col items-center"
            >
              {/* <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mb-6"></div> */}
              
              <p className="text-xl md:text-2xl leading-relaxed text-text-main font-medium italic drop-shadow-sm mb-1" style={{ fontFamily: 'Rozha One, serif' }}>
                દાંપત્ય જીવનની
              </p>
              
              <div className="relative w-full max-w-xs mx-auto my-2">
                 <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-full blur-md"></div>
                 <p className="relative text-2xl md:text-3xl font-black text-primary drop-shadow-md tracking-wide whitespace-nowrap py-3">
                   પૂર્ણતા અને સમૃદ્ધ ઘડી એટલે 
                 </p>
              </div>

              <p className="text-xl md:text-2xl leading-relaxed text-text-main font-medium italic drop-shadow-sm mt-1 flex justify-center items-baseline gap-3 flex-wrap" style={{ fontFamily: 'Rozha One, serif' }}>
                <span className="relative inline-block mx-2 mt-1">
                  <span className="absolute -inset-1 bg-accent/20 blur-sm rounded-lg opacity-70"></span>
                  <span className="relative text-primary font-black text-3xl md:text-3xl tracking-widest px-2 pb-1 inline-block border-b-2 border-accent/80 drop-shadow-sm">માતૃત્વ</span>
                </span>
              </p>

              {/* <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mt-8"></div> */}
            </motion.div>
          </motion.div>
        </Section>

        {/* Main Title Section */}
        <Section delay={0.2} className="text-center mt-12">
          <motion.h1 
            className="text-5xl md:text-6xl font-black text-primary mb-6 drop-shadow-sm"
            style={{ fontFamily: 'Rozha One, serif' }}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            સીમંત સંસ્કાર
          </motion.h1>
          
          <motion.div 
            className="text-base md:text-lg text-text-main leading-loose font-medium space-y-5 px-4 bg-white/85 p-8 rounded-3xl backdrop-blur-md border border-primary/20 shadow-xl overflow-hidden relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Subtle background element for text card */}
             <div className="absolute -right-16 -top-16 text-primary-light/5 w-64 h-64 rotate-45 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  {[...Array(6)].map((_, i) => (
                    <path key={i} d="M50 50 C 40 10, 60 10, 50 50" transform={`rotate(${i * 60} 50 50)`} />
                  ))}
                  <circle cx="50" cy="50" r="5" />
                </svg>
             </div>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="relative z-10">
              સહર્ષ ખુશાલી સાથે જણાવવાનું કે અમારા કુળદેવી શ્રી ચામુંડા માતાજી અને મેલડી માતાજી ની અસીમ કૃપાથી
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-sm md:text-base text-text-muted relative z-10">
              સ્વ.શ્રી ભગવતીબેન તથા શ્રી હરિભાઈ વજાભાઇ પ્રજાપતિ ના સુપુત્ર
            </motion.p>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8, type: "spring" }} className="relative z-10">
              <p className="text-3xl text-primary font-black drop-shadow-sm mb-4" style={{ fontFamily: 'Rozha One, serif' }}>
                ચિ. અશોક
              </p>
            </motion.div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.0 }} className="text-sm md:text-base text-text-muted relative z-10">ના ધર્મપત્ની</motion.p>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 1.2, type: "spring" }} className="relative z-10">
              <p className="text-3xl text-primary font-black drop-shadow-sm mb-4" style={{ fontFamily: 'Rozha One, serif' }}>
                અ.સૌ. મીના
              </p>
            </motion.div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.4 }} className="relative z-10 bg-primary/5 p-4 rounded-xl border border-primary/10">
              ના <strong className="text-primary text-xl">સીમંત વિધીનું</strong> શુભ મુહૂર્ત વિક્રમ સવંત ૨૦૮૨ ના વૈશાખ વદ - ૮ ને<br/><strong className="text-primary text-xl whitespace-nowrap inline-block mt-2 font-bold px-3 py-1 bg-white rounded-lg shadow-sm">૧૦/૦૫/૨૦૨૬</strong><br/> રવિવાર ના શુભદિને સવારે ૧૦:૩૦ કલાકે રાખેલ છે.
            </motion.p>
          </motion.div>
        </Section>

        <Divider />

        {/* Events / Schedule */}
        <Section delay={0.3}>
          <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl border-2 border-accent/30 relative overflow-hidden">
             {/* Subtle floral background decoration */}
             <div className="absolute -right-12 -bottom-12 text-accent/15 w-48 h-48 rotate-12 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  {[...Array(6)].map((_, i) => (
                    <path key={i} d="M50 50 C 40 10, 60 10, 50 50" transform={`rotate(${i * 60} 50 50)`} />
                  ))}
                  <circle cx="50" cy="50" r="5" />
                </svg>
             </div>

            <h3 className="text-2xl font-bold text-center text-primary mb-8 relative z-10" style={{ fontFamily: 'Rozha One, serif' }}>
              શુભ પ્રસંગો
            </h3>

            <div className="space-y-6 relative z-10">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-primary/10 to-accent/20 p-3 rounded-full text-primary shrink-0">
                  <CalendarHeart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-main mb-1">સીમંત વિધી</h4>
                  <div className="flex items-center gap-2 text-text-muted mb-1">
                    <Clock className="w-4 h-4" />
                    <span>સવારે ૧૦:૩૦ કલાકે</span>
                  </div>
                  <p className="text-sm font-medium text-primary">રવિવાર, ૧૦ મે ૨૦૨૬</p>
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-primary/10 to-accent/20 p-3 rounded-full text-primary shrink-0">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-main mb-1">ભોજન સમારંભ</h4>
                  <div className="flex items-center gap-2 text-text-muted mb-1">
                    <Clock className="w-4 h-4" />
                    <span>બપોરે ૧૧:૩૦ કલાકે</span>
                  </div>
                  <p className="text-sm font-medium text-primary">રવિવાર, ૧૦ મે ૨૦૨૬</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Divider />

        {/* Venues */}
        <Section delay={0.4}>
           <h3 className="text-2xl font-bold text-center text-primary mb-8" style={{ fontFamily: 'Rozha One, serif' }}>
              સ્થળ
            </h3>

            <div className="grid gap-6">
              {/* Event Venue */}
              <div className="glass-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-primary relative overflow-hidden bg-white/85 flex flex-col h-full">
                <div className="inline-flex bg-primary/10 p-3 rounded-full mb-4 ring-4 ring-white mx-auto">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-primary mb-3">શુભ સ્થળ</h4>
                <p className="text-text-main leading-relaxed flex-grow">
                  ઘર નં - એ - ૫, આશુતોષનગર સોસાયટી,<br/>
                  દર્શન બંગ્લોઝની પાછળ, પાંજરાપોળ - કરણનગર રોડ,<br/>
                  કડી, મહેસાણા - 382715
                </p>
                <div className="mt-6 pt-6 border-t border-primary/10 w-full text-center">
                   <a 
                     href="https://maps.google.com/?q=Ashutosh+Nagar+Society,+Karannagar+Road,+Kadi,+Mehsana" 
                     target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-6 py-2.5 rounded-full text-sm font-bold transition-all w-full md:w-auto shadow-sm hover:shadow-md"
                   >
                     <MapPin className="w-4 h-4" />
                     મેપ પર જુઓ
                   </a>
                </div>
              </div>

              {/* Dining Venue */}
              <div className="glass-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-accent relative overflow-hidden bg-white/85 flex flex-col h-full">
                <div className="inline-flex bg-accent/20 p-3 rounded-full mb-4 ring-4 ring-white mx-auto">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-accent mb-3">ભોજન સ્થળ</h4>
                <p className="text-text-main leading-relaxed flex-grow">
                  કોમન પ્લોટ, આશુતોષનગર સોસાયટી,<br/>
                  દર્શન બંગ્લોઝની પાછળ, પાંજરાપોળ - કરણનગર રોડ,<br/>
                  કડી, મહેસાણા - 382715
                </p>
                <div className="mt-6 pt-6 border-t border-accent/20 w-full text-center">
                   <a 
                     href="https://maps.google.com/?q=Ashutosh+Nagar+Society,+Karannagar+Road,+Kadi,+Mehsana" 
                     target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center justify-center gap-2 bg-accent/20 hover:bg-accent/30 px-6 py-2.5 rounded-full text-sm font-bold transition-all w-full md:w-auto shadow-sm hover:shadow-md"
                     style={{ color: '#b58e10' }}
                   >
                     <MapPin className="w-4 h-4" />
                     મેપ પર જુઓ
                   </a>
                </div>
              </div>
            </div>
        </Section>

        <Divider />

        {/* Footer / Contact */}
        <Section delay={0.5} className="mb-24">
          <div className="text-center bg-gradient-to-br from-primary to-primary-light text-white rounded-[2rem] p-8 relative overflow-hidden shadow-2xl border-4 border-white/20">
             {/* Decorative pattern overlay */}
             <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '16px 16px', backgroundPosition: '0 0'}}></div>
             <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '16px 16px', backgroundPosition: '8px 8px'}}></div>
             
            <h4 className="text-xl font-medium mb-2 text-accent-light" style={{ fontFamily: 'Rozha One, serif' }}>નિમંત્રક</h4>
            <p className="text-2xl font-bold mb-6 text-white drop-shadow-md">
              શ્રી હરિભાઈ વજાભાઇ પ્રજાપતિ (વિરાણી)<br/>
              <span className="text-lg font-medium opacity-90 inline-block mt-2">તથા પરિવાર</span>
            </p>

            <div className="flex flex-row sm:flex-row justify-center items-center gap-4 text-accent-light">
              <a href="tel:+917698142323" className="flex items-center gap-1 hover:text-white transition-all bg-black/20 hover:bg-black/30 px-4 py-2.5 rounded-full backdrop-blur-sm shadow-inner cursor-pointer">
                <Phone className="w-4 h-4" />
                <span className="font-medium tracking-wider">+917698142323</span>
              </a>
              <a href="tel:+919727085023" className="flex items-center gap-1 hover:text-white transition-all bg-black/20 hover:bg-black/30 px-4 py-2.5 rounded-full backdrop-blur-sm shadow-inner cursor-pointer">
                <Phone className="w-4 h-4" />
                <span className="font-medium tracking-wider">+919727085023</span>
              </a>
            </div>
          </div>
        </Section>

      </main>

      {/* Conor Image Attachment (Bottom Right Character) */}
      {/* <motion.div
        className="fixed bottom-0 right-0 sm:right-4 md:right-8 z-40 drop-shadow-2xl"
        initial={{ opacity: 0, y: 100, x: 50 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1.2, delay: 0.8, type: "spring", bounce: 0.3 }}
      >
        {!imgError ? (
          <img 
            src="/conorImage.png" 
            alt="Couple Character Illustration" 
            className="w-32 sm:w-56 md:w-72 lg:w-80 h-auto origin-bottom-right pointer-events-none"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="bg-white/80 backdrop-blur p-4 rounded-xl shadow-lg border border-primary/20 m-4 w-48 sm:w-64 text-center">
            <h5 className="text-sm text-text-main font-bold mb-2">Image Missing</h5>
            <p className="text-xs text-text-muted">
              Because you uploaded the image in the chat, it needs to be added to the project files to display here.<br/><br/>
              Open the file explorer, upload your image to the <strong>public</strong> folder, and rename it to <strong>conorImage.png</strong>
            </p>
          </div>
        )}
      </motion.div> */}
      
      {/* Bottom Decorative Pattern Border */}
      <div className="fixed bottom-0 left-0 right-0 h-4 w-full bg-primary bg-opacity-90 flex justify-around items-center z-50 overflow-hidden">
         <div className="h-0.5 bg-accent/40 w-full mx-1 rounded-full"></div>
         <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="absolute bottom-4 left-0 w-full h-2 text-primary opacity-50 fill-current">
          <path d="M0,10 L100,10 L100,5 Q75,0 50,5 Q25,10 0,5 Z" />
         </svg>
      </div>
    </div>
  );
}


import React from 'react';

const Clients: React.FC = () => {
  // URLs updated to match the requested brands (Wellhub, Brasilprev, Z, etc.)
  const logos = [
    { name: "Magalu", url: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Magalu_Logo.png" },
    { name: "Brasilprev", url: "https://logodownload.org/wp-content/uploads/2019/09/brasilprev-logo.png" },
    { name: "Samsung", url: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Samsung_wordmark.svg" },
    { name: "Wellhub", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Wellhub_Logo.svg/2560px-Wellhub_Logo.svg.png" },
    { name: "Dafiti", url: "https://upload.wikimedia.org/wikipedia/commons/2/22/Dafiti_logo_2017.svg" },
    { name: "Prefeitura de Santos", url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Bras%C3%A3o_de_Santos.svg" },
    { name: "Z", url: "https://play-lh.googleusercontent.com/I5tAUEgWq-Q-t697_dK459GjD4z_r1X2k8z8hX3y1z5y_r1X2k8z8hX3y1z5y=w2400-h480-rw" } // Z Seguros generic/app icon fallback or use text if fails
  ];

  return (
    <section className="py-12 bg-brand-bg border-b border-brand-border/20 overflow-hidden relative">
      <div className="max-w-container mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-semibold text-brand-muted uppercase tracking-[0.2em]">
          Empresas e ambientes onde geramos valor
        </p>
      </div>

      {/* Gradient Masks for smooth fade out */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />

      <div className="flex w-full overflow-hidden mask-linear-gradient">
        <div className="flex gap-16 md:gap-24 items-center animate-scroll min-w-full pl-24">
          {/* First loop */}
          {logos.map((logo, index) => (
            <div key={`logo-1-${index}`} className="flex items-center justify-center min-w-[120px] h-[60px] opacity-40 hover:opacity-100 transition-opacity duration-300">
              {logo.name === "Z" ? (
                 /* Special handling for Z logo if needed, or just standard img */
                 <div className="text-2xl font-bold tracking-tighter text-white/90">Z.</div>
              ) : (
                <img 
                  src={logo.url} 
                  alt={`${logo.name} logo`} 
                  className="max-h-8 md:max-h-10 w-auto object-contain brightness-0 invert"
                  loading="lazy"
                />
              )}
            </div>
          ))}
          
          {/* Second loop for infinite scroll */}
          {logos.map((logo, index) => (
            <div key={`logo-2-${index}`} className="flex items-center justify-center min-w-[120px] h-[60px] opacity-40 hover:opacity-100 transition-opacity duration-300">
               {logo.name === "Z" ? (
                 <div className="text-2xl font-bold tracking-tighter text-white/90">Z.</div>
              ) : (
                <img 
                  src={logo.url} 
                  alt={`${logo.name} logo`} 
                  className="max-h-8 md:max-h-10 w-auto object-contain brightness-0 invert"
                  loading="lazy"
                />
              )}
            </div>
          ))}

           {/* Third loop to ensure coverage on large screens */}
           {logos.map((logo, index) => (
            <div key={`logo-3-${index}`} className="flex items-center justify-center min-w-[120px] h-[60px] opacity-40 hover:opacity-100 transition-opacity duration-300">
               {logo.name === "Z" ? (
                 <div className="text-2xl font-bold tracking-tighter text-white/90">Z.</div>
              ) : (
                <img 
                  src={logo.url} 
                  alt={`${logo.name} logo`} 
                  className="max-h-8 md:max-h-10 w-auto object-contain brightness-0 invert"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
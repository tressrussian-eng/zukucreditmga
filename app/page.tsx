const destination = 'https://creditmvola.vercel.app/'

export default function Page() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f0e807] px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.14),transparent_42%)]" />
      <div className="relative z-10 flex w-full max-w-sm flex-col items-center text-center">
        <div className="mb-10 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-[0_20px_60px_rgba(102,0,0,0.22)] sm:h-32 sm:w-32">
          <img
            src="https://thesvg.org/icons/commafeed/default.svg"
            alt="Airtel"
            className="h-16 w-16 object-contain sm:h-20 sm:w-20"
          />
        </div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-white/70">Bienvenue</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Êtes-vous prêt à continuer ?</h1>
        <p className="mt-4 text-sm leading-6 text-white/80">
         Cliquez sur le bouton ci-dessous pour accéder à ZukuFast.
        </p>
        <a
          href={destination}
          className="mt-10 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#e30613] shadow-[0_12px_30px_rgba(102,0,0,0.2)] transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
       Continuer vers ZukuFast.
        </a>
      </div>
    </main>
  )
}


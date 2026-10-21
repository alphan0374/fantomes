
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F4EC] text-[#173E35]">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-5 py-6">
        <a href="/" className="text-2xl font-bold tracking-tight">
          Fantômes<span className="text-[#E5A15B]">.</span>
        </a>
        <span className="text-sm">Votre argent mérite mieux.</span>
      </header>

      <section className="mx-auto max-w-5xl px-5 pb-16 pt-12 sm:pt-24">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#8A5B2C]">
          L’audit anti-abonnements oubliés
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          Débusquez les abonnements que vous payez sans vous en servir.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-[#52645C]">
          Un essai jamais résilié. Un service remplacé. Une option oubliée.
          Découvrez ce que ces prélèvements vous coûtent sur une année.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#offre"
            className="inline-flex min-h-14 items-center justify-center rounded-xl bg-[#173E35] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#28594D]"
          >
            Commencer gratuitement
          </a>
          <p className="flex items-center text-sm text-[#52645C]">
            Sans connecter votre compte bancaire.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Repérez les oublis",
              text: "Identifiez les paiements récurrents à examiner.",
            },
            {
              title: "Voyez le coût annuel",
              text: "Classez les dépenses par montant sur 12 mois.",
            },
            {
              title: "Passez à l’action",
              text: "Préparez une lettre de résiliation pour chaque service.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#DCDDD3] bg-white p-6"
            >
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="mt-2 leading-6 text-[#52645C]">{item.text}</p>
            </article>
          ))}
        </div>

        <section
          id="offre"
          className="mt-10 rounded-2xl bg-[#EAE8DE] p-6 sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-wider">
            Bientôt disponible
          </p>
          <h2 className="mt-2 text-2xl font-bold">
            Votre premier audit, sans prise de tête.
          </h2>
          <p className="mt-3 max-w-xl leading-7 text-[#52645C]">
            La version actuelle est une première page de présentation.
            L’analyse du relevé, le calcul personnalisé et le paiement seront
            ajoutés et testés avant l’ouverture commerciale.
          </p>
        </section>
      </section>

      <footer className="border-t border-[#DCDDD3] px-5 py-6 text-center text-sm text-[#52645C]">
        Fantômes — Faites la chasse aux dépenses invisibles.
      </footer>
    </main>
  );
}

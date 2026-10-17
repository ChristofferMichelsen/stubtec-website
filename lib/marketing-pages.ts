
export type MarketingPage = {
  slug: string;
  title: string;
  description: string;
  label: string;
  headline: string;
  intro: string;
  body: string;
};

const contactCta = '<div class="page-cta"><div><span class="eyebrow">Næste skridt</span><h2>Få et konkret næste skridt for jeres produktdata.</h2><p>Beskriv kort systemlandskabet og det største problem. Så tager vi en faglig afklaring uden at love en platform, før behovet er forstået.</p></div><a class="button button-primary" href="/kontakt">Anmod om en samtale ↗</a></div>';

export const marketingPages: Record<string, MarketingPage> = {
  'aras-innovator': {
    slug: 'aras-innovator',
    title: 'Aras Innovator konsulent og PLM-implementering | StubTEC',
    description: 'Aras Innovator: datamodel, parts, BOM, lifecycle, change, migration og integration. PLM-arkitektur fra afklaring til test og overdragelse.',
    label: 'PLM / ARAS INNOVATOR',
    headline: 'Aras Innovator med styr på produktdata og beslutninger.',
    intro: 'En PLM-platform skaber først værdi, når det er entydigt, hvad en part er, hvem der godkender den, og hvad der må sendes videre til ERP. StubTEC designer og implementerer disse sammenhænge.',
    body: `
      <section class="page-section shell">
        <div class="section-intro"><div><p class="eyebrow dark">PLM-ARKITEKTUR</p><h2>Produktmodellen før platformkonfigurationen.</h2></div><p>Datamodellen skal understøtte virkelige ingeniørprocesser. Den skal også være forståelig og vedligeholdelig, når løsningen overdrages.</p></div>
        <div class="page-card-grid">
          <article class="page-card"><span>01 / DATAMODEL</span><h3>Parts, BOM og dokumenter</h3><p>Entydige identiteter, klassifikation, relationer og frigivne konfigurationer på tværs af mekanik, elektronik og firmware.</p></article>
          <article class="page-card"><span>02 / GOVERNANCE</span><h3>Lifecycle, revision og change</h3><p>Forretningsregler for In Work, godkendelse, release og ændring. CAD-revisioner forbliver i CAD/PDM, når det er den aftalte arkitektur.</p></article>
          <article class="page-card"><span>03 / INTEGRATION</span><h3>Fra engineering til ERP</h3><p>Synkronisering af parts, struktur og dokumentation med tydeligt systemejerskab, hændelser og fejlhåndtering.</p></article>
          <article class="page-card"><span>04 / LEVERANCE</span><h3>Migration, test og handover</h3><p>Afgrænset baseline, datakvalitetskontrol, accepttest, dokumentation og driftsoverdragelse.</p></article>
        </div>
      </section>
      <section class="page-section page-dark">
        <div class="shell page-split"><div><p class="eyebrow">REFERENCEARKITEKTUR</p><h2>Aras ejer ikke CAD-filen. Aras ejer produktbeslutningen.</h2><p>Systemansvaret fastlægges pr. kunde. I et typisk CAD/PDM-landskab er CAD-geometri og CAD-revisioner placeret i PDM, mens PLM styrer produktstruktur, godkendelser og release.</p></div>
          <figure class="page-image"><img loading="lazy" width="1600" height="900" src="/static-resource?name=assets/diagrams/aras-framework.svg" alt="Modelbaseret Aras Innovator framework med løsninger, platformservices og data" /><figcaption>Aras Innovator framework som arkitekturreferencemodel.</figcaption></figure>
        </div>
      </section>
      <section class="page-section shell"><h2>Hvornår giver Aras mening?</h2><p class="page-lead">Når produktdata og ændringsprocesser er blevet for komplekse til manuelle lister og filbaseret koordinering. Det gælder både organisationer med et etableret PDM-system og virksomheder, der endnu ikke har et.</p><p><a class="text-link" href="/plm-arkitektur">Læs om PLM-arkitektur og TOGAF ADM ↗</a></p></section>
    ` + contactCta
  },
  'plm-arkitektur': {
    slug: 'plm-arkitektur',
    title: 'PLM-arkitektur, TOGAF ADM og digital thread | StubTEC',
    description: 'PLM-arkitektur, information governance og digital thread: fra TOGAF Architecture Vision til implementerbare integrationer og handover.',
    label: 'ENTERPRISE / SOLUTION ARCHITECTURE',
    headline: 'Fra forretningsbehov til implementerbar PLM-arkitektur.',
    intro: 'Vi kobler business capabilities, processer, information og teknologi. Et korrekt arkitekturdiagram skal kunne omsættes til beslutninger, arbejdsgange og fungerende systemer.',
    body: `
      <section class="page-section shell"><div class="section-intro"><div><p class="eyebrow dark">TOGAF / ADM</p><h2>Arkitektur med tydelige beslutninger.</h2></div><p>TOGAF ADM giver en systematisk ramme. Vi tilpasser artefakter og kadence til organisationens modenhed frem for at gøre processen unødigt tung.</p></div>
        <div class="step-grid">
          <article><span>01 / VISION</span><h3>Architecture Vision</h3><p>Forretningsudfordring, interessenter, mål og scope. Hvorfor skal produktflowet ændres?</p></article>
          <article><span>02 / DOMÆNER</span><h3>Business, Data &amp; Application</h3><p>Informationsansvar, processer, business capabilities og applikationslandskab.</p></article>
          <article><span>03 / LØSNING</span><h3>Technology &amp; Solutions</h3><p>Integrationskontrakter, sikkerhed, mapping, hændelser og fejlhåndtering.</p></article>
          <article><span>04 / OVERGANG</span><h3>Migration &amp; Governance</h3><p>Faser, acceptkriterier, arkitekturkontrol og overdragelse til ejerorganisationen.</p></article>
        </div>
      </section>
      <section class="page-section page-dark"><div class="shell page-split"><div><p class="eyebrow">DIGITAL THREAD</p><h2>En digital tråd er ansvar, relationer og sporbarhed.</h2><p>Det er ikke nok at flytte felter mellem CAD, PLM og ERP. Strukturen skal bevare identitet, revision, approval og den frigivne produktkonfiguration.</p><p><a class="text-link light" href="/solidworks-pdm-aras-integration">Se integration som arkitekturmønster ↗</a></p></div><figure class="page-image"><img loading="lazy" width="1600" height="900" src="/static-resource?name=assets/diagrams/digital-thread.svg" alt="Digital thread referencearkitektur med engineering, PLM og ERP" /><figcaption>Konceptuel referencearkitektur, ikke et kundespecifikt systemlandskab.</figcaption></figure></div></section>
      <section class="page-section shell"><h2>Konkrete leverancer</h2><p class="page-lead">Architecture Vision, As-Is/To-Be, system- og dataejerskab, løsningsdesign, beslutningslog, roadmap, risici, testgrundlag og handover. Detaljeniveauet tilpasses opgaven.</p></section>
    ` + contactCta
  },
  'solidworks-pdm-aras-integration': {
    slug: 'solidworks-pdm-aras-integration',
    title: 'SolidWorks PDM til Aras Innovator integration | StubTEC',
    description: 'Integration mellem SolidWorks PDM, Aras Innovator og ERP: parts, BOM, revisionsansvar, lifecycle, datakvalitet og release.',
    label: 'ENGINEERING INTEGRATION',
    headline: 'SolidWorks PDM og Aras skal dele produktdata uden at miste ansvar.',
    intro: 'Integration handler ikke kun om at overføre filer. Den skal holde identiteter, relationer og revisionsbeslutninger konsistente – også når en assembly ændres efter release.',
    body: `
      <section class="page-section shell"><div class="section-intro"><div><p class="eyebrow dark">SYSTEMGRÆNSER</p><h2>Hvad hører hjemme hvor?</h2></div><p>Ansvarsfordelingen er en reference og afklares konkret sammen med kundens engineering-, PLM- og ERP-ejere.</p></div>
        <div class="page-card-grid three">
          <article class="page-card"><span>AUTHORING</span><h3>SolidWorks PDM</h3><p>CAD-filer, 3D-modeller, tegninger, CAD-revisioner og dokumenternes filrelationer.</p></article>
          <article class="page-card"><span>GOVERNANCE</span><h3>Aras Innovator</h3><p>Part-master, produktstruktur, non-CAD-indhold, ændringsstyring og godkendelse til release.</p></article>
          <article class="page-card"><span>EXECUTION</span><h3>ERP</h3><p>Indkøb, planlægning, produktion og transaktioner baseret på godkendte produktdata.</p></article>
        </div>
      </section>
      <section class="page-section page-dark"><div class="shell"><p class="eyebrow">IMPLEMENTERINGSPRINCIPPER</p><h2>Stabil identitet. Kontrollerede ændringer.</h2>
        <ol class="feature-list">
          <li><strong>Identitet:</strong> Definér en varig nøgle mellem PDM-fil og PLM-part og dokumentér match-/opdateringsregler.</li>
          <li><strong>Lifecycle:</strong> Modellér overgangen fra In Work til release, inklusive hvad en ny CAD-revision betyder for PLM.</li>
          <li><strong>Relationer:</strong> Valider assemblies, children, genbrug og versionsafhængigheder før frigivelse.</li>
          <li><strong>Fejl:</strong> Byg kø, retries, idempotens og datakvalitetskontroller ind i integrationskontrakten.</li>
          <li><strong>Release:</strong> Lever godkendte parts, BOM og relevante dokumenter videre til ERP med sporbarhed.</li>
        </ol>
      </div></section>
      <section class="page-section shell"><h2>Integration Pilot</h2><p class="page-lead">Et godt første bevis er én repræsentativ produktstruktur med en håndfuld virkelige edge cases, ikke en stor migration uden feedback. Vi demonstrerer sync, revision, release og fejlretning, før der skaleres.</p><p><a class="text-link" href="/integration-pilot">Se pilotforløbet ↗</a></p></section>
    ` + contactCta
  },
  'plm-study-week': {
    slug: 'plm-study-week',
    title: 'PLM Study Week – beslutningsklar arkitektur på fem dage | StubTEC',
    description: 'PLM Study Week: fem fokuserede dage med As-Is/To-Be, dataejerskab, PLM-scope, risici, roadmap og en beslutningsklar leverancepakke.',
    label: 'DISCOVERY / DECISION SUPPORT',
    headline: 'Fem dage til en kvalificeret beslutning om PLM.',
    intro: 'En Study Week samler ledelse, engineering og IT om én arkitekturvision. Formålet er at reducere usikkerhed, før organisationen investerer i platform, integration og migrering.',
    body: `
      <section class="page-section shell"><p class="eyebrow dark">FORMAT / FEM DAGE</p><h2>Fra problemer til et konkret beslutningsoplæg.</h2>
        <div class="step-grid">
          <article><span>DAG 01</span><h3>Forretning og ambition</h3><p>Interessenter, smertepunkter, beslutningsbehov, mål og afgrænsning.</p></article>
          <article><span>DAG 02</span><h3>Data og systemansvar</h3><p>CAD/PDM, ECAD, PLM, ERP, masterdata og relationer.</p></article>
          <article><span>DAG 03</span><h3>Processer og lifecycle</h3><p>New Part, change, approval, release og revisionsansvar.</p></article>
          <article><span>DAG 04</span><h3>Målarkitektur og risici</h3><p>Integration, migration, sikkerhed, kvalitet og adoption.</p></article>
          <article><span>DAG 05</span><h3>Beslutning og roadmap</h3><p>Scope, løsningsprincipper, leverancer, afhængigheder og næste skridt.</p></article>
        </div>
      </section>
      <section class="page-section page-dark"><div class="shell"><p class="eyebrow">BESLUTNINGSPAKKEN</p><h2>Hvad står tilbage efter forløbet?</h2><div class="page-card-grid three"><article class="page-card"><span>ARKITEKTUR</span><h3>As-Is / To-Be</h3><p>Visuelt kort over ansvar, proces og information – egnet til ledelsens beslutning.</p></article><article class="page-card"><span>GOVERNANCE</span><h3>Risiko- og scopebillede</h3><p>Et tydeligt svar på hvad der er med, hvad der ikke er med, og hvilke forudsætninger der skal opfyldes.</p></article><article class="page-card"><span>PLAN</span><h3>Faser og næste investering</h3><p>En implementerbar faseplan med prioriteringer, beslutningspunkter og foreløbige ressourcebehov.</p></article></div></div></section>
      <section class="page-section shell"><h2>En afklaring – ikke et forhåndsvalg af software.</h2><p class="page-lead">Study Week kan munde ud i et Aras-projekt, et mindre integrationsspor eller en anbefaling om at forbedre processer og data først. Det afhænger af organisationens behov.</p></section>
    ` + contactCta
  },
  'aras-quickstart': {
    slug: 'aras-quickstart',
    title: 'Aras Quickstart – et praktisk PLM-fundament | StubTEC',
    description: 'Start enkelt med Aras Innovator: afgrænset part-master, BOM, lifecycle, rettigheder, release-regler og en brugbar referenceopsætning.',
    label: 'FOUNDATION / ARAS QUICKSTART',
    headline: 'Et enkelt, brugbart fundament for Aras Innovator.',
    intro: 'Quickstart koncentrerer indsatsen om den mindste produktmodel og proces, der kan demonstreres med virkelige engineering-data.',
    body: `
      <section class="page-section shell"><h2>Scope før konfiguration.</h2><div class="page-card-grid three"><article class="page-card"><span>01</span><h3>Basisdatamodel</h3><p>Parts, klassifikationer, BOM og dokumentrelationer.</p></article><article class="page-card"><span>02</span><h3>Governance</h3><p>Lifecycle, roller, godkendelser og revisionsprincipper.</p></article><article class="page-card"><span>03</span><h3>Første flow</h3><p>Et lille gennemført eksempel med tests, dokumentation og håndtering af afvigelser.</p></article></div></section>
      <section class="page-section page-dark"><div class="shell"><h2>Kan også begynde uden PDM.</h2><p class="page-lead">Virksomheder med Excel-baseret produktstyring kan have lige så stort behov for ensartet identitet, struktur og godkendelser. Integration til PDM eller ERP kan komme i en senere fase.</p></div></section>
    ` + contactCta
  },
  'integration-pilot': {
    slug: 'integration-pilot',
    title: 'PLM Integration Pilot – SolidWorks PDM, Aras og ERP | StubTEC',
    description: 'Bevis digital thread på realistiske produktdata. Afgrænset PLM Integration Pilot med integration, lifecycle, release, fejlscenarier og accepttest.',
    label: 'PROOF / INTEGRATION PILOT',
    headline: 'Bevis produktflowet, før du skalerer integrationen.',
    intro: 'En pilot tager udgangspunkt i en kontrolleret produktstruktur og aftalte edge cases. Målet er at bevise grænseflader og forretningsregler – ikke at flytte alle data på én gang.',
    body: `
      <section class="page-section shell"><h2>Hvad validerer vi?</h2><div class="step-grid"><article><span>01</span><h3>Identitet og mapping</h3><p>Hvordan er samme part entydigt knyttet mellem CAD/PDM og PLM?</p></article><article><span>02</span><h3>Revision og lifecycle</h3><p>Hvad sker der ved ændringer efter release, og hvordan fastholdes ejerskabet?</p></article><article><span>03</span><h3>Struktur og release</h3><p>Er BOM og dokumentation konsistent og godkendt, før ERP får en leverance?</p></article><article><span>04</span><h3>Drift og fejlretning</h3><p>Kan integrationen håndtere retries, dubletter, afbrudte kørsler og datakvalitetsfejl?</p></article></div></section>
      <section class="page-section page-dark"><div class="shell"><h2>Output: demonstrerbart flow og acceptkriterier.</h2><p class="page-lead">Pilotens resultat dokumenteres med de scenarier, der faktisk er testet. Der loves ikke produktionseffekt eller besparelser, før de er målt.</p></div></section>
    ` + contactCta
  },
  'cases': {
    slug: 'cases',
    title: 'PLM cases og referencearkitektur | StubTEC',
    description: 'Anonymiseret PLM-referencemønster: CAD/PDM, Aras Innovator, revisionsstyring, release og ERP. Se arkitekturtilgangen uden fortrolige kundeoplysninger.',
    label: 'ERFARING / ARKITEKTURMØNSTRE',
    headline: 'Virkelige arkitekturproblemer. Konkrete løsningsprincipper.',
    intro: 'StubTEC deler kun cases på et niveau, hvor kunden ikke identificeres, og hvor arkitekturmønstre kan forklares uden fortrolige data eller uverificerede resultatpåstande.',
    body: `
      <section class="page-section shell"><p class="eyebrow dark">ANONYMISERET CASE / PRODUCT ENGINEERING</p><h2>Fra fragmenteret frigivelse til et fælles produktflow.</h2>
        <div class="case-grid"><article class="page-card"><span>UDGANGSPUNKT</span><h3>Manuel produktkoordinering</h3><p>Mekaniske konstruktioner, elektronik, Excel-baserede lister og økonomisystem skulle holdes konsistente. Revisioner, dokumentation og releasebeslutninger lå fordelt på forskellige ansvarsområder.</p></article><article class="page-card"><span>ARKITEKTUR</span><h3>Klare systemgrænser</h3><p>CAD/PDM bevarer autoriteten over CAD-filer og CAD-revisioner. PLM definerer part- og BOM-struktur, approvals og release. ERP anvender godkendte produktdata.</p></article><article class="page-card"><span>IMPLEMENTERINGSMØNSTER</span><h3>Stabil identitet og sporbar synk</h3><p>Et orchestreret flow med hændelser, identitetsmapping, datakvalitetskontroller, migrationsbaseline og eksplicitte transitionsregler.</p></article><article class="page-card"><span>VALIDERING</span><h3>Test også efter release</h3><p>Accepttest skal dække parent/child-relationer, genbrug, revisionsændringer, fejl i synkronisering og release til ERP – ikke kun første oprettelse.</p></article></div>
        <p class="case-disclaimer">Kundens navn og systemdetaljer er udeladt. Dette beskriver en teknisk tilgang; det er ikke en offentlig påstand om konkrete tidsbesparelser eller produktionsstatus.</p>
      </section>
      <section class="page-section page-dark"><div class="shell page-split"><div><p class="eyebrow">METODE / IKKE EN EKSTRA KUNDECASE</p><h2>Study Week som beslutningsarkitektur.</h2><p>Et eksempel på arbejdsmetoden: As-Is, målarkitektur, informationsansvar og risici omsættes på få fokuserede dage til et beslutningsoplæg. Metoden kan bruges før platformvalg eller integrationsprojekt.</p><p><a class="text-link light" href="/plm-study-week">Se Study Week-leverancer ↗</a></p></div><figure class="page-image"><img loading="lazy" width="1600" height="900" src="/static-resource?name=assets/diagrams/conventional-to-aras.svg" alt="Illustration af en mulig overgang fra manuel PLM-koordinering til en styret Aras-løsning" /><figcaption>Generisk referenceillustration – ingen kundedata.</figcaption></figure></div></section>
    ` + contactCta
  },
  'ressourcer': {
    slug: 'ressourcer',
    title: 'PLM-arkitekturdiagrammer og ressourcer | StubTEC',
    description: 'Se fem PLM-arkitekturdiagrammer: digital thread, PLM-lifecycle, mennesker og processer, overgang til Aras og Aras Innovator framework.',
    label: 'VIDEN / REFERENCEMODELLER',
    headline: 'Fem arkitekturdiagrammer til bedre PLM-beslutninger.',
    intro: 'Brug diagrammerne som et fælles visuelt sprog i samtalen mellem engineering, IT og forretning. De er generiske referencemodeller, ikke tekniske specifikationer for en bestemt kunde.',
    body: `
      <section class="page-section shell"><div class="resource-grid">
        <article><img width="1600" height="900" loading="lazy" src="/static-resource?name=assets/diagrams/digital-thread.svg" alt="Diagram over digital thread på tværs af engineering, PLM og ERP"><div><h2>Digital thread &amp; digital twin</h2><p>Informationsrelationer på tværs af engineering og drift.</p><a class="text-link" target="_blank" rel="noopener" href="/static-resource?name=assets/diagrams/digital-thread.svg">Åbn SVG ↗</a></div></article>
        <article><img width="1600" height="900" loading="lazy" src="/static-resource?name=assets/diagrams/lifecycle.svg" alt="Diagram over PLM-lifecycle fra idé til service"><div><h2>PLM lifecycle</h2><p>Databeslutninger fra udvikling til service og feedback.</p><a class="text-link" target="_blank" rel="noopener" href="/static-resource?name=assets/diagrams/lifecycle.svg">Åbn SVG ↗</a></div></article>
        <article><img width="1600" height="900" loading="lazy" src="/static-resource?name=assets/diagrams/people-process-tools.svg" alt="Diagram over people, process, data og værktøjer"><div><h2>People, process &amp; tools</h2><p>Sammenhæng mellem organisatorisk og teknisk PLM.</p><a class="text-link" target="_blank" rel="noopener" href="/static-resource?name=assets/diagrams/people-process-tools.svg">Åbn SVG ↗</a></div></article>
        <article><img width="1600" height="900" loading="lazy" src="/static-resource?name=assets/diagrams/conventional-to-aras.svg" alt="Diagram over overgang fra Excel til Aras PLM"><div><h2>Fra Excel til Aras</h2><p>Et muligt arkitekturskifte fra manuelle lister til governed data.</p><a class="text-link" target="_blank" rel="noopener" href="/static-resource?name=assets/diagrams/conventional-to-aras.svg">Åbn SVG ↗</a></div></article>
        <article><img width="1600" height="900" loading="lazy" src="/static-resource?name=assets/diagrams/aras-framework.svg" alt="Diagram over Aras platform layers"><div><h2>Aras Innovator framework</h2><p>Modeldrevet løsning, platform og data.</p><a class="text-link" target="_blank" rel="noopener" href="/static-resource?name=assets/diagrams/aras-framework.svg">Åbn SVG ↗</a></div></article>
      </div></section>
    ` + contactCta
  },
  'om': {
    slug: 'om',
    title: 'Om StubTEC PLM – arkitektur og implementering | StubTEC',
    description: 'StubTEC PLM ApS arbejder med TOGAF, Aras Innovator og CAD/PDM–ERP integration fra forretning og informationsmodel til fungerende løsninger.',
    label: 'OM STUBTEC',
    headline: 'Arkitektur med ansvar for det, der skal fungere.',
    intro: 'StubTEC PLM ApS er grundlagt af Christoffer Stub Michelsen. Arbejdet forbinder business analysis, enterprise-arkitektur og hands-on PLM-implementering.',
    body: `
      <section class="page-section shell"><div class="page-split"><div><p class="eyebrow dark">TEKNISK PROFIL</p><h2>Ingen abstrakt arkitektur uden driftsmæssig konsekvens.</h2><p>Metoder som TOGAF ADM, ArchiMate, UML og domain-driven design bruges, når de gør beslutninger tydeligere. Leverancen kan omfatte målarkitektur, Aras, integration, migration, test, deployment og handover.</p><p>Det vigtigste er ikke antallet af diagrammer eller platforme, men at organisationen kan forstå og styre produktinformationen.</p><p><a class="text-link" href="https://dk.linkedin.com/in/christofferstubmichelsenaras" target="_blank" rel="noopener">Se LinkedIn-profil ↗</a></p></div><figure class="page-image"><img loading="lazy" width="1586" height="992" src="/static-resource?name=assets/christoffer-architecture-review.jpg" alt="Illustrativ arkitektursession i et engineeringteam" /><figcaption>Illustration af arkitekturarbejde og tværfaglig koordinering.</figcaption></figure></div></section>
      <section class="page-section page-dark"><div class="shell"><h2>Speciale og rækkevidde.</h2><p class="page-lead">Aras Innovator og SolidWorks PDM er centrale specialer. Det grundlæggende problem er bredere: også organisationer uden PDM har brug for ensartet part-master, konfigurationsstyring og sporbar release.</p></div></section>
    ` + contactCta
  },
  'kontakt': {
    slug: 'kontakt',
    title: 'Kontakt StubTEC – PLM-konsulent og Aras Innovator | StubTEC',
    description: 'Kontakt StubTEC om PLM-arkitektur, Aras Innovator, SolidWorks PDM-integration eller en PLM Study Week. Beskriv dit projekt kort.',
    label: 'KONTAKT / NÆSTE SKRIDT',
    headline: 'Fortæl hvor produktdata mister sammenhængen.',
    intro: 'Vi starter med en konkret faglig afklaring. Beskriv jeres systemer, den vigtigste udfordring og hvad I har brug for at beslutte.',
    body: `
      <section class="page-section shell"><div class="contact-page-grid"><div><p class="eyebrow dark">DIREKTE KONTAKT</p><h2>En kvalificeret samtale frem for en standarddemo.</h2><p>Du kan skrive direkte til <a href="mailto:csm@stubtec.dk">csm@stubtec.dk</a>. Brug formularen til at klargøre en e-mail – du kan gennemse og afsende den i din egen mail-app.</p><p>En 30-minutters introduktion aftales efter henvendelse. En separat onlinebooking bliver først tilgængelig, når en verificeret bookingadresse er tilknyttet.</p></div>
        <form id="inquiry-form" class="brief-form" novalidate>
          <div class="form-row"><label for="inquiry-name">Navn <span aria-hidden="true">*</span></label><input id="inquiry-name" name="name" autocomplete="name" required maxlength="120" /></div>
          <div class="form-row"><label for="inquiry-email">E-mail <span aria-hidden="true">*</span></label><input id="inquiry-email" name="email" type="email" autocomplete="email" required maxlength="160" /></div>
          <div class="form-row"><label for="inquiry-company">Virksomhed</label><input id="inquiry-company" name="company" autocomplete="organization" maxlength="160" /></div>
          <div class="form-row"><label for="inquiry-topic">Hvad vil du drøfte?</label><select id="inquiry-topic" name="topic"><option>PLM-arkitektur</option><option>Aras Innovator</option><option>SolidWorks PDM integration</option><option>PLM Study Week</option><option>30-minutters introduktion</option><option>Andet</option></select></div>
          <div class="form-row"><label for="inquiry-message">Kort beskrivelse <span aria-hidden="true">*</span></label><textarea id="inquiry-message" name="message" rows="5" minlength="10" maxlength="3000" required placeholder="Hvilke systemer og hvilken udfordring?"></textarea></div>
          <div class="form-row"><label for="inquiry-time">Foretrukket tidspunkt (valgfrit)</label><input id="inquiry-time" name="time" placeholder="Fx tirsdag efter kl. 13" maxlength="160" /></div>
          <button class="button button-primary" type="submit">Åbn e-mail med forespørgslen ↗</button>
          <p class="form-note" id="inquiry-status" role="status" aria-live="polite">Oplysningerne sendes ikke til StubTEC, før du selv sender e-mailen fra dit mailprogram.</p>
        </form>
      </div></section>
      <script>
        (function(){
          var form = document.getElementById('inquiry-form');
          if(!form) return;
          form.addEventListener('submit', function(event) {
            event.preventDefault();
            if(!form.reportValidity()) return;
            var data = new FormData(form);
            var details = ['Navn: '+data.get('name'),'E-mail: '+data.get('email'),'Virksomhed: '+(data.get('company')||'Ikke angivet'),'Emne: '+data.get('topic'),'Tidspunkt: '+(data.get('time')||'Ikke angivet'),'','Udfordring:',String(data.get('message')||'')].join('\\n');
            var subject = 'PLM henvendelse: '+data.get('topic');
            document.getElementById('inquiry-status').textContent = 'Dit e-mailprogram åbnes. Gennemse og send selv beskeden; der er endnu ikke booket et møde.';
            window.location.href = 'mailto:csm@stubtec.dk?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(details);
          });
        })();
      </script>
    `
  },
  'privatliv': {
    slug: 'privatliv',
    title: 'Privatliv og kontaktoplysninger | StubTEC PLM',
    description: 'Information om kontakt, e-mailhenvendelser og behandling af personoplysninger på StubTECs hjemmeside.',
    label: 'INFORMATION / PRIVATLIV',
    headline: 'Privatliv og henvendelser.',
    intro: 'Når du kontakter StubTEC, skal det være tydeligt, hvad der sker med de oplysninger, du vælger at dele.',
    body: `
      <section class="page-section shell policy-copy">
        <h2>Data ved henvendelser</h2><p>Kontaktformularen på denne hjemmeside klargør en e-mail i din egen mail-app. Formularens indhold sendes ikke automatisk til en server på hjemmesiden. Hvis du vælger at afsende e-mailen, modtager StubTEC de oplysninger, du har skrevet.</p>
        <h2>Formål og kontakt</h2><p>Oplysninger fra direkte henvendelser anvendes til at behandle forespørgslen og følge op på en eventuel dialog om rådgivning eller leverance. Kontakt <a href="mailto:csm@stubtec.dk">csm@stubtec.dk</a> med spørgsmål om din henvendelse eller med anmodninger vedrørende dine oplysninger.</p>
        <h2>Teknisk drift</h2><p>Websitet hostes via Azure. Der kan indgå nødvendige tekniske logs og sikkerhedsfunktioner i hosting og netværksdrift. Denne tekst er en kort beskrivelse af webstedets kontaktflow, ikke en fuldstændig fortegnelse over alle underleverandører og deres opbevaringsperioder.</p>
        <h2>Booking og statistik</h2><p>Der er i denne version ingen integreret tredjeparts bookingfunktion i selve webstedet. En eventuel senere booking- eller analyseintegration kræver opdateret databeskrivelse, før den tages i brug.</p>
        <p><small>Senest revideret 17. oktober 2026. Uddybende information om behandlingsgrundlag og opbevaringsperioder kan efterspørges på e-mail.</small></p>
      </section>
    `
  }
};

import type { CampsiteConfig } from "../types";

/**
 * Camping Falken — Comfort & Wellness Camping in Lienz, Osttirol.
 * Inhalte zu 100 % aus raw/digest abgeleitet. Du-Anrede. Design FIX:
 * kein theme (Original-Palette), heroVariant "center".
 */
const IMG = "/campsites/camping-falken";

const campingFalken: CampsiteConfig = {
  name: "Camping Falken",
  shortName: "Falken",
  slug: "camping-falken",
  ort: "Lienz",
  region: "Osttirol",
  brandKind: "Comfort & Wellness Camping",
  regionLong: "Lienzer Dolomiten · Osttirol · Österreich",

  heroVariant: "center",

  claim: "Comfort & Wellness am Fuß der Lienzer Dolomiten",
  claimEmphasis: "Lienzer Dolomiten",
  emailDetail: "eure Wellness-Oase Falkennest direkt am Platz",
  intro:
    "Am südlichen Stadtrand von Lienz findest du ebene Komfort-Stellplätze mit Blick auf die Lienzer Dolomiten — nur 10 Gehminuten in die Altstadt, mit eigener Wellness-Oase Falkennest am Platz.",

  logo: { src: `${IMG}/logo-camping-falken.png`, alt: "Camping Falken Logo" },

  statement: {
    text: "Bei uns liegt die Wellness-Sauna gleich neben dem Stellplatz — die Berge gibt es gratis dazu.",
    emphasis: "gleich neben dem Stellplatz",
  },

  pillars: [
    {
      title: "Stellplätze mit Dolomitenblick",
      text: "Vom ebenen Stellplatz blickst du direkt auf die schroffen Gipfel der Lienzer Dolomiten.",
      image: { src: `${IMG}/pillar-stellplatz-dolomiten.webp`, alt: "Stellplatz am Camping Falken mit Blick auf einen Dolomitengipfel" },
    },
    {
      title: "Wellness-Oase Falkennest",
      text: "Zirbensauna, Bio-Kräutersauna, Dampfbad und Dachterrasse — Erholung gleich neben dem Platz.",
      image: { src: `${IMG}/pillar-wellness-sauna.webp`, alt: "Sauna in der Wellness-Oase Falkennest am Camping Falken" },
    },
    {
      title: "Mitten in Lienz",
      text: "Nur 10 Gehminuten in die Altstadt, 5 Minuten zum Dolomitenbad und 400 m zum Drauradweg.",
      image: { src: `${IMG}/pillar-lage.webp`, alt: "Campingplatz Falken mit Bergkulisse am Stadtrand von Lienz" },
    },
  ],

  usps: [
    "Eigene Wellness-Oase",
    "Blick auf die Dolomiten",
    "10 Min. in die Altstadt",
    "Gratis WLAN am Platz",
    "Hunde willkommen",
    "Maut-frei mit E-Auto",
  ],

  trust: {
    heading: "Stadt, Berge und Sauna an einem Platz",
    headingEmphasis: "an einem Platz",
    intro:
      "Wenige Gehminuten trennen dich von der Lienzer Altstadt, dem Dolomitenbad und dem Drauradweg — und nach dem Tag wartet die hauseigene Wellness-Oase Falkennest mit Sauna und Dampfbad.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/hero-luftaufnahme.webp`, alt: "Luftaufnahme von Lienz im Talboden vor den Lienzer Dolomiten" },
  },

  camping: {
    heading: "Stellplätze am Camping Falken",
    intro:
      "Von der Standard- bis zur Premium XL-Parzelle (70–130 m²), schattige Plätze im Obstgarten und ein eigener Zelt- und Jugendplatz — dazu Markt, Bar und das E-Auto für mautfreie Ausflüge.",
    features: [
      {
        title: "Stellplätze mit Bergblick",
        text: "Ebene Plätze unter alten Bäumen, ringsum die Gipfel der Lienzer Dolomiten — Campingtag mit Aussicht.",
        image: { src: `${IMG}/feature-bergblick.webp`, alt: "Stellplätze am Camping Falken mit Dolomitengipfel im Hintergrund" },
      },
      {
        title: "Komfort-Parzellen",
        text: "Standard, Premium und Premium XL von 70 bis 130 m² — viel Platz für Wohnwagen, Wohnmobil und Vorzelt.",
        image: { src: `${IMG}/feature-stellplaetze.webp`, alt: "Reihe von Komfort-Stellplätzen mit Vorzelten am Camping Falken" },
      },
      {
        title: "Schattig im Obstgarten",
        text: "Im Obstgarten stehst du schattig zwischen großen Nuss- und Apfelbäumen — ruhig und nah an allem.",
        image: { src: `${IMG}/feature-obstgarten.webp`, alt: "Schattige Stellplätze unter großen Bäumen am Camping Falken" },
      },
      {
        title: "Mini-Markt & Bar",
        text: "Frisches Gebäck, Getränke, Campinggas und Chef Pauls Edelbrände gibt es im kleinen Markt mit Bar.",
        image: { src: `${IMG}/feature-markt.webp`, alt: "Mini-Markt mit Snacks und Edelbränden am Camping Falken" },
      },
      {
        title: "Maut-frei mit dem E-Auto",
        text: "Mit unseren E-Mobilitäts-Cars fährst du mautfrei auf Felbertauern-, Glockner- und Dolomitenstraße.",
        image: { src: `${IMG}/feature-eauto.webp`, alt: "E-Mobilitäts-Cars von Camping Falken vor der Bergkulisse" },
      },
      {
        title: "Zelt- & Jugendplatz",
        text: "Eigener Zelt- und Jugendplatz mit Bike Park und Trockendock — ideal für Radler und Wildwassersportler.",
        image: { src: `${IMG}/feature-zeltplatz.webp`, alt: "Zeltplatz mit Zelten und Bäumen am Camping Falken" },
      },
    ],
  },

  mobilheime: {
    heading: "Schlafen im Holzfass",
    intro:
      "Lust auf etwas Besonderes? Übernachte in einem unserer Schlaffässer — gemütliche Holzfässer mit richtigen Betten, mitten am Platz.",
    items: [
      {
        name: "Schlaffass",
        kind: "Glamping im Holzfass",
        text: "Massives Holzfass mit Doppelbett und Bettwäsche — gemütlich für zwei, ganz ohne eigenes Zelt oder Wohnwagen.",
        image: { src: `${IMG}/schlaffass.webp`, alt: "Innenraum eines Schlaffasses mit Doppelbett am Camping Falken" },
        features: ["bis 2 Personen", "inkl. Bettwäsche", "ab € 58,50 / Nacht"],
      },
    ],
  },

  aktivitaeten: {
    heading: "Osttirol vor dem Vorzelt",
    intro:
      "Der Lienzer Talboden ist Ausgangspunkt für fast alles — Radeln am Fluss, Wildwasser auf Isel und Drau, eine Runde Golf vor den Dolomiten.",
    items: [
      {
        title: "Drauradweg vor der Tür",
        text: "Der Drauradweg führt nur 400 m am Platz vorbei — flach und familienfreundlich bis nach Italien.",
        image: { src: `${IMG}/aktiv-drauradweg.webp`, alt: "Familie beim Radfahren auf dem Drauradweg bei Lienz" },
      },
      {
        title: "Rafting & Wildwasser",
        text: "Rafting und Kajak starten gleich um die Ecke — fürs Equipment gibt es ein Trockendock am Platz.",
        image: { src: `${IMG}/aktiv-rafting.webp`, alt: "Rafting-Gruppe im Wildwasser bei Lienz" },
      },
      {
        title: "Golf vor den Dolomiten",
        text: "Auf dem Dolomitengolf-Platz spielst du eine Runde mit den Lienzer Dolomiten als Kulisse.",
        image: { src: `${IMG}/aktiv-golf.webp`, alt: "Golfer auf dem Dolomitengolf-Platz vor den Bergen" },
      },
    ],
  },

  anreise: {
    heading: "Anfahrt nach Lienz",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Felbertauernstraße aus dem Norden oder die Drautal-Bundesstraße (B100) bis an den südlichen Stadtrand von Lienz.",
      },
      {
        title: "Mit der Bahn",
        text: "Der Bahnhof Lienz liegt an der Pustertalbahn; vom Platz sind es rund 15 Gehminuten oder eine kurze Taxifahrt.",
      },
      {
        title: "Mit dem Rad",
        text: "Du campst direkt am Drauradweg — den letzten Kilometer rollst du quasi bis vors Vorzelt.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Falken",
    headingEmphasis: "Falken",
    intro:
      "Stellplätze unter Bäumen, die Wellness-Oase und die Berge ringsum — ein paar Bilder vom Camping Falken in Lienz.",
    tag: "Lienz · Osttirol",
    moreCount: 20,
    images: [
      { src: `${IMG}/galerie-stellplaetze.webp`, alt: "Blick über die Stellplätze am Camping Falken" },
      { src: `${IMG}/galerie-wellness.webp`, alt: "Ruhebereich der Wellness-Oase Falkennest" },
      { src: `${IMG}/galerie-schlaffass.webp`, alt: "Sitzbereich im Schlaffass am Camping Falken mit Klapptisch und Schlafnische" },
      { src: `${IMG}/galerie-kajak.webp`, alt: "Kajakfahrer im Wildwasser bei Lienz" },
    ],
  },

  booking: {
    heading: "Schnapp dir deinen Platz in Lienz",
    headingEmphasis: "in Lienz",
    intro:
      "Sag uns Zeitraum und Personenzahl — Familie Falkner bestätigt deine Reservierung persönlich per E-Mail.",
    pricesArePlaceholder: false,
    priceNote:
      "Totalpreis/Nacht inkl. 2 Personen & aller Taxen (Vorsaison) — Hauptsaison 15.07.–15.09. höher, je weitere Person ab € 9 zzgl. Kurtaxe. Preise 2026 inkl. MwSt.",
    highlight: {
      title: "Bäder gratis",
      text: "Ab 3 Nächten freier Eintritt ins Dolomitenbad Lienz und ins Strandbad Tristacher See.",
    },
    categories: [
      { id: "stellplatz", label: "Komfort-Stellplatz", perNight: 43.7, perExtraGuest: 9 },
      { id: "zelt", label: "Zeltplatz", perNight: 38.2, perExtraGuest: 9 },
      { id: "schlaffass", label: "Schlaffass", perNight: 58.5, perExtraGuest: 10 },
    ],
  },

  kontakt: {
    coords: { lat: 46.822713, lng: 12.77145 },
    tel: "+43 664 4107973",
    telHref: "tel:+436644107973",
    mail: "camping.falken@gmx.at",
    adresse: "Falkenweg 7 · 9900 Lienz · Osttirol",
  },

  languages: ["DE", "IT", "EN"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Schlaffässer", href: "#mobilheime" },
    ]},
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default campingFalken;

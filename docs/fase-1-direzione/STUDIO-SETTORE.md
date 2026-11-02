# Studio del settore: i siti dei migliori operatori

Data: 2 novembre 2026.

**Metodo:** ho aperto le homepage pubbliche in un browser automatico (1440 px) e misurato lo stile reso a schermo: font effettivamente usati e file caricati, corpi, pesi, maiuscolo, colori di fondo e testo, pulsanti, presenza di video, voci di navigazione.

**Screenshot:** nello spazio di lavoro, in `/_studio-settore/` (visibili mentre lo spazio è acceso).

**Siti non analizzati:** Shake Shack blocca i browser automatici (Cloudflare); Sweetgreen non si è caricato.

## Dati raccolti

| Marchio | Settore | Titoli | Testo | Fondo / colori | Note |
|---|---|---|---|---|---|
| **Momofuku** | Ristoranti, NY | Graphik 600, **minuscolo normale**, 64 px | Andale Mono 14 px | Crema `#FAF7EE`, nero `#232323` | Font proprietario "Momo Sharpie" per gli accenti; pulsanti a pillola |
| **Dishoom** | Ristoranti, Londra | **Cheltenham** (serif) 45 px | Cheltenham 14 / Gill Sans Nova | Crema `#F0ECE0`, antracite, verde `#006642` | Font proprietario per ogni locale; nessun pulsante strillato |
| **Marugame Udon** | Udon, catena UK | **Oldschool Grotesk 400** (peso normale!) a 96 px | Lo stesso, **22 px** | Bianco, crema `#F1F0EA`, rosso `#E83E44` | Testo base molto grande; video |
| **Tonkotsu** | Ramen, Londra | **Brown** (Lineto) Bold 28–32 px, minuscolo | Brown 16 px | Blu `#064269`, giallo crema `#F1E2B3`, rosso | Palette a due colori di marca; video |
| **Koya** | Udon, Londra | Font proprietario 700, 39 px | Lo stesso, 16 px | Blu `#003B5C`, crema `#F0EBDC` | Sobrio, poche cose per pagina |
| **Sticks'n'Sushi** | Sushi, DK/UK | **ITC Conduit** 700 maiuscolo, 40 px | Conduit 16 px | Sabbia `#E7E3D4`, antracite | Video; pulsanti a pillola |
| **Wagamama** | Catena pan-asiatica | **Font proprietario** 700, tutto minuscolo | Lo stesso | Nero, rosso `#E42A21` | Testi e pulsanti in minuscolo, raggio 2 px |
| **Itsu** | Sushi fast casual | VAG Rounded 700 | VAG Rounded 20 px | Magenta `#E70095` | Marchio giocoso; video |
| **Temakinho** | Sushi, Italia | Londrina Solid 900 (display) | **Basis Grotesque** (Colophon) | Arancio `#E7591D`, crema `#F7F1E3` | Display "decorato" e testo serio |
| **Afuri** | Ramen/izakaya | Proxima Nova 600 maiuscolo spaziato | Futura PT 17,6 px | Nero, rosso `#DE3227` | Pulsanti a pillola |
| **Kanada-Ya** | Ramen, Londra | **Oswald** 500 maiuscolo | Oswald | Nero, rosso `#ED1C24` | Google Font condensato: aspetto generico |
| **Bone Daddies** | Ramen, Londra | **Barlow Condensed 900 maiuscolo**, 95 px | Raleway | Bianco, nero, rosso `#BE1E2D` | Identico all'errore della nostra v0.2 |
| **Ippudo** | Ramen, globale | Montserrat | Noto Sans JP 14 px | Rosso `#CF000D` | Font di default; sito datato |
| **Nobu** | Fascia alta, globale | **Poppins** 500–700 | Poppins | Bianco, oro `#886E42` | Il marchio più costoso usa il font più comune |

## Cosa ci dicono

1. **Il rosso non distingue nessuno.** Lo usano Ippudo, Kanada-Ya, Bone Daddies, Wagamama, Marugame e Afuri. Il nostro corallo va bene, ma l'identità deve venire da tipografia, impaginazione e fotografia, non dal colore.
2. **I siti percepiti come più "di livello"** (Momofuku, Dishoom, Marugame, Tonkotsu, Koya) hanno tre cose in comune:
   - **un font con carattere da fonderia vera**, spesso proprietario (Graphik, Cheltenham, Oldschool Grotesk, Brown);
   - **titoli in minuscolo normale o pesi medi.** Marugame usa il **peso normale a 96 px**; Momofuku 600 in minuscolo normale. Il volume lo fa la dimensione, non il nero né il maiuscolo;
   - **fondo crema caldo** (`#F0ECE0`, `#FAF7EE`, `#F1F0EA`, `#F1E2B3`, `#F0EBDC`) e **un solo colore profondo**.
3. **I siti che sembrano generici** (Kanada-Ya, Bone Daddies, Ippudo, Nobu) usano **Google Font molto diffusi**: Oswald, Barlow Condensed, Montserrat, Poppins. Bone Daddies con Barlow Condensed 900 maiuscolo è esattamente la formula della nostra v0.2. **Diagnosi confermata.**
4. **Un secondo font come accento,** mai come sistema: il mono di Momofuku (Andale) per i testi brevi, il serif di Dishoom, il display di Temakinho.
5. **Testo base grande:** Marugame 22 px, Itsu 20 px, Afuri 17,6 px. Leggibilità come segno di qualità.
6. **Video nell'hero:** Sticks'n'Sushi, Bone Daddies, Itsu, Nobu, Tonkotsu, Marugame. Conferma la scelta di usare il video da 30–40 s.
7. **Pulsanti:** prevalgono pillole e testo in minuscolo (Momofuku, Afuri, Itsu, Sticks'n'Sushi, Wagamama). Il maiuscolo mono su tutto è un'eccezione.

## Conseguenze per UMAMI

- **Via Bricolage e via i titoli condensati nero-maiuscolo.**
- Titoli **grandi ma di peso medio**, in **minuscolo normale**; il maiuscolo spaziato solo per il marchio e pochissime etichette.
- **Un font principale di fonderia vera**, più **un solo accento** (mono per prezzi e allergeni, oppure serif per i titoli editoriali).
- **Fondo crema** come base, corallo come colore attivo e non come riempitivo; molto più spazio vuoto.
- Testo base **18–20 px**.

## Font candidati verificati su Adobe Fonts

Si usano sul sito con una licenza Creative Cloud, tramite un kit web Adobe Fonts compatibile con WordPress.

| Direzione | Titoli | Testo | Accento | Vicino a |
|---|---|---|---|---|
| **A · Svizzera calda** | Neue Haas Grotesk Display (Monotype, C. Schwartz) | Neue Haas Grotesk Text | Input Mono (DJR) per prezzi e allergeni | Momofuku, Koya |
| **B · Editoriale** | Warbler Display (DJR), serif | Halyard Text (Darden Studio) | Input Mono | Dishoom |
| **C · Grottesco con carattere** | Parry Grotesque (Original Type) | Parry Grotesque | Input Mono | Marugame, Tonkotsu |

---

# Parte 2: riferimenti mondiali (upscale moderno)

La prima selezione era sbilanciata verso catene casual del Regno Unito e degli Stati Uniti. Questa seconda parte allarga a:
- **alta cucina mondiale;**
- **marchi alimentari di riferimento per il design;**
- **siti premiati da Awwwards nella categoria Food & Drink (2025–26).**

Metodo identico alla prima parte. Screenshot in `/_studio-settore/mondo/`.

**Non analizzabili:** Blue Bottle (blocca i browser automatici), Crav Burgers e Moooor (nessun contenuto leggibile).

| Marchio | Tipo | Titoli | Testo | Accento / note | Fondo |
|---|---|---|---|---|---|
| **Noma** (Copenaghen) | Alta cucina | **Reckless / Reckless Neue** (serif contemporaneo) | Reckless 18 px | Roobert (grottesco) | Crema `#F9F9F3`, verde scuro `#29382B`; video; immagini sul 91% della prima schermata |
| **Mirazur** (Mentone) | Alta cucina | **Goudy Old Style** 50 px, maiuscolo spaziato | **Saans 20 px**, peso 380 | **Saans Mono** | Crema `#F3EEE3` |
| **Eleven Madison Park** (NY) | Alta cucina | Nobel | **EB Garamond 21 px** | Inter Tight | Bianco, blu `#15325C`; foto a pieno schermo |
| **Central** (Lima) | Alta cucina | **PP Editorial Sans / Editorial New, peso Ultralight** | — | corsivo Editorial New | Grigi; video |
| **Disfrutar** (Barcellona) | Alta cucina | **Graphik** Bold e Light | Graphik 18 px | — | Beige `#F2F1E2`, nero |
| **Ikoyi** (Londra) | Alta cucina | Radikal | **Baskerville** | — | Nero, testo crema `#E1DBD2` |
| **Atomix** (NY) | Alta cucina coreana | Heebo maiuscolo spaziato | — | — | Foto a pieno schermo |
| **SingleThread** (California) | Alta cucina | Cantoria (serif) | Avenir Next | — | Video |
| **Graza** | Marchio alimentare | **ITC Garamond Condensed 102 px** | Apercu | **GT Alpina Typewriter** | Pesca `#F6E6D9`, lime; video |
| **Fly By Jing** | Marchio alimentare | JeanLuc | **Publico 22 px** | — | Nero, verde, rosso |
| **Brightland** | Marchio alimentare | **Tilda 104 px**, Advercase | Circular | — | Video |
| **Fishwife** | Marchio alimentare | Recoleta (serif) | Recoleta | — | Giallo |
| **SŌM** — Awwwards Sito del Giorno, apr 2026 | Bevanda | **ABC Diatype** 500 | — | **ABC Diatype Mono** | Nero, bianco |
| **IRONHILL** — Awwwards Sito del Giorno, gen 2026 | Bevanda | **PP Woodland 300** | **GT America** | — | Oliva `#344128`, giallo, crema; video |
| **Don Molinico** — Awwwards Sito del Giorno, apr 2026 | Alimentare | Font proprietario | — | pulsanti a pillola | Rosso `#D70321`, oro, crema |
| **Qissa** — Awwwards nominato, ristorante | Ristorante | **Cormorant Garamond 122 px**, peso 330 | Manrope 20 px | pulsanti a pillola | Blu notte `#0E1838`, oro, crema; video |
| Sugarfish, KazuNori | Sushi | Open Sans | Open Sans 14 px | — | Esempi deboli |

## Cosa distingue l'upscale moderno

1. **Un serif per i titoli e un grottesco per testo e interfaccia.** È la formula di Noma (Reckless + Roobert), Mirazur (Goudy + Saans), Qissa (Cormorant + Manrope), Graza (Garamond Condensed + Apercu), Eleven Madison Park (Garamond), Ikoyi (Baskerville), Fly By Jing (Publico).
   - Il solo grottesco svizzero (la nostra v0.3) colloca UMAMI vicino a Momofuku e Disfrutar: sobrio, ma più "casual chic" che upscale.
2. **Pesi leggeri nei titoli grandi.** Central ultralight, Qissa 330, IRONHILL 300, Mirazur 380 sul testo. L'eleganza viene dalla dimensione unita a un tratto sottile.
3. **Il mono come terzo livello per i dati,** confermato: Mirazur (Saans Mono), SŌM (Diatype Mono), Graza (Alpina Typewriter).
4. **La fotografia domina.** Nella prima schermata le immagini coprono dal 90% al 400% della vista: foto a tutta pagina, poche parole. Il nostro design system mostrava immagini piccole dentro una griglia.
5. **Navigazione minima:** 2–6 voci (Noma 3, Central 3, Qissa 2, Mirazur 5), contro le 27–52 dei siti di e-commerce.
6. **Testo grande:** 18–22 px (Mirazur 20, Eleven Madison Park 21, Fly By Jing 22, Qissa 20).
7. **Palette:** crema più un solo colore profondo (Noma verde, Qissa blu notte, IRONHILL oliva) ed eventualmente un metallo (oro). Mai più di due colori forti.

## Raccomandazione

Neue Haas Grotesk resta per testo e interfaccia (Text). Per i titoli si aggiunge un **serif contemporaneo leggero**. Input Mono resta per i dati.

**Serif verificati su Adobe Fonts:**

| Font | Fonderia / disegnatore |
|---|---|
| IvyPresto Display | Ivy Foundry, Jan Maack |
| Warbler Display | DJR, David Jonathan Ross |
| FreightBig Pro | Joshua Darden |

**Impaginazione:** foto e video a tutta pagina, molto meno testo per schermata, navigazione a 4–5 voci, crema più brace (colore profondo) con il corallo come unico accento.

# Fase 1: direzione artistica "Rosso Umami" (bozza)

Moodboard navigabile: [`prototipo/moodboard/index.html`](../../prototipo/moodboard/index.html). Si apre direttamente nel browser, senza bisogno di compilare nulla.

## Riferimenti forniti da Davide

Le immagini non sono salvate nel repository perché sono di terzi.

| Progetto | Autore | Cosa prendiamo (principi) | Cosa NON prendiamo |
|---|---|---|---|
| Tsukiyo, street food giapponese a Sydney | The Colour Club | Un colore saturo tono su tono, un pattern che fa da identità, un unico contrasto elettrico (blu), still life del packaging | Gli archi a onda (cliché delle onde giapponesi) e il simbolo con gli occhi |
| Lalaon, Korean BBQ a Brooklyn | — | Logo modulare a riquadri verticali, pattern tipografico col nome, piatto dall'alto su fondo corallo, ottone | I gatti illustrati e il layout del suo logo |
| Daikan, izakaya | — | Foto notturne col flash e con grana, carta kraft col marchio, menu in carattere monospaziato con codici | — |

## Principi

1. **Un colore.** Rosso caldo pieno, usato tono su tono. Il resto è riso (bianco caldo), brace (nero caldo), kraft e ottone. Il blu elettrico si usa raramente, solo per i focus e gli stati.
2. **Il pattern è il brand.** Colonne verticali con i luoghi del menu: Porto Selvaggio, San Foca, Leverano, Santa Caterina, Porto Badisco, Sant'Andrea, La Strea. La costa salentina diventa texture.
3. **Una griglia editoriale.** Testi piccoli su grandi campi di colore, titoli condensati, dati (prezzi, pezzi, allergeni) in carattere monospaziato.
4. **Due fotografie:**
   - *prodotto*: piatto dall'alto, fondo rosso pieno, stessa inquadratura per tutti i 110 prodotti;
   - *vita reale*: flash, notte, grana, per food truck, fiere ed eventi.

## Decisioni prese

- **Logo:** lo ridisegna Davide. Il prototipo usa un **segnaposto** dichiarato e modulare, in una versione verticale e in una orizzontale.
- **Mascotte:** arriverà con la parte del food truck. Lo spazio è già riservato nel sistema: hero dello street food, stati vuoti, conferma d'ordine.

## Decisioni prese il 2/11/2026

- **Colore:** corallo `#C23B2E`.
- ~~**Tipografia:** abbinamento C, Bricolage Grotesque + IBM Plex Mono~~ → **sostituita il 2/11/2026** (giudicata cheap; vedi `STUDIO-SETTORE.md`).
- **Tipografia (definitiva, v0.4 "upscale moderno"):** **Warbler Display** (DJR) per i titoli, a peso normale e con il corsivo per gli accenti. **Neue Haas Grotesk Text** per testo e interfaccia (18 px). **Input Mono** solo per i dati. Deriva dallo studio mondiale (`STUDIO-SETTORE.md`, parte 2). Adobe Fonts: il kit web di produzione va creato sull'account Creative Cloud del cliente.
- **Video:** orizzontale 16:9. Il ritaglio verticale per mobile lo preparo io (vedi `CONTENUTI-MEDIA.md`).

## Opzioni valutate

- **Colore:** corallo `#C23B2E` oppure rosso puro `#D21F1A`. Entrambi raggiungono il contrasto **5.3:1 con il bianco** (livello AA). Il corallo mantiene continuità con l'arancio `#C1581E` del marchio attuale.
- **Tipografia:** tre abbinamenti.

  | | Marchio | Titoli | Mono |
  |---|---|---|---|
  | A | Archivo largo | Archivo condensato | JetBrains Mono |
  | B | Outfit | Big Shoulders Display | Space Mono |
  | C | Bricolage Grotesque | Bricolage Grotesque condensato | IBM Plex Mono |

  Sono tutti font Google Fonts con licenza OFL, quindi utilizzabili anche in WordPress.

## Note di accessibilità

- **Testi sui fondi:** il testo normale sta solo su bianco, riso o brace, oppure bianco sul rosso. Il testo rosso su brace va usato solo in dimensione grande (3.5:1).
- **Ottone e kraft:** non sono colori per il testo su bianco.
- **Pattern animato:** rispetta l'impostazione di sistema "riduci movimento" ed è più tenue su mobile, per non disturbare la lettura.

## v0.5: colore, materia, luce, interfaccia ed esperienza d'uso (2/11/2026)

Derivati dallo studio mondiale (`STUDIO-SETTORE.md`).

| Area | Scelta | Riferimento |
|---|---|---|
| **Colore** | Carta `#F2EDE4`, inchiostro `#16100E`, **lacca** `#2B0F0C` (rosso-nero delle lacche urushi), **ottone** `#B08D57`; il corallo `#C23B2E` diventa **segnale** (carrello, stato, un accento per pagina) | Noma (crema + verde scuro), Qissa (blu notte + oro), IRONHILL (oliva + giallo) |
| **Pulsanti primari** | Inchiostro, non corallo | Alta ristorazione: il colore non urla |
| **Materia** | Fibra di carta appena visibile sul fondo; grana sulle superfici scure; filetti in ottone | Carta dei menu stampati, Daikan, stoviglie in ottone (Lalaon) |
| **Luce** | Sezioni in lacca illuminate "a candela" dall'alto a sinistra; ombre calde a strati al posto dei bordi; grading caldo e vignetta sulle foto per uniformare scatti diversi | Fascia serale 19:00–23:30 |
| **Interfaccia** | Superfici sollevate con luce morbida; schede senza box; navigazione a 5 voci; stato aperto/chiuso nell'header | Noma, Mirazur, Central |
| **Esperienza** | **Cassetto del carrello** laterale su desktop e dal basso su mobile: non si lascia il menu per vedere l'ordine. Focus intrappolato, ESC per chiudere. **Stato calcolato dagli orari reali** ("Aperto · chiude alle 23:30", "Chiuso il mercoledì · apre giovedì alle 19:00"). Toast di conferma con accesso diretto al cassetto | Pattern dei siti d'ordine più curati; riduce i cambi di pagina |

---

## v0.7 · Direzione dai siti premiati (scelte di Davide)

Pezzi scelti dalla board dei vincitori Awwwards nel cibo (Siti del giorno e Menzioni d'onore 2025–2026):

| Pezzo | Sito | Cosa prendiamo |
|---|---|---|
| 1–2 | Sakazuki (Sito del giorno) | Apertura a tutto schermo; testo in cornice simmetrica: nome al centro, due testi brevi ai lati, barra in basso con link, orologio, invito all'azione |
| 3 | Sakazuki | Colonna centrata: testo piccolo, parola gigante, marchio, parola gigante, testo piccolo |
| 5 | Bucks Sauce (Sito del giorno) | Due soli colori: nero `#100B06` e crema `#F5E4C7`; prodotto protagonista in griglia a filo |
| 15 | Watchhouse (Menzione d'onore) | Menu a tendina: colonne di categorie con foto e titolo, piatti in evidenza a destra |

**Colore accento: rame** (arancione vecchio poco saturo), al posto di corallo e rosso.
- `#B0603A` rame: pulsanti con testo bianco (4,6:1), titoli grandi su crema (3,7:1)
- `#9C4A27` rame scuro: testo piccolo su crema (4,9:1)
- `#D08A5E` rame chiaro: su nero (7:1)

**Tipografia:** un solo font, Archivo (Google Fonts), largo (`font-stretch: 125%`): titoli maiuscoli a peso 500, testo a 400. Niente serif né corsivo; l'accento è il rame. Hagrid (il font di Sakazuki) è commerciale: alternativa da valutare con licenza del cliente.

**Forme:** angoli vivi ovunque; la pillola resta solo per i pulsanti.

## v0.8 · Colori definiti da Davide
- **Arancione Umami meno saturo**: dall'arancione dei pulsanti del sito attuale (`#DD6727`, saturazione 73%) abbassato al 50%.
  - `#BF6D40` accento: titoli grandi su crema (3,1:1), testo nero sopra (5,1:1), contatore del carrello
  - `#8E4F2D` scuro: testo piccolo su crema (5,1:1), pulsanti con testo bianco (6,4:1)
  - `#C87141` chiaro: accenti sui fondi scuri (4,3–5,5:1)
- **Rame marrone sfumato** (la fascia scura di prima, in rame): da `#3A1E12` a `#160D08` con luce calda arancio in alto a sinistra. Usato per apertura, servizi e footer.
- **Fondo bianco** `#FFFFFF` (v1.0, al posto della crema `#F5E4C7`). **Nero** `#100B06`.

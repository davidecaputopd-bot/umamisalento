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

## Decisioni aperte (da scegliere nella moodboard)

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

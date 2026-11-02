# Audit grafico del sito attuale

Data: 2 novembre 2026.

**Metodo:** critica del design (prima impressione, usabilità, gerarchia visiva, coerenza, accessibilità), basata su:
- screenshot desktop (1440 px) e mobile (390 px) di 7 pagine;
- misure automatiche dello **stile reso a schermo**: colori, font, corpi, pesi, pulsanti, raggi degli angoli, allineamenti, lunghezza delle righe, gerarchia dei titoli.

**Fonte:** solo la **copia di lavoro** isolata. La copia non ha fatto nessuna richiesta al sito vero (verificato dal registro delle richieste del browser), e statistiche e tracciamento sono disattivati.

> **Limite della copia.** 20 immagini del sito originale sono servite dal CDN di Jetpack (`i0.wp.com`). Non fanno parte della copia e non le ho scaricate, per non contattare il sito vero.
> Mancano quindi, tra le altre, i riquadri-immagine della home (Menu, Chi siamo, Catering) e l'immagine con i prezzi di consegna. In quei punti gli screenshot mostrano spazi vuoti: il giudizio sulla home tiene conto di questo.

---

## Impressione generale

**Un sito scuro e generico, costruito per blocchi senza un sistema.** Il fondo nero e l'arancio danno una certa atmosfera serale. Però non c'è niente che dica UMAMI: nessuna immagine guida, nessun titolo, un solo font dall'aspetto infantile e cinque arance diverse. Su mobile la prima cosa che si legge è "Orari di Apertura", non che cosa si mangia né come si ordina.

**Valutazione grafica complessiva: 3/10.**

## 1. Prima impressione (i primi 2 secondi)

| Dispositivo | Cosa si vede per primo | Corretto? |
|---|---|---|
| Desktop | Una barra in alto con "Gastronomia di mare…", poi logo e menu (MENU · DELIVERY · CATERING · CONTATTI). Nessun titolo, nessuna immagine guida | ❌ Non si capisce cosa sia UMAMI né cosa fare |
| Mobile | Totale carrello "0,00 €", logo piccolo, menu ad hamburger, titolo "Orari di Apertura" | ❌ L'informazione più vista è secondaria; manca un invito a ordinare |

## 2. Colore

| Misura | Risultato |
|---|---|
| Fondo dominante | Nero `#000000`, più un secondo nero `#0D0D0D` (due neri diversi) |
| Arancioni usati | **Sette:** `#C1581E`, `#C64F31`, `#CF7529`, `#DD6727`, `#FF6600`, `#FF6A00`, `#F29202` |
| Altri colori | Verde `#008000` nel menu catering, grigio `#3A3A3A` (predefinito di Astra) |
| Colori globali di Elementor | Restano quelli predefiniti (azzurro, verde, grigi), non usati in modo coerente |

**Contrasti critici:**

| Elemento | Colori | Rapporto | Esito |
|---|---|---|---|
| Pulsanti "aggiungi" e fasce del menu: bianco su arancio | `#FFF` / `#DD6727` | **3,47:1** | ❌ Non basta per il testo normale |
| Pulsante o icona grigio su nero (toggle del menu) | `#3A3A3A` / `#000` | **1,85:1** | ❌ Quasi invisibile |
| Testo arancio su nero | `#C1581E` / `#000` | 4,68:1 | ✅ Al limite |
| Bianco su arancio del marchio | `#FFF` / `#C1581E` | 4,49:1 | ⚠️ Appena sotto 4,5 |

**Diagnosi:** l'arancio non è un colore di marca ma una famiglia di tinte scelte a occhio, una per ogni widget.

## 3. Tipografia

| Misura | Risultato |
|---|---|
| Font | **Solo ABeeZee** in tutto il sito: un sans geometrico arrotondato, pensato per bambini e prime letture |
| Pesi | Quasi tutto a 400; **i titoli sono a 400 come il testo**; i nomi dei prodotti nel menu a **300 (light)** su fondo scuro |
| Corpi usati | Da 11 a 30 px, con 8–10 valori diversi per pagina e nessuna scala |
| Testo base | 14–15 px (su mobile **175 testi a 14 px** nella pagina d'ordine) |
| Titoli | h1 27–30 px, h2 30, h3 24–25, h5 18, h6 15. **h2 è più grande di h1**, e h5 e h6 sono usati come paragrafi |
| Allineamento | Centrato, giustificato e a sinistra mescolati. **Testo giustificato** nel menu (79 blocchi) e nel catering (27): su mobile crea buchi tra le parole |
| Lunghezza delle righe | Fino a **149 caratteri per riga** (Allergeni, Menu catering); l'ideale è 45–75 |

**Diagnosi:** non c'è gerarchia. Titolo e testo si distinguono solo per qualche pixel, mai per peso o per carattere. Il font scelto dà un tono infantile, in contrasto con un'offerta gastronomica.

## 4. Componenti e coerenza

| Elemento | Varianti trovate | Problema |
|---|---|---|
| Pulsanti | Almeno **5 stili**: angoli a 2, 5 e 10 px; altezze di 32, 36, 42, 44 e 52 px; pieni, trasparenti, grigi | Nessun pulsante "primario" riconoscibile |
| Pulsante "aggiungi" (menu) | 79 per pagina, **32 px di altezza** | Sotto i 44 px minimi per il tocco; solo un'icona, senza testo |
| Raggi degli angoli | 1, 2, 5, 8, 10, 12 px, più cerchi | Sei valori senza logica |
| Spaziature verticali delle sezioni | 0, 10, 15, 20, 30 e **200 px** | Ritmo casuale; blocchi a 200 px che lasciano buchi |
| Larghezze delle immagini | 150, 190, 195, 540, 550 px | Immagini piccole e di formati diversi; nessuna a tutta larghezza |
| Header | Uguale su tutte le pagine ✅ | Unica vera costante del sito |

## 5. Layout e pagine

| Pagina | Osservazioni |
|---|---|
| **Home** | Altezza 1.400 px su desktop, 2.080 su mobile. Pochissimo contenuto: nella copia solo logo, orari e piè di pagina (i riquadri-immagine non sono inclusi, vedi limite). Nessun H1, nessun invito all'azione chiaro |
| **Order Online** | **11.674 px** di scorrimento su mobile (circa 14 schermate). Lista uniforme: 110 righe identiche, nome leggero a 300, prezzo, pulsante arancio piccolo. Nessuna foto, nessun ritmo, i tab delle 16 categorie sono l'unico orientamento |
| **Chi siamo** | Blocchi ripetuti per desktop, tablet e mobile; titoli come h5 e h6; foto 550×440 accostate a quadrati 550×550 |
| **Catering** | Testo giustificato e centrato, pulsanti con raggio diverso dal resto del sito (10 px) |
| **Menu catering** | Verde `#008000` estraneo al resto, barre di avanzamento e contatori decorativi senza funzione |
| **Contatti** | Pagina molto corta (930 px): titolo, indirizzo, orari, mappa. Nessun modulo |
| **Allergeni** | Testo a tutta larghezza: 149 caratteri per riga, difficile da leggere |

## 6. Cosa funziona

- **Header costante** su tutte le pagine, con logo e quattro voci chiare.
- **Atmosfera serale** del nero con l'arancio: coerente con l'apertura 19:00–23:30. Ne può restare l'idea, non l'esecuzione.
- **Pagina d'ordine completa:** tutti i prodotti in un'unica pagina, con tab per categoria. La struttura (categorie → piatti → aggiungi) è giusta: va ridisegnata, non reinventata.

## 7. Priorità grafiche per il redesign

| # | Intervento | Perché | Fase |
|---|---|---|---|
| 1 | **Un solo colore di marca** (corallo `#C23B2E`) con scuri e chiari derivati, tutti come variabili | Sostituisce 7 arancioni e 2 neri; contrasti garantiti | 2: design system |
| 2 | **Scala tipografica vera** (Bricolage Grotesque in varie larghezze e IBM Plex Mono), testo base 16–17 px, titoli in grassetto condensato | Crea gerarchia e cambia il tono da infantile a editoriale | 2 |
| 3 | **Un set di pulsanti** (primario, secondario, testuale), altezza minima 44 px, un solo raggio | Elimina 5 stili diversi e risolve il tocco su mobile | 2 |
| 4 | **Home con un messaggio e un'azione:** immagine o video forte, cosa offre UMAMI, "Ordina" come pulsante principale | Oggi nei primi 2 secondi non si capisce nulla | 3 |
| 5 | **Menu ridisegnato:** schede con foto (le 30 in arrivo), stato senza foto per le altre, categorie fisse in alto, aggiunta rapida con contatore | 14 schermate di righe identiche diventano un catalogo leggibile | 3 |
| 6 | **Testo allineato a sinistra**, righe di 45–75 caratteri, niente giustificato | Leggibilità, soprattutto su mobile | 2 |
| 7 | **Ritmo delle spaziature** su una scala fissa (4/8/16/24/32/48/64/96) | Elimina i salti da 0 a 200 px | 2 |
| 8 | **Un solo formato di immagine per ruolo** (1:1 per le schede, 16:9 e 4:5 per l'hero) | Oggi le immagini sono di 5 larghezze diverse | 2–3 |

**Riepilogo per area:**

| Area | Voto |
|---|---|
| Colore | 3/10 |
| Tipografia | 2/10 |
| Componenti | 3/10 |
| Layout | 3/10 |
| Coerenza | 4/10 |
| **Complessivo** | **3/10** |

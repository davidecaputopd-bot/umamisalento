# Audit del sito attuale: umamisalento.it

Data: 2 novembre 2026.

**Strumenti usati:**
- Lighthouse 12.6 su Chrome headless, profilo mobile (rete 4G simulata) e desktop;
- axe-core 4.10 con le regole WCAG 2.1 A e AA;
- controlli DOM su un viewport mobile di 390 px;
- analisi dei dati raccolti nella fase 0.

**Metodi seguiti:** SEO audit (tecnico e on-page), accessibilità WCAG 2.1 AA, valutazione euristica (Krug e Nielsen).

**Pagine misurate:** `/`, `/order-online/`, `/chi-siamo/`, `/servizio-catering/`, `/contatti/`.

> **Limiti.** I punteggi Lighthouse sono test di laboratorio, non dati di utenti reali: variano tra un'esecuzione e l'altra di ±5 punti.
> I controlli automatici trovano circa il 30% dei problemi di accessibilità. Mancano ancora il test con screen reader e la navigazione completa da tastiera.
> Mancano anche dati su posizionamento, volumi di ricerca e backlink: i connettori SEO (Ahrefs, Similarweb) non sono collegati in questa sessione.

---

## 1. Sintesi

**Giudizio complessivo: le fondamenta tecniche sono discrete, ma l'esperienza e i contenuti vanno rifatti.**

Il sito è **veloce su desktop** (punteggio prestazioni 93–95) e **lento su mobile** (61–75), cioè proprio dove si ordina cibo. Non ha problemi gravi di indicizzazione.

I problemi veri sono tre:
1. **La pagina d'ordine non è accessibile:** 79 pulsanti non hanno un nome leggibile dagli screen reader.
2. **Il server risponde lentamente:** 1,6–2,7 secondi solo per il primo byte.
3. **I contenuti sono quasi assenti per Google:** nessuna pagina ha un H1 (tranne una), mancano le meta description, i prodotti sono fuori dalla sitemap.

| Area | Valutazione |
|---|---|
| Prestazioni mobile | 🟠 Da migliorare (61–75) |
| Prestazioni desktop | 🟢 Buone (93–95) |
| Accessibilità | 🟠 77–93; la pagina d'ordine è la peggiore |
| SEO tecnico | 🟡 77–92: le basi ci sono, i contenuti no |
| Buone pratiche | 🟡 93 per tutte (errori in console, richiesta di notifiche all'apertura) |
| Usabilità (euristica) | 🔴 **4/10** |

## 2. Punteggi misurati

| Pagina | Dispositivo | Prestazioni | Accessibilità | Buone pratiche | SEO | LCP | TBT | CLS | Peso | Richieste |
|---|---|---|---|---|---|---|---|---|---|---|
| Home | mobile | 75 | 89 | 93 | 92 | 3,7 s | 190 ms | 0,112 | 755 KiB | 73 |
| Home | desktop | 95 | 92 | 93 | 85 | 0,9 s | 0 ms | 0,068 | 750 KiB | 72 |
| Order Online | mobile | 74 | **77** | 93 | **77** | 3,1 s | 290 ms | 0,112 | 587 KiB | 76 |
| Order Online | desktop | 93 | 81 | 93 | 77 | 0,8 s | 0 ms | 0,068 | 584 KiB | 84 |
| Chi siamo | mobile | **61** | 91 | 93 | 92 | **5,7 s** | 200 ms | 0,112 | 899 KiB | 88 |
| Servizio catering | mobile | 66 | 91 | 93 | 92 | 4,9 s | 210 ms | 0,112 | 1.019 KiB | 76 |
| Contatti | mobile | 72 | 93 | 93 | 85 | 3,7 s | 170 ms | 0,112 | 1.245 KiB | **133** |

**Soglie di riferimento:**
- LCP (tempo di comparsa del contenuto principale): buono sotto 2,5 s.
- CLS (spostamenti del layout durante il caricamento): buono sotto 0,1.
- TBT (tempo in cui la pagina non risponde ai comandi): buono sotto 200 ms.

Su mobile **nessuna pagina** rientra nella soglia dell'LCP, e tutte superano di poco quella del CLS (0,112).

## 3. Prestazioni

| # | Problema | Dove | Impatto | Correzione |
|---|---|---|---|---|
| P1 | **Server lento: 1,6 s (home) e 2,7 s (Order Online) solo per il primo byte** | Tutte | Alto | Cache di pagina (es. WP Rocket o LiteSpeed Cache se l'hosting lo supporta) e verifica dell'hosting. Attenzione: carrello e checkout vanno esclusi dalla cache |
| P2 | **Risorse che bloccano la visualizzazione:** circa 1,7 s di ritardo su mobile (15 file CSS e JS) | Tutte | Alto | Ridurre i plugin che caricano risorse su tutte le pagine, CSS critico, `defer` per gli script |
| P3 | JavaScript inutilizzato (~100 KiB) e non minificato (~83 KiB) | Tutte | Medio | Minificazione, caricamento condizionale di Instagram Feed, Feedzy e Jetpack |
| P4 | CSS inutilizzato (~40 KiB) | Tutte | Medio | Elementor "Improved CSS loading", pulizia del CSS di temi e plugin non più usati |
| P5 | Cache del browser assente o breve (~215 KiB da recuperare) | Tutte | Medio | Header `Cache-Control` lunghi per gli asset statici |
| P6 | Spostamenti del layout (CLS 0,112) e immagini senza dimensioni | Tutte, Order Online | Medio | `width`/`height` sulle immagini, spazio riservato per header e banner |
| P7 | 2.061 elementi DOM nella pagina d'ordine | Order Online | Medio | Menu caricato per categoria o paginato; meno elementi annidati da Elementor |
| P8 | Contatti: 133 richieste, 1,2 MB (mappa Google incorporata) | Contatti | Medio | Mappa caricata al clic, con un'immagine statica come anteprima |
| P9 | Font senza `font-display: swap` | Chi siamo, Contatti | Basso | Impostazione di Elementor, oppure font ospitati sul sito |

## 4. Accessibilità (WCAG 2.1 AA)

**Problemi trovati da axe: 6 tipi. Critici: 2 (pulsanti senza nome, immagine senza testo alternativo). Seri: 2 (contrasto, link senza nome). Altri da Lighthouse: 5.**

| # | Problema | Criterio WCAG | Gravità | Dove | Correzione |
|---|---|---|---|---|---|
| A1 | **79 pulsanti senza nome accessibile:** i pulsanti "aggiungi" del menu sono solo icone | 4.1.2 | 🔴 Critico | Order Online | `aria-label="Aggiungi Salmon Roll al carrello"` (override del template Food Store) |
| A2 | Immagine senza testo alternativo | 1.1.1 | 🔴 Critico | Order Online | Alt descrittivo; `alt=""` se è decorativa |
| A3 | **Contrasto insufficiente** (4–7 elementi per pagina) | 1.4.3 | 🟠 Serio | Tutte | Nuova palette, con contrasti verificati nella fase 1 |
| A4 | Link senza testo (icone social, logo) | 2.4.4 / 4.1.2 | 🟠 Serio | Home, Order Online | Etichette accessibili |
| A5 | **Aree cliccabili troppo piccole:** 21 in home, **194** nella pagina d'ordine | 2.5.5 | 🟠 Serio | Tutte | Minimo 44×44 px, più spazio tra i pulsanti |
| A6 | Nome visibile diverso dal nome accessibile | 2.5.3 | 🟡 Moderato | Home, Order Online | Allineare `aria-label` e testo visibile |
| A7 | Ordine dei titoli saltato; h5 e h6 usati come paragrafi | 1.3.1 | 🟡 Moderato | Order Online, Chi siamo, Catering | Gerarchia h1 → h2 → h3 |
| A8 | **Nessun H1** in 4 pagine su 5 | 1.3.1 / 2.4.6 | 🟡 Moderato | Tutte tranne Order Online | Un H1 per pagina |
| A9 | Informazioni essenziali (prezzi e costi di consegna) **solo dentro un'immagine** | 1.1.1 | 🟠 Serio | Home | Testo HTML |
| A10 | Testo sotto i 14 px: 47 elementi in home, **328** nella pagina d'ordine | 1.4.4 (indiretto) | 🟡 Moderato | Tutte | Testo base 16–17 px |
| A11 | Testi duplicati per desktop, tablet e mobile, nascosti via CSS | 1.3.2 | 🟡 Moderato | Chi siamo, Catering | Un solo blocco responsive |

Restano da fare: navigazione completa da tastiera del percorso menu → carrello → checkout, test con VoiceOver e NVDA, zoom al 200%.

## 5. SEO

### Controlli tecnici
| Controllo | Stato | Dettagli |
|---|---|---|
| HTTPS | ✅ Ok | |
| Viewport mobile | ✅ Ok | Nessuno scorrimento orizzontale a 390 px |
| `lang` | ✅ Ok | `it-IT` |
| Canonical | ✅ Ok | Presente su tutte le pagine (Yoast) |
| Meta robots | ✅ Ok | `index, follow` |
| robots.txt | ❌ Non valido | Blocchi `User-agent: *` duplicati: Lighthouse lo segnala come non valido |
| Sitemap XML | ⚠️ Incompleta | Contiene solo le pagine. **Prodotti e categorie esclusi** |
| Meta description | ❌ Assente | Home, Order Online, Contatti e la maggior parte delle pagine |
| H1 | ❌ Assente | 4 pagine su 5 |
| Titoli delle pagine | ⚠️ | Home ripetitiva; `/pagamento/` ha titolo "Carrello" |
| Open Graph image | ⚠️ | Manca in Home, Order Online e Contatti: le condivisioni su WhatsApp e social escono senza immagine |
| Dati strutturati | ⚠️ | Solo `Organization`. Manca `Restaurant` / `LocalBusiness` con orari, indirizzo, menu, `servesCuisine` |
| Link non scansionabili | ⚠️ | Link `javascript:void(0)` nei tab del menu |
| Contenuti duplicati | ⚠️ | `/menu/` = `/negozio/`; `/servizio-catering/` = `/sushi-catering/` |
| Contenuti scaduti indicizzati | ⚠️ | `capodanno-2022`, `catering-feste-2023` |
| Link interni | ⚠️ | La navigazione usa `?p=39`, `?p=866`, `?p=42` invece degli URL leggibili |

### Opportunità di parole chiave (stime qualitative, senza dati di volume)
| Parola chiave | Difficoltà | Opportunità | Intento | Contenuto consigliato |
|---|---|---|---|---|
| sushi Leverano | Bassa | **Alta** | Transazionale | Home + pagina Sushi take away |
| sushi take away Leverano / Lecce | Bassa–media | **Alta** | Transazionale | Pagina Sushi take away |
| sushi a domicilio Leverano | Bassa | **Alta** | Transazionale | Pagina Ordina con zone di consegna in testo |
| poke Leverano / poke Lecce | Bassa | Alta | Transazionale | Categoria Poke (i nomi dei luoghi aiutano) |
| ramen Lecce / ramen Salento | Media | Alta | Transazionale e informativo | **Pagina Ramen (da creare)** |
| catering sushi Lecce | Media | Alta | Commerciale | Pagina Catering con richiesta di preventivo |
| catering giapponese Salento / matrimonio | Media | Media | Commerciale | Catering, sezione eventi |
| chef a domicilio Salento / Lecce | Media | Media | Commerciale | **Pagina Chef a domicilio (da creare)** |
| street food giapponese Salento / food truck | Bassa | Media | Navigazionale ed eventi | **Pagina Street food (da creare)** con calendario |
| bao buns Lecce, gyoza Lecce | Bassa | Media | Transazionale | Categorie del menu indicizzabili |
| sushi senza crudo / sushi vegetariano Lecce | Bassa | Media | Transazionale | Categorie "Non crudi" e "Vegetariani" |
| sushi Copertino, Nardò, Veglie, Porto Cesareo | Bassa | Media | Transazionale | Sezione zone di consegna (solo se servite: **da verificare**) |
| allergeni sushi | Bassa | Bassa | Informativo | Pagina Allergeni in testo, collegata alle schede |

## 6. Usabilità: valutazione euristica, **4/10**

| # | Euristica | Problema | Gravità (0–4) |
|---|---|---|---|
| U1 | Corrispondenza con il mondo reale | La consegna diventa selezionabile solo **dopo** aver scritto città e CAP. Il cliente non sa se e quanto paga finché non è al checkout | **4** |
| U2 | Prevenzione degli errori | Il checkout chiede campi da e-commerce (ragione sociale, paese, provincia, indirizzo 2, spedizione separata dalla fatturazione) | 3 |
| U3 | Visibilità dello stato | Non si sceglie l'orario di ritiro o consegna, non si vedono i tempi di preparazione né l'ordine minimo | 3 |
| U4 | Coerenza | Tre pagine menu (`/negozio/`, `/menu/`, `/order-online/`); voci in inglese e in italiano mescolate ("Order Online", "Delivery") | 3 |
| U5 | Riconoscere invece di ricordare | **108 prodotti su 110 senza foto**; allergeni come numeri da decodificare in un'altra pagina | 3 |
| U6 | Trunk test | Home senza H1 e senza testo: chi arriva non capisce subito cosa offre UMAMI e cosa può fare | 3 |
| U7 | Rispetto dell'utente | **Richiesta di notifiche all'apertura** della pagina (rilevata da Lighthouse) | 2 |
| U8 | Design minimalista | Upsell bevande ripetuto due volte (carrello e checkout), testi duplicati nelle pagine | 2 |
| U9 | Aiuto e contatti | Nessun modulo per le richieste di catering, solo telefono e WhatsApp; numero sbagliato nel link di Chi siamo | 2 |
| U10 | Pagamento | Si paga solo alla consegna o al ritiro (scelta commerciale da valutare, non un errore) | 1 |

**Per arrivare a 10/10:**
1. Scelta ritiro o consegna, con verifica del CAP e fascia oraria, **come primo passo**.
2. Checkout ridotto a nome, telefono, indirizzo (solo se consegna) e note.
3. Una sola pagina menu, con foto e allergeni come icone o filtri.
4. Home che risponde in 5 secondi a: chi siete, cosa posso ordinare, quando siete aperti, come ordino.
5. Nessuna richiesta di permessi all'apertura.

## 7. Piano d'azione

### Interventi rapidi sul sito attuale
Valgono **anche prima del redesign**, ma richiedono l'accesso a WordPress. Da fare in staging.

| Azione | Impatto | Tempo |
|---|---|---|
| Correggere il link del telefono in Chi siamo (`+39 392…` → `+39 347 616 8387`) | Alto | 5 min |
| Disattivare la richiesta di notifiche all'apertura | Medio | 15 min |
| Meta description e titoli corretti per le 8 pagine principali | Medio | 1 h |
| Includere prodotti e categorie nella sitemap di Yoast | Medio | 10 min |
| Pulire robots.txt | Basso | 10 min |
| Mettere `noindex` o reindirizzare le pagine scadute e i doppioni | Medio | 30 min |
| Immagine Open Graph predefinita | Medio | 15 min |
| `aria-label` sui pulsanti "aggiungi" (override del template Food Store) | Alto | 1–2 h |
| Cache di pagina, esclusi carrello e checkout | Alto | 1–2 h, da testare |

### Interventi strategici (redesign)
| Azione | Impatto | Dipendenze |
|---|---|---|
| Nuovo percorso d'ordine: ritiro/consegna come primo passo, checkout ridotto | **Alto** | Food Store, Flexible Shipping, Checkout Field Editor (fase 3) |
| Servizio fotografico dei 110 prodotti, stesso stile | **Alto** | Direzione artistica (fase 1) |
| Pagine Ramen, Chef a domicilio, Street food | Alto (SEO e business) | Contenuti dal cliente |
| Dati strutturati `Restaurant` con orari, menu e area servita | Medio | Fase 5 |
| Tema leggero (CSS a token, meno widget Elementor, plugin ridotti) | Alto (prestazioni) | Fasi 2–6 |
| Modulo di richiesta preventivo per catering ed eventi | Alto (lead) | Fase 4 |
| Valutare il pagamento online | Da decidere | Decisione commerciale |

## 8. Cosa entra nel redesign

Gli obiettivi misurabili per il nuovo sito sono:

| Area | Obiettivo |
|---|---|
| Prestazioni mobile | ≥ 90 |
| Accessibilità | ≥ 95 |
| SEO | 100 |
| LCP mobile | < 2,5 s |
| CLS | < 0,1 |
| Aree cliccabili | Tutte ≥ 44 px |
| Struttura | Un H1 per pagina |
| Testi essenziali | Nessuno dentro un'immagine |

Li verificheremo con lo stesso script a ogni fase.

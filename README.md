# UMAMI SALENTO — Redesign digitale

Riprogettazione completa dell'esperienza digitale di [umamisalento.it](https://umamisalento.it).

**Principio guida:** riprogettare completamente l'esperienza, preservare integralmente il motore commerciale (WordPress · Astra · Elementor · WooCommerce · Food Store).

Questo repository contiene un frontend dimostrativo e la documentazione di progetto. **Non** è un secondo e-commerce: non gestisce ordini, pagamenti o prodotti reali. Il design verrà poi trasferito nel tema figlio `umami` del sito WordPress originale, passando da un ambiente di staging.

## Struttura

```
docs/
  fase-0-analisi/ANALISI.md   Analisi del sito attuale, architettura, direzione, piano
data/
  catalogo-umamisalento.tsv   Catalogo pubblico rilevato il 2/11/2026 (110 prodotti), base per i dati demo
```

## Metodo di lavoro

- Si procede per fasi. Ogni fase ha un ramo dedicato (`fase-N-…`) e una pull request da approvare.
- `main` contiene solo lavoro approvato.
- Nessun intervento sul sito in produzione e nessun accesso riservato.

## Stato

| Fase | Contenuto | Stato |
|---|---|---|
| 0 | Analisi del sito attuale | ✅ Completata |
| 1 | Direzione artistica "Rosso Umami" | ✅ Decisa (aggiornata in v0.4–v0.5: Warbler Display + Neue Haas Grotesk + Input Mono) |
| 2 | Design system | v0.5 (colore, materia, luce, UX) in revisione (ramo `fase-2-design-system`) |
| 3 | Home + Ordina (menu, carrello, checkout) | Prototipo in revisione (ramo `fase-3-home-ordina`): `prototipo/index.html`, `prototipo/ordina/`, `prototipo/checkout/` |
| 4 | Pagine servizio, Chi siamo, Contatti | — |
| 5 | QA: accessibilità, prestazioni, SEO, mobile | — |
| 6 | Pacchetto di integrazione WordPress | — |

## Fase 3 · prototipo Home e ordine

- `data/catalogo.js`: 109 prodotti reali in 17 categorie (nomi, prezzi, descrizioni, allergeni come sul sito; solo dimostrativo, in integrazione i dati arrivano da WooCommerce).
- `assets/js/umami.js`: carrello **dimostrativo** nel browser (localStorage), cassetto, toast, stato aperto/chiuso, fasce orarie di esempio.
- `assets/css/pagine.css`: layout di Home, Menu e Cassa.
- La cassa non invia dati: nessun ordine, nessun pagamento, nessun URL di carrello o checkout inventato.

### Anomalie del catalogo da sistemare in WooCommerce (non corrette nel prototipo)
- "GUINNES DRAUGHT STOUTH" senza categoria: doppione di "Guinness Draught Stouth" in Birre (escluso dal menu del prototipo).
- I 14 vini hanno categoria vuota nell'API, anche se esistono Vini bianchi, Vini rosati e Bollicine: raggruppati in "Vini e bollicine".
- "Veg Bao Buns": la descrizione termina con "1,6" (probabilmente gli allergeni scritti nel testo) e gli allergeni sono vuoti.
- Refusi nelle descrizioni (es. "teryiaki", "pomodo secco", "disponili", "Con dentro: :").

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
| 1 | Direzione artistica + brief dei contenuti mancanti | In attesa di approvazione |
| 2 | Design system | — |
| 3 | Home + Ordina (menu, carrello, checkout) | — |
| 4 | Pagine servizio, Chi siamo, Contatti | — |
| 5 | QA: accessibilità, prestazioni, SEO, mobile | — |
| 6 | Pacchetto di integrazione WordPress | — |

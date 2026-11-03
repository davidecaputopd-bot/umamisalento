# Resoconto · lavoro notturno v0.7

## Fatto
1. **Colore rame** su tutto il sito (sostituisce il rosso): `#B0603A`, con varianti scura e chiara per i contrasti AA.
2. **Testata condivisa** su Home, Menu e Cassa (generata da `strumenti/testata.py`):
   - voci a sinistra con scorrimento al passaggio, marchio al centro, carrello a destra (Sakazuki);
   - menu a tendina con Sushi., Cucina., Da bere. e piatti firmati (Watchhouse);
   - su mobile lo stesso menu diventa un elenco a gruppi a tutto schermo;
   - in Cassa la testata si riduce (torna al menu, marchio, stato), per non uscire a metà ordine.
3. **Home** completa in stile v0.7: apertura, colonna centrata, prodotti a filo, passi, servizi su nero, dove e quando, footer.
4. **Menu**: titolo gigante centrato, ricerca a riga, categorie in maiuscolo tracciato (non più pillole), nomi dei piatti in maiuscolo largo.
5. **Cassa e carrello**: angoli vivi, riepilogo a filo nero, stessi titoli.
6. **Bug corretto** (c'era dalla fase 3): in Cassa i campi indirizzo comparivano anche con "Ritiro", e con carrello vuoto si vedevano sia il messaggio sia il modulo. Causa: `display:grid` vinceva sull'attributo `hidden`. Corretto per tutto il sito.

## Verifiche
- Percorso completo (aggiungi, quantità, cassetto, ricerca, categorie, errori in cassa, conferma) su desktop e mobile: tutto funziona.
- Accessibilità (axe, WCAG 2.1 AA): 0 problemi su Home, Menu, cassetto e Cassa.
- Nessuno sbordo laterale su mobile.

## Schermate
In `docs/fase-3/schermate/`. Fatte su questa macchina, dove le foto provvisorie non sono disponibili: al posto delle foto vedi riquadri crema. Nello spazio di lavoro online le foto ci sono.

## Da decidere con te
- Il font: Archivo è gratuito; Hagrid (Sakazuki) ha licenza a pagamento.
- La pagina `prototipo/design-system/` è ancora alla v0.5: la aggiorno quando confermi la direzione.
- Il sito vero non è stato toccato.

## Aggiornamento v0.8 (colori)
- Accento: **arancione Umami meno saturo** `#BF6D40` (dal `#DD6727` del sito), con varianti scura e chiara per i contrasti.
- Sezioni scure (apertura, servizi, footer): **rame marrone sfumato**, da `#3A1E12` a `#160D08` con luce calda.
- Crema confermata `#F5E4C7`.
- Verifiche ripetute: percorso d'ordine completo ok, 0 problemi di accessibilità, nessuno sbordo su mobile. Schermate aggiornate.

## Aggiornamento v0.9 (richieste di Davide)
- **Arancione più saturo**: `#CB622A`, vicino all'arancione del sito `#DD6727`; scuro `#974A21` per testo piccolo, chiaro `#D97945` sui fondi scuri. La luce nella sfumatura rame è più arancione.
- **Proporzioni delle schede**: piatti con foto 4:3 (meno alte), descrizione su 2 righe, allergeni e pulsante allineati in fondo a tutte le schede. Servizi su 3 colonne larghe con foto 3:2 invece di 5 strette.
- **Menu mobile**: pannello a tutto schermo che blocca lo scorrimento della pagina, categorie come pulsanti da 44 px, in fondo carrello e chiamata. La barra in basso si nasconde mentre il menu è aperto.
- **Barra in basso su mobile**: voci in maiuscolo come la testata, carrello in arancione.
- Verifiche: percorso d'ordine ok, 0 problemi di accessibilità, nessuno sbordo.

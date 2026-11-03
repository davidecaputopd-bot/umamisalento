# Studio dal vivo dei siti premiati (dopo l'apertura della rete)

Fino a qui avevo lavorato su dati estratti (font, colori, coordinate) senza vedere i siti. Visti dal vivo:

## Sakazuki (Sito del giorno)
- **Un solo palcoscenico**: foto a tutto schermo FERMA, il testo scorre sopra in capitoli; a ogni capitolo la foto cambia in dissolvenza (bicchiere di sakè → mastro che versa → frutto).
- **Cornice fissa**: menu in alto, social e orologio in basso, sempre visibili.
- **Il calore arancio viene dalla luce delle foto**, non da fondi colorati. Nessuna scheda, nessun box.
- Testo bianco centrato: piccolo / gigante / piccolo.

## Watchhouse (Menzione d'onore)
- **Due pannelli fotografici affiancati** con margini di 20 px, titolo col punto sopra la foto ("Shop coffee."), riga sottile con "Discover →", numeri 01 02 03.
- **Etichetta piccola a sinistra, frase grande a destra** ("Modern Coffee." / "Our pursuit of excellence…").
- Tessere piccole con l'etichetta dentro la foto e una freccia.

## Bucks Sauce
Blocca anche i browser automatici (controllo di sicurezza di Vercel): non studiabile da qui.

## Cosa cambia nella Home (v2)
- Palcoscenico in 3 capitoli con le nostre foto e velatura di luce arancio (al posto delle fasce colorate).
- Sotto, la parte per ordinare in stile Watchhouse: due pannelli (Ordina il menu. / Catering.), enunciato, piatti firmati, tessere (Ramen, Chef a domicilio, Street food), dove e quando.
- Tolte le parti inventate: i 3 passi, la fascia arancione piena, la fascia servizi.

## Menu e Cassa (v2)
Stessa logica di Watchhouse applicata alle pagine interne (`assets/css/interne.css`):
- titoli in minuscolo normale col punto, peso 600, niente maiuscoli giganti;
- Menu: etichetta "Il menu." a sinistra e frase grande a destra; categorie col punto; ogni categoria con il nome fisso a sinistra mentre i piatti scorrono a destra;
- Cassa: blocchi con riga sottile sopra e titolo col punto, riepilogo senza riquadro, fascia oraria scelta e pulsante di conferma in arancione con testo nero.

## Revisione v2.1 (dopo la valutazione complessiva)
- **Una sola lingua tipografica**: maiuscolo largo solo per il marchio e il palcoscenico; barra in alto, menu a tendina, etichette, barra mobile e footer in minuscolo normale.
- **Home più corta**: il palcoscenico passa da 3 a 2 capitoli; il pulsante "Ordina per stasera" è nel secondo.
- **Fasce orarie**: prima l'ora (Ore 19… Ore 23), poi i 4 quarti d'ora di quell'ora: 9 pulsanti invece di 18.
- **Allergeni per esteso** ("Allergeni uova, pesce, soia…") al posto dei codici a tre lettere.
- **Un solo carrello su mobile**: resta quello nella barra in basso; nella testata è nascosto.

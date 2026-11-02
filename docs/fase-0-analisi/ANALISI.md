# UMAMI SALENTO — Fase 0: analisi del sito attuale

Data rilevazione: 2 novembre 2026 · Fonte: copia pubblica di https://umamisalento.it (sola lettura)

## Come è stata fatta la copia

- Questo ambiente cloud non può raggiungere umamisalento.it. La copia è stata fatta da una **sandbox Vercel temporanea** (progetto `grow`, nome `umami-site-audit`, non persistente). La sandbox poteva collegarsi soltanto a `umamisalento.it`.
- **Pagine:** download completo di 15 pagine HTML con CSS, JS e immagini delle pagine (17 MB, 232 file).
- **Dati:** API pubbliche WooCommerce Store e WordPress REST, cioè 110 prodotti, 20 categorie e 13 pagine.
- **Carrello e checkout:** test del percorso con 1 articolo in un carrello di sessione, poi svuotato. **Nessun ordine inviato.**
- **Cosa non è stato trasferito qui:** l'archivio binario (immagini). Il trasferimento passa da un canale testuale di circa 4 KB per lettura. Sono stati trasferiti i dati strutturati e le misurazioni. La copia completa si rigenera in circa 3 minuti.
- **Cosa non è stato verificato:** l'aspetto visivo reso a schermo. Non ci sono screenshot, quindi i giudizi su colori e font si basano su CSS e risorse grafiche, non su catture desktop e mobile.

File allegati:
- `../../data/catalogo-umamisalento.tsv`: catalogo completo (110 prodotti, prezzi, categoria, presenza di foto e lunghezza della descrizione).

---

## 1. Analisi del sito attuale

### Stack tecnico (verificato)
| Elemento | Valore rilevato |
|---|---|
| CMS | WordPress 7.1, installato nella sottocartella `/nuovo/` (sito servito dalla radice) |
| Tema | Astra 4.12.3 + tema figlio **`umami`** v1.0.0. Restano riferimenti a un vecchio tema `html5blanknew` |
| Page builder | Elementor 3.35.3. Sono presenti widget `woocommerce-cart` e `woocommerce-checkout-page`, che sono widget Elementor **Pro** o di un addon (da verificare) |
| E-commerce | WooCommerce 11.1.2 |
| Ordinazione | Plugin **Food Store** (`food-store`, prefisso `wfs-`): menu a categorie con aggiunta al carrello |
| Spedizione | **Flexible Shipping**: costi di consegna per zona o CAP |
| Checkout | **Checkout Field Editor for WooCommerce**; checkout **classico (shortcode)**, non a blocchi |
| Pagamento | Un solo metodo attivo: **`cod`** (pagamento alla consegna o al ritiro) |
| SEO | Yoast SEO |
| Altri plugin | Jetpack (+ Boost), Top Bar, Add WhatsApp Button, Instagram Feed, Feedzy RSS, "essentials-premium". Smart Slider 3 risulta **disattivato**: il suo shortcode è visibile come testo |
| Crediti | "A website by Faccio Siti" |

### Dati aziendali pubblicati
- **Nome:** "Umami – Sapori & Gusto". **Slogan:** "Gastronomia di mare e Italian Sushi".
- **Indirizzo:** Via della Consolazione 55, 73045 Leverano (LE). **Telefono e WhatsApp:** 347 616 8387.
- **Orari:** tutti i giorni 19:00–23:30, mercoledì chiuso.
- **Zona del catering:** Lecce, Taranto e Brindisi.

## 2. Mappa delle pagine

Ci sono 13 pagine nella sitemap. Prodotti e categorie **non sono nella sitemap**.

| URL | Titolo | Stato e contenuto |
|---|---|---|
| `/` | Umami Sapori & Gusto | Pagina Elementor quasi vuota nel testo: riquadri-immagine (Menu, Chi siamo, Catering) e un'immagine con prezzi e info di consegna |
| `/order-online/` | Order Online | **Pagina d'ordine reale** (Food Store): 16 categorie in tab, prodotti, aggiunta al carrello |
| `/negozio/` | Menu | Pagina negozio di WooCommerce, usata come "MENU" nella navigazione |
| `/menu/` | Menu | Doppione di `/negozio/` ("Crea il tuo ordine…") |
| `/chi-siamo/` | Gastronomia di mare e Italian Sushi | Storia, qualità delle materie prime, mappa. Ha l'aspetto di una vecchia homepage |
| `/servizio-catering/` | Servizio Catering | Testo sul sushi catering |
| `/sushi-catering/` | Servizio Catering | **Doppione** di `/servizio-catering/` |
| `/catering/` | Umami – CATERING | "MENU CATERING" con accordion, contatori e barre di avanzamento; quasi senza testo |
| `/contatti/` | Contatti | Indirizzo, telefono, orari, mappa. **Nessun modulo di contatto** |
| `/allergeni/` | Allergeni | Elenco dei 14 allergeni (Reg. UE 1169/2011) e nota sull'abbattimento del pesce crudo |
| `/carrello/` | Carrello | Carrello classico con suggerimenti di altri prodotti |
| `/pagamento/` | (titolo "Carrello") | Checkout classico. **Titolo SEO sbagliato** |
| `/mio-account/` | Il mio account | Accesso e registrazione |
| `/catering-feste-2023/` | Menu Feste 2023 | **Contenuto scaduto, ancora indicizzato** |
| `/capodanno-2022/` | Capodanno 2022 | **Contenuto scaduto, ancora indicizzato** |

**Navigazione principale:** MENU (→ `/negozio/`) · DELIVERY (→ `?p=39#delivery`, un link con ID invece dell'URL) · CATERING (→ `?p=866`) · CONTATTI (→ `?p=42`).
**Footer:** Menu · Carrello · Accedi/Registrati · Allergeni · Contatti · indirizzo · telefono · WhatsApp.

## 3. Identità visiva

- **Logo:** due file del 2021: un logotipo orizzontale arancio (190×48, su fondo scuro) e un marchio nero. Sono in formato **JPG**, non vettoriale.
- **Palette effettiva:** colore primario `#C1581E` (arancio ruggine), fondo `#000000`, testo `#FFFFFF`.
- **Residui di default:** sono rimasti i colori predefiniti di Astra (blu `#0170B9`) e di Elementor (`#6EC1E4`, `#61CE70` verde, `#54595F`). Nessuno di questi fa parte del brand: indicano che il **sistema dei colori globali non è mai stato impostato**.
- **Tipografia:** ABeeZee per i titoli, più Roboto e Roboto Slab, cioè i font predefiniti di Elementor. Non c'è una gerarchia progettata.
- **Fotografia:** i prodotti **non hanno foto**: 108 su 110 sono senza immagine. Le pagine usano poche foto, tutte **senza testo alternativo**.
- **Conclusione:** non esiste un sistema visivo. C'è un colore e un logo; il resto sono valori di default.

## 4. Contenuti

**Cosa c'è, ed è valido:**
- Racconto delle origini: "due cuochi salentini, appassionati e ricercatori di prodotti del territorio, che contaminano con sapori da tutto il mondo".
- Attenzione alle materie prime.
- Catering per eventi privati e aziendali, con vassoi oppure servizio "on site" con open bar.
- Pagina allergeni completa.
- Nomi dei piatti legati al territorio (Salento Roll, Leverano Roll; poke Porto Selvaggio, Santa Caterina, San Foca, Porto Badisco, Sant'Andrea, La Strea). È un patrimonio di identità da valorizzare.

**Cosa manca rispetto al brief.** Sul sito pubblico non trovo traccia di:
- **Ramen artigianale:** nessun prodotto ramen. Ci sono solo udon, katsu curry, riso saltato e spaghetti di soia.
- **Chef a domicilio**
- **Street food / food truck**
- **Fiere ed eventi** con cucina cinese e giapponese

Questi contenuti, con foto, testi e informazioni commerciali, dovranno essere **forniti dal cliente**. Non li invento.

**Problemi nei contenuti:**
- Testi duplicati: i blocchi sono ripetuti 2–3 volte, probabilmente in versioni separate desktop, tablet e mobile nascoste via CSS.
- Shortcode `[smartslider3 slider="2"]` visibile come testo in `/chi-siamo/`.
- I costi di consegna sono pubblicati **solo dentro un'immagine JPG**: non sono leggibili da Google né dagli screen reader.
- Pagine stagionali scadute ancora online.
- Lingua mista ("Order Online", "Delivery") senza criterio.

## 5. Esperienza di ordinazione (testata fino al checkout, senza inviare)

1. **Ingresso:** "MENU" porta a `/negozio/`. Esistono però tre pagine che fanno lo stesso lavoro: `/negozio/`, `/menu/` e `/order-online/`.
2. **Menu (Food Store):** 16 tab di categoria e una lista di prodotti con nome, descrizione, allergeni (codici numerici) e prezzo. **Senza foto.** Le note sul piatto si possono aggiungere.
3. **Catalogo:** 110 prodotti, tutti *semplici* (nessuna variante). Il "Poke personalizzato" funziona tramite le note. 4 bevande sono in offerta.
4. **Carrello** (`/carrello/`): tabella classica di WooCommerce, codice promozionale e "Potresti essere interessato a…" (bevande).
5. **Checkout** (`/pagamento/`):
   - Il campo "Consegna a domicilio?" compare **solo dopo aver inserito città e CAP**.
   - È il **modulo completo** di WooCommerce: fatturazione e spedizione separate, ragione sociale, paese, provincia, indirizzo 2, creazione account, note all'ordine. È pensato per un e-commerce, non per un ordine di cibo.
   - Ripropone "Hai dimenticato qualcosa?" (bevande).
   - **Unico pagamento: alla consegna o al ritiro.**
6. **Cosa non risulta visibile:**
   - Scelta esplicita "ritiro / consegna" come primo passo.
   - Scelta di **data e fascia oraria**.
   - Ordine minimo e tempi di preparazione.
   - Pagamento online.

## 6. Criticità e opportunità

**Criticità (in ordine di impatto):**
1. **Catalogo senza foto**, in un settore dove si ordina con gli occhi.
2. **Checkout sovradimensionato:** troppi campi, e il CAP va inserito prima di poter scegliere la consegna.
3. **Percorso d'ordine frammentato:** tre pagine menu, voci di navigazione con link `?p=`, "DELIVERY" che rimanda a un'ancora.
4. **Brand incompleto:** colori di default, font predefiniti, logo in JPG.
5. **Servizi del brief assenti:** ramen, chef a domicilio, street food.
6. **SEO:**
   - Meta description assente in quasi tutte le pagine.
   - Titolo della homepage ripetuto ("Umami Sapori & Gusto • Umami – Sapori & Gusto").
   - Titolo del checkout = "Carrello".
   - Prodotti e categorie fuori dalla sitemap.
   - Pagine doppie e scadute indicizzate.
   - Dati strutturati di tipo `Organization`, non `Restaurant` / `LocalBusiness` (mancano orari e indirizzo strutturati).
7. **Accessibilità:** nessuna immagine ha testo alternativo; informazioni essenziali dentro immagini; titoli usati per lo stile (h5 e h6 come paragrafi).
8. **Incoerenza nel numero di telefono:** in `/chi-siamo/` il testo mostra 347 616 8387, ma il link chiama **+39 392 793 0437**.
9. **Debito tecnico:** WordPress in `/nuovo/`, tema obsoleto ancora referenziato, plugin disattivati con shortcode in pagina, contenuto duplicato per i diversi dispositivi.

**Opportunità:**
- **Toponomastica salentina nei nomi dei piatti:** un elemento di identità autentico, non stereotipato, su cui costruire la direzione artistica.
- **Motore commerciale semplice e solido:** prodotti semplici, Food Store, Flexible Shipping, checkout classico. Il restyling si può fare quasi tutto via CSS e override dei template nel tema figlio `umami` già esistente.
- **Catalogo strutturato:** categorie chiare e allergeni già codificati; si possono mostrare come icone o filtri.
- **Catering già documentato:** si può trasformare in un percorso di richiesta preventivo vero e proprio.

---

## 7. Nuova architettura (aggiornata ai dati reali)

Ci sono due percorsi: **Ordina** (transazionale) ed **Esperienze** (richiesta di contatto). Gli URL commerciali esistenti si **conservano**; gli altri si reindirizzano con 301.

| Nuova pagina | URL | Origine |
|---|---|---|
| Home | `/` | Riprogettata |
| Ordina (menu e shop) | **`/order-online/`** (resta il motore Food Store) | `/negozio/` e `/menu/` → 301 o accorpati (da decidere: la pagina negozio di Woo non va cancellata) |
| Sushi Take Away | `/sushi-take-away/` | Nuova; contenuti da `/chi-siamo/` |
| Ramen | `/ramen/` | **Nuova; contenuti dal cliente** |
| Catering | `/catering/` | Accorpa `/servizio-catering/` e `/sushi-catering/` (301) |
| Chef a domicilio | `/chef-a-domicilio/` | **Nuova; contenuti dal cliente** |
| Street Food | `/street-food/` | **Nuova; contenuti dal cliente** |
| Chi siamo | `/chi-siamo/` | Riscritta |
| Contatti | `/contatti/` | Più un modulo di richiesta |
| Allergeni | `/allergeni/` | Conservata, resa leggibile |
| Carrello / Checkout / Account | `/carrello/`, `/pagamento/`, `/mio-account/` | **URL invariati**, solo restyling |
| Feste 2023, Capodanno 2022 | — | Da archiviare (decisione del cliente) |

**Checkout proposto (solo frontend, da validare in staging):**
1. Scelta ritiro o consegna, con verifica del CAP.
2. Dati essenziali: nome, telefono, indirizzo solo se consegna.
3. Note.
4. Pagamento.

La riduzione dei campi si fa con il Checkout Field Editor già installato, **senza modificare la logica**.

## 8. Direzione artistica (aggiornata)

Il materiale più forte che esiste oggi non sono le foto, ma i **luoghi**: Porto Selvaggio, Santa Caterina, San Foca, Porto Badisco, Leverano. Consiglio la direzione **"Brodo e pietra"**:
- Calore salentino (pietra leccese, terracotta, il `#C1581E` già nel logo, da ricalibrare).
- Rigore editoriale giapponese della griglia.
- Il **menu come una mappa della costa**.

Sono escluse le variazioni stereotipate (ventagli, onde, pennellate). Il punto bloccante resta la **fotografia**: senza un servizio fotografico di piatti, laboratorio e truck, nessuna direzione artistica regge. Va pianificato subito.

## 9. Design system

Struttura invariata rispetto alla proposta precedente (token CSS, componenti, mappatura sulle classi WooCommerce). In più, ora che conosciamo lo stack reale:
- **Token esportati anche verso Elementor:** colori e font globali, per sostituire i default rimasti.
- **Componenti mappati su:**
  - markup Food Store (`wfs-*`)
  - carrello classico (`.woocommerce-cart-form`, `.cart_totals`)
  - checkout classico (`form.checkout`, `#customer_details`, `#order_review`, `#payment`)
  - account (`.woocommerce-MyAccount-*`)
- **Componente "allergeni":** i codici numerici diventano icone con descrizione al passaggio del mouse e un filtro.

## 10. Stack tecnologico (confermato)

Checkout **classico**, tema figlio **già esistente**, prodotti semplici: il trasferimento è più semplice del previsto.

**Raccomandazione:** prototipo in **HTML e CSS puro con token**, generato con un sistema di template statico (Eleventy), con markup **copiato dalla struttura reale** di Food Store e WooCommerce classico. In integrazione, il CSS va nel tema figlio `umami` così com'è. React e Next.js restano sconsigliati.

## 11. Strategia di integrazione futura (punti specifici emersi)

- Verificare se Elementor è **Pro** (widget carrello e checkout).
- Verificare la versione e gli override di **Food Store**, e se l'aspetto del menu dipende da template del plugin (sovrascrivibili nel tema figlio).
- Verificare le zone di **Flexible Shipping** e le regole sul CAP.
- Leggere la configurazione del **Checkout Field Editor** prima di toccare i campi.
- Correggere il link telefonico errato.
- Valutare se attivare un **pagamento online** (decisione commerciale, non tecnica).
- Pulizia (in staging): tema `html5blanknew`, Smart Slider disattivato, pagine scadute, sitemap dei prodotti in Yoast.

## 12. Piano per fasi

0. ✅ Analisi del sito.
1. **Brief dei contenuti mancanti al cliente** (ramen, chef, street food, foto) **e piano fotografico**, in parallelo alla **direzione artistica** (moodboard e due schermate chiave: Home e Ordina).
2. Design system (token e componenti mappati su WooCommerce e Food Store).
3. Home e Ordina (menu, carrello, checkout) con il **catalogo reale come dati demo**.
4. Pagine servizio, Chi siamo, Contatti.
5. Controlli finali: accessibilità, prestazioni, SEO, mobile.
6. Pacchetto di integrazione per il tema figlio `umami`, con checklist di staging.

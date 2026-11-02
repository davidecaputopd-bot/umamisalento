# Contenuti in arrivo: foto e video

Stato al 2 novembre 2026: **materiale non ancora ricevuto**.

| Materiale | Quantità | Contenuto | Fonte |
|---|---|---|---|
| Foto | ~50 | ~30 piatti pronti, ~20 scene di preparazione | Shooting con fotografa |
| Video | 1 | 30–40 s, pensato per social e schermo LED in negozio | Girato da Davide |

## 1. Dove andranno le foto

### 30 piatti pronti
I prodotti sono 110 e le foto saranno circa 30: non tutti i prodotti avranno la loro foto. Le uso così:

| Uso | Foto | Note |
|---|---|---|
| Hero della home | 1–2 | La più iconica, con spazio vuoto per il titolo |
| Copertine delle categorie del menu | fino a 16 | Una per categoria: ogni tab del menu ha un'immagine anche se non tutti i piatti ce l'hanno |
| Schede dei piatti "firma" | il resto | Leverano Roll, Umami Roll, i poke con nomi di luoghi, Salento Roll… (**da confermare quali sono stati fotografati**) |
| Pagine Sushi take away e Ramen | 2–4 | Se il ramen è stato fotografato |

Gli altri ~80 prodotti usano lo **stato "senza foto"** già progettato nella moodboard: fondo pieno, iniziale grande e nome del luogo. Così la griglia del menu resta ordinata e non sembra incompleta.

### 20 scene di preparazione
| Uso | Note |
|---|---|
| Chi siamo | Mani, laboratorio, i cuochi: il racconto "due cuochi salentini" |
| Ramen | Brodo, impasto, taglio: la produzione artigianale |
| Catering e Chef a domicilio | Preparazione e allestimento |
| Sezioni intermedie della home | Pause visive tra un blocco e l'altro |

**Mancano ancora:** foto di street food, food truck ed eventi. Arriveranno con la mascotte.

## 2. Dove andrà il video

Su un sito un video da 30–40 s si usa in due modi diversi:

1. **Loop nell'hero della home:** 8–15 s estratti dal video, senza audio, in loop, con avvio automatico.
   - Pulsante pausa sempre visibile (WCAG 2.2.2: un contenuto in movimento per più di 5 secondi deve potersi fermare).
   - Al posto del video, un'immagine fissa (poster) se l'utente ha attivato "riduci movimento" o "risparmio dati".
   - Peso massimo: ~2–3 MB su desktop, ~1–1,5 MB su mobile.
2. **Video completo con audio,** avviato al clic in una sezione dedicata (es. Chi siamo o home). Non parte da solo.

**Formati da preparare:**

| Versione | Formato | Risoluzione | Codifica |
|---|---|---|---|
| Hero desktop | 16:9 (o 21:9 ritagliato) | 1920×1080 | MP4 H.264 + WebM VP9/AV1 |
| Hero mobile | 9:16 o 4:5 | 1080×1920 / 1080×1350 | MP4 H.264 + WebM |
| Poster | come sopra | — | JPG/WebP/AVIF, fotogramma scelto |
| Video completo | formato originale | 1080p | MP4 H.264, audio AAC |

**Dove metterlo:** in WordPress i video pesanti rallentano il sito. Le opzioni sono file compressi ospitati sul sito con cache, oppure un servizio dedicato (es. Cloudinary, Bunny Stream). Per l'hero non userei YouTube: aggiunge peso, marchio e controlli non personalizzabili.

## 3. Cosa chiedere alla fotografa (prima della consegna)

1. **File originali alla risoluzione massima**, JPG di alta qualità o TIFF, profilo colore **sRGB**. Nessuna compressione aggressiva e nessun ritaglio stretto: i tagli per il web li faccio io.
2. **Nomi file uguali ai nomi del menu**, es. `leverano-roll.jpg`, `poke-porto-selvaggio.jpg`, `prep-ramen-brodo-01.jpg`. Servono ad abbinare le foto al catalogo senza errori.
3. **Elenco dei piatti fotografati**, per capire quali categorie restano scoperte.
4. **Margine intorno al soggetto:** lo stesso scatto va ritagliato 1:1 (schede), 16:9 (desktop) e 4:5 (mobile).
5. **Liberatoria e diritti d'uso** per sito, social e stampa, più gli eventuali crediti da citare.

## 4. Cosa chiedere per il video

1. **File master** (ProRes o MP4 ad alto bitrate) e non solo la versione esportata per i social.
2. **Formato dello schermo LED** (orizzontale o verticale, risoluzione).
3. **Una versione senza testi o grafiche sovrimpresse**, se nel montaggio ci sono scritte. Sul web titoli e testi devono essere HTML, per SEO e accessibilità.
4. **Musica:** i diritti valgono anche per il sito? (Nell'hero il video è senza audio, ma nella versione completa l'audio c'è.)

## 5. Impatto sulla direzione artistica

- La moodboard prevedeva foto di **piatti dall'alto su fondo pieno**. Quando arrivano gli scatti verifico se sono coerenti. Se lo stile è diverso (es. tre quarti, fondo scuro, luce naturale), adatto la direzione alle foto e non il contrario: le foto sono il materiale più costoso da rifare.
- Il colore del brand verrà scelto anche in base alle foto: corallo e rosso puro reagiscono in modo diverso con i toni del pesce crudo (salmone, tonno).

/* =========================================================================
   UMAMI — Comportamenti condivisi del prototipo (fase 3)
   Carrello DIMOSTRATIVO nel browser (localStorage): nessun dato esce dalla
   pagina, nessun ordine reale. In integrazione il carrello è quello di
   WooCommerce (Store API / fragments AJAX); qui ne imitiamo solo l'interfaccia.
   Richiede data/catalogo.js caricato prima. <html data-radice="../"> indica
   il percorso verso la radice del repository.
   ========================================================================= */
(function () {
  "use strict";
  var doc = document, root = doc.documentElement;
  var R = root.getAttribute("data-radice") || "../";
  var IMG = R + "assets/img/provvisorie/";
  var CHIAVE = "umami-carrello-demo";
  var MAX = 20;

  function eur(v) { return "€ " + v.toFixed(2).replace(".", ","); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  /* ---- allergeni (Reg. UE 1169/2011, numerazione della pagina allergeni del sito) ---- */
  var AL = { 1:["GLU","Glutine"], 2:["CRO","Crostacei"], 3:["UOV","Uova"], 4:["PES","Pesce"], 5:["ARA","Arachidi"], 6:["SOI","Soia"], 7:["LAT","Latte"], 8:["FRU","Frutta a guscio"], 9:["SED","Sedano"], 10:["SEN","Senape"], 11:["SES","Sesamo"], 12:["SOL","Solfiti"], 13:["LUP","Lupini"], 14:["MOL","Molluschi"] };
  function allergeni(lista) {
    if (!lista || !lista.length) return "";
    return '<ul class="u-allergeni" aria-label="Allergeni">' + lista.map(function (n) {
      return '<li class="u-allergene" title="' + AL[n][1] + '"><span aria-hidden="true">' + AL[n][0] + '</span><span class="sr-only">' + AL[n][1] + '</span></li>';
    }).join("") + "</ul>";
  }

  /* ---- catalogo: i dati restano grezzi, qui solo presentazione ---- */
  // "Gyoza Di Manzo" → "Gyoza di manzo"? No: si abbassano solo le congiunzioni, il nome resta del cliente.
  function nomeLeggibile(s) {
    return s.replace(/\*/g, " ").replace(/\s+/g, " ").trim()
      .replace(/(\S) (Di|E|Con|Al|In)(?= )/g, function (m, a, b) { return a + " " + b.toLowerCase(); })
      .replace(/’S\b/g, "’s");
  }
  function slug(s) { return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
  // foto PROVVISORIE dal sito attuale: non ritraggono il piatto indicato
  var FOTO = { "leverano-roll": "copertina-6.jpg", "umami-roll": "copertina_3.jpg", "salento-roll": "copertina5.jpg", "tartare-di-tonno": "tartare2.jpg" };

  var CATALOGO = (window.UMAMI_CATALOGO || []).map(function (c) {
    return { id: c.id, nome: c.nome, nota: c.nota, luogo: c.luogo, prodotti: c.p.map(function (r) {
      var id = slug(r[0].replace(/\*/g, ""));
      return { id: id, nome: nomeLeggibile(r[0]), cat: c.id, catNome: c.nome, nota: c.nota, p: r[1], pieno: r[2] || 0, d: r[3], al: r[4], surgelato: r[0].indexOf("*") > -1, foto: FOTO[id] || "" };
    }) };
  });
  var PRODOTTI = {};
  CATALOGO.forEach(function (c) { c.prodotti.forEach(function (x) { PRODOTTI[x.id] = x; }); });

  function prezzo(x) { return '<span class="u-prezzo">' + (x.pieno ? '<del><span class="sr-only">prima </span>' + eur(x.pieno) + '</del><ins><span class="sr-only">ora </span>' + eur(x.p) + "</ins>" : eur(x.p)) + "</span>"; }

  /* ---- carrello dimostrativo ---- */
  function leggi() {
    try { var x = JSON.parse(localStorage.getItem(CHIAVE) || "{}"); return x && typeof x === "object" ? x : {}; }
    catch (e) { return {}; }
  }
  var carrello = leggi();
  function salva() { try { localStorage.setItem(CHIAVE, JSON.stringify(carrello)); } catch (e) { /* navigazione privata: resta in memoria */ } }
  function righe() { return Object.keys(carrello).filter(function (id) { return PRODOTTI[id]; }).map(function (id) { return { x: PRODOTTI[id], q: carrello[id] }; }); }
  function totale() { return righe().reduce(function (a, r) { return a + r.x.p * r.q; }, 0); }
  function pezzi() { return righe().reduce(function (a, r) { return a + r.q; }, 0); }
  function quantita(id) { return carrello[id] || 0; }
  function imposta(id, q) {
    if (!PRODOTTI[id]) return;
    q = Math.max(0, Math.min(MAX, parseInt(q, 10) || 0));
    if (q) carrello[id] = q; else delete carrello[id];
    salva(); aggiorna();
  }
  function svuota() { carrello = {}; salva(); aggiorna(); }

  /* ---- controlli: "Aggiungi" che diventa quantità ---- */
  var ICO_PIU = '<svg class="u-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';
  function stepper(x, q) {
    return '<div class="u-qty" role="group" aria-label="Quantità di ' + esc(x.nome) + '">' +
      '<button type="button" data-delta="-1" data-id="' + x.id + '" aria-label="' + (q === 1 ? "Togli " + esc(x.nome) : "Uno in meno") + '">−</button>' +
      '<input type="number" inputmode="numeric" min="0" max="' + MAX + '" value="' + q + '" data-id="' + x.id + '" aria-label="Quantità">' +
      '<button type="button" data-delta="1" data-id="' + x.id + '" aria-label="Uno in più">+</button></div>';
  }
  function bottoneAggiungi(x, compatto) {
    return '<button class="u-btn u-btn--s u-btn--secondario js-aggiungi" type="button" data-id="' + x.id + '" aria-label="Aggiungi ' + esc(x.nome) + '">' +
      (compatto ? ICO_PIU : "") + '<span class="u-btn__testo">Aggiungi</span></button>';
  }
  function controllo(id) { var x = PRODOTTI[id], q = quantita(id); return q ? stepper(x, q) : bottoneAggiungi(x); }
  function sincronizzaControlli() {
    doc.querySelectorAll("[data-controllo]").forEach(function (el) {
      var id = el.getAttribute("data-controllo"), q = quantita(id), s = el.querySelector(".u-qty");
      if (q && s) { var inp = s.querySelector("input"); if (doc.activeElement !== inp) inp.value = q;
        s.firstElementChild.setAttribute("aria-label", q === 1 ? "Togli " + PRODOTTI[id].nome : "Uno in meno"); return; }
      if (!q && !s && el.firstElementChild) return;
      var conFocus = el.contains(doc.activeElement);
      el.innerHTML = controllo(id);
      // il focus resta sul controllo equivalente: + dopo "Aggiungi", "Aggiungi" dopo l'ultimo −
      if (conFocus) { var f = el.querySelector(q ? '[data-delta="1"]' : ".js-aggiungi"); if (f) f.focus(); }
    });
  }

  /* ---- cassetto del carrello (side sheet; foglio dal basso su mobile) ---- */
  function iniettaCornice() {
    var html =
      '<div class="u-toast-area" id="toast" role="status" aria-live="polite"></div>' +
      '<div class="u-velo" id="velo" hidden></div>' +
      '<aside class="u-cassetto" id="cassetto" role="dialog" aria-modal="true" aria-labelledby="cassetto-t" hidden>' +
        '<div class="u-cassetto__testa"><h2 id="cassetto-t">Il tuo <em>ordine</em></h2><button class="u-btn u-btn--secondario u-btn--icona js-chiudi" type="button" aria-label="Chiudi il carrello"><svg class="u-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>' +
        '<div class="u-cassetto__corpo" id="cassetto-righe"></div>' +
        '<div class="u-cassetto__piede" id="cassetto-piede"></div>' +
      "</aside>";
    doc.body.insertAdjacentHTML("beforeend", html);
  }
  function rigaCarrello(r) {
    var x = r.x;
    return '<div class="u-riga-carrello"><div class="u-riga-carrello__img" aria-hidden="true">' + (x.foto ? '<img src="' + IMG + x.foto + '" alt="" onerror="this.remove()">' : esc(x.nome.charAt(0))) + "</div>" +
      '<div><div class="u-riga-carrello__nome">' + esc(x.nome) + '</div><div class="u-riga-carrello__nota">' + esc(x.catNome) + (x.nota ? " · " + x.nota : "") + "</div>" +
      '<div class="u-riga-carrello__azioni">' + stepper(x, r.q) + '<button class="u-riga-carrello__rimuovi" type="button" data-rimuovi="' + x.id + '">Rimuovi<span class="sr-only"> ' + esc(x.nome) + "</span></button></div></div>" +
      '<span class="u-prezzo">' + eur(x.p * r.q) + "</span></div>";
  }
  function disegnaCassetto() {
    var c = doc.getElementById("cassetto-righe"), piede = doc.getElementById("cassetto-piede"); if (!c) return;
    var rr = righe(), conFocus = c.contains(doc.activeElement) ? doc.activeElement : null;
    var idF = conFocus && conFocus.getAttribute("data-id"), dF = conFocus && conFocus.getAttribute("data-delta");
    if (!rr.length) {
      c.innerHTML = '<div class="u-cassetto__vuoto"><p>Il carrello è vuoto.</p><p>Scegli dal menu: quello che aggiungi compare qui.</p></div>';
      piede.innerHTML = '<a class="u-btn u-btn--l u-btn--pieno" href="' + R + 'prototipo/ordina/">Vai al menu</a>';
    } else {
      c.innerHTML = rr.map(rigaCarrello).join("");
      piede.innerHTML = '<div class="u-cassetto__totale"><span class="t-meta">Totale prodotti · ' + pezzi() + (pezzi() === 1 ? " pezzo" : " pezzi") + '</span><strong>' + eur(totale()) + "</strong></div>" +
        '<a class="u-btn u-btn--l u-btn--pieno" href="' + R + 'prototipo/checkout/">Ritiro o consegna</a>' +
        '<p class="t-meta" style="text-align:center">Pagamento al ritiro o alla consegna</p>';
    }
    if (idF) { var f = c.querySelector('[data-id="' + idF + '"]' + (dF ? '[data-delta="' + dF + '"]' : "")); (f || doc.querySelector("#cassetto .js-chiudi")).focus(); }
    else if (conFocus && !c.contains(doc.activeElement)) doc.querySelector("#cassetto .js-chiudi").focus();
  }
  var ultimoFocus = null, tChiudi = 0;
  function aperto() { var k = doc.getElementById("cassetto"); return k && k.classList.contains("is-aperto"); }
  function apri() {
    var k = doc.getElementById("cassetto"), v = doc.getElementById("velo");
    clearTimeout(tChiudi); ultimoFocus = doc.activeElement; disegnaCassetto();
    k.hidden = false; v.hidden = false;
    requestAnimationFrame(function () { k.classList.add("is-aperto"); v.classList.add("is-aperto"); });
    doc.querySelectorAll(".js-apri-carrello[aria-expanded]").forEach(function (b) { b.setAttribute("aria-expanded", "true"); });
    doc.body.style.overflow = "hidden";
    setTimeout(function () { k.querySelector(".js-chiudi").focus(); }, 60);
  }
  function chiudi() {
    var k = doc.getElementById("cassetto"), v = doc.getElementById("velo");
    k.classList.remove("is-aperto"); v.classList.remove("is-aperto"); doc.body.style.overflow = "";
    doc.querySelectorAll(".js-apri-carrello[aria-expanded]").forEach(function (b) { b.setAttribute("aria-expanded", "false"); });
    tChiudi = setTimeout(function () { k.hidden = true; v.hidden = true; }, 520);
    if (ultimoFocus && doc.contains(ultimoFocus)) ultimoFocus.focus();
  }

  /* ---- toast: massimo 2 visibili, esce dopo 2,6 s ---- */
  function toast(testo) {
    var area = doc.getElementById("toast"); if (!area) return;
    var el = doc.createElement("div"); el.className = "u-toast";
    el.innerHTML = '<span class="u-toast__ico" aria-hidden="true">✓</span><span>' + testo + '</span><a href="#cassetto" class="js-apri-carrello">Vedi</a>';
    area.appendChild(el);
    while (area.children.length > 2) area.removeChild(area.firstChild);
    setTimeout(function () { el.classList.add("is-uscita"); setTimeout(function () { el.remove(); }, 160); }, 2600);
  }
  function cambiaTesto(b, testo, ok) {
    var el = b.querySelector(".u-btn__testo"); if (!el) return;
    b.classList.add("is-cambio");
    setTimeout(function () { el.textContent = testo; b.classList.toggle("is-aggiunto", ok); b.classList.remove("is-cambio"); }, 110);
  }

  /* ---- aggiornamento di contatori, totali, controlli ---- */
  var primaVolta = true;
  function aggiorna() {
    var n = pezzi(), t = totale();
    doc.querySelectorAll("[data-conta]").forEach(function (el) { el.textContent = n; });
    doc.querySelectorAll("[data-totale]").forEach(function (el) { el.textContent = eur(t); });
    if (!primaVolta) doc.querySelectorAll(".u-carrello-btn").forEach(function (b) { b.classList.remove("is-pulsa"); void b.offsetWidth; b.classList.add("is-pulsa"); });
    primaVolta = false;
    sincronizzaControlli();
    if (aperto()) disegnaCassetto();
    doc.dispatchEvent(new CustomEvent("umami:carrello"));
  }

  /* ---- orari reali: tutti i giorni 19:00–23:30, mercoledì chiuso ---- */
  var APRE = 19 * 60, CHIUDE = 23 * 60 + 30, MERCOLEDI = 3;
  var GIORNI = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
  function aggiornaStato() {
    doc.querySelectorAll("[data-stato]").forEach(function (el) {
      var d = new Date(), g = d.getDay(), m = d.getHours() * 60 + d.getMinutes();
      el.classList.remove("is-aperto", "is-presto");
      if (g !== MERCOLEDI && m >= APRE && m < CHIUDE) { el.classList.add("is-aperto"); el.textContent = "Aperto · chiude alle 23:30"; }
      else if (g !== MERCOLEDI && m < APRE) { el.classList.add("is-presto"); el.textContent = "Apre alle 19:00 · ordina ora"; }
      else { var dom = (g + 1) % 7; el.textContent = (g === MERCOLEDI ? "Chiuso il mercoledì" : "Chiuso") + " · apre " + (dom === MERCOLEDI ? "giovedì" : g === MERCOLEDI ? "giovedì" : "domani") + " alle 19:00"; }
    });
  }
  /* Fasce di 15 minuti per l'ordine. DIMOSTRATIVE: in integrazione arrivano dalla
     configurazione di Food Store (orari di servizio, tempo di preparazione). */
  function fasce(adesso) {
    var d = new Date(adesso || Date.now()), passi = 0;
    var anticipo = 30; // minuti minimi di preparazione: valore di esempio
    while (passi < 8) {
      var g = d.getDay(), oggi = passi === 0, m = oggi ? d.getHours() * 60 + d.getMinutes() + anticipo : 0;
      var inizio = Math.max(APRE, Math.ceil(m / 15) * 15), lista = [];
      if (g !== MERCOLEDI) for (var t = inizio; t <= CHIUDE - 15; t += 15) lista.push(hhmm(t) + "–" + hhmm(t + 15));
      if (lista.length) return { giorno: oggi ? "Oggi" : passi === 1 ? "Domani" : GIORNI[g].charAt(0).toUpperCase() + GIORNI[g].slice(1), data: new Date(d), fasce: lista };
      d.setDate(d.getDate() + 1); passi++;
    }
    return { giorno: "", fasce: [] };
  }
  function hhmm(t) { return String(Math.floor(t / 60)).padStart(2, "0") + ":" + String(t % 60).padStart(2, "0"); }

  /* ---- avvio ---- */
  function avvio() {
    iniettaCornice();
    aggiorna(); aggiornaStato(); setInterval(aggiornaStato, 60000);

    // header compatto quando si scorre
    var hd = doc.querySelector(".u-header");
    if (hd && !hd.classList.contains("v7-header")) addEventListener("scroll", function () { hd.classList.toggle("is-scorso", scrollY > 8); }, { passive: true });

    // comparsa in pagina
    var io = "IntersectionObserver" in window ? new IntersectionObserver(function (voci) {
      voci.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add("is-visibile"); io.unobserve(v.target); } });
    }, { rootMargin: "0px 0px -8% 0px" }) : null;
    UMAMI.osserva = function (ambito) { (ambito || doc).querySelectorAll(".rivela:not(.is-visibile), .rivela-img:not(.is-visibile)").forEach(function (el) { io ? io.observe(el) : el.classList.add("is-visibile"); }); };
    UMAMI.osserva();

    // v0.7 · menu a tendina (Watchhouse): piatti firmati a destra, clic, passaggio, ESC
    var mbx = doc.getElementById("mega-btn"), mg = doc.getElementById("mega"), hdx = doc.querySelector(".v7-header"), tM = 0;
    if (mbx && mg) {
      var fm = doc.getElementById("mega-firme");
      if (fm) fm.innerHTML = '<p class="v7-mega__links" style="margin:0"><a href="' + R + 'prototipo/ordina/">Piatti firmati</a></p>' + Object.keys(FOTO).slice(0, 3).map(function (id) {
        var x = PRODOTTI[id]; return x ? '<a href="' + R + 'prototipo/ordina/#' + x.cat + '"><b>' + esc(x.nome) + '</b><span>' + esc(x.d) + '</span></a>' : "";
      }).join("");
      var mega = function (on) { mg.hidden = !on; mbx.setAttribute("aria-expanded", String(on)); hdx.classList.toggle("is-mega", on); };
      mbx.addEventListener("click", function () { mega(mg.hidden); });
      if (matchMedia("(hover: hover)").matches) {
        mbx.addEventListener("mouseenter", function () { clearTimeout(tM); mega(true); });
        hdx.addEventListener("mouseleave", function () { tM = setTimeout(function () { mega(false); }, 180); });
        mg.addEventListener("mouseenter", function () { clearTimeout(tM); });
      }
      mg.addEventListener("click", function (e) { if (e.target.closest("a")) mega(false); });
      doc.addEventListener("keydown", function (e) { if (e.key === "Escape" && !mg.hidden) { mega(false); mbx.focus(); } });
    }
    // v0.7 · orologio di Leverano (Sakazuki)
    var orol = doc.getElementById("orologio");
    if (orol) { var ora = function () { orol.textContent = "Leverano, " + new Intl.DateTimeFormat("it-IT", { timeZone: "Europe/Rome", hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(new Date()); }; ora(); setInterval(ora, 1000); }
    // header trasparente solo sopra l'apertura
    if (hdx && !hdx.classList.contains("is-solida")) { var sc = function () { hdx.classList.toggle("is-scorso", scrollY > innerHeight - 80); }; addEventListener("scroll", sc, { passive: true }); sc(); }

    // menu di navigazione su mobile
    var mb = doc.querySelector(".u-header__menu-btn"), nm = doc.getElementById("nav-mobile");
    if (mb && nm) mb.addEventListener("click", function () {
      var a = mb.getAttribute("aria-expanded") === "true";
      mb.setAttribute("aria-expanded", String(!a)); mb.setAttribute("aria-label", a ? "Apri il menu" : "Chiudi il menu"); nm.hidden = a;
      if (hdx) hdx.classList.toggle("is-mega", !a);
    });
    if (nm) nm.addEventListener("click", function (e) { if (e.target.closest("a")) { nm.hidden = true; mb.setAttribute("aria-expanded", "false"); mb.setAttribute("aria-label", "Apri il menu"); if (hdx) hdx.classList.remove("is-mega"); } });

    doc.addEventListener("click", function (e) {
      var t = e.target;
      if (t.closest(".js-apri-carrello")) { e.preventDefault(); apri(); return; }
      if (t.closest(".js-chiudi") || t.id === "velo") { chiudi(); return; }
      var b = t.closest(".js-aggiungi");
      if (b) {
        var id = b.getAttribute("data-id"), x = PRODOTTI[id]; if (!x) return;
        var dentroControllo = b.closest("[data-controllo]");
        imposta(id, quantita(id) + 1);
        if (!dentroControllo) { cambiaTesto(b, "Aggiunto ✓", true); clearTimeout(b._t); b._t = setTimeout(function () { cambiaTesto(b, "Aggiungi", false); }, 1600); }
        toast("<b>" + esc(x.nome) + "</b> nel carrello · " + eur(totale()));
        return;
      }
      var q = t.closest(".u-qty button[data-delta]");
      if (q) { var idq = q.getAttribute("data-id"); imposta(idq, quantita(idq) + parseInt(q.getAttribute("data-delta"), 10)); return; }
      var rm = t.closest("[data-rimuovi]");
      if (rm) imposta(rm.getAttribute("data-rimuovi"), 0);
    });
    doc.addEventListener("change", function (e) {
      var inp = e.target.closest(".u-qty input[data-id]"); if (inp) imposta(inp.getAttribute("data-id"), inp.value);
    });
    doc.addEventListener("keydown", function (e) {
      if (!aperto()) return;
      var k = doc.getElementById("cassetto");
      if (e.key === "Escape") chiudi();
      if (e.key === "Tab") {
        var f = k.querySelectorAll("button, a[href], input"), a = f[0], z = f[f.length - 1];
        if (e.shiftKey && doc.activeElement === a) { e.preventDefault(); z.focus(); }
        else if (!e.shiftKey && doc.activeElement === z) { e.preventDefault(); a.focus(); }
      }
    });
    // carrello condiviso tra schede aperte
    addEventListener("storage", function (e) { if (e.key === CHIAVE) { carrello = leggi(); aggiorna(); } });
  }

  var UMAMI = window.UMAMI = {
    R: R, IMG: IMG, eur: eur, esc: esc, allergeni: allergeni, AL: AL, prezzo: prezzo,
    CATALOGO: CATALOGO, PRODOTTI: PRODOTTI, righe: righe, totale: totale, pezzi: pezzi, quantita: quantita,
    imposta: imposta, svuota: svuota, controllo: controllo, bottoneAggiungi: bottoneAggiungi,
    apri: apri, chiudi: chiudi, toast: toast, fasce: fasce, osserva: function () {}
  };
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", avvio); else avvio();
})();

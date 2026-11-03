"""Genera la testata condivisa (v0.7) nelle pagine del prototipo.
Uso: python3 strumenti/testata.py   (dalla radice del repository)
In integrazione la testata diventa header.php del tema figlio."""
import re
def roll(t): return f'<span class="v7-roll"><span data-t="{t}">{t}</span></span>'
GRUPPI=[('Sushi.','copertina-6.jpg',[('uramaki-special','Uramaki special'),('uramaki-classici','Uramaki classici'),('vegetariani','I vegetariani'),('non-crudi','I non crudi'),('hosomaki','Hosomaki'),('sashimi','Sashimi e nigiri')]),
        ('Cucina.','tartare2.jpg',[('tartare','Tartare'),('poke','Poke'),('bao','Bao buns'),('gyoza','Gyoza'),('sfizierie','Sfizierie'),('primi','Primi e gastronomia')]),
        ('Da bere.','copertina5.jpg',[('dolci','Dolci'),('bevande','Bevande'),('birre','Birre'),('vini','Vini e bollicine')])]
def testata(P,R,attiva='',solida=False,cassa=False):
    """P = percorso verso prototipo/, R = verso la radice del repository"""
    cls='u-header v7-header'+(' is-solida' if solida else '')
    if cassa:
        return f'''<header class="{cls}">
  <div class="v7-header__riga">
    <nav class="v7-header__nav" aria-label="Ritorno"><a class="v7-voce" href="{P}ordina/">{roll("← Menu")}</a></nav>
    <a class="v7-marchio" href="{P}" aria-label="UMAMI Salento, home">UMAMI</a>
    <div class="v7-header__dx"><span class="u-stato" data-stato style="color:inherit">Tutti i giorni 19:00–23:30</span></div>
  </div>
</header>'''
    cur=lambda k:' aria-current="page"' if k==attiva else ''
    cols=''.join(f'''
    <div class="v7-mega__col"><ul class="v7-mega__links">{"".join(f'<li><a href="{P}ordina/#{i}">{n}</a></li>' for i,n in voci)}</ul><div class="v7-mega__foto"><img src="{R}assets/img/provvisorie/{foto}" alt="" loading="lazy" onerror="this.classList.add('manca')"></div><a class="v7-mega__titolo" href="{P}ordina/#{voci[0][0]}">{t}</a></div>''' for t,foto,voci in GRUPPI)
    mob=''.join(f'<li class="v7-mob__gruppo"><a class="v7-mob__titolo" href="{P}ordina/#{voci[0][0]}">{t}</a><ul>{"".join(f"<li><a href=\"{P}ordina/#{i}\">{n}</a></li>" for i,n in voci)}</ul></li>' for t,foto,voci in GRUPPI)
    return f'''<header class="{cls}">
  <div class="v7-header__riga">
    <nav class="v7-header__nav" aria-label="Principale">
      <button class="v7-voce" type="button" id="mega-btn" aria-expanded="false" aria-controls="mega"{cur("menu")}>{roll("Menu")}</button>
      <a class="v7-voce" href="{P}#servizi">{roll("Ramen")}</a><a class="v7-voce" href="{P}#servizi">{roll("Catering")}</a><a class="v7-voce" href="{P}#servizi">{roll("Street food")}</a><a class="v7-voce" href="{P}#chi-siamo">{roll("Chi siamo")}</a>
      <button class="u-btn u-btn--secondario u-btn--icona u-header__menu-btn" type="button" aria-label="Apri il menu" aria-expanded="false" aria-controls="nav-mobile"><svg class="u-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h18"/></svg></button>
    </nav>
    <a class="v7-marchio" href="{P}" aria-label="UMAMI Salento, home">UMAMI</a>
    <div class="v7-header__dx">
      <span class="u-stato" data-stato style="color:inherit">Tutti i giorni 19:00–23:30</span>
      <button class="v7-voce v7-carrello u-carrello-btn js-apri-carrello" type="button" aria-controls="cassetto" aria-expanded="false" data-solo-js>{roll("Carrello")}<span class="u-conta" data-conta>0</span><span class="sr-only"> articoli</span></button>
    </div>
  </div>
  <div class="v7-mega" id="mega" hidden>{cols}
    <div class="v7-mega__firme" id="mega-firme"></div>
  </div>
  <nav class="u-nav-mobile v7-mob" id="nav-mobile" aria-label="Principale, mobile" hidden>
    <ul class="v7-mob__lista">{mob}
      <li><a class="v7-mob__titolo" href="{P}#servizi">Catering.</a></li><li><a class="v7-mob__titolo" href="{P}#chi-siamo">Chi siamo.</a></li></ul>
    <span class="u-stato" data-stato>Tutti i giorni 19:00–23:30</span>
  </nav>
</header>'''
PAGINE=[('prototipo/index.html','','../','',False,False),('prototipo/ordina/index.html','../','../../','menu',True,False),('prototipo/checkout/index.html','../','../../','',True,True)]
for f,P,R,att,sol,cas in PAGINE:
    s=open(f).read()
    s=re.sub(r'<header class="u-header[^"]*">.*?</header>',lambda m:testata(P,R,att,sol,cas),s,count=1,flags=re.S)
    if 'v7.css' not in s: s=s.replace(f'href="{R}assets/css/pagine.css">',f'href="{R}assets/css/pagine.css">\n<link rel="stylesheet" href="{R}assets/css/v7.css">')
    open(f,'w').write(s); print('ok',f)

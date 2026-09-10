# Jennifer Orrbon - Webportfolio 🚀

Välkommen till min personliga webbportfolio! Den här webbplatsen är byggd som ett skolarbete för att presentera mig själv som **Systemutvecklare inom .NET**, visa upp mina aktuella projekt och tekniska färdigheter samt ge framtida arbetsgivare och kollegor ett enkelt sätt att kontakta mig eller ladda ner mitt CV.

Designen är inspirerad av ett kreativt och personligt skrivbordskontor med interaktiva pusselbitar, post-it-lappar och dolda detaljer (ja, om du älskar TV-serien *Friends* kommer du att hitta en hel del påskägg i koden! ☕️).

---

## ✨ Funktioner & Höjdpunkter

*   **Interaktiv "Om mig"-sektion**: Ett pussel där pusselbitarna rör sig och avslöjar information om mig när användaren hovrar över dem.
*   **Dynamiskt Väder-API**: Använder OpenWeatherMap API för att hämta realtidsväder för Västerås. Textfärgen ändras dynamiskt beroende på temperaturen.
*   **Responsiv design**: Helt anpassad för både desktop, tablets och mobila enheter (med en mobilanpassad meny som flyttar till botten för bättre UX).
*   **Portföljgalleri**: Visar upp mina projekt (t.ex. min Hotel Booking Console App och Systementor Zoo) med direktlänkar till tillhörande GitHub-repositorier.
*   **Kontaktformulär**: Integrerat med FormSubmit för säker och direkt hantering av meddelanden, komplett med validering via Regex.

---

## 🛠️ Tekniska färdigheter (Tech Stack)

De tekniker som används och demonstreras i detta projekt är:

*   **HTML5** – Semantisk struktur (`<nav>`, `<main>`, `<figure>`).
*   **CSS3** – Responsiv layout med Flexbox, CSS Grid, media queries samt CSS-variabler (`:root`) för ett städat och modulärt färgtema.
*   **JavaScript (ES6+)** – Asynkron programmering (`fetch`, `async/await`), felhantering (`try/catch`) samt DOM-manipulering för interaktiva händelser.
*   **FontAwesome** – För moderna och skalbara ikoner.
*   **Google Fonts** – Typografi som sätter den rätta personliga prägeln på designen.

---

## 🚀 Kom i gång lokalt

Följ dessa steg för att köra projektet på din egen dator:

1.  **Klona repot:**
    ```bash
    git clone https://github.com
    ```
2.  **Öppna projektet:**
    Öppna mappen i exempelvis Visual Studio Code.
3.  **Starta en lokal server:**
    Använd tillägg som *Live Server* i VS Code för att starta `index.html`.

---

## 📂 Filstruktur

Projektet är uppdelat i en modulär struktur för att hålla koden ren och lättunderhållen:

```text
├── index.html                           # Svensk huvudsida (Portfolio)
├── index-en.html                        # Engelsk huvudsida (Portfolio)
├── thanks-sv.html                       # Svensk bekräftelsesida efter skickat formulär
├── thanks-en.html                       # Engelsk bekräftelsesida efter skickat formulär
├── css/
│   ├── styles.css                       # Globala stilar och :root-variabler
│   ├── body.css                         # Grundläggande layout och body-stilar
│   ├── navbar.css                       # Navigationsmeny & språkväljare
│   ├── hero.css                         # Introduktionssektion (Hero)
│   ├── my-skills.css                    # Färdigheter (Post-it flip-boxes)
│   ├── my-portfolio.css                 # Projektöversikt och kort
│   ├── about-me.css                     # Om mig (Pusselbits-animationer)
│   ├── references.css                   # Referenskort
│   ├── contact-me.css                   # Kontaktformulär & väderbehållare
│   ├── thanks.css                       # Design för bekräftelsesidorna
│   └── footer.css                       # Sidfot med sociala medier
├── javascript/
│   └── script.js                        # Väder-API & interaktiva händelser
├── images/                              # Bilder, ikoner och bakgrunder (profilbild, etc.)
└── files/
    ├── CV-Jennifer-Orrbon.pdf           # Svenskt nedladdningsbart CV
    └── CV-Jennifer-Orrbon-2026-English.pdf # Engelskt nedladdningsbart CV
```

---

## 💬 Kontakt

Om du vill veta mer om mig, prata .NET-utveckling eller diskutera om vi faktiskt *"were on a break"*, tveka inte att höra av dig via formuläret på sidan eller mina sociala medier:

*   **LinkedIn:** [Jennifer Orrbon](https://linkedin.com)
*   **GitHub:** [@jenn-html](https://github.com)


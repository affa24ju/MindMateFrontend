# MindMateFrontend
Det här projektet är en vidareutveckling av MyJournalFrontend och har skapats för att lägga till nya funktioner. MindMateFrontend är en Angular-baserad frontendapplikation för att spåra mental hälsa och skriva dagbok. 

Applikationen gör det möjligt för användare att registrera sitt dagliga känslotillstånd, beskriva sitt mående i text och visualisera mönster i sitt psykiska välbefinnande över tid. 
Applikationen kommunicerar med ett API byggt med Spring Boot och MongoDB. 

Projektet har skapats med [Angular CLI](https://github.com/angular/angular-cli) version 20.3.2.

## ✨ Funktioner
**🔐 Authentisering**
- Registrering och inloggning för användare
- Säker authentiseringsflöde

**📔 Daglig journalföring**
- Registrera ditt dagliga mentala tillstånd med textbeskrivning
- Välj känslor från en emoji-lista
- Spara och hantera dagliga inlägg
- Redigera och ta bort inlägg

**📅 Organisering & Vyer**
- **Dagens inlägg:** Visa alla inlägg från aktuell dag i en seperat lista
- **Tidigare inlägg:** Visa alla inlägg (inklusiv dagens) i en annan vy

**🪄 Premium funktion**

  **📊 Analys**
  - **Datumintervall:** Jämför känslomönster mellan två valda datum
  - **Trendanalys:** Följ känslomassiga förändringar över tid
  - **Visuell analys:**
    - Prucentuell fördelning av känslor (t.ex. Glad: 40%, Ledsen: 15%, Orolig: 20%...)
    - Interactivt cirkeldiagram

**🤖 AI funktion**
- Man får chatta med AI som ger tips och råd om hur du kan må bättre. Om du inte frågar något, får du ett recept på hälsosamma kost ändå💡

## 🧩 Architecture
Det här är en **frontend-only**-applikation bygged med: 
- Angular
- TypeScript

## 🖥️ Backend Integration
Applikationen ansluter till en seperat backend-tjänst (https://github.com/affa24ju/MyJournalApi) byggd med:
- **Spring Boot** (Java)
- **MongoDB**
- **REST API**

## 🚀 Kom igång
**✅ Förutsättningar**
Se till att följande är installerat:
- npm manager
- Node.js
- Angular CLI

## 📥 Installation
**1. Klona ner repot**
```bash
git clone https://github.com/affa24ju/MyJournalFrontend.git
cd MyJournalFrontend 
```

**2. Installera beroenden**
```bash
npm install
```

**3. Konfigurera backend-API**
- Klona backend-API
- Se till att backend-projektet körs lokalt

**4. Starta applikationen**
För att köra dev miljö:

```bash
ng serve
```
**5. Öppna i webbläsaren**
Öppna webbläsaren och nevigera till:  `http://localhost:4200/`. 

## 🏗️ Vidareutvecklings möjligheter


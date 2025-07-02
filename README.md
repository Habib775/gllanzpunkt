# Glanzpunkt - Professionelle Reinigungsdienstleistungen

## 🌟 Über das Projekt

Glanzpunkt ist eine moderne Website für professionelle Reinigungsdienstleistungen. Das Projekt kombiniert ein ansprechendes Frontend mit einem robusten Backend für die Verwaltung von Inhalten.

**Slogan:** "Weil Ihr Glanz unser Punkt ist"

## 🚀 Technologie-Stack

### Frontend
- **Next.js 14** - React Framework
- **TypeScript** - Typisierte Programmierung
- **Tailwind CSS** - Utility-First CSS Framework
- **Framer Motion** - Animationen
- **Lucide React** - Icons
- **React Simple Typewriter** - Schreibmaschinen-Effekt

### Backend
- **Express.js** - Node.js Web Framework
- **Prisma** - Database ORM
- **MongoDB** - NoSQL Datenbank
- **JWT** - Authentifizierung
- **bcryptjs** - Passwort-Hashing

## 📁 Projektstruktur

```
glanzpunkt/
├── app/                    # Next.js App Router
│   ├── globals.css        # Globale Styles
│   ├── layout.tsx         # Root Layout
│   └── page.tsx           # Hauptseite
├── components/            # React Komponenten
│   ├── ui/               # UI Komponenten
│   ├── Hero.tsx          # Hero Sektion
│   ├── Services.tsx      # Dienstleistungen
│   ├── About.tsx         # Über uns
│   ├── Offers.tsx        # Angebote
│   ├── Gallery.tsx       # Bildergalerie
│   └── Footer.tsx        # Footer
├── routes/               # API Routes (Backend)
│   ├── authRoutes.ts     # Authentifizierung
│   ├── serviceRoutes.ts  # Dienstleistungen API
│   ├── offerRoutes.ts    # Angebote API
│   ├── galleryRoutes.ts  # Galerie API
│   └── aboutRoutes.ts    # Über uns API
├── prisma/               # Prisma Schema
│   └── schema.prisma     # Datenbankschema
├── server.ts             # Express Server
└── middleware.ts         # Next.js Middleware
```

## 🛠️ Installation & Setup

### 1. Repository klonen
```bash
git clone https://github.com/[username]/gllanzpunkt.git
cd gllanzpunkt
```

### 2. Dependencies installieren
```bash
npm install
```

### 3. Umgebungsvariablen konfigurieren
Erstellen Sie eine `.env` Datei im Projektroot:

```env
# MongoDB Verbindung
DATABASE_URL="mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority"

# JWT Secret für Authentifizierung
JWT_SECRET="your_super_secret_jwt_key"

# Server Port
PORT=5000
```

### 4. Prisma Setup
```bash
# Prisma Client generieren
npx prisma generate

# Datenbank synchronisieren (optional)
npx prisma db push
```

### 5. Entwicklungsserver starten

**Frontend (Next.js):**
```bash
npm run dev
```
Läuft auf: http://localhost:3000

**Backend (Express):**
```bash
npm run server:dev
```
Läuft auf: http://localhost:5000

## 🎨 Features

### Frontend Features
- ✨ Moderne, responsive Benutzeroberfläche
- 🎭 Smooth Animationen mit Framer Motion
- ⚡ Sparkle-Effekte im Hero-Bereich
- 📱 Mobile-First Design
- 🌐 Mehrsprachige Unterstützung (Deutsch/Arabisch)

### Backend Features
- 🔐 JWT-basierte Authentifizierung
- 📊 RESTful API für alle Inhalte
- 🛡️ Sichere Admin-Bereiche
- 💾 MongoDB Integration mit Prisma
- 🍪 Cookie-basierte Sessions

### Verwaltbare Inhalte
- 🧹 Dienstleistungen (Services)
- 🎁 Angebote (Offers)
- 🖼️ Bildergalerie (Gallery)
- ℹ️ Über uns Informationen (About)
- 👤 Admin-Benutzer

## 🔧 API Endpoints

### Authentifizierung
- `POST /api/auth/register` - Neuen Admin registrieren
- `POST /api/auth/login` - Admin Login
- `POST /api/auth/logout` - Admin Logout

### Dienstleistungen
- `GET /api/services` - Alle Dienstleistungen abrufen
- `POST /api/services` - Neue Dienstleistung erstellen (🔒 Admin)
- `PUT /api/services/:id` - Dienstleistung bearbeiten (🔒 Admin)
- `DELETE /api/services/:id` - Dienstleistung löschen (🔒 Admin)

### Angebote
- `GET /api/offers` - Alle Angebote abrufen
- `POST /api/offers` - Neues Angebot erstellen (🔒 Admin)
- `PUT /api/offers/:id` - Angebot bearbeiten (🔒 Admin)
- `DELETE /api/offers/:id` - Angebot löschen (🔒 Admin)

### Galerie
- `GET /api/gallery` - Alle Bilder abrufen
- `POST /api/gallery` - Neues Bild hinzufügen (🔒 Admin)
- `PUT /api/gallery/:id` - Bild bearbeiten (🔒 Admin)
- `DELETE /api/gallery/:id` - Bild löschen (🔒 Admin)

### Über uns
- `GET /api/about` - Über uns Informationen abrufen
- `PUT /api/about` - Über uns Informationen bearbeiten (🔒 Admin)

## 🚀 Deployment

### Vercel (Frontend)
1. Repository mit Vercel verbinden
2. Umgebungsvariablen in Vercel Dashboard setzen
3. Automatisches Deployment bei Git Push

### Railway/Heroku (Backend)
1. Projekt auf Railway/Heroku deployen
2. MongoDB Atlas Verbindung konfigurieren
3. Umgebungsvariablen setzen

## 🔒 Sicherheit

- Passwörter werden mit bcryptjs gehashed
- JWT Tokens für sichere Authentifizierung
- HTTP-Only Cookies für Session Management
- CORS Konfiguration für Frontend-Backend Kommunikation
- Middleware-Schutz für Admin-Bereiche

## 📝 Lizenz

Dieses Projekt ist privat und für den internen Gebrauch bestimmt.

## 👥 Kontakt

Bei Fragen oder Support wenden Sie sich an das Entwicklungsteam.

---

**Glanzpunkt** - Weil Ihr Glanz unser Punkt ist ✨


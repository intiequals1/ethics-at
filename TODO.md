# TODO – ethics.at

- [x] **Öffentliche Inhaltsseiten und Informationsarchitektur**  
  Die bestehende Startseite, Grundlagen der Ethik, fünf Grundwerte, Praxisfelder, EU-Werte, Digitaler Humanismus, Ressourcen, Impressumsangaben und die zugehörigen Quellen sind in klarer, responsiver Navigation verfügbar. Aus den bisherigen internen Google-Sites-Links entstehen stabile eigene Routen; veraltete oder absichtlich fehlerhafte Ziele werden nicht übernommen.

- [x] **Nutzbare interaktive Ethik-Karte**  
  Die Karte behandelt Datenschutz, Transparenz, Fairness & Gleichbehandlung, Compliance, KI-Verantwortung, Nachhaltigkeit, Integrität und soziale Verantwortung. Besucher können Themen suchen und filtern, jedes Thema per Maus oder Tastatur öffnen, Detailbeschreibung, Leitfragen, mögliche Folgen und Präventionsansätze lesen sowie einen Direktlink auf die geöffnete Detailansicht teilen. Eine semantisch gleichwertige Listenansicht bleibt nutzbar.

- [x] **Lesbare Kartenknoten auf mittleren und kleinen Displays**  
  Bei einer Breite wie der vorgelegten Kartenansicht ragen lange Themenbezeichnungen nicht aus ihren Karten heraus. Knoten erhalten ausreichend Breite und Höhe, kontrollierten deutschen Zeilenumbruch und eine angepasste Kartenfläche, ohne andere Knoten zu überdecken.

- [x] **Passende Projekte und Webseiten vernetzen**  
  ethics.at erklärt und verlinkt passende Inhalte auf dangulea.at, digitalpath.at und coolwebtoday.org mit aussagekräftigen Linktexten. Die Verbindung zu ERP-Themen auf erp.contact wird als klar beschrifteter Kontextlink angelegt, ohne die Seiten inhaltlich zu vermischen.

- [x] **Webseiten-Historie und quellennahes Archiv**  
  Eine öffentlich erreichbare Historie dokumentiert die heutige Google-Sites-Fassung als Ausgangsversion und den Neuaufbau als neue Version. Eine statische Archivseite bewahrt die vollständige textliche Aufnahme der bisherigen ethics.at-Seiten sowie den Stichtag 27. Oktober 2026. Die Archivseite ist klar als historische Quelle gekennzeichnet.

- [x] **Zugänglichkeit, SEO und technische Auslieferung**  
  Alle Seiten sind mobil lesbar, bieten sichtbare Tastaturfokusse und reduzierte Bewegungen bei entsprechender Systemeinstellung. Jede indexierbare Seite enthält Titel, Beschreibung und sinnvolle HTML-Inhalte im Initialdokument. `manus-routes.json`, Sitemap und Robots-Datei entsprechen der finalen Route-Liste; die statische Auslieferung erfolgt ohne Server, Datenbank, Tracking oder Drittanbieter-Embed.

- [x] **KI-Transparenz und Ethik-Labor**  
  Eine sichtbare Transparenzseite und ein Footer-Link erklären, dass Struktur, Gestaltung und technische Umsetzung KI-unterstützt erstellt und vom verantwortlichen Herausgeber geprüft werden. Ein Ethik-Labor setzt ausgewählte Notion-Arbeitsstände als öffentliche, verständliche und statusgekennzeichnete Karten um: Virtual User AI/Ethics4All, Ethical Debt in ERP, Medizinethik & HCI, Ethik-DB/Informed Consent sowie passende Nachhaltigkeits- und Living-Lab-Bezüge. Konzepte, Prototypen, Forschungsstände und archivierte Themen werden klar unterschieden; private Notion-URLs werden nicht als öffentliche Voraussetzung verlinkt.

- [x] **SEO- und KI-Suchoptimierung aller öffentlichen Seiten**
  Jede indexierbare Hauptseite liefert im Initial-HTML einen eindeutigen Titel und eine Beschreibung innerhalb der empfohlenen Länge, 3–8 relevante Keywords, Canonical-URL, vollständige Open-Graph- und Twitter-Metadaten, Crawler-Anweisungen sowie valides JSON-LD mit passendem Seitentyp und Breadcrumbs. Die Startseite beschreibt zusätzlich Website und Herausgeber; strukturierte Listen werden nur aus tatsächlich sichtbaren Seiteninhalten gebildet. Sitemap und Routenverzeichnis bleiben vollständig konsistent. Historische Rohaufnahme und frühere Weiterleitungen sind `noindex,follow`. Eine öffentliche `llms.txt` erschließt die kanonischen Inhalte für KI-Lesesysteme, ohne private Quellen oder unbelegte Aussagen offenzulegen.

- [ ] **Rechts- und Datenschutzangaben für die Produktionsschaltung**
  README, Impressum und Datenschutzerklärung dokumentieren die aktuelle statische Website. Das Impressum enthält die vorhandenen Angaben zu Diensteanbieter, Medieninhaber, Zustellanschrift, Kontakt, GISA, Firmenbuchstatus, Aufsichtsbehörde, Kammer, Rechtsvorschriften, Blattlinie und Geltungsbereich. Die Datenschutzerklärung erklärt den derzeit geprüften Verzicht auf Formulare, Analytics, Drittanbieter-Embeds und Quellcode-Cookies. Vor einer produktiven Domainumschaltung bestätigt der Betreiber den tatsächlichen Hosting-/CDN-Anbieter, Auftragsverarbeitung, Speicherort, Server-Logdaten, Löschfristen, Empfänger, etwaige Drittlandübermittlungen sowie eine vorhandene UID; neue Tracking- oder Drittanbieterfunktionen werden erst nach erneuter Datenschutzprüfung aktiviert.

- [x] **Projekt-README**
  Das Repository enthält ein README mit lokaler Vorschau, Projektstruktur, SEO-/KI-Lesedokumenten, der kanonischen Repository-Zuordnung und dem rechtlichen Restprüfpunkt vor der Produktionsschaltung.

- [x] **GitHub-Pages-Auslieferung für ethics.at**
  GitHub Pages veröffentlicht aktuell `main` aus dem Repository-Wurzelverzeichnis. Ein versioniertes Skript spiegelt deshalb den vollständigen bestehenden statischen Ordner `public/` in diese Root-Auslieferung, damit `public/index.html` als Website-Startseite erscheint. Der Pages-Build für Commit `e0c0528` ist erfolgreich; `https://ethics.at/` liefert die neue Startseite über HTTPS, und `https://www.ethics.at/` leitet auf die Hauptdomain weiter. Vorhandene MX- und E-Mail-Einträge blieben unverändert.

- [x] **Repository und Übergabe**  
  Der Code ist als Manus-Checkpoint `b71250a` gespeichert und nach Eigentümerbestätigung serverseitig verifiziert in das private GitHub-Repository `Claudiu-Dangulea/ethics-at` übertragen.

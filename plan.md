# Neuaufbau ethics.at

## Ziel und Umfang

ethics.at wird als öffentliche, statische und responsive Wissenswebsite neu aufgebaut. Die bestehenden Themen werden vollständig in eine klarere Informationsarchitektur überführt: Grundlagen der Ethik, Werte der Europäischen Union, Praxisfelder, Digitaler Humanismus, kuratierte Ressourcen, die interaktive Ethik-Karte und das Impressum. Die bisherige Google-Sites-Fassung wird nicht überschrieben, sondern als nachvollziehbare Ausgangsversion in einer öffentlich einsehbaren Webseiten-Historie festgehalten.

Die bestehende Ethik-Karte wird von einer Konzeptbeschreibung zu einem tatsächlich nutzbaren Werkzeug ausgebaut. Sie unterstützt Mitarbeitende in Finanz- und Verwaltungsbereichen, Compliance-Verantwortliche, Führungskräfte und Ethikbeauftragte dabei, acht ethische Risikobereiche zu erkunden. Jede Karte führt zu einer zugänglichen Detailansicht mit Bedeutung, typischen Fragen, möglichen Folgen und konkreten Präventionsansätzen. Filter nach Themenbereich, eine Suchfunktion, ein teilbarer Direktlink zum geöffneten Thema und eine gleichwertige Listenansicht machen die Karte auch ohne präzise Maussteuerung nutzbar.

Die Projekte und Webauftritte von Claudiu Dangulea werden kontextbezogen verknüpft, ohne neue Projektaussagen zu erfinden. ethics.at verweist auf digitalpath.at für offene Projekte zu verantwortungsvoller KI und Wissen, auf coolwebtoday.org für menschzentrierte digitale Erprobung und auf dangulea.at für das fachliche Profil an der Schnittstelle von ERP, Daten und Ethik. Umgekehrt werden diese Verknüpfungen als eindeutige, beschriftete Verweise in den neuen Seiten platziert.

## Informationsarchitektur

- `/` ist die inhaltliche Startseite mit Ethik-Grundlagen, Werten, Praxisfeldern und Einstiegen in Karte, Ressourcen und vernetzte Projekte.
- `/ethik-karte/` enthält die interaktive Orientierungshilfe zu Datenschutz, Transparenz, Fairness & Gleichbehandlung, Compliance, KI-Verantwortung, Nachhaltigkeit, Integrität und sozialer Verantwortung.
- `/ressourcen/` bündelt die übernommenen Rechts-, Lese- und Kursressourcen; externe Ziele werden direkt ohne Google-Umleitungen gesetzt.
- `/digitaler-humanismus/` übernimmt die Einordnung und Quellen zum Digitalen Humanismus.
- `/projekte/` führt passende Projektverweise zu digitalpath.at, coolwebtoday.org und dangulea.at mit kurzer Einordnung zusammen und verweist in das Ethik-Labor.
- `/ethik-labor/` macht ausgewählte, mit Status gekennzeichnete Arbeitsartefakte, Konzepte und Prototypen öffentlich verständlich. Grundlage sind verbundene Notion-Arbeitsstände; private Notion-URLs werden nicht als Voraussetzung für die Nutzung der öffentlichen Website verlinkt.
- `/transparenz/` erklärt sichtbar die KI-unterstützte Erstellung der Website, die menschliche redaktionelle Prüfung und den Umgang mit ungeprüften Arbeitsständen.
- `/historie/` dokumentiert die aktuelle Google-Sites-Fassung als Version 1 und diesen Neuaufbau als Version 2. Die vollständige Ausgangsaufnahme wird als statische Archivseite referenziert.
- `/impressum/` übernimmt die bestehenden Anbieter- und GISA-Angaben sowie den geltenden Geltungsbereich. Eine veraltete Host-spezifische Datenschutzerklärung wird nicht als aktuelle Betriebsinformation fortgeführt; die endgültige Datenschutzerklärung wird vor der produktiven Domainumschaltung gegen den tatsächlich gewählten Hosting- und Analysebetrieb abgeglichen.

`/manus-routes.json`, `robots.txt` und `sitemap.xml` deklarieren die statischen Routen für Vorschau und Suchmaschinen. Jede Hauptseite erhält eine aussagekräftige Meta-Beschreibung sowie Social-Meta-Daten für die bekannte Zieladresse `https://www.ethics.at`.

## Technische Umsetzung

Das Projekt bleibt bewusst ohne Datenbank, Server, Tracking, Nutzerkonto und Drittanbieter-Embed. Es wird als valides statisches HTML, CSS und JavaScript in `public/` ausgeliefert. Das minimiert Datenschutz- und Wartungsaufwand. Die Karte wird lokal aus einem JavaScript-Datensatz gerendert; alle Interaktionen funktionieren zusätzlich über semantische Buttons, Tastatur und eine Detailansicht. `history/source-2026-10-27.html` enthält die vollständige textliche Ausgangsaufnahme der bisherigen Ethik-Seiten als Archiv.

Die Veröffentlichung nutzt den statischen Output-Ordner `public` ohne Build-Abhängigkeiten. Damit können die Dateien ohne Paketinstallation geprüft, im Git-Repository nachvollzogen und später auf eine Ziel-Domain umgeschaltet werden.

## Design

Als Stilalternativen wurden betrachtet: Ein ultraminimaler Schweizer Verwaltungsstil (Wahrscheinlichkeit 0,06), ein warmes, bibliothekarisches Journal-Layout (0,07) und ein dunkles Daten-Observatorium (0,05). Gewählt wird ein zugänglicher **humanistischer Feldführer**.

**Design Movement:** Eine zeitgenössische Mischung aus wissenschaftlichem Feldführer, öffentlicher Informationsseite und digitalem Humanismus.

**Core Principles:** Orientierung vor Dekoration; Inhalte bleiben lesbar und überprüfbar; Interaktion erklärt sich selbst; komplexe Themen werden in handhabbare Fragen übersetzt.

**Color Philosophy:** Ein tiefes Tintenblau vermittelt Ruhe und Seriosität. Warmes Papierweiß hält lange Texte angenehm. Moosgrün markiert verantwortliche Handlungsmöglichkeiten, während Koralle nur für Aufmerksamkeit und offene Risiken eingesetzt wird.

**Layout Paradigm:** Eine asymmetrische Inhaltslandschaft mit einer schmalen Wegmarken-Leiste, großen Textfeldern und einer Karte, die nicht als starrer Rasterblock, sondern als erkundbarer Themenraum erscheint.

**Signature Elements:** Eine ethische Kompassrose als kleines Logo, fein gezeichnete Verbindungslinien in der Karte und wiederkehrende „Frage zuerst“-Karten, die aus einem abstrakten Wert eine konkrete Handlungssituation machen.

**Interaction Philosophy:** Jede Interaktion führt zu einer verständlichen nächsten Frage. Die Kartenansicht liefert dieselben Informationen wie eine Liste; Filter, Suche und Direktsprünge erfordern keine versteckten Gesten.

**Animation:** Kurze, reduzierte Übergänge für Details und Filterzustände. Bei `prefers-reduced-motion` werden Bewegungen vollständig reduziert. Keine automatisch laufenden oder ablenkenden Animationen.

**Typography System:** System-Schriftstapel für schnelle und datensparsame Darstellung. `Georgia` dient als ruhige Leseschrift für längere Einordnungen; eine klare Sans-Serif strukturiert Navigation, Karten und Metadaten.

**Brand Essence:** ethics.at macht ethische Orientierung im digitalen Alltag nachvollziehbar und anwendbar. Persönlichkeitsmerkmale: sorgfältig, zugänglich, handlungsorientiert.

**Brand Voice:** Sachlich und einladend, ohne Belehrung. Beispiele: „Eine Frage kann der Anfang einer verantwortlichen Entscheidung sein.“ und „Erkennen, abwägen, dokumentieren – mit Blick auf Menschen und Folgen.“

**Wordmark & Logo:** Eine reduzierte Kompassrose mit einem offenen Nordpunkt neben dem Wortzeichen `ethics.at`; der offene Punkt steht für prüfbare, weiterentwickelbare Orientierung.

**Signature Brand Color:** `#1F5C54` – ein tiefes, gedämpftes Orientierungsgrün.

## Projektstruktur

- `public/index.html`: Startseite.
- `public/ethik-karte/index.html`: interaktive Risikokarte.
- `public/ressourcen/index.html`: kuratierte Ressourcen.
- `public/digitaler-humanismus/index.html`: Grundlagen und Quellen.
- `public/projekte/index.html`: externe Projektvernetzung.
- `public/historie/index.html`: Versionshistorie.
- `public/history/source-2026-10-27.html`: vollständige textliche Archivaufnahme der heutigen Website.
- `public/impressum/index.html`: Anbieterinformationen.
- `public/assets/site.css` und `public/assets/site.js`: gemeinsame Gestaltung, Navigation und Karteninteraktion.
- `public/manus-routes.json`, `public/robots.txt`, `public/sitemap.xml`: Routen- und Suchmaschinen-Dateien.
- `TODO.md`: ergebnisorientierte Umsetzungsstände.

## Quellen- und Linkpflege

Interne Google-Sites-URLs werden durch dauerhafte Routen der neuen Website ersetzt. Google-Weiterleitungs-URLs werden zu direkten Zielen aufgelöst. Nicht mehr aktuelle oder unpassende Links wie die absichtlich nicht vorhandene Seite und der derzeit nicht erreichbare YouTube-Kanal werden nicht übernommen. Eine aktuelle IBM-ERP-URL kann auf den bereits erreichbaren Zielpfad `https://www.ibm.com/de-de/think/topics/enterprise-resource-planning` aktualisiert werden; Quellen mit Zugriffsschutz werden als solche nicht zur Voraussetzung der Verständlichkeit gemacht.

Nach Fertigstellung wird das Projekt als eigenständiges privates GitHub-Repository angebunden. Die Plattform fordert dazu die notwendige Eigentümerbestätigung an; ohne diese Bestätigung verbleibt der kanonische Quellcode zunächst im Manus-verwalteten Repository.

## Erweiterung nach Nutzerfeedback: Karten, KI-Transparenz und Ethik-Labor

Die Kartenknoten der Ethik-Karte werden für mittlere und kleine Displaybreiten vergrößert, mit deutschem Zeilenumbruch (`hyphens: auto`) und kontrolliertem Wortumbruch versehen. Die Kartenfläche wächst an diesen Breakpoints mit, damit die Inhalte weder überstehen noch andere Knoten überlagern.

Die Transparenzseite erklärt sichtbar die KI-unterstützte Erstellung von Struktur, Design und Technik sowie die menschliche redaktionelle Prüfung. Das Ethik-Labor überführt ausgewählte Arbeitsstände aus dem verbundenen Notion in kurze öffentliche Projektkarten. Es kennzeichnet Virtual User AI/Ethics4All als Konzept, Ethical Debt in ERP als unveröffentlichten Forschungsstand, Medizinethik & HCI als Diskussionskonzept, Ethik-DB/Informed Consent und Wattlize als Prototypen sowie HCDIS/CoolWebToday als Konzept. Private Notion-URLs bleiben private Quellen; die öffentliche Website verlinkt stattdessen nur belastbare öffentliche Zielseiten.

## Erweiterung nach Nutzerfeedback: README und Rechtsangaben

Das Repository erhält ein README mit Entwicklungsweg, Routen, SEO-Dokumenten und einem klaren Rechts- und Datenschutzstatus. Das Impressum wird anhand der öffentlich vorhandenen Angaben um die zuständige Gewerbebehörde, Kammerzugehörigkeit, einschlägige Rechtsvorschriften und den Link zum GISA ergänzt. Eine eigenständige Datenschutzerklärung ist von jedem Footer aus erreichbar. Sie dokumentiert den geprüften, statischen Umfang ohne Formulare, Analytics, Drittanbieter-Embeds oder im Quellcode gesetzte Cookies.

Vor einer produktiven Domainumschaltung sind der tatsächliche Hosting-/CDN-Anbieter, Auftragsverarbeitung, Speicherort, Serverprotokollkategorien, Löschfrist, Empfänger, mögliche Drittlandübermittlungen und eine allenfalls vorhandene UID durch den Betreiber zu bestätigen. Ohne diese Tatsachen wird keine vollständige Produktions-Datenschutzerklärung behauptet.

## Erweiterung nach Nutzerfeedback: GitHub-Pages-Auslieferung

Die statischen Dateien bleiben im bestehenden Ordner `public/`, damit die lokale Vorschau und die Manus-Build-Konfiguration unverändert bleiben. Ein versionierter GitHub-Actions-Workflow lädt genau diesen Ordner als Pages-Artefakt hoch und veröffentlicht ihn. Die GitHub-Pages-Quelle wird auf „GitHub Actions“ umgestellt; eine Wurzel-Veröffentlichung des Repositorys wäre falsch, weil `index.html` nicht im Root, sondern in `public/` liegt. Die Custom Domain `ethics.at` wird in GitHub Pages beibehalten; DNS- und Zertifikatsstatus werden erst nach erfolgreicher Actions-Auslieferung als live bestätigt.

## Erweiterung nach Nutzerfeedback: SEO- und KI-Suchoptimierung

Alle indexierbaren Hauptseiten erhalten suchintention-spezifische Titel und Beschreibungen innerhalb der dokumentierten Panel-Richtwerte, 3–8 relevante Meta-Keywords, `author`- und `robots`-Metadaten, vollständige Open-Graph- und Twitter-Card-Angaben sowie eine eindeutige Canonical-URL auf `https://www.ethics.at`. Die Inhalte bleiben als vollständiges HTML ohne JavaScript-Ausführung sichtbar.

Je Route wird ein valides JSON-LD-Dokument mit `WebPage` bzw. passendem spezifischem Seitentyp und `BreadcrumbList` hinterlegt. Die Startseite beschreibt zusätzlich Website und Herausgeber; Ethik-Karte, Projekte und Ethik-Labor enthalten nur dort strukturierte Listen, wo die benannten Inhalte tatsächlich auf der Seite vorhanden sind. Keine privaten Notion-URLs oder nicht belegten Leistungsversprechen gelangen in die strukturierten Daten.

`sitemap.xml` führt ausschließlich indexierbare Seiten mit aktuellem Änderungsdatum. Historische Rohaufnahme und die bisherigen Weiterleitungsrouten werden über `noindex,follow` von der Indexierung ausgenommen. `llms.txt` bietet eine klar gegliederte, menschen- und KI-lesbare Inhaltslandkarte mit den kanonischen öffentlichen URLs; der globale Crawlerzugang bleibt über `robots.txt` offen.

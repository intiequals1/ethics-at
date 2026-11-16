# Änderungsprotokoll

Die öffentliche Fassung dieser Einträge steht auf der Seite `/historie/`.

## 2026-11-16 – Datenschutzerklärung an den Live-Betrieb angepasst, Datenschutzhinweis

### Was geändert wurde

- `public/datenschutz/`:
  - „Technische Auslieferung und Serverprotokolle“ nennt jetzt GitHub Pages (GitHub, Inc., USA), die Rechtsgrundlage, die Übermittlung in die USA auf Grundlage des EU-US Data Privacy Framework und einen Link zur Datenschutzerklärung von GitHub. Die Formulierung, Hoster und Löschfristen müssten „vor der produktiven Domainumschaltung“ ergänzt werden und die Erklärung sei ein „Entwicklungsstand“, wurde entfernt.
  - „Cookies, Tracking und externe Einbindungen“ beschreibt den geprüften Live-Zustand: keine Cookies, kein Tracking, keine Drittinhalte, keine externen Schriftarten. Der Satz „kein Cookie-Banner vorgesehen“ ist entfallen, weil es jetzt einen Hinweis gibt.
  - Neuer Abschnitt „Datenschutzhinweis“: Zweck, Schlüssel, Speicherdauer, Rechtsgrundlage § 165 Abs. 3 TKG 2021.
  - Stand 16. November 2026, `dateModified` im JSON-LD angepasst.
- `public/impressum/`: überholter Satz zum späteren Abgleich der Hosting-Angaben entfernt, Stand 16. November 2026.
- `public/assets/site.js`, `public/assets/site.css`: Datenschutzhinweis am unteren Rand, ohne Einwilligungsabfrage. „Verstanden“ speichert im localStorage `ethicsat.datenschutzhinweis.v1` = `geschlossen`.
- `public/historie/`: öffentlicher Eintrag zum 16.11.2026.
- Root-Auslieferung mit `scripts/sync_github_pages_root.py` synchronisiert.
- `README.md`, `TODO.md`: Stand nachgetragen.

### Warum

- Am 16.11.2026 wurden alle eigenen Websites live geprüft (Cookies, Browser-Speicher, angefragte Hosts). Anlass war, dass dangulea.at Schriftarten bis dahin von Google-Servern geladen hatte.
- Technisch war ethics.at sauber: nur Anfragen an ethics.at, keine Cookies, kein Browser-Speicher, keine Drittinhalte.
- Die Datenschutzerklärung bezeichnete sich aber selbst als Entwicklungsstand und ließ den Hosting-Anbieter offen, obwohl die Seite öffentlich über GitHub Pages ausgeliefert wird (Antwort-Header `server: GitHub.com`). Art. 13 DSGVO verlangt, Empfänger und Drittlandübermittlungen zu nennen. Eine Erklärung, die sich selbst für unvollständig erklärt, erfüllt das im laufenden Betrieb nicht.
- Der Datenschutzhinweis wurde auf Wunsch des Betreibers für alle eigenen Seiten einheitlich eingeführt. Eine Einwilligung wird bewusst nicht abgefragt, weil die Seite nichts einsetzt, das eine erfordert. Das Merken des Schließens ist in der Datenschutzerklärung offengelegt.
- Die Historie-Seite sagt zu, Funktionsänderungen dort mit Datum zu ergänzen; deshalb steht die Änderung auch öffentlich unter `/historie/`.

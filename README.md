# ethics.at

Statische, deutschsprachige Wissenswebsite für Ethik, verantwortungsvolle KI und Digitalen Humanismus. Die Website stellt Grundlagen, eine zugängliche Ethik-Karte, kuratierte Ressourcen, transparente Projektstände und eine nachvollziehbare Versionshistorie bereit.

## Lokale Vorschau

Die Website benötigt keinen Build-Schritt und keine Paketinstallation. Im Projektverzeichnis startet folgende Anweisung eine statische Vorschau auf Port 3000:

```bash
python3 -m http.server 3000 --directory public --bind 0.0.0.0
```

Die Seitenrouten stehen in `public/manus-routes.json`. Der veröffentlichte statische Output ist `public/`.

## Wichtige Inhalte

Die Startseite befindet sich in `public/index.html`. Die Ethik-Karte liegt unter `public/ethik-karte/`; ihre zugängliche Interaktion wird durch `public/assets/site.js` ergänzt, während die wesentlichen Inhalte bereits im HTML vorhanden bleiben. Inhalte zu Quellen, Digitalem Humanismus, Projekten, Ethik-Labor, KI-Transparenz, Historie und Impressum haben jeweils eigene statische Routen.

Suchmaschinen- und KI-Lesesysteme erhalten je indexierbarer Seite eindeutige Titel, Beschreibung, Canonical-URL, Open-Graph- und Twitter-Metadaten sowie JSON-LD. `public/sitemap.xml`, `public/robots.txt` und `public/llms.txt` bilden die öffentliche Inhaltslandkarte. Historische Rohaufnahmen und frühere Weiterleitungen sind absichtlich `noindex,follow`.

## Rechtliche Angaben und Datenschutz

`public/impressum/` bündelt die vorhandenen Angaben zum Diensteanbieter, Medieninhaber, Kontakt, Gewerbe, Firmenbuchstatus, Aufsichtsbehörde, Kammerzugehörigkeit, Rechtsvorschriften und zur Blattlinie. Die verwendeten GISA-Nummern stammen aus den bisherigen öffentlichen Anbieterangaben; GISA ist für nicht im Firmenbuch eingetragene Einzelunternehmen die maßgebliche authentische Quelle für die Gewerbedaten.

`public/datenschutz/` dokumentiert den aktuellen technischen Umfang: keine Formulare, keine Analytics, keine Drittanbieter-Embeds und kein im Quellcode gesetztes oder ausgelesenes Cookie. Ein Cookie-Banner ist dafür nicht vorgesehen. Die Seite weist zugleich ausdrücklich darauf hin, welche Betriebsdaten vor einer produktiven Veröffentlichung noch bestätigt werden müssen.

Vor der produktiven Domainumschaltung sind diese Angaben durch den Betreiber zu prüfen und in der Datenschutzerklärung zu ergänzen: konkreter Hosting-/CDN-Anbieter, Auftragsverarbeitung, Standort und mögliche Drittlandübermittlungen, tatsächlich gespeicherte Server-Logdaten und deren Löschfrist sowie eine vorhandene UID. Bei neuen Analyse-, Karten-, Video-, Social- oder Formularfunktionen ist die Datenschutzprüfung einschließlich einer erforderlichen Einwilligung vor dem Einbau zu wiederholen.

Die Umsetzung ist keine individuelle Rechtsberatung. Maßgebliche Orientierung geben die [WKO-Hinweise zu ECG-Informationspflichten](https://www.wko.at/internetrecht/informationspflichten-nach-dem-e-commerce-gesetz--dem-unte), die [WKO-Übersicht zum Website-Impressum](https://www.wko.at/internetrecht/website-impressum), die [Datenschutzbehörde zu Cookies](https://dsb.gv.at/faqs/datenschutz-cookies), [Artikel 13 DSGVO](https://eur-lex.europa.eu/legal-content/DE-EN-PL/TXT/?uri=CELEX:32016R0679) und das [RIS](https://www.ris.bka.gv.at/).

## Repository und Veröffentlichung

Das kanonische Repository ist `intiequals1/ethics-at`. Die Entwicklungs- und Manus-Auslieferungsquelle bleibt `public/`. GitHub Pages ist derzeit auf `main` mit dem Repository-Wurzelverzeichnis eingestellt; deshalb spiegelt `scripts/sync_github_pages_root.py` ausschließlich die statischen Dateien aus `public/` in die Root-Auslieferung. Das Skript wird nach jeder Änderung unter `public/` ausgeführt und sein Ergebnis gemeinsam committed.

```bash
python3 scripts/sync_github_pages_root.py
```

`.nojekyll` stellt sicher, dass GitHub Pages die statischen Dateien unverändert ausliefert. Die Datei `CNAME` dokumentiert die gewünschte Domain; die Domain selbst bleibt in den GitHub-Pages-Einstellungen hinterlegt. Nach DNS-Änderungen kann die TLS-Ausstellung bis zu 24 Stunden dauern. Änderungen erfolgen auf `main`, werden nach einem statischen Routen- und Metadatencheck committed und auf das Repository gepusht. Der aktuelle Arbeitsbaum sollte vor einer Änderung mit `git pull --ff-only origin main` aktualisiert werden, sofern er sauber ist.

# DSH Reader

[English](README.md) · [简体中文](README.zh-CN.md) · **Deutsch**

**[Installation & Anleitung](docs/INSTALL.de.md)** · **[ZIP herunterladen](https://github.com/Popipot/DSH-Reading-Plugin/archive/refs/heads/main.zip)** · **[Verbesserung vorschlagen](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=feature_request.yml)** · **[Leistungsproblem melden](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=performance.yml)**

Ein Lesebereich in **DeepSeek Harness** für Fachliteratur und Bücher: lokale Bibliothek, PDF- und E-Book-Anzeige, chinesische Übersetzungen, Anmerkungen und kontextbezogene KI-Unterstützung.

> **Schnellinstallation:** In DSH **Plugins → Add plugin** öffnen, die folgende Adresse einfügen, installieren und **dsh-reader** aktivieren. DSH bei entsprechender Aufforderung vollständig beenden und neu starten. Anschließend **阅读** (Lesen) in der Seitenleiste öffnen.
>
> `github:Popipot/DSH-Reading-Plugin#main`
>
> [Schritt-für-Schritt-Anleitung](docs/INSTALL.de.md) · [DeepSeek Harness herunterladen](https://www.deepseek.com/harness/en/) · [Fehler & Vorschläge](https://github.com/Popipot/DSH-Reading-Plugin/issues/new/choose) · [csty341@gmail.com](mailto:csty341@gmail.com)

![Bibliothek mit der derzeitigen chinesischen Oberfläche](docs/v3-library-covers.png)

## Funktionen

| Funktion | Möglichkeiten |
| --- | --- |
| Formate | PDF, EPUB, MOBI/AZW/AZW3, TXT, Markdown und HTML lesen. |
| Lokale Bibliothek | Suchen, Bücher/Fachartikel/Dokumente einordnen, Cover anzeigen und weiterlesen. |
| PDF-Anzeige | Scrollen oder horizontal umblättern, zoomen, Seitenbreite/ganze Seite anpassen, Seiten anspringen und Text auswählen. |
| PDF-Übersetzung | Feste chinesische Übersetzungsspalte mit Absatzverknüpfung, Glossar, Pause/Wiederholung und lokalem Cache. |
| E-Books | Kapitelverzeichnis, anpassbare Typografie, horizontale Seiten und Blätteranimationen. |
| Notizen und KI | Markierungen, Unterstreichungen, Notizzettel, Übersetzung einer Auswahl, Fragen im Kontext und Google/Google Scholar. |
| Darstellung | Schrift, Abstände, Textbreite, Helligkeit, Hintergrund und immersives Lesen anpassen. |
| Öffentliche Quellen | Unterstützte direkte Dateilinks aus öffentlichen Buchsammlungen und Open-Access-Quellen importieren. |

**Sprachumfang:** Projektübersicht und Installationsanleitungen gibt es auf Englisch, Chinesisch und Deutsch. Die Reader-Oberfläche ist derzeit überwiegend chinesisch; Dokumente werden automatisch ins **vereinfachte Chinesisch** übersetzt. Eine vollständige deutsche/englische Oberfläche und frei wählbare Übersetzungszielsprachen sind noch nicht implementiert.

## Installation

Die [Installationsanleitung](docs/INSTALL.de.md) beschreibt Desktop, CLI/Web, lokale Entwicklung, Aktualisierungen und Fehlerbehebung. Die Build-Dateien für eine reguläre GitHub-Installation sind enthalten.

| Methode | Adresse oder Aktion |
| --- | --- |
| DSH-Pluginverwaltung — empfohlen | **Plugins → Add plugin** → `github:Popipot/DSH-Reading-Plugin#main` |
| Quellcode herunterladen | [Quellcode einschließlich Build-Dateien herunterladen](https://github.com/Popipot/DSH-Reading-Plugin/archive/refs/heads/main.zip) |
| CLI-verwaltetes Web-Profil | Folgenden Befehl ausführen und die betreffende Web-Instanz neu starten. |

```sh
dsh plugin --profile web add "github:Popipot/DSH-Reading-Plugin#main"
```

Für Desktop die integrierte Pluginverwaltung verwenden. Eine Installation im Profil `web` installiert das Plugin nicht im separaten Desktop-Profil.

## Erste Schritte

1. **阅读** (Lesen) in der DSH-Seitenleiste öffnen.
2. Eine unterstützte Datei in die Bibliothek ziehen oder **导入文档** (Dokument importieren) wählen.
3. Das Dokument öffnen und oben zwischen Scrollen und horizontalem Umblättern wechseln.
4. Bei Bedarf **实时翻译** (Live-Übersetzung) aktivieren. Standardmäßig ist sie ausgeschaltet.
5. Text zum Übersetzen, Markieren, Fragenstellen oder Suchen auswählen. Lesepositionen und Anmerkungen werden lokal gespeichert.

Die PDF-Übersetzungsspalte scrollt unabhängig und verändert das Originallayout nicht. Sie bietet Absatzverknüpfungen, Glossar, Schriftgröße, Wiederholungen und optionale Vorübersetzung der nächsten Seite. Bei E-Books mit fließendem Layout stehen Übersetzungen unter den Absätzen.

![PDF im horizontalen Lesemodus](docs/v10-pdf-book.png)

Weitere bebilderte Hinweise: [ausführliche chinesische Anleitung](docs/USER_GUIDE.zh-CN.md).


Animationen für Nicht-PDF-Dateien verwenden zwei deckende Seitenansichten: horizontales Verschieben (250 ms), Überdecken einer ruhenden Seite (300 ms) und weiches Falten ab der Seitenecke (500 ms). Bei reduzierter Bewegung oder außergewöhnlich großen Inhaltsblöcken erfolgt der Seitenwechsel sofort. Faltgeometrie: [StPageFlip](https://github.com/Nodlik/StPageFlip), [MIT-Hinweis](LICENSES/StPageFlip.txt).

## PDF-Leistung

Analyse und Zeichnen laufen, soweit unterstützt, in separaten Workern. Lokale Dateien werden bedarfsgerecht abschnittsweise gelesen; nahe Seiten werden virtualisiert. Vorschaubilder werden verfeinert, zuletzt gelesene Seiten in einem begrenzten Bildcache gehalten. Die Cover-Erstellung stoppt beim Öffnen des Readers.

Die aktuelle Implementierung hat **185 Tests**, Browserprüfungen für PDFs, Übersetzung und fünf Textformate sowie Leistungstests mit komplexen Dokumenten bestanden. Das vorhandene Floyd-Lehrbuch mit 1.029 Seiten wurde auch direkt in DSH geprüft. Ergebnisse hängen von Datei, Hardware und Host ab; sie sind kein Adobe-Vergleich auf demselben Rechner und keine Garantie für verzögerungsfreie Darstellung jeder PDF-Datei.

Entwicklung und Messgrenzen: [OPTIMIZATION.md, Abschnitt 12](OPTIMIZATION.md#12-pdf-性能方案-a双-worker随机读取与分级缓存2026-11-06) (Chinesisch).

## Datenschutz und Grenzen

- Dokumente, Anmerkungen, Lesepositionen und Übersetzungscaches liegen lokal in IndexedDB/localStorage. Öffentliche Importe werden über den lokalen DSH-Host heruntergeladen.
- Übersetzung und KI senden relevante Textstellen, begrenzten Kontext und gegebenenfalls das Glossar an das in DSH konfigurierte Modell. Die Vorübersetzung sendet auch Text der nächsten Seite. Modellaufrufe können Kosten verursachen.
- Gescannte PDFs lassen sich anzeigen; Textauswahl und Übersetzung benötigen eine vorhandene Textebene. OCR ist nicht enthalten.
- DRM-E-Books werden nicht unterstützt; manche festen oder vertikalen Layouts werden als fließender Text dargestellt.
- Layoutgetreuer Export übersetzter PDFs und Export von Anmerkungen sind nicht enthalten. Beim Löschen lokaler Website-Daten gehen Bibliothek und Einstellungen verloren.

## Feedback

**Verbesserungsvorschläge und Berichte auf Deutsch, Englisch oder Chinesisch sind willkommen.**

| Anliegen | Anlaufstelle |
| --- | --- |
| Langsames Öffnen, Ruckeln, Speicherverbrauch oder PDF-Darstellung | [Leistung & Optimierung](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=performance.yml) |
| Reproduzierbare Fehler, leere Seiten oder Probleme beim Umblättern | [Fehler melden](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=bug_report.yml) |
| Neue Funktionen, Leseabläufe oder bessere Bedienbarkeit | [Funktion vorschlagen](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=feature_request.yml) |
| Vorhandene Berichte und Diskussionen | [Issues ansehen](https://github.com/Popipot/DSH-Reading-Plugin/issues) |

Bitte DSH-/Plugin-Versionen, Betriebssystem, Reproduktionsschritte sowie erwartetes und tatsächliches Verhalten angeben. Bei Leistungsproblemen zusätzlich Dateigröße, Seitenzahl, Lesemodus und Verhalten ohne Übersetzung nennen. Kleine öffentliche oder anonymisierte Beispiele statt privater Dokumente verwenden.

Hinweise zu Beiträgen und Prüfungen: [CONTRIBUTING.md](CONTRIBUTING.md) (Englisch).

## Entwicklung

Node.js-Anforderung laut [package.json](package.json): `^22.19.0 || >=24.0.0`.

```sh
git clone https://github.com/Popipot/DSH-Reading-Plugin.git
cd DSH-Reading-Plugin
npm ci
npm run build
npm test
npm run test:pdf-browser
npm run test:flow-browser
npm run test:flow-animations
npm run test:translation-browser
npm run test:pdf-performance -- --hidpi
```

Browserprüfungen verwenden ein separates Chrome-Profil; bei Bedarf `CHROME_PATH` setzen. Übersetzungstests verwenden einen lokalen simulierten Dienst. Berichte liegen unter `output/playwright/` und werden nicht eingecheckt. `npm run test:pdf-performance -- "/pfad/zum/dokument.pdf"` unterstützt beliebige Seitenzahlen; der separate Standardtest für PDF-Navigation erwartet beim Ersetzen seiner Beispieldatei mindestens 1.029 Seiten.

Quellcode: `web/src/` (Reader/Parser), `lib/` (Host-Routen), `scripts/` und `tests/` (Build/Tests). Fertige Dateien: `client/client.js` und `dist/reader-assets/`. Schnittstellen: [CONTRACTS.md](CONTRACTS.md).

## Kontakt

**E-Mail: [csty341@gmail.com](mailto:csty341@gmail.com)**

Für öffentliche Fehlerberichte und Ideen bitte GitHub Issues nutzen, damit andere die Diskussion verfolgen können. Direkter Kontakt ist auch per E-Mail möglich.

## Lizenz

[MIT](LICENSE). Enthaltene Ressourcen Dritter behalten ihre eigenen Lizenzhinweise.

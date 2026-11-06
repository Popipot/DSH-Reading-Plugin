# DSH Reader installieren

[English](INSTALL.en.md) · [简体中文](INSTALL.zh-CN.md) · **Deutsch** · [Projektübersicht](../README.de.md)

**[ZIP herunterladen](https://github.com/Popipot/DSH-Reading-Plugin/archive/refs/heads/main.zip)** · **[DeepSeek Harness herunterladen](https://www.deepseek.com/harness/en/)** · **[Hilfe zur Installation](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=bug_report.yml)**

Installationsadresse:

```text
github:Popipot/DSH-Reading-Plugin#main
```

Diese Adresse installiert den aktuellen Branch `main`. Für einen bestimmten Stand `main` durch einen Commit-SHA ersetzen. Der Paketname in DSH lautet **dsh-reader**. Browsermodul und PDF-Laufzeitdateien sind enthalten.

## 1. Desktop: über DSH installieren — empfohlen

1. [DeepSeek Harness](https://www.deepseek.com/harness/en/) installieren und öffnen.
2. **Plugins → Add plugin** in der Seitenleiste öffnen. Auf Chinesisch heißen die Einträge **插件 → 添加插件**. Falls ein Menü erscheint, die Installation eines Drittanbieter-Plugins wählen.
3. `github:Popipot/DSH-Reading-Plugin#main` in das Feld für Paket- oder Git-Adressen einfügen.
4. Paketinformationen und Installationshinweis prüfen, dann **Install** wählen.
5. Nach Abschluss **Enable now** wählen oder **dsh-reader** in der Liste installierter Plugins aktivieren.
6. Falls ein Neustart erforderlich ist, DSH vollständig beenden und erneut öffnen. Das Schließen des Fensters kann die Anwendung im Infobereich weiterlaufen lassen.
7. **阅读** (Lesen) in der Seitenleiste öffnen und ein Dokument importieren.

Die GitHub-Installation benötigt Zugriff auf das Repository. Falls der Installer Git vermisst, Git bereitstellen. Ein npm-Spiegel ersetzt den Zugriff auf das Git-Repository nicht.

## 2. CLI-verwaltetes Web-Profil

Diese Methode gilt für eine durch die DSH-CLI verwaltete Web-Instanz. Zunächst die Befehle prüfen:

```sh
dsh --version
git --version
dsh plugin --profile web add "github:Popipot/DSH-Reading-Plugin#main"
```

Die Web-Instanz dieses Profils neu starten, den Browser aktualisieren und **dsh-reader** gegebenenfalls aktivieren. `web` durch den eigenen Web-Profilnamen ersetzen.

**Desktop und Web verwenden getrennte Profile.** Die Installation in `web` fügt das Plugin nicht zu Desktop hinzu. Für Desktop die Pluginverwaltung nutzen. Die CLI-Unterstützung hängt von der DSH-Version ab: Neuere mit Desktop gelieferte CLIs können dessen initialisiertes Profil bei vollständig beendeter Anwendung verwalten; ältere Builds oder eine separat installierte CLI können dies ablehnen. Den [offiziellen Desktop-Hinweisen](https://github.com/deepseek-ai/deepseek-harness/blob/master/apps/desktop/README.md#bundled-command-runtime) der eigenen Version folgen und das Desktop-Profil nicht manuell ändern.

## 3. Lokaler Quellcode oder Entwicklungsstand

Repository klonen oder [ZIP herunterladen und entpacken](https://github.com/Popipot/DSH-Reading-Plugin/archive/refs/heads/main.zip). Das Verzeichnis an einem festen Ort belassen: Eine verknüpfte Installation liest weiterhin daraus.

```sh
git clone https://github.com/Popipot/DSH-Reading-Plugin.git
cd DSH-Reading-Plugin
```

In **Add plugin** den tatsächlichen **absoluten Verzeichnispfad** angeben. Für ein CLI-verwaltetes Web-Profil eine lokale Verknüpfung verwenden und den Beispielpfad ersetzen:

```sh
dsh plugin --profile web add "link:/absolute/path/to/DSH-Reading-Plugin"
```

Beispiel für Windows PowerShell:

```powershell
$readerPath = (Get-Location).Path
dsh plugin --profile web add "link:$readerPath"
```

Nach Quellcodeänderungen mit Node.js `^22.19.0 || >=24.0.0` neu bauen:

```sh
npm ci
npm run build
npm test
```

Danach die DSH-Instanz neu starten, die dieses Plugin lädt.

## 4. Installation prüfen und lesen

- **阅读** erscheint in der Seitenleiste und öffnet die lokale Bibliothek.
- PDF, EPUB, MOBI/AZW/AZW3, TXT, Markdown oder HTML importieren; zunächst eine kleine Datei ausprobieren.
- In einer PDF Textauswahl, Seitennavigation und Seitenbreite/ganze Seite prüfen.
- Die Live-Übersetzung ist zunächst ausgeschaltet. **实时翻译** aktiviert die chinesische Übersetzung mit dem DSH-Standardmodell; Modellaufrufe können Kosten verursachen.
- Die Dokumentation ist dreisprachig; die derzeitige Reader-Oberfläche ist überwiegend chinesisch und die Übersetzung erfolgt ins vereinfachte Chinesisch.

## 5. Aktualisieren

Bei einem verknüpften Checkout `git pull --ff-only` ausführen. Nach Änderungen an Quellcode oder Abhängigkeiten `npm ci` und `npm run build` ausführen und DSH neu starten.

Bei einer GitHub-Installation den Update-Ablauf der eigenen DSH-Version verwenden. Wenn Git-Quellen nur durch Entfernen und Neuinstallieren aktualisiert werden können, dieselbe GitHub-Adresse erneut installieren und aktivieren. Wichtige lokale Daten vor Profilwechseln oder dem Löschen von Website-Daten sichern; eine Neuinstallation des Codes ist keine Bibliothekssicherung.

## Fehlerbehebung

| Symptom | Prüfen |
| --- | --- |
| Kein Eintrag zum Lesen | **dsh-reader** in derselben DSH-Instanz/demselben Profil aktivieren und vollständig neu starten. |
| `dsh` nicht gefunden | Desktop-Pluginverwaltung verwenden oder die CLI nach offizieller Anleitung einrichten. |
| Desktop-Profil exklusiv verwaltet/gesperrt | Desktop-Pluginverwaltung nutzen; nicht stattdessen nach Web installieren oder die Sperre umgehen. |
| GitHub-Download fehlgeschlagen | Git und Verbindung zum Repository prüfen; Installationsfehler im Bericht angeben. |
| PDF-Ressourcen/Worker laden nicht | DSH neu starten und das vollständige Plugin einschließlich `client/` und `dist/reader-assets/` neu installieren/bauen. |
| Keine Übersetzung | Live-Übersetzung aktivieren und DSH-Standardmodell prüfen; Scans benötigen eine Textebene. |
| Langsames Lesen/Probleme beim Umblättern | [Leistungsformular](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=performance.yml) mit Dateigröße, Seitenzahl, Lesemodus und Reproduktionsschritten ausfüllen. |

## Hilfe und Quellen

[Fehler melden](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=bug_report.yml) · [Verbesserung vorschlagen](https://github.com/Popipot/DSH-Reading-Plugin/issues/new?template=feature_request.yml) · **[csty341@gmail.com](mailto:csty341@gmail.com)**

Der GUI-Ablauf folgt der [offiziellen Plugin-Manager-Dokumentation](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-plugin-manager/README.md#installing-a-bundle). Die Trennung von Desktop und CLI folgt der [offiziellen Desktop-Dokumentation](https://github.com/deepseek-ai/deepseek-harness/blob/master/apps/desktop/README.md#bundled-command-runtime). Beschriftungen und verfügbare Aktionen können je nach DSH-Version abweichen.

(() => {
  const risks = [
    {
      id: 'datenschutz', no: '01', name: 'Datenschutz', theme: 'Rechte & Daten', color: '#c9574b',
      summary: 'Personenbezogene Daten dürfen nur nachvollziehbar, zweckgebunden und geschützt verarbeitet werden.',
      question: 'Ist klar, welche Daten wofür verarbeitet werden und wer Zugriff hat?',
      consequences: ['Vertrauensverlust bei Betroffenen', 'Rechtliche und finanzielle Risiken', 'Unklare Verantwortlichkeiten im Alltag'],
      measures: ['Datenflüsse dokumentieren und Zugriffe begrenzen', 'Zweck, Rechtsgrundlage und Aufbewahrung prüfen', 'Meldungswege für Datenschutzfragen sichtbar machen']
    },
    {
      id: 'transparenz', no: '02', name: 'Transparenz', theme: 'Entscheidungen', color: '#d7a441',
      summary: 'Entscheidungen, Regeln und automatisierte Bewertungen sollen verständlich und überprüfbar bleiben.',
      question: 'Können Betroffene nachvollziehen, wie eine Entscheidung zustande kommt?',
      consequences: ['Akzeptanzprobleme und Rückfragen', 'Schwierige Fehleranalyse', 'Schwache Rechenschaftspflicht'],
      measures: ['Entscheidungsregeln und Zuständigkeiten dokumentieren', 'Erklärungen in verständlicher Sprache bereitstellen', 'Regelmäßig prüfen, was Menschen tatsächlich nachvollziehen können']
    },
    {
      id: 'fairness', no: '03', name: 'Fairness & Gleichbehandlung', theme: 'Menschen & Teilhabe', color: '#6b7eaf',
      summary: 'Gleiche Fälle sollen gleich behandelt und Verzerrungen in Daten, Prozessen oder Bewertungen erkannt werden.',
      question: 'Benachteiligt der Prozess einzelne Gruppen direkt oder indirekt?',
      consequences: ['Diskriminierung und Ausschluss', 'Verzerrte Entscheidungen', 'Schäden für Mitarbeitende und Organisation'],
      measures: ['Kriterien und Daten auf Verzerrungen prüfen', 'Beschwerde- und Korrekturwege vorsehen', 'Betroffene Perspektiven früh einbeziehen']
    },
    {
      id: 'compliance', no: '04', name: 'Compliance', theme: 'Regeln & Kontrolle', color: '#795548',
      summary: 'Rechtliche, regulatorische und interne Vorgaben brauchen klare Prozesse statt bloßer Formalität.',
      question: 'Sind Regeln im konkreten Arbeitsablauf bekannt, umsetzbar und kontrollierbar?',
      consequences: ['Verstöße gegen Vorgaben', 'Haftungs- und Reputationsrisiken', 'Unsicherheit in Teams'],
      measures: ['Pflichten in Prozessschritte übersetzen', 'Kontrollen risikobasiert planen', 'Abweichungen sicher und ohne Schuldzuweisung meldbar machen']
    },
    {
      id: 'ki', no: '05', name: 'KI-Verantwortung', theme: 'Technologie & Steuerung', color: '#3e7d86',
      summary: 'KI-gestützte Empfehlungen und Automatisierungen brauchen menschliche Verantwortung, Prüfung und Grenzen.',
      question: 'Wer trägt die Verantwortung, wenn die KI-Empfehlung nicht passt?',
      consequences: ['Unkritische Übernahme fehlerhafter Vorschläge', 'Intransparente Verantwortung', 'Fehlende Kontrolle bei risikoreichen Anwendungen'],
      measures: ['Zweck, Risiko und menschliche Entscheidungskompetenz definieren', 'Ergebnisse plausibilisieren und dokumentieren', 'Einsatzgrenzen und Eskalationswege festlegen']
    },
    {
      id: 'nachhaltigkeit', no: '06', name: 'Nachhaltigkeit', theme: 'Folgen & Zukunft', color: '#53825b',
      summary: 'Digitale und finanzielle Entscheidungen sollen ökologische und soziale Folgen über den unmittelbaren Nutzen hinaus berücksichtigen.',
      question: 'Welche langfristigen Folgen entstehen für Ressourcen, Menschen und künftige Handlungsspielräume?',
      consequences: ['Verlagerte ökologische oder soziale Kosten', 'Kurzfristige Optimierung ohne Langzeitblick', 'Unglaubwürdige Nachhaltigkeitsziele'],
      measures: ['Lebenszyklus und Ressourcenbedarf mitbewerten', 'Nachhaltigkeitsziele messbar im Prozess verankern', 'Zielkonflikte offen dokumentieren']
    },
    {
      id: 'integritaet', no: '07', name: 'Integrität', theme: 'Haltung & Kultur', color: '#7c597e',
      summary: 'Verlässlichkeit, Ehrlichkeit und der Umgang mit Interessenkonflikten prägen die Qualität von Entscheidungen.',
      question: 'Können Mitarbeitende Bedenken äußern, ohne negative Folgen befürchten zu müssen?',
      consequences: ['Interessenkonflikte bleiben verdeckt', 'Schwache Fehlerkultur', 'Verlust von Glaubwürdigkeit'],
      measures: ['Interessenkonflikte offenlegen und behandeln', 'Hinweisgeber- und Rückmeldewege stärken', 'Führung als nachvollziehbares Vorbild gestalten']
    },
    {
      id: 'soziale-verantwortung', no: '08', name: 'Soziale Verantwortung', theme: 'Menschen & Teilhabe', color: '#a76545',
      summary: 'Entscheidungen sollen Auswirkungen auf Mitarbeitende, Kund:innen, Lieferketten und Gesellschaft sichtbar machen.',
      question: 'Wer trägt Folgen, die im eigenen Prozess nicht unmittelbar sichtbar sind?',
      consequences: ['Externe Folgen werden übersehen', 'Ungleiche Lastenverteilung', 'Weniger Vertrauen von Anspruchsgruppen'],
      measures: ['Betroffene und Anspruchsgruppen identifizieren', 'Auswirkungen entlang der Wertschöpfung betrachten', 'Abwägungen und Verantwortlichkeiten kommunizieren']
    }
  ];

  function currentPath() {
    return window.location.pathname.replace(/index\.html$/, '').replace(/\/$/, '') || '/';
  }

  function initNavigation() {
    const path = currentPath();
    document.querySelectorAll('[data-nav-link]').forEach((link) => {
      const href = link.getAttribute('href').replace(/\/$/, '') || '/';
      if (href === path) link.setAttribute('aria-current', 'page');
    });
    const toggle = document.querySelector('[data-nav-toggle]');
    const nav = document.querySelector('[data-site-nav]');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.textContent = open ? 'Menü schließen' : 'Menü';
      });
    }
  }

  function createListItem(risk) {
    const article = document.createElement('article');
    article.dataset.riskItem = risk.id;
    article.style.setProperty('--node-color', risk.color);
    article.innerHTML = `<h3>${risk.no} · ${risk.name}</h3><p>${risk.summary}</p><button class="text-link-button" type="button" data-risk-open="${risk.id}" aria-label="Details zu ${risk.name} öffnen">Details öffnen</button>`;
    return article;
  }

  function initEthicsMap() {
    const map = document.querySelector('[data-ethics-map]');
    if (!map) return;
    const nodeRoot = map.querySelector('[data-risk-nodes]');
    const listRoot = document.querySelector('[data-risk-list]');
    const detail = document.querySelector('[data-risk-detail]');
    const search = document.querySelector('[data-risk-search]');
    const filters = document.querySelectorAll('[data-risk-filter]');
    let activeTheme = 'Alle';
    let selectedId = null;

    const themeSet = [...new Set(risks.map((risk) => risk.theme))];
    filters.forEach((button) => {
      if (button.dataset.riskFilter === 'themes') {
        themeSet.forEach((theme) => {
          const chip = document.createElement('button');
          chip.type = 'button'; chip.className = 'filter-chip'; chip.dataset.riskFilter = theme; chip.setAttribute('aria-pressed', 'false'); chip.textContent = theme;
          button.parentElement.insertBefore(chip, button);
        });
        button.remove();
      }
    });

    listRoot.innerHTML = '';
    risks.forEach((risk, index) => {
      const node = document.createElement('button');
      node.type = 'button'; node.className = `risk-node node-${index + 1}`; node.dataset.riskNode = risk.id; node.style.setProperty('--node-color', risk.color);
      node.innerHTML = `<small>${risk.no} · ${risk.theme}</small><strong>${risk.name}</strong>`;
      nodeRoot.appendChild(node);
      listRoot.appendChild(createListItem(risk));
    });

    function matches(risk) {
      const term = (search.value || '').trim().toLocaleLowerCase('de');
      const themeMatch = activeTheme === 'Alle' || risk.theme === activeTheme;
      const content = [risk.name, risk.theme, risk.summary, risk.question, ...risk.consequences, ...risk.measures].join(' ').toLocaleLowerCase('de');
      return themeMatch && (!term || content.includes(term));
    }

    function renderDetails(risk) {
      if (!risk) {
        detail.innerHTML = '<p class="detail-empty">Wählen Sie einen Themenbereich auf der Karte oder in der Liste. Die Details erscheinen hier und bleiben auch mit der Tastatur erreichbar.</p>';
        return;
      }
      const url = new URL(window.location.href);
      url.searchParams.set('thema', risk.id);
      detail.innerHTML = `
        <p class="detail-kicker">${risk.no} · ${risk.theme}</p>
        <h2 id="detail-title" tabindex="-1">${risk.name}</h2>
        <p><strong>Leitfrage:</strong> ${risk.question}</p>
        <h3>Mögliche Folgen</h3>
        <ul>${risk.consequences.map((item) => `<li>${item}</li>`).join('')}</ul>
        <h3>Präventionsansätze</h3>
        <ul>${risk.measures.map((item) => `<li>${item}</li>`).join('')}</ul>
        <button class="button soft" type="button" data-share-risk="${url.toString()}">Direktlink kopieren</button>
        <span class="share-status" data-share-status aria-live="polite"></span>`;
      detail.setAttribute('aria-labelledby', 'detail-title');
      detail.querySelector('[data-share-risk]').addEventListener('click', async (event) => {
        const directLink = event.currentTarget.dataset.shareRisk;
        const status = detail.querySelector('[data-share-status]');
        try {
          if (!navigator.clipboard) throw new Error('Clipboard unavailable');
          await navigator.clipboard.writeText(directLink);
          status.textContent = 'Direktlink wurde kopiert.';
        } catch (_) {
          status.innerHTML = `Direktlink: <a href="${directLink}">${directLink}</a>`;
        }
      });
    }

    function selectRisk(id, focusDetails = false) {
      const risk = risks.find((item) => item.id === id);
      if (!risk) return;
      selectedId = id;
      const url = new URL(window.location.href);
      url.searchParams.set('thema', id);
      history.replaceState({}, '', url);
      document.querySelectorAll('[data-risk-node]').forEach((node) => node.setAttribute('aria-pressed', String(node.dataset.riskNode === id)));
      renderDetails(risk);
      if (focusDetails) detail.querySelector('h2')?.focus({ preventScroll: false });
    }

    function applyFilters() {
      let count = 0;
      risks.forEach((risk) => {
        const visible = matches(risk);
        const node = document.querySelector(`[data-risk-node="${risk.id}"]`);
        const listItem = document.querySelector(`[data-risk-item="${risk.id}"]`);
        node.hidden = !visible;
        listItem.hidden = !visible;
        if (visible) count += 1;
      });
      const countText = document.querySelector('[data-risk-count]');
      countText.textContent = `${count} von ${risks.length} Themen sichtbar`;
      if (selectedId && !matches(risks.find((risk) => risk.id === selectedId))) {
        selectedId = null;
        renderDetails(null);
      }
    }

    nodeRoot.addEventListener('click', (event) => {
      const node = event.target.closest('[data-risk-node]');
      if (node) selectRisk(node.dataset.riskNode, true);
    });
    listRoot.addEventListener('click', (event) => {
      const button = event.target.closest('[data-risk-open]');
      if (button) selectRisk(button.dataset.riskOpen, true);
    });
    document.querySelector('[data-risk-filters]').addEventListener('click', (event) => {
      const button = event.target.closest('[data-risk-filter]');
      if (!button) return;
      activeTheme = button.dataset.riskFilter;
      document.querySelectorAll('[data-risk-filter]').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      applyFilters();
    });
    search.addEventListener('input', applyFilters);

    const initialId = new URLSearchParams(window.location.search).get('thema');
    renderDetails(null);
    applyFilters();
    if (initialId && risks.some((risk) => risk.id === initialId)) selectRisk(initialId);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initEthicsMap();
  });
})();

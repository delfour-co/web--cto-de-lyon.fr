/**
 * Gestion des paramètres d'accessibilité
 */

// Clés pour le localStorage
const STORAGE_KEYS = {
  FONT_SIZE: 'accessibility_font_size',
  FONT_TYPE: 'accessibility_font_type',
  HIGH_CONTRAST: 'accessibility_high_contrast',
  LINE_HEIGHT: 'accessibility_line_height',
  LETTER_SPACING: 'accessibility_letter_spacing',
};

// Valeurs par défaut
const DEFAULT_VALUES = {
  FONT_SIZE: 'normal',
  FONT_TYPE: 'normal',
  HIGH_CONTRAST: false,
  LINE_HEIGHT: 'normal',
  LETTER_SPACING: 'normal',
};

/**
 * Charge les préférences depuis le localStorage
 */
function loadPreferences() {
  return {
    fontSize: localStorage.getItem(STORAGE_KEYS.FONT_SIZE) || DEFAULT_VALUES.FONT_SIZE,
    fontType: localStorage.getItem(STORAGE_KEYS.FONT_TYPE) || DEFAULT_VALUES.FONT_TYPE,
    highContrast: localStorage.getItem(STORAGE_KEYS.HIGH_CONTRAST) === 'true',
    lineHeight: localStorage.getItem(STORAGE_KEYS.LINE_HEIGHT) || DEFAULT_VALUES.LINE_HEIGHT,
    letterSpacing: localStorage.getItem(STORAGE_KEYS.LETTER_SPACING) || DEFAULT_VALUES.LETTER_SPACING,
  };
}

/**
 * Sauvegarde les préférences dans le localStorage
 */
function savePreferences(prefs) {
  localStorage.setItem(STORAGE_KEYS.FONT_SIZE, prefs.fontSize);
  localStorage.setItem(STORAGE_KEYS.FONT_TYPE, prefs.fontType);
  localStorage.setItem(STORAGE_KEYS.HIGH_CONTRAST, prefs.highContrast.toString());
  localStorage.setItem(STORAGE_KEYS.LINE_HEIGHT, prefs.lineHeight);
  localStorage.setItem(STORAGE_KEYS.LETTER_SPACING, prefs.letterSpacing);
}

/**
 * Applique les styles d'accessibilité au document
 */
function applyAccessibilityStyles(prefs) {
  const root = document.documentElement;
  
  // Taille de la police
  const fontSizeMap = {
    small: '0.875rem',
    normal: '1rem',
    large: '1.125rem',
    xlarge: '1.25rem',
  };
  root.style.setProperty('--accessibility-font-size', fontSizeMap[prefs.fontSize] || fontSizeMap.normal);
  
  // Type de police
  if (prefs.fontType === 'dyslexic') {
    root.classList.add('dyslexic-font');
  } else {
    root.classList.remove('dyslexic-font');
  }
  
  // Contraste élevé
  if (prefs.highContrast) {
    root.classList.add('high-contrast');
  } else {
    root.classList.remove('high-contrast');
  }
  
  // Espacement des lignes
  const lineHeightMap = {
    normal: '1.5',
    large: '2',
  };
  root.style.setProperty('--accessibility-line-height', lineHeightMap[prefs.lineHeight] || lineHeightMap.normal);
  
  // Espacement des lettres
  const letterSpacingMap = {
    normal: '0',
    large: '0.1em',
  };
  root.style.setProperty('--accessibility-letter-spacing', letterSpacingMap[prefs.letterSpacing] || letterSpacingMap.normal);
}

/**
 * Met à jour l'interface du panneau selon les préférences
 */
function updateUI(prefs) {
  // Boutons de taille de police
  document.querySelectorAll('.font-size-btn').forEach(btn => {
    if (btn.dataset.fontSize === prefs.fontSize) {
      btn.classList.add('bg-primary-600');
      btn.classList.remove('bg-gray-700');
    } else {
      btn.classList.remove('bg-primary-600');
      btn.classList.add('bg-gray-700');
    }
  });
  
  // Boutons de type de police
  document.querySelectorAll('.font-type-btn').forEach(btn => {
    if (btn.dataset.fontType === prefs.fontType) {
      btn.classList.add('bg-primary-600');
      btn.classList.remove('bg-gray-700');
    } else {
      btn.classList.remove('bg-primary-600');
      btn.classList.add('bg-gray-700');
    }
  });
  
  // Toggle contraste élevé
  const contrastToggle = document.getElementById('high-contrast-toggle');
  if (contrastToggle) {
    contrastToggle.setAttribute('aria-checked', prefs.highContrast.toString());
    const span = contrastToggle.querySelector('span');
    if (prefs.highContrast) {
      contrastToggle.classList.add('bg-primary-600');
      contrastToggle.classList.remove('bg-gray-700');
      span.classList.remove('translate-x-1');
      span.classList.add('translate-x-6');
    } else {
      contrastToggle.classList.remove('bg-primary-600');
      contrastToggle.classList.add('bg-gray-700');
      span.classList.add('translate-x-1');
      span.classList.remove('translate-x-6');
    }
  }
  
  // Boutons d'espacement des lignes
  document.querySelectorAll('.line-height-btn').forEach(btn => {
    if (btn.dataset.lineHeight === prefs.lineHeight) {
      btn.classList.add('bg-primary-600');
      btn.classList.remove('bg-gray-700');
    } else {
      btn.classList.remove('bg-primary-600');
      btn.classList.add('bg-gray-700');
    }
  });
  
  // Boutons d'espacement des lettres
  document.querySelectorAll('.letter-spacing-btn').forEach(btn => {
    if (btn.dataset.letterSpacing === prefs.letterSpacing) {
      btn.classList.add('bg-primary-600');
      btn.classList.remove('bg-gray-700');
    } else {
      btn.classList.remove('bg-primary-600');
      btn.classList.add('bg-gray-700');
    }
  });
}

/**
 * Initialise le panneau d'accessibilité
 */
export function initAccessibility() {
  // Charger les préférences
  let prefs = loadPreferences();
  
  // Appliquer les styles au chargement
  applyAccessibilityStyles(prefs);
  updateUI(prefs);
  
  // Éléments du panneau
  const toggleBtn = document.getElementById('accessibility-toggle');
  const closeBtn = document.getElementById('accessibility-close');
  const menu = document.getElementById('accessibility-menu');
  const resetBtn = document.getElementById('reset-accessibility');
  
  if (!toggleBtn || !closeBtn || !menu || !resetBtn) {
    console.warn('Éléments du panneau d\'accessibilité non trouvés');
    return;
  }
  
  // Ouvrir/fermer le panneau
  toggleBtn.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    toggleBtn.setAttribute('aria-expanded', (!isHidden).toString());
  });
  
  closeBtn.addEventListener('click', () => {
    menu.classList.add('hidden');
    toggleBtn.setAttribute('aria-expanded', 'false');
  });
  
  // Fermer en cliquant en dehors
  document.addEventListener('click', (e) => {
    const panel = document.getElementById('accessibility-panel');
    if (panel && !panel.contains(e.target) && !menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
  
  // Gestion des boutons de taille de police
  document.querySelectorAll('.font-size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      prefs.fontSize = btn.dataset.fontSize;
      savePreferences(prefs);
      applyAccessibilityStyles(prefs);
      updateUI(prefs);
    });
  });
  
  // Gestion des boutons de type de police
  document.querySelectorAll('.font-type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      prefs.fontType = btn.dataset.fontType;
      savePreferences(prefs);
      applyAccessibilityStyles(prefs);
      updateUI(prefs);
    });
  });
  
  // Gestion du toggle contraste élevé
  const contrastToggle = document.getElementById('high-contrast-toggle');
  if (contrastToggle) {
    contrastToggle.addEventListener('click', () => {
      prefs.highContrast = !prefs.highContrast;
      savePreferences(prefs);
      applyAccessibilityStyles(prefs);
      updateUI(prefs);
    });
  }
  
  // Gestion des boutons d'espacement des lignes
  document.querySelectorAll('.line-height-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      prefs.lineHeight = btn.dataset.lineHeight;
      savePreferences(prefs);
      applyAccessibilityStyles(prefs);
      updateUI(prefs);
    });
  });
  
  // Gestion des boutons d'espacement des lettres
  document.querySelectorAll('.letter-spacing-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      prefs.letterSpacing = btn.dataset.letterSpacing;
      savePreferences(prefs);
      applyAccessibilityStyles(prefs);
      updateUI(prefs);
    });
  });
  
  // Réinitialiser
  resetBtn.addEventListener('click', () => {
    prefs = {
      fontSize: DEFAULT_VALUES.FONT_SIZE,
      fontType: DEFAULT_VALUES.FONT_TYPE,
      highContrast: DEFAULT_VALUES.HIGH_CONTRAST,
      lineHeight: DEFAULT_VALUES.LINE_HEIGHT,
      letterSpacing: DEFAULT_VALUES.LETTER_SPACING,
    };
    savePreferences(prefs);
    applyAccessibilityStyles(prefs);
    updateUI(prefs);
  });
}

export interface ThemeConfig {
  id: string;
  name: string;
  description: string;
  workspaceBg: string;
  sidebarBg: string;
  sidebarBorder: string;
  sidebarHover: string;
  cardBg: string;
  accentColor: string;
  accentHover: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  fontTitle: string;
  fontBody: string;
  fontPresetId?: string;
  isCustom?: boolean;
  accentInk?: string;
  secondaryAccent?: string;
}

export interface FontPresetPairing {
  id: string;
  name: string;
  description: string;
  fontTitle: string;
  fontBody: string;
}

export const FONT_PRESET_PAIRINGS: FontPresetPairing[] = [
  {
    id: "modern-studio",
    name: "Modern Studio Sans",
    description: "Clean, contemporary UI sans-serif pairing",
    fontTitle: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    fontBody: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  },
  {
    id: "classic-literary",
    name: "Classic Literary",
    description: "Timeless Georgia serif headings with clean body",
    fontTitle: 'Georgia, Cambria, "Times New Roman", serif',
    fontBody: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  },
  {
    id: "garamond-elegance",
    name: "Garamond Elegance",
    description: "Historic bookmaker serif for titles and prose",
    fontTitle: '"EB Garamond", Garamond, Georgia, serif',
    fontBody: "Georgia, Cambria, serif",
  },
  {
    id: "editorial-newsprint",
    name: "Editorial Newsprint",
    description: "Merriweather editorial headings with clear sans body",
    fontTitle: "Merriweather, Georgia, serif",
    fontBody: "system-ui, -apple-system, sans-serif",
  },
  {
    id: "vintage-typewriter",
    name: "Vintage Typewriter",
    description: "Monospace typewriter aesthetic for mechanical drafting",
    fontTitle: '"Courier New", Courier, monospace',
    fontBody: '"Courier New", Courier, monospace',
  },
  {
    id: "inter-clean",
    name: "Inter Clean & Balanced",
    description: "Crisp modern digital publication typography",
    fontTitle: "Inter, system-ui, sans-serif",
    fontBody: "Inter, system-ui, sans-serif",
  },
];

export const PRESET_THEMES: ThemeConfig[] = [
  {
    id: "weaver-rose",
    name: "Weaver Rose & Gold",
    description:
      "Warm charcoal, dusty rose, and antique gold inspired by Arcaphyte",
    workspaceBg: "#191715",
    sidebarBg: "#201c19",
    sidebarBorder: "#39302c",
    sidebarHover: "#302527",
    cardBg: "#231e1b",
    accentColor: "#764653",
    accentHover: "#895462",
    accentInk: "#e3acba",
    secondaryAccent: "#c5a080",
    textPrimary: "#f2e5db",
    textSecondary: "#c5b1a3",
    textMuted: "#a99586",
    fontTitle: "Georgia, Cambria, serif",
    fontBody: '"Segoe UI", system-ui, sans-serif',
    fontPresetId: "classic-literary",
  },
  ...[
    {
      id: "accessible-deuteranopia",
      name: "Red–green · Deuteranopia",
      accentColor: "#24608a",
      accentHover: "#3074a0",
      accentInk: "#8ecfff",
      secondaryAccent: "#f3cb74",
    },
    {
      id: "accessible-protanopia",
      name: "Red–green · Protanopia",
      accentColor: "#295b85",
      accentHover: "#3873a0",
      accentInk: "#addbff",
      secondaryAccent: "#ffe08a",
    },
    {
      id: "accessible-tritanopia",
      name: "Blue–yellow · Tritanopia",
      accentColor: "#80536b",
      accentHover: "#97647e",
      accentInk: "#ffc9df",
      secondaryAccent: "#95e5d0",
    },
    {
      id: "accessible-monochrome",
      name: "High contrast · Monochrome",
      accentColor: "#555555",
      accentHover: "#707070",
      accentInk: "#ffffff",
      secondaryAccent: "#dddddd",
    },
  ].map((t) => ({
    ...t,
    description:
      "Distinct light and dark surfaces with readable text and labeled controls.",
    workspaceBg: "#121619",
    sidebarBg: "#1c242b",
    sidebarBorder: "#667582",
    sidebarHover: "#313e48",
    cardBg: "#242e36",
    textPrimary: "#ffffff",
    textSecondary: "#e1e7ed",
    textMuted: "#bcc8d1",
    fontTitle: "Georgia, serif",
    fontBody: "system-ui, sans-serif",
  })),
  {
    id: "arcaphyte-midnight",
    name: "Arcaphyte Midnight",
    description: "Deep obsidian void with royal indigo & violet accents",
    workspaceBg: "#09090b",
    sidebarBg: "#121215",
    sidebarBorder: "#27272a",
    sidebarHover: "#1f1f23",
    cardBg: "#18181b",
    accentColor: "#6366f1",
    accentHover: "#4f46e5",
    textPrimary: "#f4f4f5",
    textSecondary: "#a1a1aa",
    textMuted: "#71717a",
    fontTitle: "system-ui, -apple-system, sans-serif",
    fontBody: "system-ui, -apple-system, sans-serif",
    fontPresetId: "modern-studio",
  },
  {
    id: "arcane-parchment",
    name: "Arcane Parchment",
    description: "Warm antique sepia with aged bronze & copper tones",
    workspaceBg: "#1a1714",
    sidebarBg: "#231f1a",
    sidebarBorder: "#3d352c",
    sidebarHover: "#2d2721",
    cardBg: "#26211c",
    accentColor: "#d97706",
    accentHover: "#b45309",
    textPrimary: "#fef3c7",
    textSecondary: "#d5c4a1",
    textMuted: "#928374",
    fontTitle: "Georgia, Cambria, serif",
    fontBody: "system-ui, -apple-system, sans-serif",
    fontPresetId: "classic-literary",
  },
  {
    id: "emerald-forest",
    name: "Emerald Elven Realm",
    description: "Deep moss obsidian with radiant elven emerald & gold",
    workspaceBg: "#091510",
    sidebarBg: "#0f2019",
    sidebarBorder: "#1c3d31",
    sidebarHover: "#152c23",
    cardBg: "#11251d",
    accentColor: "#10b981",
    accentHover: "#059669",
    textPrimary: "#ecfdf5",
    textSecondary: "#a7f3d0",
    textMuted: "#6ee7b7",
    fontTitle: "system-ui, -apple-system, sans-serif",
    fontBody: "system-ui, -apple-system, sans-serif",
    fontPresetId: "modern-studio",
  },
  {
    id: "celestial-royalty",
    name: "Celestial Royalty",
    description: "Midnight sapphire abyss with celestial amethyst & silver",
    workspaceBg: "#0a0d18",
    sidebarBg: "#101627",
    sidebarBorder: "#212d4d",
    sidebarHover: "#172038",
    cardBg: "#131b31",
    accentColor: "#8b5cf6",
    accentHover: "#7c3aed",
    textPrimary: "#f5f3ff",
    textSecondary: "#c4b5fd",
    textMuted: "#8b5cf6",
    fontTitle: "system-ui, -apple-system, sans-serif",
    fontBody: "system-ui, -apple-system, sans-serif",
    fontPresetId: "modern-studio",
  },
  {
    id: "crimson-keep",
    name: "Crimson Keep",
    description: "Dark gothic slate with embers of ruby & blood rose",
    workspaceBg: "#140c0e",
    sidebarBg: "#1f1316",
    sidebarBorder: "#3f1f27",
    sidebarHover: "#29181d",
    cardBg: "#24151a",
    accentColor: "#f43f5e",
    accentHover: "#e11d48",
    textPrimary: "#fff1f2",
    textSecondary: "#fecdd3",
    textMuted: "#fda4af",
    fontTitle: "Georgia, Cambria, serif",
    fontBody: "system-ui, -apple-system, sans-serif",
    fontPresetId: "classic-literary",
  },
  {
    id: "cyberpunk-neon",
    name: "Cyberpunk Neon",
    description: "Vivid futuristic dark void with radiant cyan & hot magenta",
    workspaceBg: "#050508",
    sidebarBg: "#0d0d15",
    sidebarBorder: "#1f1f33",
    sidebarHover: "#171725",
    cardBg: "#11111c",
    accentColor: "#06b6d4",
    accentHover: "#0891b2",
    textPrimary: "#ecfeff",
    textSecondary: "#a5f3fc",
    textMuted: "#67e8f9",
    fontTitle: "system-ui, -apple-system, sans-serif",
    fontBody: "monospace, sans-serif",
    fontPresetId: "vintage-typewriter",
  },
  {
    id: "classic-scribe",
    name: "Classic Scribe Light",
    description: "Crisp, high-contrast daylight cream paper & dark ink",
    workspaceBg: "#e2e8f0",
    sidebarBg: "#f8fafc",
    sidebarBorder: "#94a3b8",
    sidebarHover: "#e2e8f0",
    cardBg: "#ffffff",
    accentColor: "#4f46e5",
    accentHover: "#4338ca",
    textPrimary: "#090d16",
    textSecondary: "#1e293b",
    textMuted: "#475569",
    fontTitle: "Georgia, Cambria, serif",
    fontBody: "system-ui, -apple-system, sans-serif",
    fontPresetId: "classic-literary",
  },
  {
    id: "antiquarian-parchment",
    name: "Antiquarian Warm Light",
    description: "Aged literary parchment with deep walnut ink & gilded amber",
    workspaceBg: "#e8e2d5",
    sidebarBg: "#f7f4ec",
    sidebarBorder: "#b8a995",
    sidebarHover: "#ede7dc",
    cardBg: "#fffdf9",
    accentColor: "#b45309",
    accentHover: "#92400e",
    textPrimary: "#1a140e",
    textSecondary: "#3b2f23",
    textMuted: "#685847",
    fontTitle: '"EB Garamond", Garamond, Georgia, serif',
    fontBody: "Georgia, Cambria, serif",
    fontPresetId: "garamond-elegance",
  },
];

export const FONT_OPTIONS = [
  {
    id: "system",
    name: "Modern Sans (System)",
    family: "system-ui, -apple-system, sans-serif",
  },
  {
    id: "serif-georgia",
    name: "Georgia Serif",
    family: "Georgia, Cambria, serif",
  },
  {
    id: "serif-garamond",
    name: "Garamond Classic",
    family: '"EB Garamond", Garamond, Georgia, serif',
  },
  {
    id: "serif-merriweather",
    name: "Merriweather",
    family: "Merriweather, Georgia, serif",
  },
  {
    id: "sans-inter",
    name: "Inter Clean",
    family: "Inter, system-ui, sans-serif",
  },
  {
    id: "mono",
    name: "Typewriter / Monospace",
    family: '"Courier New", Courier, monospace',
  },
];

const GLOBAL_THEME_KEY = "arcaphyte_global_theme";
const LEGACY_GLOBAL_THEME_KEY = "arcanite_global_theme";

export function getGlobalTheme(): ThemeConfig {
  try {
    const raw =
      localStorage.getItem(GLOBAL_THEME_KEY) ||
      localStorage.getItem(LEGACY_GLOBAL_THEME_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.id) {
        // Handle legacy arcanite-midnight id
        const targetId =
          parsed.id === "arcanite-midnight" ? "arcaphyte-midnight" : parsed.id;
        const preset = PRESET_THEMES.find((p) => p.id === targetId);
        if (preset && !parsed.isCustom) return preset;
        return { ...parsed, id: targetId };
      }
    }
  } catch (e) {
    console.error("Failed to parse global theme:", e);
  }
  return PRESET_THEMES[0];
}

export function getThemeById(themeId?: string): ThemeConfig {
  if (!themeId || themeId === "global") {
    return getGlobalTheme();
  }
  const targetId =
    themeId === "arcanite-midnight" ? "arcaphyte-midnight" : themeId;
  const preset = PRESET_THEMES.find((p) => p.id === targetId);
  if (preset) return preset;
  return getGlobalTheme();
}

export function applyFontPresetToTheme(
  theme: ThemeConfig,
  fontPresetId: string,
): ThemeConfig {
  const pairing = FONT_PRESET_PAIRINGS.find((p) => p.id === fontPresetId);
  if (!pairing) return theme;
  return {
    ...theme,
    fontPresetId,
    fontTitle: pairing.fontTitle,
    fontBody: pairing.fontBody,
  };
}

export function saveGlobalTheme(theme: ThemeConfig): void {
  try {
    localStorage.setItem(GLOBAL_THEME_KEY, JSON.stringify(theme));
    applyThemeToDOM(theme);
  } catch (e) {
    console.error("Failed to save global theme:", e);
  }
}

export function applyThemeToDOM(theme: ThemeConfig): void {
  const root = document.documentElement;
  root.dataset.accessibleTheme = theme.id.startsWith("accessible-")
    ? "true"
    : "false";

  root.style.setProperty("--color-workspace", theme.workspaceBg);
  root.style.setProperty("--color-sidebar", theme.sidebarBg);
  root.style.setProperty("--color-sidebar-border", theme.sidebarBorder);
  root.style.setProperty("--color-sidebar-hover", theme.sidebarHover);
  root.style.setProperty("--color-card-bg", theme.cardBg);
  root.style.setProperty("--color-accent", theme.accentColor);
  root.style.setProperty("--color-accent-hover", theme.accentHover);
  root.style.setProperty("--color-text-primary", theme.textPrimary);
  root.style.setProperty("--color-text-secondary", theme.textSecondary);
  root.style.setProperty("--color-text-muted", theme.textMuted);
  root.style.setProperty("--font-title", theme.fontTitle);
  root.style.setProperty("--font-body", theme.fontBody);

  const rgb = theme.workspaceBg.match(/^#([0-9a-f]{6})$/i);
  const luminance = rgb
    ? [0, 2, 4].reduce(
        (sum, i, j) =>
          sum +
          parseInt(rgb[1].slice(i, i + 2), 16) * [0.2126, 0.7152, 0.0722][j],
        0,
      )
    : 0;
  root.style.colorScheme = luminance > 150 ? "light" : "dark";
  root.style.setProperty(
    "--color-accent-ink",
    theme.accentInk ||
      (luminance > 150
        ? `color-mix(in srgb, ${theme.accentColor} 65%, #111)`
        : `color-mix(in srgb, ${theme.accentColor} 55%, #fff)`),
  );
  root.style.setProperty(
    "--color-secondary-accent",
    theme.secondaryAccent || theme.textSecondary,
  );
  const accentHex = theme.accentColor.match(/^#([0-9a-f]{6})$/i);
  const accentLuminance = accentHex
    ? [0, 2, 4].reduce((sum, i, j) => {
        const c = parseInt(accentHex[1].slice(i, i + 2), 16) / 255;
        return (
          sum +
          (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4) *
            [0.2126, 0.7152, 0.0722][j]
        );
      }, 0)
    : 0;
  root.style.setProperty(
    "--color-on-accent",
    accentLuminance > 0.179 ? "#111111" : "#ffffff",
  );
  root.setAttribute("data-theme", theme.id);
}

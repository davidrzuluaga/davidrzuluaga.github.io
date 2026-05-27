const ICON_ALIASES = {
  'fa fa-linkedin': 'fab fa-linkedin-in',
  'fa fa-github': 'fab fa-github',
  'fa fa-facebook': 'fab fa-facebook-f',
  'fa fa-twitter': 'fab fa-x-twitter',
  'fa fa-envelope': 'fa-solid fa-envelope'
};

export const normalizeIcon = icon => {
  if (!icon) {
    return 'fa-solid fa-circle';
  }

  const trimmed = icon.trim();

  if (ICON_ALIASES[trimmed]) {
    return ICON_ALIASES[trimmed];
  }

  if (
    trimmed.startsWith('fa-solid ') ||
    trimmed.startsWith('fab ') ||
    trimmed.startsWith('far ')
  ) {
    return trimmed;
  }

  if (trimmed.startsWith('fa fa-')) {
    return `fa-solid fa-${trimmed.slice(6)}`;
  }

  return trimmed;
};

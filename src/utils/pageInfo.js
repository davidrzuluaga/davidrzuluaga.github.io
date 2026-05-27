const pickLocalized = (value, locale) => {
  if (value == null) return '';
  if (typeof value === 'object' && (value.en != null || value.es != null)) {
    return value[locale] ?? value.en ?? value.es ?? '';
  }
  return value;
};

export const resolvePageInfo = (raw, locale = 'en') => {
  if (!raw) return null;

  const localized = raw.locales?.[locale] ?? raw.locales?.en ?? {};

  return {
    email: raw.email,
    CV: raw.CV,
    company: raw.company,
    avatar: raw.avatar,
    username: raw.username,
    website: raw.website,
    social: raw.social ?? [],
    webDevSkills: raw.webDevSkills ?? [],
    langSkills: raw.langSkills ?? [],
    greet: localized.greet ?? '',
    greetDescription: localized.greetDescription ?? '',
    description: localized.description ?? [],
    proSkills: localized.proSkills ?? [],
    portfolio: (raw.portfolio ?? []).map(project => ({
      ...project,
      description: pickLocalized(project.description, locale)
    })),
    experience: (localized.experience ?? []).map(item => ({
      ...item,
      title: pickLocalized(item.title, locale),
      subtitle: pickLocalized(item.subtitle, locale),
      description: pickLocalized(item.description, locale),
      dates: pickLocalized(item.dates, locale)
    }))
  };
};

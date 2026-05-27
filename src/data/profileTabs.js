export const profileTabs = [
  { id: 'overview', icon: 'fa-solid fa-book' },
  { id: 'skills', icon: 'fa-solid fa-code' },
  { id: 'portfolio', icon: 'fa-solid fa-diagram-project' },
  { id: 'experience', icon: 'fa-solid fa-briefcase' },
  { id: 'contact', icon: 'fa-solid fa-envelope' }
];

export const hashToTab = hash => {
  const value = hash.replace('#', '');
  if (!value || value === 'home' || value === 'about') {
    return 'overview';
  }
  return profileTabs.some(tab => tab.id === value) ? value : 'overview';
};

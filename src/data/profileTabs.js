export const profileTabs = [
  { id: 'overview', label: 'Overview', icon: 'fa-solid fa-book' },
  { id: 'skills', label: 'Skills', icon: 'fa-solid fa-code' },
  { id: 'portfolio', label: 'Projects', icon: 'fa-solid fa-diagram-project' },
  { id: 'experience', label: 'Experience', icon: 'fa-solid fa-briefcase' },
  { id: 'contact', label: 'Contact', icon: 'fa-solid fa-envelope' }
];

export const hashToTab = hash => {
  const value = hash.replace('#', '');
  if (!value || value === 'home' || value === 'about') {
    return 'overview';
  }
  return profileTabs.some(tab => tab.id === value) ? value : 'overview';
};

import { resolvePageInfo } from './pageInfo';

const sample = {
  email: 'test@example.com',
  portfolio: [
    {
      name: 'Demo',
      description: { en: 'English text', es: 'Texto en español' }
    }
  ],
  locales: {
    en: { greet: 'Hello', greetDescription: 'Dev', description: ['A'], proSkills: ['A'], experience: [] },
    es: { greet: 'Hola', greetDescription: 'Desarrollador', description: ['B'], proSkills: ['B'], experience: [] }
  }
};

describe('resolvePageInfo', () => {
  it('returns locale-specific copy', () => {
    const en = resolvePageInfo(sample, 'en');
    const es = resolvePageInfo(sample, 'es');

    expect(en.greet).toBe('Hello');
    expect(es.greet).toBe('Hola');
    expect(en.portfolio[0].description).toBe('English text');
    expect(es.portfolio[0].description).toBe('Texto en español');
  });
});

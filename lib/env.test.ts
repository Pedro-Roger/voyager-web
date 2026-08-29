import { getPublicEnv } from './env';

describe('getPublicEnv', () => {
  it('returns api url from environment', () => {
    const env = getPublicEnv({
      NEXT_PUBLIC_API_URL: 'http://localhost:3001',
    });

    expect(env.apiUrl).toBe('http://localhost:3001');
  });

  it('throws when api url missing', () => {
    expect(() => getPublicEnv({ NEXT_PUBLIC_API_URL: '' })).toThrow(
      'Invalid public environment configuration',
    );
  });
});

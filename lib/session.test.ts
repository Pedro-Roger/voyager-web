import { hasSessionToken, sessionCookieName } from './session';

describe('session utils', () => {
  it('uses stable cookie name', () => {
    expect(sessionCookieName).toBe('voyager_session');
  });

  it('detects existing session token', () => {
    expect(hasSessionToken('abc123')).toBe(true);
    expect(hasSessionToken('   ')).toBe(false);
  });
});

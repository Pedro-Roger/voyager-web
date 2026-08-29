import { getProtectedRouteDecision } from './auth-guard';

describe('getProtectedRouteDecision', () => {
  it('redirects to login without session token', () => {
    expect(getProtectedRouteDecision(undefined)).toEqual({
      allow: false,
      redirectTo: '/login',
    });
  });

  it('allows route with session token', () => {
    expect(getProtectedRouteDecision('token-123')).toEqual({
      allow: true,
      redirectTo: null,
    });
  });
});

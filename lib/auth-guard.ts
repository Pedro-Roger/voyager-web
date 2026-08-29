import { hasSessionToken } from './session';

export function getProtectedRouteDecision(token: string | undefined | null) {
  if (!hasSessionToken(token)) {
    return {
      allow: false,
      redirectTo: '/login',
    } as const;
  }

  return {
    allow: true,
    redirectTo: null,
  } as const;
}

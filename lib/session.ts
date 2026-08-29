export const sessionCookieName = 'voyager_session';

export function hasSessionToken(token: string | undefined | null) {
  return Boolean(token?.trim());
}

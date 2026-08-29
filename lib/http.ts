export function createApiClient(baseUrl: string) {
  return {
    buildUrl(path: string) {
      const normalizedPath = path.startsWith('/') ? path : `/${path}`;
      return new URL(normalizedPath, baseUrl).toString();
    },
  };
}

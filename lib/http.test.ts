import { createApiClient } from './http';

describe('createApiClient', () => {
  it('builds resource url from base url', () => {
    const client = createApiClient('http://localhost:3001');

    expect(client.buildUrl('/health')).toBe('http://localhost:3001/health');
  });
});

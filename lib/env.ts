type PublicEnv = {
  apiUrl: string;
};

export function getPublicEnv(source: {
  NEXT_PUBLIC_API_URL?: string;
}): PublicEnv {
  const apiUrl = source.NEXT_PUBLIC_API_URL?.trim();

  if (!apiUrl) {
    throw new Error('Invalid public environment configuration');
  }

  return { apiUrl };
}

export function getRuntimePublicEnv(): PublicEnv {
  return getPublicEnv({
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  });
}

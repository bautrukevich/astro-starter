/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_ENV_VARIABLE: string;
  readonly PRIVATE_ENV_VARIABLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

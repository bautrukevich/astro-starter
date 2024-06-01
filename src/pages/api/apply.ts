import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const PUBLIC_ENV_VARIABLE = locals.runtime.env.PUBLIC_ENV_VARIABLE;
    const PRIVATE_ENV_VARIABLE = locals.runtime.env.PRIVATE_ENV_VARIABLE;

    return new Response(
      JSON.stringify({
        env: {
          PUBLIC_ENV_VARIABLE,
          PRIVATE_ENV_VARIABLE,
        },
      }),
      { status: 200 },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        // @ts-expect-error won't parse error
        message: error.message,
      }),
      { status: 400 },
    );
  }
};

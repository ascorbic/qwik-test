/*
 * WHAT IS THIS FILE?
 *
 * It's the entry point for Netlify Edge when building for production.
 *
 * Learn more about the Netlify integration here:
 * - https://qwik.builder.io/docs/deployments/netlify-edge/
 *
 */
import {
  createQwikCity,
  type PlatformNetlify,
} from "@builder.io/qwik-city/middleware/netlify-edge";
import qwikCityPlan from "@qwik-city-plan";
import { manifest } from "@qwik-client-manifest";
import render from "./entry.ssr";
import type { Context } from "@netlify/edge-functions";

declare global {
  interface QwikCityPlatform extends PlatformNetlify {}
}

const handle = createQwikCity({ render, qwikCityPlan, manifest });

export default (request: Request, context: Context) => {
  console.log(request.url);
  return handle(request, context);
};

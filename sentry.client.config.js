import * as Sentry from "@sentry/nextjs";

Sentry.init({
	dsn: "https://4f05be79507a9d7e7ef7851a22dd308a@o4508211221364736.ingest.de.sentry.io/4508211233357904",
	// Replay may only be enabled for the client-side
	integrations: [Sentry.replayIntegration()],

	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for tracing.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,

	// Capture Replay for 10% of all sessions,
	// plus for 100% of sessions with an error
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0,

	// ...

	// Note: if you want to override the automatic release value, do not set a
	// `release` value here - use the environment variable `SENTRY_RELEASE`, so
	// that it will also get attached to your source maps
});

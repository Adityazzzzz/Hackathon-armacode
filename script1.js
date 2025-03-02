
      import * as Framer from "framer";
      import * as React from "react";
      import { createPortal } from "react-dom";
      import * as ReactDOM from "react-dom/client";

      const routes = {
        yd7nMFDHh: {
          elements: {
            MERXQpASN: "hero-heading-1",
            om1250aoL: "about",
            QeagwX1Rm: "hero-heading",
            rZyCoDj_M: "testimonial",
            Usy9pnRtq: "hero-heading-2",
            vTTUKTKEu: "why-us",
          },
          page: Framer.lazy(() =>
            import(
              "https://framerusercontent.com/modules/bf2JbWSZkQkOmw0Ds1nC/9LAnmfqRzghzKvp3HD8S/yd7nMFDHh.js"
            )
          ),
          path: "/",
        },
        NWoNbHFlK: {
          elements: {
            CHl8h4ZGm: "hero-heading-9",
            FUuKUIIjX: "hero-heading",
            geS1MO9Lh: "hero-heading-5",
            MJM1A3D2l: "hero-heading-6",
            nvot6fp1N: "hero-heading-8",
            nyUuOXFJi: "hero-heading-10",
            o2s8EmzV8: "hero-heading-4",
            RbovrNpt_: "hero-heading-3",
            RL5tQoCIA: "step",
            SbGJlwDyV: "hero-heading-2",
            uNFWTCz9l: "hero-heading-1",
            VxhxOmoRm: "hero-heading-7",
            w6E16qdLC: "effect",
            zdIV5Gl3G: "hero-heading-11",
          },
          page: Framer.lazy(() =>
            import(
              "https://framerusercontent.com/modules/10zEqRQBUCZZVgkYxYN9/EpRLoGcoCZNDH6HS8IbI/NWoNbHFlK.js"
            )
          ),
          path: "/about",
        },
        eqltQmwyS: {
          elements: {
            aGL3HLqUV: "hero-heading-4",
            DBU76NtTA: "hero-heading-5",
            fbeZ5Bzux: "hero-heading-6",
            J0UBK0f7k: "about",
            lXojom_tH: "hero-heading-2",
            OFWutp21m: "hero-heading",
            Rx5Y9AzuV: "hero-heading-8",
            SV2WCtGXl: "hero-heading-7",
            W4hk9r4QW: "hero-heading-3",
            wXhnWXQsp: "hero-heading-1",
          },
          page: Framer.lazy(() =>
            import(
              "https://framerusercontent.com/modules/uInSGPjPLFwfvGHzHbWH/IdlYfnsM5IBr6sH19Gpq/eqltQmwyS.js"
            )
          ),
          path: "/faq",
        },
        VooqaBuGt: {
          elements: {
            bDljLudG6: "hero-heading-3",
            dKpvECJQg: "hero-heading-5",
            h2sdHlWNs: "team",
            iFJncJl8q: "hero-heading-6",
            IOCjCI1Jv: "hero-heading-2",
            qFmjDoGZb: "hero-heading-1",
            szlhZ9lle: "hero-heading-7",
            tNRiETR70: "hero-heading",
            tnsYieVy8: "hero-heading-4",
            x11m0l7eZ: "hero-heading-8",
          },
          page: Framer.lazy(() =>
            import(
              "https://framerusercontent.com/modules/cTKxfgVc396EFSEqgtIK/PTehwYptXOS6ZB2gmzH4/VooqaBuGt.js"
            )
          ),
          path: "/team",
        },
        vm4W9vZh5: {
          elements: {
            CcC3Qq54m: "hero-heading",
            edLYhik_X: "effect",
            eGE6OCFOg: "hero-heading-3",
            HCPLsuq7b: "hero-heading-6",
            hE6U8uUlM: "2",
            HIYMsp2Ne: "4",
            I90rZTzvf: "step",
            IH0H88dpY: "3",
            iUay6ZPhM: "step-1",
            IUGNo3Qw5: "hero-heading-5",
            M1A8Hsq_j: "3-1",
            mcf765jeG: "hero-heading-8",
            OPXYQ4JUc: "hero-heading-7",
            oWLcujXO1: "hero-heading-1",
            Ps8RSzke0: "hero-heading-4",
            PXdhkVqN8: "1",
            rhXqVWcWP: "hero-heading-2",
            yQ342lhl1: "2-1",
          },
          page: Framer.lazy(() =>
            import(
              "https://framerusercontent.com/modules/BtBHGsEEbhZjymdpzppC/Z89H0R3ODCMtpP5t0PN5/vm4W9vZh5.js"
            )
          ),
          path: "/schedule",
        },
        I048UAEvC: {
          elements: {
            IcvsHSZ17: "about-1",
            k6_yZtzLV: "hero-heading",
            qa5H3zHCR: "about",
          },
          page: Framer.lazy(() =>
            import(
              "https://framerusercontent.com/modules/zBKJL393hWCjLBV4cr6a/CjcAOCGn7aMeqlOvvOF1/I048UAEvC.js"
            )
          ),
          path: "/services",
        },
        A5wLTn1r_: {
          elements: { fbgaSOdSm: "hero-heading", V90GvhJlh: "hero-heading-1" },
          page: Framer.lazy(() =>
            import(
              "https://framerusercontent.com/modules/uBBw3fJVfzBFX9G4M5QX/OKczgk5XUSUI01JMzlrg/A5wLTn1r_.js"
            )
          ),
          path: "/404",
        },
        sHaTE1jEC: {
          elements: { NlPF9GoLT: "hero-heading" },
          page: Framer.lazy(() =>
            import(
              "https://framerusercontent.com/modules/iFF2aAKo6jhbsBdekQx2/oexpLfBClfNfdxVoDOej/sHaTE1jEC.js"
            )
          ),
          path: "/contact-us",
        },
      };
      const locales = [
        { code: "en", id: "default", name: "English", slug: "" },
      ];

      export async function getPageRoot({ routeId, pathVariables, localeId }) {
        // We don't want the initial render to immediately have to suspend.
        await routes[routeId].page.preload();

        const content = React.createElement(Framer.PageRoot, {
          isWebsite: true,
          routeId,
          pathVariables,
          routes,
          collectionUtils: {},
          framerSiteId:
            "6a9bc2c9e2b4f50be8811a9b48a78c3bfb87b420d6b550e3a05548243a7634bd",
          notFoundPage: Framer.lazy(() =>
            import(
              "https://framerusercontent.com/modules/uBBw3fJVfzBFX9G4M5QX/OKczgk5XUSUI01JMzlrg/A5wLTn1r_.js"
            )
          ),
          isReducedMotion: undefined,
          localeId,
          locales,
          preserveQueryParams: undefined,
          EditorBar:
            typeof window === "undefined"
              ? undefined
              : Framer.lazy(async () => {
                  const { createEditorBar } = await import(
                    "https://edit.framer.com/init.mjs"
                  );
                  return {
                    default: createEditorBar({
                      dependencies: {
                        __version: 1,
                        framer: {
                          useCurrentRoute: Framer.useCurrentRoute,
                          useLocaleInfo: Framer.useLocaleInfo,
                          useRouter: Framer.useRouter,
                        },
                        react: {
                          createElement: React.createElement,
                          memo: React.memo,
                          useCallback: React.useCallback,
                          useEffect: React.useEffect,
                          useRef: React.useRef,
                          useState: React.useState,
                        },
                        "react-dom": { createPortal },
                      },
                    }),
                  };
                }),
        });

        const contentWithFeaturesContext = React.createElement(
          Framer.LibraryFeaturesProvider,
          {
            children: content,
            value: {
              codeBoundaries: true,
              editorBarSubtle: false,
              enableAsyncURLUpdates: true,
              pauseOffscreen: false,
              replaceNestedLinks: true,
              showAdvancedAnalytics: false,
              useGranularSuspense: true,
              wrapUpdatesInTransitions: true,
            },
          }
        );

        const contentWithGracefullyDegradingErrorBoundary = React.createElement(
          Framer.GracefullyDegradingErrorBoundary,
          {
            children: contentWithFeaturesContext,
          }
        );

        const page = React.createElement(Framer.PageEffectsProvider, {
          children: contentWithGracefullyDegradingErrorBoundary,
          value: { routes: {} },
        });

        return page;
      }

      const isBrowser = typeof document !== "undefined";
      if (isBrowser) {
        window.__framer_importFromPackage =
          (packageAndFilename, exportIdentifier) => () => {
            return React.createElement(Framer.ErrorPlaceholder, {
              error:
                'Package component not supported: "' +
                exportIdentifier +
                '" in "' +
                packageAndFilename +
                '"',
            });
          };

        // A lot of libraries assume process.env.NODE_ENV is present in runtime/buildtime, so we are polyfilling it
        window.process = {
          ...window.process,
          env: {
            ...(window.process ? window.process.env : undefined),
            NODE_ENV: "production",
          },
        };

        window.__framer_events = window.__framer_events || [];

        // Fallback support for stack gaps
        Framer.installFlexboxGapWorkaroundIfNeeded();

        const container = document.getElementById("main");
        // We know that #main is parsed before this script, so we don't need to wait for DOMContentLoaded or similar events.
        if ("framerHydrateV2" in container.dataset) main(true, container);
        else main(false, container);
      }

      function track() {
        if (!isBrowser) return;
        window.__framer_events.push(arguments);
      }

      async function main(shouldHydrate, container) {
        function handleError(error, errorInfo, recoverable = true) {
          if (error.caught || window.__framer_hadFatalError) return; // we already logged it

          const componentStack = errorInfo?.componentStack;
          if (recoverable) {
            console.warn(
              "Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches:\n",
              error,
              componentStack
            );
            // we only want to collect 1%, because this can be quite noisy (floods the data pipeline)
            if (Math.random() > 0.01) return;
          } else {
            console.error(
              "Fatal crash during hydration. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/"
            );
          }
          track(
            recoverable
              ? "published_site_load_recoverable_error"
              : "published_site_load_error",
            {
              message: String(error),
              componentStack, // componentStack is more useful
              stack: componentStack
                ? undefined
                : error instanceof Error && typeof error.stack === "string"
                ? error.stack
                : null,
            }
          );
        }

        try {
          let routeId, localeId, pathVariables, breakpoints;
          if (shouldHydrate) {
            const routeData = JSON.parse(container.dataset.framerHydrateV2);
            routeId = routeData.routeId;
            localeId = routeData.localeId;
            pathVariables = routeData.pathVariables;
            breakpoints = routeData.breakpoints;
          } else {
            const routeData = Framer.inferInitialRouteFromPath(
              routes,
              decodeURIComponent(location.pathname),
              true,
              locales
            );
            routeId = routeData.routeId;
            localeId = routeData.localeId;
            pathVariables = routeData.pathVariables;
          }

          const page = await getPageRoot({ routeId, localeId, pathVariables });
          if (shouldHydrate) {
            Framer.withPerformanceMarks("framer-rewrite-breakpoints", () => {
              Framer.removeHiddenBreakpointLayersV2(breakpoints);
              window.__framer_onRewriteBreakpoints?.(breakpoints);
            });

            const startTransition = React.startTransition;
            startTransition(() => {
              Framer.markHydrationStart();
              Framer.setInitialHydrationState();
              if (true) Framer.turnOffReactEventHandling();
              ReactDOM.hydrateRoot(container, page, {
                onRecoverableError: handleError,
              });
            });
          } else {
            ReactDOM.createRoot(container, {
              onRecoverableError: handleError,
            }).render(page);
          }
        } catch (error) {
          handleError(error, undefined, false);
          throw error;
        }
      }

      (function () {
        if (!isBrowser) return;

        React.startTransition(() => {
          ReactDOM.createRoot(
            document.getElementById("__framer-badge-container")
          ).render(
            React.createElement(
              React.Suspense,
              {},
              React.createElement(
                Framer.withStyleAppearEffect(Framer.Container),
                {
                  className: "__framer-badge",
                  __framer__threshold: 0.5,
                  __framer__animateOnce: true,
                  __framer__opacity: 0,
                  __framer__targetOpacity: 1,
                  __framer__rotate: 0,
                  __framer__x: 0,
                  __framer__y: 10,
                  __framer__scale: 1,
                  __framer__transition: {
                    type: "spring",
                    ease: [0.44, 0, 0.56, 1],
                    duration: 0.3,
                    delay: 1,
                    stiffness: 350,
                    damping: 40,
                    mass: 1.5,
                  },
                  __framer__rotateX: 0,
                  __framer__rotateY: 0,
                  __framer__perspective: 1200,
                },
                React.createElement(React.lazy(() => import("__framer-badge")))
              )
            )
          );
        });
      })();

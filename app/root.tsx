import { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css?url";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it-IT">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <html lang="it-IT">
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>
          {isRouteErrorResponse(error) && error.status === 404 ? (
            <div
              className="flex flex-col place-items-center rounded-3xl border p-5 bg-slate-100"
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <h1
                className="mx-auto animate-pulse text-9xl"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                404
              </h1>
              <h1
                className="mx-auto animate-pulse"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                (probabilmente ho dimenticato qualcosa 🥺)
              </h1>
              <Separator className="m-2"/>
              <Link to={"/"}><Button variant="secondary">TORNIAMO IN UN POSTO ESISTENTE</Button></Link>
            </div>
          ) : isRouteErrorResponse(error) ? (
            `${error.status} ${error.statusText}`
          ) : error instanceof Error ? (
            error.message
          ) : (
            "Errore sconosciuto"
          )}
        </h1>
        <Scripts />
      </body>
    </html>
  );
}

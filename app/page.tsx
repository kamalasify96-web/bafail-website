import { BASE_PATH } from "@/lib/basePath";

export default function RootPage() {
  const target = `${BASE_PATH}/en/`;
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <title>Bafail Group</title>
      </head>
      <body>
        <p>
          Redirecting to <a href={target}>the Bafail Group website</a>...
        </p>
      </body>
    </html>
  );
}

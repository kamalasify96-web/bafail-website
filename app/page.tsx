import { BASE_PATH } from "@/lib/basePath";

export default function RootPage() {
  const target = `${BASE_PATH}/en/`;
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <title>Bafail Group | FMCG Distributor in Saudi Arabia</title>
        <link rel="canonical" href="https://osbafail.com/en/" />
        <link rel="alternate" hrefLang="en" href="https://osbafail.com/en/" />
        <link rel="alternate" hrefLang="ar" href="https://osbafail.com/ar/" />
        <link rel="alternate" hrefLang="x-default" href="https://osbafail.com/en/" />
      </head>
      <body>
        <p>
          Redirecting to <a href={target}>the Bafail Group website</a>...
        </p>
      </body>
    </html>
  );
}

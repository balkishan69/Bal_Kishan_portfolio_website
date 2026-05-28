'use client';

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Bal Kishan — Full Stack Engineer & AI Systems Builder</title>
        <meta name="description" content="Full Stack Software Engineer specializing in MERN stack, AI systems, and high-performance applications. LeetCode Knight (1948 rating), competitive programmer, and builder of production-grade systems." />
        <meta name="keywords" content="Bal Kishan, Full Stack Engineer, MERN Developer, React, Node.js, TypeScript, AI Systems, LeetCode Knight, Software Engineer India" />
        <meta name="author" content="Bal Kishan" />
        <meta property="og:title" content="Bal Kishan — Full Stack Engineer & AI Systems Builder" />
        <meta property="og:description" content="Full Stack Software Engineer specializing in MERN stack, AI systems, and high-performance applications." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/my_pic.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bal Kishan — Full Stack Engineer" />
        <meta name="twitter:image" content="/my_pic.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-[#050508] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    // Temporary fix for vertical rhythm resizing
    <Html lang="en" className="text-[90%]">
      <Head />
      <body className="text-neutral-600 bg-neutral-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

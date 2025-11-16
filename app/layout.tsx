export const metadata = {
  title: 'Hitesh Prajapati',
  description: 'Backend Engineer specializing in Event Platforms, Distributed Systems, and Scalable Architecture',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.1/css/bulma.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </head>
      <body>{children}</body>
    </html>
  )
}

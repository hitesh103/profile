import './globals.css'

export const metadata = {
  title: 'Hitesh Prajapati - Portfolio',
  description: 'Backend Engineer specializing in Event Platforms and Distributed Systems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

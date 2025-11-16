import './globals.css'

export const metadata = {
  title: 'Hitesh Prajapati - Backend Engineer',
  description: 'Backend Engineer specializing in Event Platforms, Distributed Systems, and Scalable Architecture',
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

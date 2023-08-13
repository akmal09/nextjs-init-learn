import AppShell from '@/components/layouts/AppShell'
import Navbar from '@/components/layouts/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  )
}

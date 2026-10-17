import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'StubTec PLM | Engineering connected',description:'Enterprise architecture, Aras Innovator PLM and CAD/PDM to ERP integration.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

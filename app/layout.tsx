import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Kanban Sheet Flow',
  description: 'A modern Kanban board tracker synced with Google Sheets, featuring drag-and-drop, full CRUD operations, and a right drawer for task details.',
  openGraph: {
    title: 'Kanban Sheet Flow',
    description: 'A modern Kanban board tracker synced with Google Sheets, featuring drag-and-drop, full CRUD operations, and a right drawer for task details.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kanban Sheet Flow',
    description: 'A modern Kanban board tracker synced with Google Sheets, featuring drag-and-drop, full CRUD operations, and a right drawer for task details.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

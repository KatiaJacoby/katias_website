import { PatrickHand } from './ui/fonts'; 
import './ui/home.module.css'; 

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />
      </head>
      <body className={PatrickHand.className}> 
        {children}
      </body>
    </html>
  );
}
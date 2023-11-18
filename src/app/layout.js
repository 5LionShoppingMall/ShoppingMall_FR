import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import axios from '../config/axios-config';

export const metadata = {
  title: {
    default: '#',
    template: '# | %s',
  },
  description: 'home',
};

export default async function RootLayout({ children }) {
  /* const res = await axios.get('/check');
  console.dir(res); */

  return (
    <html lang='ko'>
      <body className='w-full bg-neutral-50 overflow-auto'>
        <header className='sticky top-0'>
          <div className='max-w-screen-xl mx-auto'>
            <Navbar />
          </div>
        </header>
        <main className='w-full flex justify-center max-w-screen-xl mx-auto bg-white h-screen'>
          {children}
        </main>
      </body>
    </html>
  );
}

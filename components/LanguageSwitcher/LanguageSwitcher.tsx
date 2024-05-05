   import { useRouter } from 'next/router';

   const LanguageSwitcher = () => {
     const router = useRouter();
     const { locale, pathname, query, asPath } = router;

     const switchLocale = (lang: string) => {
       router.push({ pathname, query }, asPath, { locale: lang });
     };

     return (
       <div>
         <button onClick={() => switchLocale('en')}>EN</button>
         <button onClick={() => switchLocale('es')}>ES</button>
       </div>
     );
   };

   export default LanguageSwitcher
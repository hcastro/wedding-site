import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>A Moment in the Mountains - Lisa & Henry's Wedding</title>
        <meta name='description' content={t('welcome')} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <section className={styles.header}>
          <LanguageSwitcher />
          <h1 className={styles.title}>
            A Moment in the Mountains - Lisa and Henry's Wedding
          </h1>
          <p className={styles.greeting}>{t('welcome')}</p>
        </section>
        <div className={styles.imageGridContainer}>
          <div className={styles.imageGrid}>
            <div className={`${styles.imageWrapper} ${styles.first}`}>
              <Image
                src='/photo_1.jpg'
                alt='Description of image 1'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className={`${styles.imageWrapper} ${styles.second}`}>
              <Image
                src='/photo_2.jpg'
                alt='Description of image 1'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className={`${styles.imageWrapper} ${styles.third}`}>
              <Image
                src='/photo_3.png'
                alt='Description of image 2'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className={`${styles.imageWrapper} ${styles.fourth}`}>
              <Image
                src='/photo_4.jpeg'
                alt='Description of image 3'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className={`${styles.imageWrapper} ${styles.fifth}`}>
              <Image
                src='/photo_5.png'
                alt='Description of image 4'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className={`${styles.imageWrapper} ${styles.sixth}`}>
              <Image
                src='/photo_6.jpeg'
                alt='Description of image 5'
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
        </div>
        <section className={styles.details}>
          <div className={styles.event}>
            <h2>Welcome Party</h2>
            <p>October 17th, 6:00 PM</p>
          </div>
          <div className={styles.event}>
            <h2>Ceremony & Reception</h2>
            <p>Friday, October 18, 2024</p>
            <p>Forest Campestre, Medellin, Colombia</p>
            <p>Ceremony starts at 3:30 P.M.</p>
          </div>
          <div className={styles.event}>
            <h2>Accommodation</h2>
            <p>York Luxury Suites Hotel, El Poblado, Medellin</p>
            <p>
              For more details on accommodation, see our{' '}
              <Link href='/hotel' className={styles.link}>
                Hotel Info Page
              </Link>
              .
            </p>
          </div>
          <div className={styles.event}>
            <h2>Dress Code</h2>
            <p>Semi-formal</p>
          </div>
        </section>
      </main>
    </>
  );
}

// export async function getStaticProps({ locale }) {
//   console.log('i18n locale', locale);

//   return {
//     props: {
//       ...(await serverSideTranslations(locale, [
//         'common',
//         'footer',
//       ])),
//       // Will be passed to the page component as props
//     },
//   }
// }

import Head from 'next/head';
import styles from '@/styles/Hotel.module.css';

export default function HotelInfo() {
  return (
    <>
      <Head>
        <title>Accommodation Information - Lisa & Henry's Wedding</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.header}>York Luxury Suites - Accommodation Details</h1>
        <div className={styles.section}>
          <p>Hey everyone! We've arranged some special rates at York Luxury Suites for those coming to our wedding. It's right in the center of Medellín, making it super convenient. Here’s what you need to know:</p>
          <ul className={styles.list}>
            <li><strong>Dates:</strong> October 15-21, 2024</li>
            <li><strong>Room Rates:</strong> Ranging from $130 to $250 per night, depending on the room type.</li>
            <li><strong>Booking:</strong> To ensure your spot, we suggest reserving your room as soon as possible. Availability is limited, but the great news is, you won't need to make any payment until 15 days prior to our wedding date.</li>
          </ul>
          <h2 className={styles.subheader}>Booking Information</h2>
          <p>If you're planning to join us, you can secure your stay by contacting Claudia Ramirez, the hotel director, directly via email at <a href="mailto:claudia.ramirez@bluedoors.co">claudia.ramirez@bluedoors.co</a> or on WhatsApp at +57 310 514 9380. Just mention our wedding to access the special rate.</p>
          <p>For additional information, you are welcome to visit the <a href="https://www.yorkluxurysuites.com" target="_blank" rel="noopener noreferrer" className={styles.link}>York Luxury Suites website</a>.</p>
          <h2 className={styles.subheader}>Included Amenities</h2>
          <p>Each room is well-equipped with everything you might need to have a comfortable stay. Looking forward to seeing you all there!</p>
        </div>
      </main>
    </>
  );
}

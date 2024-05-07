import Head from 'next/head';
import styles from '@/styles/Hotel.module.css';
import Layout from '@/components/Layout/Layout';

export default function HotelInfo() {
  return (
    <Layout>
      <Head>
        <title>Accommodation Information - Lisa & Henry's Wedding</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.header}>York Luxury Suites - Accommodation Details</h1>
        <div className={styles.section}>
          <p>
            Hey everyone! We've arranged some special rates at York Luxury Suites for
            those coming to our wedding. It's right in the center of Medellín, making it
            super convenient. Here's what you need to know:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>Dates:</strong> October 15-21, 2024
            </li>
            <li>
              <strong>Booking:</strong> To ensure your spot, we suggest reserving your
              room as soon as possible. Availability is limited, but the great news is,
              you won't need to make any payment until 15 days prior to our wedding date.
            </li>
          </ul>
          <h2 className={styles.subheader}>Room Information</h2>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Room Type</th>
                  <th>Nightly Rate (COP)</th>
                  <th>Nightly Rate (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a
                      href='https://www.yorkluxurysuites.com/es/suites/superior'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Superior King
                    </a>
                  </td>
                  <td>$520.000</td>
                  <td>$130</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href='https://www.yorkluxurysuites.com/es/suites/junior-suite-king'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Emerald King
                    </a>
                  </td>
                  <td>$650.000</td>
                  <td>$163</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href='https://www.yorkluxurysuites.com/es/suites/emerald-queen'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Emerald Queen
                    </a>
                  </td>
                  <td>$712.000</td>
                  <td>$178</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href='https://www.yorkluxurysuites.com/es/suites/suite-king'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Diamond King
                    </a>
                  </td>
                  <td>$748.000</td>
                  <td>$187</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href='https://www.yorkluxurysuites.com/es/suites/terraze-suite-king'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Diamond Terrace
                    </a>
                  </td>
                  <td>$880.000</td>
                  <td>$220</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href='https://www.yorkluxurysuites.com/es/suites/pent-house'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Penthouse
                    </a>
                  </td>
                  <td>$1.000.000</td>
                  <td>$250</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <small>
              Note: Rates are for 1-2 persons. Additional person is $40 USD per night.
              Exchange rates may vary.
            </small>
          </p>
          <h2 className={styles.subheader}>Booking Information</h2>
          <p>
            If you're planning to join us, you can secure your stay by contacting Claudia
            Ramirez, the hotel director, directly via email at{' '}
            <a href='mailto:claudia.ramirez@bluedoors.co'>claudia.ramirez@bluedoors.co</a>{' '}
            or on WhatsApp at +57 310 514 9380. Just mention our wedding to access the
            special rate.
          </p>
          <p>
            For additional information, you are welcome to visit the{' '}
            <a
              href='https://www.yorkluxurysuites.com'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              York Luxury Suites website
            </a>
            .
          </p>
          <h2 className={styles.subheader}>Included Amenities</h2>
          <ul className={styles.list}>
            <li>Breakfast at the restaurant</li>
            <li>Voice and sound-controlled suites with Google Home™</li>
            <li>
              Fully equipped kitchen with additional appliances available upon request
            </li>
            <li>High-speed internet and independent WiFi per suite</li>
            <li>L'Occitane amenities</li>
            <li>Luxury 400-thread count linens</li>
            <li>HD TVs with Direct TV</li>
            <li>In-room safe</li>
            <li>Ironing board and iron</li>
            <li>VIP (Very Important Pet) amenities available upon request</li>
            <li>24-hour medical service</li>
            <li>Room service</li>
            <li>Parking</li>
            <li>Gym</li>
            <li>Swimming pool</li>
            <li>Co-working spaces</li>
            <li>1 bottle of water (per stay)</li>
            <li>2 coffee POTs (per stay)</li>
          </ul>
          <p>
            Each room is well-equipped with everything you might need to have a
            comfortable stay. Looking forward to seeing you all there!
          </p>
        </div>
      </main>
    </Layout>
  );
}

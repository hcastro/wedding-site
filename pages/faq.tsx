import Head from 'next/head';
import styles from '@/styles/Faq.module.css';
import Layout from '@/components/Layout/Layout';

const faqs = [
  {
    question: 'When should I RSVP by?',
    answer: 'Please RSVP by August 18th, 2024.'
  },
  {
    "question": "What is the dress code?",
    "answer": "We invite you to join us in formal attire to celebrate our special day. The weather in Medellín tends to be pleasantly warm during the day, so feel free to choose comfortable yet elegant options."
  },
  {
    "question": "Are kids welcome?",
    "answer": "While we love the little ones, our wedding day will be an adult-only celebration to ensure a relaxed and festive atmosphere for all our guests."
  },
  {
    "question": "Are there any requirements to enter Colombia?",
    "answer": "Travelers with a US passport do not need a visa for Colombia. You must complete the Check-Mig form for entry. Please use the official website at https://apps.migracioncolombia.gov.co/pre-registro/ to avoid scams that charge unnecessary fees."
  }
  // Add more FAQs here as needed
];

export default function Faq() {
  return (
    <Layout>
      <Head>
        <title>FAQ - Lisa & Henry's Wedding</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faq}>
              <h2 className={styles.question}>{faq.question}</h2>
              <p className={styles.answer} dangerouslySetInnerHTML={{ __html: faq.answer.replace('https://apps.migracioncolombia.gov.co/pre-registro', `<a href='https://apps.migracioncolombia.gov.co/pre-registro' className='${styles.externalLink}'>https://apps.migracioncolombia.gov.co/pre-registro</a>`) }}></p>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

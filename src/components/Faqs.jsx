import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What are the upfront costs?',
      answer:
        'There are zero upfront costs for your venue. We provide the machine, products, installation, and maintenance completely free. You only start earning money from day one.',
    },
    {
      question: 'How much space does the machine require?',
      answer:
        'Our machines have a very small footprint - roughly 2x2 feet. They fit perfectly in corners, near entrances, or by the bar without taking up valuable customer space.',
    },
    {
      question: 'What if the machine breaks down?',
      answer:
        'We handle all maintenance and repairs at no cost to you. Our team monitors machine health remotely and will service or replace any issues quickly to minimize downtime.',
    },
  ],
  [
    {
      question: 'How often do you restock the machine?',
      answer:
        'We restock based on sales volume, typically 1-2 times per week for busy venues. Our team monitors inventory levels and restocks before running out to maximize your revenue.',
    },
    {
      question: 'What about age verification and compliance?',
      answer:
        'All our machines include age verification technology and we only place them in age-restricted venues like yours. All products are FDA-compliant with proper warnings and labeling.',
    },
    {
      question: 'How much can we realistically earn?',
      answer:
        'Most venues earn $600-1,200 per month depending on foot traffic. High-traffic nightlife venues can earn $1,500+ monthly. We&apos;ll give you projections based on your customer volume.',
    },
  ],
  [
    {
      question: 'What happens if we want to remove the machine?',
      answer:
        'You can end the partnership anytime with 30 days notice. We&apos;ll remove the machine at no cost and settle any final profit sharing within the billing cycle.',
    },
    {
      question: 'Do you provide support and training?',
      answer:
        "Yes! We provide full training for your staff and 24/7 support. Most operations are fully automated, but we're always available if you need assistance.",
    },
    {
      question: 'What types of venues do you work with?',
      answer:
        'We partner with bars, nightclubs, lounges, breweries, and other 21+ venues. We focus on establishments with regular foot traffic and customers who appreciate premium vape products.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-2xl font-medium tracking-tight text-gray-900 sm:text-3xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:monica@clouddrip.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

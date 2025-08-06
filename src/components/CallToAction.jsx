import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Want a Vape Vending Machine in Your Bar?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Fill out the form below and we'll get in touch to discuss how Cloud
            Drip can boost your venue's revenue.
          </p>
          <form className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="bar-name"
                className="block text-sm font-medium text-gray-300"
              >
                Bar Name
              </label>
              <input
                type="text"
                id="bar-name"
                name="bar-name"
                className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                placeholder="Your venue name"
              />
            </div>
            <div>
              <label
                htmlFor="contact-person"
                className="block text-sm font-medium text-gray-300"
              >
                Contact Person
              </label>
              <input
                type="text"
                id="contact-person"
                name="contact-person"
                className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-300"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label
                htmlFor="city-state"
                className="block text-sm font-medium text-gray-300"
              >
                City / State
              </label>
              <input
                type="text"
                id="city-state"
                name="city-state"
                className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                placeholder="Miami, FL"
              />
            </div>
            <div>
              <label
                htmlFor="customers"
                className="block text-sm font-medium text-gray-300"
              >
                Approx. Customers per Night (optional)
              </label>
              <input
                type="number"
                id="customers"
                name="customers"
                className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                placeholder="100"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full rounded-md bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-400 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
              >
                Request a Machine
              </button>
            </div>
          </form>
          <div className="mt-8 rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
            <p className="text-sm text-gray-300">
              <strong className="text-white">Questions?</strong> Contact us at{' '}
              <a
                href="mailto:clouddripllc@gmail.com"
                className="text-cyan-400 transition-colors hover:text-cyan-300"
              >
                clouddripllc@gmail.com
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

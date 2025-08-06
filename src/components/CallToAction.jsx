'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  const [formData, setFormData] = useState({
    barName: '',
    contactPerson: '',
    email: '',
    phone: '',
    cityState: '',
    customers: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const templateParams = {
        bar_name: formData.barName,
        contact_person: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,
        city_state: formData.cityState,
        customers: formData.customers,
        to_email: 'clouddripllc@gmail.com',
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key',
      )

      setSubmitStatus('success')
      setFormData({
        barName: '',
        contactPerson: '',
        email: '',
        phone: '',
        cityState: '',
        customers: '',
      })
    } catch (error) {
      console.error('Failed to send email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
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
            {`Fill out the form below and we'll get in touch to discuss how Cloud Drip can boost your venue's revenue.`}
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
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
                name="barName"
                value={formData.barName}
                onChange={handleInputChange}
                required
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
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleInputChange}
                required
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
                value={formData.email}
                onChange={handleInputChange}
                required
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
                value={formData.phone}
                onChange={handleInputChange}
                required
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
                name="cityState"
                value={formData.cityState}
                onChange={handleInputChange}
                required
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
                value={formData.customers}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                placeholder="100"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-400 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                {isSubmitting ? 'Sending...' : 'Request a Machine'}
              </button>
            </div>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="rounded-md bg-green-600 px-4 py-3 text-center text-white sm:col-span-2">
                {`Thank you! Your request has been sent successfully. We'll contact you soon!`}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="rounded-md bg-red-600 px-4 py-3 text-center text-white sm:col-span-2">
                {`Sorry, there was an error sending your message. Please try again or contact us directly at clouddripllc@gmail.com`}
              </div>
            )}
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

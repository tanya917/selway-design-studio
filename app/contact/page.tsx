'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Contact() {
  const [formState, setFormState] = useState('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormState('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: '',
        })
        setTimeout(() => setFormState('idle'), 3000)
      } else {
        setFormState('error')
        setTimeout(() => setFormState('idle'), 3000)
      }
    } catch (error) {
      setFormState('error')
      setTimeout(() => setFormState('idle'), 3000)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="border-b-2 border-accent-rubis bg-selway-cream py-16 sm:py-24">
        <div className="container-full">
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="heading-section mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-selway-ink mb-2">Email</h3>
                  <a
                    href="mailto:info@selwaydesignstudio.com"
                    className="text-lg text-accent-blue hover:text-accent-rubis transition-colors"
                  >
                    info@selwaydesignstudio.com
                  </a>
                  <p className="text-base text-selway-stone opacity-75 mt-2">
                    It helps to include a copy of your floor plan, photographs of the property and your budget where available, so we can give you a more informed first response.
                  </p>
                </div>

                <div className="pb-24">
                  <h3 className="text-lg font-semibold text-selway-ink mb-2">Based In</h3>
                  <p className="text-lg text-selway-stone">West London, UK</p>
                  <p className="text-base text-selway-stone opacity-75">Working globally across London, Los Angeles and beyond</p>
                </div>

                <div className="-ml-8">
                  <div className="relative w-80 h-80 overflow-hidden rounded-lg">
                    <Image
                      src="/Sab_Dining_Chair_cutout.png"
                      alt="Sab Dining Chair"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-selway-ink mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-selway-stone rounded focus:outline-none focus:border-accent-rubis"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-selway-ink mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-selway-stone rounded focus:outline-none focus:border-accent-rubis"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-selway-ink mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-selway-stone rounded focus:outline-none focus:border-accent-rubis"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-selway-ink mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-selway-stone rounded focus:outline-none focus:border-accent-rubis"
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">Private Residential</option>
                    <option value="hospitality">Hospitality & Commercial</option>
                    <option value="consultation">Design Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-selway-ink mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-selway-stone rounded focus:outline-none focus:border-accent-rubis resize-none"
                    placeholder="Tell us about your project and what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full btn-primary disabled:opacity-50 hover:text-accent-blue"
                >
                  {formState === 'loading' ? 'Sending...' : 'Send message'}
                </button>

                {/* Status Messages */}
                {formState === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded text-green-800">
                    Thank you for your message! We'll be in touch shortly.
                  </div>
                )}

                {formState === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded text-red-800">
                    There was an error sending your message. Please try again or email us directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

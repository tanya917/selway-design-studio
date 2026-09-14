import Image from 'next/image'

export default function Contact() {

  return (
    <>
      {/* Hero Section */}
      <section className="border-b-2 border-accent-rubis bg-selway-cream py-28 sm:py-24">
        <div className="container-full">
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left Column - Text */}
            <div>
              <h2 className="heading-section mb-8">Contact Information</h2>

              <div className="space-y-6">
                {/* Project and General Enquiries */}
                <div>
                  <h3 className="text-lg font-semibold text-selway-ink mb-3">Project and general enquiries</h3>
                  <a
                    href="mailto:info@selwaydesignstudio.com"
                    className="text-lg text-accent-blue hover:text-accent-rubis transition-colors block mb-2"
                  >
                    info@selwaydesignstudio.com
                  </a>
                  <p className="text-base text-selway-stone opacity-75">
                    It helps to include a copy of your floor plan, photographs of the property and your budget where available, so we can give you a more informed first response.
                  </p>
                </div>

                {/* Press Enquiries */}
                <div>
                  <h3 className="text-lg font-semibold text-selway-ink mb-3">Press Enquiries</h3>
                  <a
                    href="mailto:press@selwaydesignstudio.com"
                    className="text-lg text-accent-blue hover:text-accent-rubis transition-colors"
                  >
                    press@selwaydesignstudio.com
                  </a>
                </div>

                {/* Based In */}
                <div>
                  <h3 className="text-lg font-semibold text-selway-ink mb-2">Based In</h3>
                  <p className="text-lg text-selway-stone mb-1">West London, UK</p>
                  <p className="text-base text-selway-stone opacity-75">Working globally across London, Los Angeles and beyond</p>
                </div>
              </div>
            </div>

            {/* Right Column - Chair Image */}
            <div className="flex items-center justify-end">
              <div className="relative w-96 h-96 overflow-hidden rounded-lg">
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
      </section>

    </>
  )
}

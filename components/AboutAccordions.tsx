'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function AboutAccordions() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [valuesOpen, setValuesOpen] = useState(false)
  const [processOpen, setProcessOpen] = useState(false)

  return (
    <>
      {/* Our Services */}
      <section className="bg-selway-cream py-8 sm:py-12 border-t border-b border-accent-dusty-blue">
        <div className="container-full">
          <h2 className="sr-only">Our Services</h2>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setServicesOpen(!servicesOpen)
            }}
            className="w-full flex justify-center items-center gap-6 mb-8 hover:opacity-75 transition-opacity"
          >
            <div className="relative w-48 h-16">
              <Image
                src="/hand_drawn_assets/files/our_services.png"
                alt="Our Services"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src={`/hand_drawn_assets/our_values_section/${servicesOpen ? 'minus' : 'plus'}.png`}
                alt={servicesOpen ? 'Close' : 'Open'}
                fill
                className="object-contain"
              />
            </div>
          </button>

          {servicesOpen && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                <div className="border-l-4 border-accent-rubis pl-6">
                  <h3 className="text-sm uppercase tracking-widest font-semibold mb-2">01</h3>
                  <div className="relative w-64 h-20 mb-4">
                    <Image
                      src="/hand_drawn_assets/our_services/interior_architecture_spatial_planning.png"
                      alt="Interior Architecture and Spatial Planning"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-base leading-relaxed">
                    Rethinking the bones of a space to improve flow, proportion and livability. We work closely with architects and contractors to ensure the interior vision is embedded from the earliest stage.
                  </p>
                </div>

                <div className="border-l-4 border-accent-blue pl-6">
                  <h3 className="text-sm uppercase tracking-widest font-semibold mb-2">02</h3>
                  <div className="relative w-64 h-20 mb-4">
                    <Image
                      src="/hand_drawn_assets/our_services/concept_design_development.png"
                      alt="Concept Design and Design Development"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-base leading-relaxed">
                    Developing a clear design language for each project, one that responds to the architecture, the client's lifestyle and the character of the location. We refine the concept through material samples, mood boards and spatial drawings.
                  </p>
                </div>

                <div className="border-l-4 border-accent-sage pl-6">
                  <h3 className="text-sm uppercase tracking-widest font-semibold mb-2">03</h3>
                  <div className="relative w-64 h-20 mb-4">
                    <Image
                      src="/hand_drawn_assets/our_services/ffe_specification_procurement.png"
                      alt="FF&E Specification and Procurement"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-base leading-relaxed">
                    Specifying and sourcing furniture, fixtures and finishes that bring the design to life. We draw on a curated network of vendors and makers, combining bespoke pieces with carefully selected contemporary and vintage furniture.
                  </p>
                </div>

                <div className="border-l-4 border-accent-ochre pl-6">
                  <h3 className="text-sm uppercase tracking-widest font-semibold mb-2">04</h3>
                  <div className="relative w-64 h-20 mb-4">
                    <Image
                      src="/hand_drawn_assets/our_services/files2/bespoke_joinery_furniture_design.png"
                      alt="Bespoke Joinery and Furniture Design"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-base leading-relaxed">
                    Designing furniture, custom cabinetry and built-in storage pieces that are integral to the architecture. Each bespoke element is drawn and detailed in-house and made by trusted craftspeople.
                  </p>
                </div>

                <div className="border-l-4 border-selway-ink pl-6">
                  <h3 className="text-sm uppercase tracking-widest font-semibold mb-2">05</h3>
                  <div className="relative w-64 h-20 mb-4">
                    <Image
                      src="/hand_drawn_assets/our_services/files2/project_coordination_installation.png"
                      alt="Project Coordination and Installation"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-base leading-relaxed">
                    Managing the full delivery of a project, liaising with contractors, suppliers and trades to ensure the design is realized to the highest standard. We oversee installation and final dressing to completion.
                  </p>
                </div>

                <div className="border-l-4 border-selway-stone pl-6">
                  <h3 className="text-sm uppercase tracking-widest font-semibold mb-2">06</h3>
                  <div className="relative w-64 h-20 mb-4">
                    <Image
                      src="/hand_drawn_assets/our_services/files2/complete_turnkey_service.png"
                      alt="A Complete, turnkey service"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-base leading-relaxed mb-4">
                    From a single-room scheme to a complete turnkey service, no project is too small to start a conversation with us.
                  </p>
                  <Link href="/contact" className="btn-primary">
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-selway-cream py-8 sm:py-12 border-b border-accent-dusty-blue">
        <div className="container-full">
          <h2 className="sr-only">Our Values</h2>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setValuesOpen(!valuesOpen)
            }}
            className="w-full flex justify-center items-center gap-4 mb-8 hover:opacity-75 transition-opacity"
          >
            <div className="relative w-40 h-16">
              <Image
                src="/hand_drawn_assets/our_values_section/our_values.png"
                alt="Our Values"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-8 h-8">
              <Image
                src={`/hand_drawn_assets/our_values_section/${valuesOpen ? 'minus' : 'plus'}.png`}
                alt={valuesOpen ? 'Close' : 'Open'}
                fill
                className="object-contain"
              />
            </div>
          </button>

          {valuesOpen && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <div className="border-l-4 border-accent-rubis pl-6">
                <div className="relative w-64 h-24 mb-4">
                  <Image
                    src="/hand_drawn_assets/files/personality_in_every_space.png"
                    alt="Personality in Every Space"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="">
                  Every interior starts with the person, not a mood board. We read what a client responds to instinctively, the objects they can&apos;t part with, the colours they gravitate to without knowing why, and let that shape the scheme from the very first sketch.
                </p>
              </div>

              <div className="border-l-4 border-accent-blue pl-6">
                <div className="relative w-64 h-24 mb-4">
                  <Image
                    src="/hand_drawn_assets/files/material_intelligence.png"
                    alt="Material Intelligence"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="">
                  A deep understanding of material and architectural behaviour informs every decision we make. We combine natural materials, considered textures and a controlled palette to create interiors that feel balanced, tactile and shaped to endure.
                </p>
              </div>

              <div className="border-l-4 border-accent-sage pl-6">
                <div className="relative w-64 h-24 mb-4">
                  <Image
                    src="/hand_drawn_assets/files/a_global_point_of_view.png"
                    alt="A Global Point of View"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="">
                  Our network of relationships with vendors, makers and designers enables us to realise custom design strategies shaped by London, Los Angeles and everywhere in between.
                </p>
              </div>

              <div className="border-l-4 border-accent-ochre pl-6">
                <div className="relative w-64 h-24 mb-4">
                  <Image
                    src="/hand_drawn_assets/files/transparency_and_trust.png"
                    alt="Transparency and Trust"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="">
                  We build every working relationship on clear communication, honest budget management and meticulous attention to detail. Our clients always know where their project stands.
                </p>
              </div>

              <div className="border-l-4 border-selway-ink pl-6">
                <div className="relative w-64 h-24 mb-4">
                  <Image
                    src="/hand_drawn_assets/files/craft_and_sustainability.png"
                    alt="Craft and Sustainability"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="">
                  We source a considered mix of trade-only, vintage, bespoke and retail pieces, working with makers who produce with social and ecological responsibility in mind, and whose work carries a story worth telling.
                </p>
              </div>

              <div className="border-l-4 border-accent-rubis pl-6">
                <div className="relative w-64 h-24 mb-4">
                  <Image
                    src="/hand_drawn_assets/files/collaboration_as_practice.png"
                    alt="Collaboration as Practice"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="">
                  We thrive on working closely with clients and collaborators alike. Whether joining an existing team or assembling one from our network, we welcome the varied perspectives that elevate every project.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-selway-cream py-8 sm:py-12 border-b border-accent-dusty-blue">
        <div className="container-full">
          <h2 className="sr-only">Our Process</h2>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setProcessOpen(!processOpen)
            }}
            className="w-full flex justify-center items-center gap-6 mb-8 hover:opacity-75 transition-opacity"
          >
            <div className="relative w-48 h-16">
              <Image
                src="/hand_drawn_assets/files/our_process.png"
                alt="Our Process"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src={`/hand_drawn_assets/our_values_section/${processOpen ? 'minus' : 'plus'}.png`}
                alt={processOpen ? 'Close' : 'Open'}
                fill
                className="object-contain"
              />
            </div>
          </button>

          {processOpen && (
            <>
              <p className="text-center text-lg  max-w-2xl mx-auto mb-12">
                Transparency and honesty run through everything we do, with clients and with the makers and collaborators we work alongside — it&apos;s the discipline that, in our experience, earns a studio the right to be genuinely creative. We follow the same ten-step process regardless of a project&apos;s scope or scale, so communication stays clear throughout and everyone, client and team alike, always knows exactly where things stand.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full">
                {[
                  { num: '01', button: 'button_01', title: 'Discovery' },
                  { num: '02', button: 'button_02', title: 'Consultation' },
                  { num: '03', button: 'button_03', title: 'Scope of Work' },
                  { num: '04', button: 'button_04', title: 'Project Commencement' },
                  { num: '05', button: 'button_05', title: 'On Site Survey' },
                  { num: '06', button: 'button_06', title: 'Concept & Budget Review' },
                  { num: '07', button: 'button_07', title: 'Design Presentation' },
                  { num: '08', button: 'button_08', title: 'Approvals/Procurement/Order Receipt' },
                  { num: '09', button: 'button_09', title: 'Design Implementation' },
                  { num: '10', button: 'button_10', title: 'Final Installation' },
                ].map((step) => (
                  <div key={step.num} className="text-center">
                    <div className="relative w-full h-24 mb-4 flex justify-center">
                      <Image
                        src={`/hand_drawn_assets/${step.num === '10' ? '10_slash_transparent' : step.button}.png`}
                        alt={step.num}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-selway-ink">{step.title}</h3>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}

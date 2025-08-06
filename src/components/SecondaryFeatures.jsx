'use client'

import { useId, useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  FaDollarSign,
  FaBoxOpen,
  FaShieldAlt,
  FaCompressArrowsAlt,
  FaCog,
  FaChartLine,
} from 'react-icons/fa'

import { Container } from '@/components/Container'
import slimTowerImage from '@/images/slim-tower-cd-logo.png'
import slimWallImage from '@/images/slim-wall.png'

const products = [
  {
    name: 'Slim Tower',
    subtitle: 'Compact & Feature-Rich',
    image: slimTowerImage,
    description:
      'Our flagship tower design offering maximum capacity in a compact footprint.',
  },
  {
    name: 'Slim Wall',
    subtitle: 'Sleek, Slim & Wall-Mounted',
    image: slimWallImage,
    description:
      'Space-saving wall-mounted solution perfect for tight spaces and modern aesthetics.',
  },
]

const features = [
  {
    name: 'Extra Revenue with zero staff increase',
    description:
      'Generate passive income from every sale without hiring additional staff or changing your operations.',
    icon: FaDollarSign,
  },
  {
    name: 'No Inventory Risk',
    description:
      'We provide all products and handle stock management. Zero upfront investment or inventory liability.',
    icon: FaBoxOpen,
  },
  {
    name: 'Compliant & Secure',
    description:
      'Age-restricted vending with FDA-compliant packaging. We handle all compliance requirements.',
    icon: FaShieldAlt,
  },
  {
    name: 'Small Footprint',
    description:
      'Compact design that fits seamlessly into any bar layout without taking up valuable space.',
    icon: FaCompressArrowsAlt,
  },
  {
    name: 'Turnkey Setup',
    description:
      'Complete white-glove service from installation to maintenance. We manage everything.',
    icon: FaCog,
  },
  {
    name: 'Revenue Example',
    description:
      'Sell 10 pens/night at $25 each = $1,050 extra/month for your bar with no upfront cost.',
    icon: FaChartLine,
  },
]

function DeviceArrowIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        d="M12 25l8-8m0 0h-6m6 0v6"
        stroke="#171717"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}

function DeviceCardsIcon(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm1 5a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1H10z"
        fill={`url(#${id}-gradient)`}
      />
      <rect x={9} y={6} width={14} height={4} rx={1} fill="#171717" />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={16}
          y1={12}
          x2={16}
          y2={28}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#737373" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}

function DeviceClockIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 32a8 8 0 100-16 8 8 0 000 16zm1-8.414V19h-2v5.414l4 4L28.414 27 25 23.586z"
        fill="#171717"
      />
    </svg>
  )
}

function DeviceListIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <circle cx={11} cy={14} r={2} fill="#171717" />
      <circle cx={11} cy={20} r={2} fill="#171717" />
      <circle cx={11} cy={26} r={2} fill="#171717" />
      <path
        d="M16 14h6M16 20h6M16 26h6"
        stroke="#737373"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}

function DeviceLockIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 19.5a3.5 3.5 0 117 0V22a2 2 0 012 2v6a2 2 0 01-2 2h-7a2 2 0 01-2-2v-6a2 2 0 012-2v-2.5zm2 2.5h3v-2.5a1.5 1.5 0 00-3 0V22z"
        fill="#171717"
      />
    </svg>
  )
}

function DeviceChartIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 13.838V26a2 2 0 01-2 2H11a2 2 0 01-2-2V15.65l2.57 3.212a1 1 0 001.38.175L15.4 17.2a1 1 0 011.494.353l1.841 3.681c.399.797 1.562.714 1.843-.13L23 13.837z"
        fill="#171717"
      />
      <path
        d="M10 12h12"
        stroke="#737373"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}

function ProductSlider() {
  const [activeProduct, setActiveProduct] = useState(0)
  const slideContainerRef = useRef(null)
  const slideRefs = useRef([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
            setActiveProduct(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      },
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <div className="mt-8 lg:mt-12">
      {/* Desktop View */}
      <div className="hidden lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="relative lg:col-span-5">
          <div className="flex h-[450px] items-center justify-center rounded-2xl bg-gray-50 p-4">
            <div className="text-center">
              <Image
                src={products[activeProduct].image}
                alt={products[activeProduct].name}
                className="mx-auto h-full max-h-[400px] w-auto object-contain"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {products[activeProduct].name}
                </h3>
                <p className="text-sm text-gray-600">
                  {products[activeProduct].subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 lg:flex lg:items-center">
          <div className="mx-auto max-w-md sm:max-w-2xl lg:mx-0">
            <div className="space-y-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`cursor-pointer border-l-4 pl-6 transition-colors ${
                    index === activeProduct
                      ? 'border-cyan-500'
                      : 'border-gray-200'
                  }`}
                  onClick={() => setActiveProduct(index)}
                >
                  <h4 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h4>
                  <p className="text-sm text-gray-600">{product.subtitle}</p>
                  <p className="mt-2 text-gray-600">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="lg:hidden">
        <Container>
          <div
            ref={slideContainerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((product, index) => (
              <div
                key={index}
                ref={(ref) => {
                  if (ref) {
                    slideRefs.current[index] = ref
                  }
                }}
                className="w-full flex-none snap-center"
              >
                <div className="rounded-2xl bg-gray-50 p-4">
                  <div className="flex h-[300px] items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">{product.subtitle}</p>
                    <p className="mt-2 text-sm text-gray-600">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="mt-6 flex justify-center gap-3">
            {products.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === activeProduct ? 'bg-cyan-500' : 'bg-gray-300'
                }`}
                onClick={() => {
                  slideRefs.current[index]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center',
                  })
                }}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Why bars love our vape vending solution"
      className="py-12 sm:py-16"
    >
      <Container>
        {/* Our Products Section */}
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-2xl font-medium tracking-tight text-gray-900 sm:text-3xl">
            Our Products
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Premium, pre-filled disposable vape pens from licensed,
            FDA-compliant manufacturers — sealed, labeled, and ready to sell.
          </p>
        </div>

        <ProductSlider />

        <ul
          role="list"
          className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 text-sm sm:mt-16 sm:grid-cols-2 md:gap-y-6 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{feature.name}</h3>
              </div>
              <p className="mt-4 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

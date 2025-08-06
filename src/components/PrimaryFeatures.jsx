'use client'

import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'
import Image from 'next/image'
import { FaTools, FaDollarSign, FaTruck } from 'react-icons/fa'

import { AppScreen } from '@/components/AppScreen'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import slimWallImage from '@/images/slim-wall.png'
import {
  DiageoLogo,
  LaravelLogo,
  MirageLogo,
  ReversableLogo,
  StatamicLogo,
  StaticKitLogo,
  TransistorLogo,
  TupleLogo,
} from '@/components/StockLogos'

const MotionAppScreenHeader = motion(AppScreen.Header)
const MotionAppScreenBody = motion(AppScreen.Body)

const features = [
  {
    name: 'We Install',
    description:
      'Professional placement of a premium, compact vending machine that fits perfectly into any bar layout without taking up valuable space.',
    icon: FaTools,
    screen: InstallScreen,
  },
  {
    name: 'You Earn',
    description:
      'Earn a set profit per vape pen sold with no upfront costs, inventory risk, or staff increase needed. Pure passive income for your venue.',
    icon: FaDollarSign,
    screen: EarnScreen,
  },
  {
    name: 'We Restock',
    description:
      'We handle all inventory management, restocking, maintenance, and compliance requirements. You focus on running your bar while we handle everything else.',
    icon: FaTruck,
    screen: RestockScreen,
  },
]

function DeviceUserIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

function DeviceNotificationIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#A3A3A3"
      />
      <path
        d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
        fill="#737373"
      />
    </svg>
  )
}

function DeviceTouchIcon(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={14}
          y1={14.5}
          x2={7}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
        </linearGradient>
      </defs>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
        fill="#A3A3A3"
      />
      <path
        d="M7 22c0-4.694 3.5-8 8-8"
        stroke={`url(#${id}-gradient)`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const maxZIndex = 2147483647

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  transition: { duration: 0.4 },
}

const bodyVariantForwards = (custom) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom, ...props) =>
      custom.isForwards
        ? bodyVariantForwards(custom, ...props)
        : bodyVariantBackwards,
    animate: (custom) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom, ...props) =>
      custom.isForwards
        ? bodyVariantBackwards
        : bodyVariantForwards(custom, ...props),
  },
}

function InstallScreen(props) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Professional Installation</AppScreen.Title>
        <AppScreen.Subtitle>
          Expert placement of{' '}
          <span className="text-white">premium machines</span> at your venue.
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="px-4 py-6">
          <div className="space-y-6">
            {[
              { label: 'Machine Model', value: 'Cloud Drip Pro V2' },
              { label: 'Installation Date', value: 'Within 1-2 weeks' },
              { label: 'Location', value: 'Near entrance/bar area' },
            ].map((field) => (
              <div key={field.label}>
                <div className="text-sm text-gray-500">{field.label}</div>
                <div className="mt-2 border-b border-gray-200 pb-2 text-sm text-gray-900">
                  {field.value}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-cyan-500 px-3 py-2 text-center text-sm font-semibold text-white">
            Schedule Installation
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function EarnScreen(props) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Revenue Tracking</AppScreen.Title>
        <AppScreen.Subtitle>Your earnings overview</AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="divide-y divide-gray-100">
          {[
            {
              name: 'This Week',
              price: '$250.00',
              change: '10 units',
              color: '#16A34A',
            },
            {
              name: 'This Month',
              price: '$1,050.00',
              change: '42 units',
              color: '#0EA5E9',
            },
            {
              name: 'Last Month',
              price: '$975.00',
              change: '39 units',
              color: '#8B5CF6',
            },
            {
              name: 'Total Revenue',
              price: '$3,225.00',
              change: '129 units',
              color: '#F59E0B',
            },
          ].map((earnings) => (
            <div
              key={earnings.name}
              className="flex items-center gap-4 px-4 py-3"
            >
              <div
                className="flex h-10 w-10 flex-none items-center justify-center rounded-full"
                style={{ backgroundColor: earnings.color }}
              >
                <span className="text-sm font-semibold text-white">💰</span>
              </div>
              <div className="flex-auto text-sm text-gray-900">
                {earnings.name}
              </div>
              <div className="flex-none text-right">
                <div className="text-sm font-medium text-gray-900">
                  {earnings.price}
                </div>
                <div className="text-xs/5 text-gray-500">{earnings.change}</div>
              </div>
            </div>
          ))}
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function RestockScreen(props) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Inventory Management</AppScreen.Title>
        <AppScreen.Subtitle>
          <span className="text-white">Automated</span> restocking
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="px-4 py-6">
          <div className="space-y-4">
            {[
              { label: 'Current Stock', value: '85%' },
              {
                label: 'Next Restock',
                value: (
                  <div className="flex items-center">
                    Thursday
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="ml-1 h-4 w-4"
                    >
                      <path
                        d="M9 12l2 2 4-4"
                        stroke="#16A34A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ),
              },
              { label: 'Products Available', value: '6 Varieties' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between border-b border-gray-100 pb-4"
              >
                <div className="text-sm text-gray-500">{item.label}</div>
                <div className="text-sm font-semibold text-gray-900">
                  {item.value}
                </div>
              </div>
            ))}
            <div className="rounded-lg bg-cyan-500 px-3 py-2 text-center text-sm font-semibold text-white">
              View Full Inventory
            </div>
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function usePrevious(value) {
  let ref = useRef(undefined)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true },
  )

  return (
    <TabGroup
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <TabList className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gray-800"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500">
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  <Tab className="text-left data-selected:not-data-focus:outline-hidden">
                    <span className="absolute inset-0 rounded-2xl" />
                    {feature.name}
                  </Tab>
                </h3>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </TabList>
      <div className="relative col-span-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#13B5C8" className="animate-spin-slower" />
        </div>
        <div className="z-10 mx-auto flex h-[400px] w-full items-center justify-center lg:h-[480px]">
          <Image
            src={slimWallImage}
            alt="Cloud Drip Vending Machine"
            className="h-full w-auto object-contain"
            priority
          />
        </div>
      </div>
    </TabGroup>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef(null)
  let slideRefs = useRef([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
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
    <>
      {/* Fixed Image Above Cards */}
      <Container>
        <div className="mx-auto flex h-[400px] w-full items-center justify-center p-4">
          <Image
            src={slimWallImage}
            alt="Cloud Drip Vending Machine"
            className="h-full w-auto object-contain"
          />
        </div>
      </Container>

      {/* Sliding Cards Below */}
      <div className="mt-8">
        <Container>
          <div
            ref={slideContainerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {features.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                ref={(ref) => {
                  if (ref) {
                    slideRefs.current[featureIndex] = ref
                  }
                }}
                className="w-80 flex-none snap-center"
              >
                <div className="transform rounded-2xl bg-gray-800 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500">
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {feature.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500',
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="how-it-works"
      aria-label="How our vape vending solution works"
      className="bg-gray-900 py-12 sm:py-16"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
            How It Works
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Cloud Drip makes it simple to add vape vending to your venue. We
            handle everything from installation to compliance, so you can focus
            on your business while earning extra revenue.
          </p>
        </div>
      </Container>
      <div className="mt-8 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-12 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}

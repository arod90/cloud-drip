'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink(props) {
  return (
    <PopoverButton
      as={Link}
      className="block text-base/7 tracking-tight text-white hover:text-gray-300"
      {...props}
    />
  )
}

export function Header() {
  return (
    <header className="py-4">
      <nav>
        <Container className="relative z-50">
          <div className="flex items-center justify-between">
            {/* Combined Logo and Nav in single container */}
            <div className="flex items-center gap-8 rounded-xl bg-gray-900 px-6 py-3">
              <Link href="/" aria-label="Home">
                <Logo className="h-12 w-auto" />
              </Link>
              {/* Subtle divider */}
              <div className="hidden h-8 w-px bg-gray-700 lg:block"></div>
              <div className="hidden items-center gap-2 lg:flex">
                <NavLinks />
              </div>
            </div>
            {/* Mobile Menu Button with gray background */}
            <div className="rounded-xl bg-gray-900 p-2 lg:hidden">
              <Popover>
                {({ open }) => (
                  <>
                    <PopoverButton
                      className="relative z-10 inline-flex items-center rounded-lg stroke-white p-2 hover:bg-gray-800/50 hover:stroke-gray-300 focus:not-data-focus:outline-hidden active:stroke-white"
                      aria-label="Toggle site navigation"
                    >
                      {({ open }) =>
                        open ? (
                          <ChevronUpIcon className="h-6 w-6" />
                        ) : (
                          <MenuIcon className="h-6 w-6" />
                        )
                      }
                    </PopoverButton>
                    <AnimatePresence initial={false}>
                      {open && (
                        <>
                          <PopoverBackdrop
                            static
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur-sm"
                          />
                          <PopoverPanel
                            static
                            as={motion.div}
                            initial={{ opacity: 0, y: -32 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                              opacity: 0,
                              y: -32,
                              transition: { duration: 0.2 },
                            }}
                            className="absolute inset-x-0 top-0 z-50 origin-top rounded-b-2xl bg-gray-800 px-6 pt-32 pb-6 shadow-2xl shadow-gray-900/20"
                          >
                            <div className="space-y-4">
                              <MobileNavLink href="/#how-it-works">
                                How It Works
                              </MobileNavLink>
                              <MobileNavLink href="/#secondary-features">
                                Our Products
                              </MobileNavLink>
                              <MobileNavLink href="/#reviews">
                                Reviews
                              </MobileNavLink>
                              <MobileNavLink href="/#faqs">FAQs</MobileNavLink>
                            </div>
                            {/* <div className="mt-8 flex flex-col gap-4">
                            <Button href="/login" variant="outline">
                              Log in
                            </Button>
                            <Button href="#">Download the app</Button>
                          </div> */}
                          </PopoverPanel>
                        </>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Popover>
            </div>
            {/* <div className="flex items-center gap-6 max-lg:hidden">
              <Button href="/login" variant="outline">
                Log in
              </Button>
              <Button href="#">Download</Button>
            </div> */}
          </div>
        </Container>
      </nav>
    </header>
  )
}

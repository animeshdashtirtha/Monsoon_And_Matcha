import './index.css'

import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DisplayHeading } from '@/components/DisplayHeading'
import { Divider } from '@/components/Divider'
import { GridLines } from '@/components/GridLines'
import { ImageFrame } from '@/components/ImageFrame'
import { PageTransition } from '@/components/PageTransition'
import { Section } from '@/components/Section'
import { SectionLabel } from '@/components/SectionLabel'
import { TechnicalLabel } from '@/components/TechnicalLabel'

const menuItems = [
  {
    number: '01',
    name: 'Ceremonial Matcha',
    detail: 'Uji matcha / cold whisk / coconut cream',
    price: '480 BDT',
  },
  {
    number: '02',
    name: 'Rain Tea',
    detail: 'Jasmine pearl / pandan / wild honey',
    price: '360 BDT',
  },
  {
    number: '03',
    name: 'Sesame Cloud',
    detail: 'Black sesame / rice milk / salt caramel',
    price: '420 BDT',
  },
]

const botanicals = ['Pandan', 'Bakul', 'Lotus', 'Makrut lime', 'Wild ginger', 'Tulsi']

function App() {
  return (
    <PageTransition className="min-h-svh bg-paper text-ink">
      <header className="border-b border-ink/15">
        <Container className="flex min-h-20 items-center justify-between gap-8">
          <a className="font-editorial text-xl tracking-[-0.04em]" href="#top">
            Monsoon &amp; Matcha
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 sm:flex">
            <a className="font-technical text-[0.65rem] tracking-[0.14em] text-sesame/70 uppercase transition-colors hover:text-botanical" href="#menu">Menu</a>
            <a className="font-technical text-[0.65rem] tracking-[0.14em] text-sesame/70 uppercase transition-colors hover:text-botanical" href="#story">Our story</a>
            <a className="font-technical text-[0.65rem] tracking-[0.14em] text-sesame/70 uppercase transition-colors hover:text-botanical" href="#visit">Visit</a>
          </nav>
          <TechnicalLabel className="text-botanical">Dhaka / 2026</TechnicalLabel>
        </Container>
      </header>

      <main id="top">
        <Section className="relative overflow-hidden border-b border-ink/15 py-16 sm:py-24 lg:py-28">
          <GridLines className="opacity-50" />
          <Container className="relative">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div className="max-w-xl">
                <SectionLabel>Dhaka, Bangladesh / 23.7806° N</SectionLabel>
                <DisplayHeading as="h1" className="mt-8 text-[clamp(4rem,10vw,8.5rem)] leading-[0.82] sm:text-[clamp(5rem,9vw,9rem)]">
                  Where
                  <br />
                  Monsoon
                  <br />
                  Meets Matcha
                </DisplayHeading>
                <p className="mt-10 max-w-sm text-base leading-7 text-sesame/80">
                  A Pan-Asian tea atelier and dessert bar. East Asian tea rituals, reimagined with local Bangladeshi botanicals.
                </p>
                <Button className="mt-8" type="button">
                  Explore menu
                  <ArrowUpRight aria-hidden="true" className="ml-3 size-4" />
                </Button>
              </div>
              <ImageFrame
                alt="A quiet cup of green tea beside a tea whisk"
                caption="First pour / ceremonial matcha"
                className="aspect-[5/6] saturate-[0.7] sepia-[0.18]"
                src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=85"
              />
            </div>
          </Container>
        </Section>

        <Section className="border-b border-ink/15" id="introduction">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <SectionLabel>01 / Introduction</SectionLabel>
                <h2 className="mt-5 max-w-xs font-editorial text-4xl leading-none tracking-[-0.04em] sm:text-5xl">Tea is a place you can return to.</h2>
              </div>
              <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
                <p className="max-w-md text-lg leading-8 text-sesame/85">
                  Monsoon &amp; Matcha brings the calm precision of a tea room into the generous, fragrant rhythm of Dhaka. Every cup begins with respect for the leaf and curiosity about where it can go next.
                </p>
                <div className="border-l border-ink/15 pl-6">
                  <TechnicalLabel>Atelier notes</TechnicalLabel>
                  <dl className="mt-6 space-y-5">
                    <div className="flex justify-between gap-4 border-b border-ink/15 pb-3"><dt className="font-technical text-xs text-sesame/60 uppercase">Open</dt><dd className="font-technical text-xs">07:00 — 22:00</dd></div>
                    <div className="flex justify-between gap-4 border-b border-ink/15 pb-3"><dt className="font-technical text-xs text-sesame/60 uppercase">Brewed</dt><dd className="font-technical text-xs">To order</dd></div>
                    <div className="flex justify-between gap-4 border-b border-ink/15 pb-3"><dt className="font-technical text-xs text-sesame/60 uppercase">Served</dt><dd className="font-technical text-xs">All day</dd></div>
                  </dl>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="bg-deep-slate text-paper" id="menu">
          <Container>
            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
              <div>
                <SectionLabel className="text-matcha">02 / Featured menu</SectionLabel>
                <DisplayHeading className="mt-5 text-paper">Made slowly.</DisplayHeading>
              </div>
              <TechnicalLabel className="text-paper/60">Three ways to begin</TechnicalLabel>
            </div>
            <div className="mt-16 border-t border-paper/20">
              {menuItems.map((item) => (
                <article className="grid gap-5 border-b border-paper/20 py-7 sm:grid-cols-[0.15fr_1fr_auto] sm:items-center" key={item.number}>
                  <TechnicalLabel className="text-matcha">{item.number}</TechnicalLabel>
                  <div><h3 className="font-editorial text-3xl tracking-[-0.03em]">{item.name}</h3><p className="mt-2 font-technical text-[0.65rem] tracking-[0.08em] text-paper/55 uppercase">{item.detail}</p></div>
                  <p className="font-technical text-sm text-paper/80">{item.price}</p>
                </article>
              ))}
            </div>
            <Button className="mt-10 border-paper bg-paper text-ink hover:border-matcha hover:bg-matcha" type="button">
              See full menu
              <ArrowUpRight aria-hidden="true" className="ml-3 size-4" />
            </Button>
          </Container>
        </Section>

        <Section className="border-b border-ink/15" id="botanicals">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="relative min-h-96 overflow-hidden bg-matcha p-8 sm:p-12">
                <GridLines className="opacity-40" />
                <div className="relative flex h-full flex-col justify-between gap-20">
                  <div className="flex justify-between"><TechnicalLabel>Field notes / 03</TechnicalLabel><TechnicalLabel>Wet season</TechnicalLabel></div>
                  <div><p className="max-w-sm font-editorial text-5xl leading-[0.9] tracking-[-0.04em] text-deep-slate sm:text-6xl">Green things, gathered close.</p><p className="mt-8 max-w-xs text-sm leading-6 text-deep-slate/75">Familiar leaves and flowers, placed beside teas that travelled a long way to meet them.</p></div>
                </div>
              </div>
              <div>
                <SectionLabel>Local botanicals</SectionLabel>
                <h2 className="mt-5 font-editorial text-4xl leading-none tracking-[-0.04em] sm:text-5xl">A garden in the cup.</h2>
                <div className="mt-10 grid grid-cols-2 border-t border-ink/15">
                  {botanicals.map((botanical, index) => (
                    <div className="border-b border-r border-ink/15 py-4" key={botanical}><span className="font-technical text-[0.65rem] text-botanical">0{index + 1}</span><p className="mt-2 font-editorial text-xl">{botanical}</p></div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="border-b border-ink/15" id="philosophy">
          <Container narrow>
            <SectionLabel>04 / Philosophy</SectionLabel>
            <blockquote className="m-0 mt-8 border-l-2 border-botanical pl-6 sm:pl-10">
              <p className="font-editorial text-5xl leading-[0.95] tracking-[-0.045em] sm:text-7xl">“The best cup is the one that makes the room feel different.”</p>
              <cite className="mt-8 block font-technical text-[0.65rem] tracking-[0.14em] text-sesame/60 not-italic uppercase">Our working philosophy</cite>
            </blockquote>
          </Container>
        </Section>

        <Section className="border-b border-ink/15" id="story">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <ImageFrame alt="Tea leaves and ceramic tea cups arranged on a wooden table" caption="A table set for staying" className="aspect-[4/5] saturate-[0.65] sepia-[0.2]" src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=85" />
              <div className="max-w-xl">
                <SectionLabel>05 / Brand story</SectionLabel>
                <DisplayHeading className="mt-5">Two climates, one table.</DisplayHeading>
                <p className="mt-8 text-lg leading-8 text-sesame/80">Born from a love of Japanese tea rooms and the lush edges of Bengal, Monsoon &amp; Matcha is a place for the in-between. The first sip is precise. The second is yours.</p>
                <a className="mt-8 inline-flex items-center font-technical text-[0.68rem] tracking-[0.14em] text-botanical uppercase transition-colors hover:text-ink" href="#visit">Read the full story<ArrowUpRight aria-hidden="true" className="ml-3 size-4" /></a>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="bg-botanical text-paper" id="visit">
          <Container>
            <div className="flex flex-col justify-between gap-12 sm:flex-row sm:items-end">
              <div className="max-w-2xl"><SectionLabel className="text-matcha">06 / Come by</SectionLabel><DisplayHeading className="mt-5 text-paper">Leave room for one more cup.</DisplayHeading></div>
              <div className="sm:max-w-xs sm:text-right"><TechnicalLabel className="text-paper/70">Dhanmondi, Dhaka</TechnicalLabel><p className="mt-4 text-sm leading-6 text-paper/80">House 12, Road 4A<br />Open every day, 07:00 — 22:00</p><Button className="mt-7 border-paper text-paper hover:bg-paper hover:text-botanical" variant="secondary" type="button">Get directions<ArrowUpRight aria-hidden="true" className="ml-3 size-4" /></Button></div>
            </div>
          </Container>
        </Section>
      </main>

      <footer className="bg-ink py-10 text-paper" id="footer">
        <Container>
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><p className="font-editorial text-3xl tracking-[-0.04em]">Monsoon &amp; Matcha</p><p className="mt-3 font-technical text-[0.65rem] tracking-[0.12em] text-paper/50 uppercase">Tea, dessert, and a little weather</p></div><div className="flex gap-6 font-technical text-[0.65rem] tracking-[0.12em] text-paper/60 uppercase"><a className="transition-colors hover:text-matcha" href="#menu">Menu</a><a className="transition-colors hover:text-matcha" href="#story">Story</a><a className="transition-colors hover:text-matcha" href="#top">Back to top</a></div></div>
          <Divider className="my-8 border-paper/20" />
          <div className="flex flex-col justify-between gap-3 font-technical text-[0.6rem] tracking-[0.12em] text-paper/40 uppercase sm:flex-row"><span>Dhaka, Bangladesh</span><span>© 2026 Monsoon &amp; Matcha</span></div>
        </Container>
      </footer>
    </PageTransition>
  )
}

export default App

import './index.css'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DisplayHeading } from '@/components/DisplayHeading'
import { Divider } from '@/components/Divider'
import { GridLines } from '@/components/GridLines'
import { PageTransition } from '@/components/PageTransition'
import { Section } from '@/components/Section'
import { SectionLabel } from '@/components/SectionLabel'
import { TechnicalLabel } from '@/components/TechnicalLabel'

function App() {
  return (
    <PageTransition className="min-h-svh bg-paper text-ink">
      <Section className="relative overflow-hidden border-b border-ink/15">
        <GridLines className="opacity-60" />
        <Container className="relative">
          <div className="mb-20 flex items-center justify-between border-b border-ink/15 pb-5">
            <TechnicalLabel>Monsoon &amp; Matcha</TechnicalLabel>
            <TechnicalLabel className="text-botanical">Visual language / 02</TechnicalLabel>
          </div>
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-2xl">
              <SectionLabel>Part 02 / Design system</SectionLabel>
              <DisplayHeading as="h1" className="mt-8 max-w-xl">
                Where
                <br />
                Monsoon
                <br />
                Meets Matcha
              </DisplayHeading>
              <p className="mt-8 max-w-md text-base leading-7 text-sesame/75">
                A visual language for slow mornings, wet streets, and tea made with intention.
              </p>
            </div>
            <div className="grid gap-6 border-l border-ink/15 pl-6 sm:grid-cols-2 lg:block">
              <div>
                <TechnicalLabel>Dhaka, Bangladesh</TechnicalLabel>
                <p className="mt-3 font-technical text-sm text-sesame">23.7806° N / 90.4070° E</p>
              </div>
              <div className="mt-0 lg:mt-12">
                <TechnicalLabel>Brew time</TechnicalLabel>
                <p className="mt-3 font-editorial text-4xl tracking-[-0.04em]">04:30</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <SectionLabel>Tokens / 01</SectionLabel>
              <h2 className="mt-5 font-editorial text-3xl tracking-[-0.03em]">A quiet palette</h2>
            </div>
            <div className="grid grid-cols-2 border-t border-ink/15 sm:grid-cols-4 lg:grid-cols-7">
              {[
                ['Paper', 'bg-paper'],
                ['Ink', 'bg-ink'],
                ['Deep slate', 'bg-deep-slate'],
                ['Botanical', 'bg-botanical'],
                ['Matcha', 'bg-matcha'],
                ['Dark sesame', 'bg-sesame'],
                ['Chili', 'bg-chili'],
              ].map(([name, color]) => (
                <div className="border-b border-r border-ink/15 py-5 pr-4" key={name}>
                  <div className={`mb-4 h-16 ${color}`} />
                  <TechnicalLabel>{name}</TechnicalLabel>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-deep-slate text-paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <SectionLabel className="text-matcha">Components / 01</SectionLabel>
              <h2 className="mt-5 font-editorial text-3xl tracking-[-0.03em]">Made to hold a page</h2>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-4">
                <Button>View the menu</Button>
                <Button variant="secondary">Find the counter</Button>
                <Button className="text-paper" variant="quiet">Read our story</Button>
              </div>
              <Divider className="my-10 border-paper/20" />
              <div className="grid gap-8 sm:grid-cols-3">
                <div>
                  <TechnicalLabel className="text-matcha">Price</TechnicalLabel>
                  <p className="mt-3 font-editorial text-4xl">480 BDT</p>
                </div>
                <div>
                  <TechnicalLabel className="text-matcha">Origin</TechnicalLabel>
                  <p className="mt-3 font-editorial text-4xl">Uji</p>
                </div>
                <div>
                  <TechnicalLabel className="text-matcha">Status</TechnicalLabel>
                  <p className="mt-3 font-editorial text-4xl">Brewing</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </PageTransition>
  )
}

export default App

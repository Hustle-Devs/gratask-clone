

import Image from 'next/image'

// Logo imports
import zapierLogo from '@/assets/company-logo/zapier.png'
import gumroadLogo from '@/assets/company-logo/gumroad.png'
import featherdevLogo from '@/assets/company-logo/featherdev.png'
import coinbaseLogo from '@/assets/company-logo/coinbase.png'
import figmaLogo from '@/assets/company-logo/figma.png'
import globalbankLogo from '@/assets/company-logo/globalbank.png'
import amplitudeLogo from '@/assets/company-logo/amplitude.png'

export default function ClientLogo() {
  return (
    <section className="px-4 py-16 text-center">
      <div className="mx-auto max-w-custom">
        <h2 className="mb-12 font-medium text-foreground text-2xl sm:text-3xl md:text-4xl leading-snug">
          <span className="text-primary-600 dark:text-secondary">10,000</span> companies and{' '}
          <span className="text-primary-600 dark:text-secondary">70,000</span> people build<br className="hidden sm:block" />
          better experiences with Gratask
        </h2>

        {/* Horizontal layout with 5 columns */}
        <div className="flex flex-row flex-wrap md:flex-nowrap justify-center items-start gap-6">
          {/* Column 1 - Single logo, vertically centered */}
          <div className="flex flex-col items-center mt-8">
            <Logo src={zapierLogo} alt="Zapier" />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center gap-6">
            <Logo src={gumroadLogo} alt="Gumroad" />
            <Logo src={figmaLogo} alt="figmalogo" />
          </div>

          {/* Column 3 - Single logo, vertically centered */}
          <div className="flex flex-col items-center mt-8">
            <Logo src={featherdevLogo} alt="featherdevlogo" />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col items-center gap-6">
            <Logo src={coinbaseLogo} alt="Coinbase" />
            <Logo src={globalbankLogo} alt="GlobalBank" />
          </div>

          {/* Column 5 - Single logo, vertically centered */}
          <div className="flex flex-col items-center mt-8">
            <Logo src={amplitudeLogo} alt="Amplitude" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Logo({ src, alt }: { src: any; alt: string }) {
  return (
    <div className="flex justify-center items-center bg-foreground dark:bg-gray-700 px-6 py-4 border border-gray-600 rounded-md w-[180px] h-[60px]">
      <Image src={src} alt={alt} className="object-contain" />
    </div>
  )
}





import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "./glowing-effect"
import "./whychoose.css"
import { Heading } from "@components/heading";

export function GlowingEffectDemo() {
  return (
    <section className="flex flex-col gap-22 whychoose-section">
      <Heading title="Why Asrnova" />

      <div>
          <ul className="grid grid-cols-1 sm:h-[44rem] w-[75%] grid-rows-none !gap-10 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
          title=" Original Ideas Only"
          description="We don’t recycle old trends or templates. Every project is treated like a fresh canvas — unique, bold, and built from scratch with purpose."
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="No Boring Projects"
          description="We avoid cookie-cutter sites that lack soul. If it’s been done a thousand times, it’s not for us. We’re here for work that excites and inspires."
         
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Future Driven Solution"
          description="At asrnova, we don't chase what’s already out there. We craft digital experiences with tomorrow in mind — innovative, scalable, and truly ahead of the curve."          
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Focused on What Matters"
          description="Quality over quantity — always. We take on fewer projects so we can go deep, challenge the norm, and deliver work that stands out."
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Creative Growth Partners"
          description="We’re not just developers. We’re collaborators, thinkers, and partners in your journey — helping you explore ideas you didn’t know were possible."
        />
      </ul>
      </div>

    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border  md:rounded-3xl md:!p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl !p-6 md:!p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 !p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 azonix pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

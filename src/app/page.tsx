import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ImageDown, FileBadge2, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ImageDown,
    description:
      "Get your assets delivered to your email in seconds and dowload to your device instantly.",
  },
  {
    name: "Guaranteed Quality",
    Icon: FileBadge2,
    description:
      "Every asset is checked by our certified team to ensure the highest standards of quality control. To prove our commitment to maintaining those standards, we offer a 30-day money-back guarantee.",
  },
  {
    name: "Easy on the Planet",
    Icon: Sprout,
    description:
      "Since our business is digital, it is inherently carbon-neutral. However, to further contribute to benefiting future generations, we plant a tree for every hundred orders placed.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
            Your marketplace for high-quality{" "}
            <span className="text-green-600">digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground ">
            Welcome to DigitalAsset. Every asset on our platform is verified to
            by our team to ensure high quality standards and costumer
            satisfaction
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>
        {/* TODO: product list */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg-gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-900">
                    {<perk.Icon className="w-1/2 h-1/2" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}

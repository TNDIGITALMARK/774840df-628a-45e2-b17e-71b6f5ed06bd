import Image from 'next/image';

export default function OurStory() {
  return (
    <section id="our-story" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-[hsl(var(--primary))] mb-6">
              Our Story
            </h2>
            <p className="text-lg text-[hsl(var(--foreground))] mb-4 font-semibold">
              Rooted in Tradition, Grown with Care
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Poultry Gavran Best has been serving the community since 2018 from our 5-acre farm in Village Rampur, District Nashik. We believe that the best eggs come from happy, healthy hens living in natural conditions.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Our 200 free-range hens roam freely across open fields, pecking at natural grains and living as nature intended. This traditional approach ensures that every egg we produce is packed with nutrition, flavor, and the goodness of authentic village-style farming.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              From our farm to your table, we guarantee freshness within 24 hours. When you choose Poultry Gavran Best, you're not just buying eggs – you're supporting sustainable farming and enjoying the taste of tradition.
            </p>

            {/* Rustic Sign */}
            <div className="inline-block p-6 bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.1) 0px, transparent 2px, transparent 4px, rgba(0,0,0,0.1) 4px)',
              }} />
              <div className="relative text-center">
                <p className="text-3xl font-bold text-amber-100 mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  EST. 2018
                </p>
                <p className="text-sm text-amber-200 uppercase tracking-widest">
                  Village Rampur
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
              <Image
                src="/generated/farmers-chickens.jpg"
                alt="Happy farmers with free-range chickens"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

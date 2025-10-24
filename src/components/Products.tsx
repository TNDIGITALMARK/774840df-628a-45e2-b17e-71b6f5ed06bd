import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Desi Brown Eggs',
    image: '/generated/product-eggs-bowl.jpg',
    description: 'Fresh desi eggs in bowl',
  },
  {
    id: 2,
    name: 'Farm-Fresh Cartons',
    image: '/generated/product-egg-cracked.jpg',
    description: 'Premium quality eggs showing rich orange yolk',
  },
  {
    id: 3,
    name: 'Organic & Free-Range',
    image: '/generated/product-eggs-nest.jpg',
    description: 'Eggs from naturally raised hens',
  },
  {
    id: 4,
    name: 'Farm to Table',
    image: '/generated/product-hen-eggs.jpg',
    description: 'Direct from our happy hens',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[hsl(var(--primary))] mb-4">
            Pure, Natural, Nutritious
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our desi eggs are packed with protein, vitamins, and the rich flavor that only comes from traditional free-range farming.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-1"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-lg text-[hsl(var(--primary))] mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Fresh Desi Eggs */}
          <div className="bg-white rounded-lg p-8 shadow-[0_2px_8px_rgba(0,0,0,0.1)] text-center border-2 border-transparent hover:border-[hsl(var(--accent))] transition-all">
            <h3 className="text-2xl font-bold text-[hsl(var(--primary))] mb-3">
              Fresh Desi Eggs
            </h3>
            <p className="text-sm text-gray-600 mb-4">Brown Variety</p>
            <div className="mb-4">
              <span className="text-4xl font-black text-[hsl(var(--accent))]">₹8</span>
              <span className="text-gray-600"> / egg</span>
            </div>
            <p className="text-sm text-gray-700 mb-6">Minimum order: 30 eggs</p>
            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-[hsl(var(--primary))] mt-0.5">✓</span>
                Farm-fresh daily
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-[hsl(var(--primary))] mt-0.5">✓</span>
                Free-range hens
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-[hsl(var(--primary))] mt-0.5">✓</span>
                Chemical-free feed
              </li>
            </ul>
          </div>

          {/* Weekly Subscription */}
          <div className="bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(48_88%_50%)] rounded-lg p-8 shadow-[0_4px_16px_rgba(244,208,63,0.3)] text-center transform scale-105">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 inline-block mb-3">
              <span className="text-sm font-bold text-white uppercase">Best Value</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Weekly Subscription
            </h3>
            <p className="text-sm text-white/90 mb-4">180 eggs per week</p>
            <div className="mb-4">
              <span className="text-4xl font-black text-white">₹7</span>
              <span className="text-white/90"> / egg</span>
            </div>
            <p className="text-sm text-white/90 mb-6">Save ₹180 per week!</p>
            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-white">
                <span className="mt-0.5">✓</span>
                Priority delivery
              </li>
              <li className="flex items-start gap-2 text-sm text-white">
                <span className="mt-0.5">✓</span>
                Flexible schedule
              </li>
              <li className="flex items-start gap-2 text-sm text-white">
                <span className="mt-0.5">✓</span>
                Cancel anytime
              </li>
            </ul>
          </div>

          {/* Premium Omega-Rich */}
          <div className="bg-white rounded-lg p-8 shadow-[0_2px_8px_rgba(0,0,0,0.1)] text-center border-2 border-transparent hover:border-[hsl(var(--accent))] transition-all">
            <h3 className="text-2xl font-bold text-[hsl(var(--primary))] mb-3">
              Premium Omega-Rich
            </h3>
            <p className="text-sm text-gray-600 mb-4">Special Diet Hens</p>
            <div className="mb-4">
              <span className="text-4xl font-black text-[hsl(var(--accent))]">₹10</span>
              <span className="text-gray-600"> / egg</span>
            </div>
            <p className="text-sm text-gray-700 mb-6">Minimum order: 30 eggs</p>
            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-[hsl(var(--primary))] mt-0.5">✓</span>
                High Omega-3
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-[hsl(var(--primary))] mt-0.5">✓</span>
                Enriched feed
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-[hsl(var(--primary))] mt-0.5">✓</span>
                Extra nutritious
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

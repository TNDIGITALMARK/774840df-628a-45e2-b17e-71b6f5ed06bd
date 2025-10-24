'use client';

import { useState } from 'react';

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    quantity: '30',
    deliveryDate: '',
    paymentMethod: 'cod',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Order submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="order" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[hsl(var(--primary))] mb-4">
            Order Today!
          </h2>
          <p className="text-lg text-gray-700">
            Fresh eggs delivered within 24 hours to Nashik, Mumbai, and Pune
          </p>
        </div>

        <div className="bg-[hsl(var(--background))] rounded-lg p-8 shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[hsl(var(--primary))] mb-2">
                Order Received!
              </h3>
              <p className="text-gray-700">
                Thank you! We'll contact you shortly to confirm your order.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[hsl(var(--border))] focus:border-[hsl(var(--primary))] focus:ring-2 focus:ring-[hsl(var(--primary))]/20 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[hsl(var(--border))] focus:border-[hsl(var(--primary))] focus:ring-2 focus:ring-[hsl(var(--primary))]/20 outline-none transition-all"
                    placeholder="9876543210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[hsl(var(--border))] focus:border-[hsl(var(--primary))] focus:ring-2 focus:ring-[hsl(var(--primary))]/20 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                  Delivery Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[hsl(var(--border))] focus:border-[hsl(var(--primary))] focus:ring-2 focus:ring-[hsl(var(--primary))]/20 outline-none transition-all resize-none"
                  placeholder="Enter your complete delivery address"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                    Quantity (eggs) *
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    required
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[hsl(var(--border))] focus:border-[hsl(var(--primary))] focus:ring-2 focus:ring-[hsl(var(--primary))]/20 outline-none transition-all bg-white"
                  >
                    <option value="30">30 eggs (₹240)</option>
                    <option value="60">60 eggs (₹480)</option>
                    <option value="90">90 eggs (₹720)</option>
                    <option value="180">180 eggs - Weekly (₹1260)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="deliveryDate" className="block text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                    Preferred Delivery Date *
                  </label>
                  <input
                    type="date"
                    id="deliveryDate"
                    name="deliveryDate"
                    required
                    value={formData.deliveryDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[hsl(var(--border))] focus:border-[hsl(var(--primary))] focus:ring-2 focus:ring-[hsl(var(--primary))]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[hsl(var(--primary))] mb-3">
                  Payment Method *
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      className="w-4 h-4 text-[hsl(var(--primary))]"
                    />
                    <span className="text-gray-700">Cash on Delivery</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleChange}
                      className="w-4 h-4 text-[hsl(var(--primary))]"
                    />
                    <span className="text-gray-700">UPI</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                      className="w-4 h-4 text-[hsl(var(--primary))]"
                    />
                    <span className="text-gray-700">Card</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 text-base font-bold uppercase tracking-wider rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:shadow-[0_6px_20px_rgba(244,208,63,0.4)] transition-all hover:-translate-y-1"
              >
                Place Order
              </button>

              <p className="text-sm text-center text-gray-600">
                By placing an order, you agree to our delivery terms. We deliver within 24 hours to Nashik, Mumbai, and Pune.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

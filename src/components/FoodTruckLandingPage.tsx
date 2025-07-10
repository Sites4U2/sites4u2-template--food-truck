import React from 'react';
import { MapPin, ShoppingBag, Clock, Phone, Mail, Star, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { siteConfig } from '@/config/siteImages';

const FoodTruckLandingPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FoodEstablishment"],
    "name": siteConfig.business.name,
    "description": siteConfig.business.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.business.address.street,
      "addressLocality": siteConfig.business.address.city,
      "addressRegion": siteConfig.business.address.state,
      "postalCode": siteConfig.business.address.zip
    },
    "telephone": siteConfig.business.phone,
    "email": siteConfig.business.email,
    "url": siteConfig.seo.url,
    "priceRange": "$",
    "servesCuisine": "American",
    "hasMenuItem": siteConfig.menu.mains.map(item => ({
      "@type": "MenuItem",
      "name": item.name,
      "description": item.description
    }))
  };

  const currentYear = new Date().getFullYear();

  const scrollToSchedule = () => {
    const scheduleSection = document.getElementById('schedule-section');
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-neutral-50">
        {/* Hero Section */}
        <section 
          className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `linear-gradient(rgba(45, 49, 66, 0.7), rgba(255, 107, 53, 0.3)), url(${siteConfig.images.hero})` }}
        >
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              {siteConfig.business.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-md max-w-2xl mx-auto">
              {siteConfig.business.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
                aria-label="Find our current location"
                onClick={scrollToSchedule}
              >
                <MapPin className="mr-2 h-5 w-5" />
                Today's Location
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg"
                aria-label="Place an order"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Order Now
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={siteConfig.images.about} 
                  alt={`${siteConfig.business.name} food truck with vibrant orange and blue branding`}
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {siteConfig.about.title}
                </h2>
                {siteConfig.about.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                <div className="flex items-center text-orange-500 font-semibold">
                  <Clock className="mr-2 h-5 w-5" />
                  {siteConfig.about.tagline}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Menu
            </h2>
            <Tabs defaultValue="mains" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="mains" className="text-base">Main Dishes</TabsTrigger>
                <TabsTrigger value="sides" className="text-base">Sides</TabsTrigger>
                <TabsTrigger value="drinks" className="text-base">Drinks</TabsTrigger>
              </TabsList>
              
              {Object.entries(siteConfig.menu).map(([category, items]) => (
                <TabsContent key={category} value={category}>
                  <div className="grid gap-6 md:grid-cols-2">
                    {items.map((item, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="aspect-video relative overflow-hidden">
                          <img 
                            src={siteConfig.images.menu[category as keyof typeof siteConfig.images.menu][index]} 
                            alt={`${item.name} - ${item.description}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl text-gray-900">{item.name}</CardTitle>
                            <span className="text-xl font-bold text-orange-500">{item.price}</span>
                          </div>
                          <CardDescription className="text-gray-600 text-base">
                            {item.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule-section" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Find Us This Week
            </h2>
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Weekly Schedule</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4">
                {siteConfig.schedule.map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 mb-2">{item.day}</h4>
                      <p className="text-orange-500 font-medium mb-1">{item.location}</p>
                      <p className="text-gray-500 text-sm mb-2">{item.address}</p>
                      <p className="text-gray-600 text-sm">{item.time}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Order/Call CTA */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Skip the line with online ordering, or give us a call to chat about your order!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                aria-label="Place an online order"
                onClick={() => window.open(siteConfig.links.orderOnline, '_blank')}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Order Online
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                aria-label="Call us directly"
                onClick={() => window.open(siteConfig.links.phone)}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </Button>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Gallery
            </h2>
            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                {siteConfig.images.gallery.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <Card className="overflow-hidden">
                        <div className="aspect-square relative overflow-hidden">
                          <img 
                            src={image} 
                            alt={`Gallery image ${index + 1} showing delicious food from ${siteConfig.business.name}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              What Our Customers Say
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {siteConfig.testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="p-6">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {testimonial.customer}
                      </CardTitle>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      "{testimonial.review}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">{siteConfig.business.name}</h3>
                <p className="text-gray-300 mb-4">
                  {siteConfig.business.description}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-orange-500" />
                    <a href={siteConfig.links.phone} className="text-gray-300 hover:text-white">
                      {siteConfig.business.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-orange-500" />
                    <a href={siteConfig.links.email} className="text-gray-300 hover:text-white">
                      {siteConfig.business.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                    <span className="text-gray-300">{siteConfig.business.address.street} • {siteConfig.business.address.state}</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Hours</h4>
                <div className="text-gray-300 space-y-1">
                  <p>Mon-Thu: 11:30 AM - 2:30 PM</p>
                  <p>Fri: 11:30 AM - 8:00 PM</p>
                  <p>Sat: 9:00 AM - 3:00 PM</p>
                  <p>Sun: 12:00 PM - 6:00 PM</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {currentYear} {siteConfig.business.name}. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FoodTruckLandingPage;

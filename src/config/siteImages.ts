
// Site Configuration - Update this file for all content changes
export const siteConfig = {
  // Design System - Global styling variables
  design: {
    // Color Palette (all HSL values for consistency with Tailwind)
    colors: {
      // Primary brand colors
      primary: {
        orange: '22 100% 52%', // #ff6b35 - main brand orange
        blue: '220 91% 42%', // #2d3142 - complementary blue
        darkBlue: '220 91% 32%', // darker variant
      },
      // Neutral colors
      neutral: {
        white: '0 0% 100%',
        gray50: '210 20% 98%',
        gray100: '220 14% 96%',
        gray200: '220 13% 91%',
        gray300: '216 12% 84%',
        gray400: '218 11% 65%',
        gray500: '220 9% 46%',
        gray600: '215 14% 34%',
        gray700: '217 19% 27%',
        gray800: '215 28% 17%',
        gray900: '222 84% 5%',
      },
      // Semantic colors
      semantic: {
        success: '142 76% 36%',
        warning: '45 93% 47%',
        error: '0 84% 60%',
        info: '217 91% 60%',
      }
    },
    
    // Typography System
    typography: {
      // Font families
      fonts: {
        primary: {
          name: 'Inter',
          googleFontUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
          fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
          tailwindClass: 'font-inter'
        },
        heading: {
          name: 'Playfair Display',
          googleFontUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap',
          fallback: ['Georgia', 'Times New Roman', 'serif'],
          tailwindClass: 'font-playfair'
        },
        accent: {
          name: 'Poppins',
          googleFontUrl: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
          fallback: ['system-ui', '-apple-system', 'sans-serif'],
          tailwindClass: 'font-poppins'
        }
      },
      
      // Font sizes and line heights
      scale: {
        xs: { size: '0.75rem', lineHeight: '1rem' },      // 12px
        sm: { size: '0.875rem', lineHeight: '1.25rem' },  // 14px
        base: { size: '1rem', lineHeight: '1.5rem' },     // 16px
        lg: { size: '1.125rem', lineHeight: '1.75rem' },  // 18px
        xl: { size: '1.25rem', lineHeight: '1.75rem' },   // 20px
        '2xl': { size: '1.5rem', lineHeight: '2rem' },    // 24px
        '3xl': { size: '1.875rem', lineHeight: '2.25rem' }, // 30px
        '4xl': { size: '2.25rem', lineHeight: '2.5rem' }, // 36px
        '5xl': { size: '3rem', lineHeight: '1' },         // 48px
        '6xl': { size: '3.75rem', lineHeight: '1' },      // 60px
        '7xl': { size: '4.5rem', lineHeight: '1' },       // 72px
        '8xl': { size: '6rem', lineHeight: '1' },         // 96px
        '9xl': { size: '8rem', lineHeight: '1' },         // 128px
      },
      
      // Component-specific typography
      components: {
        hero: {
          title: { 
            font: 'heading', 
            size: { mobile: '4xl', desktop: '6xl' },
            weight: 'font-bold',
            color: 'text-white'
          },
          subtitle: { 
            font: 'primary', 
            size: { mobile: 'xl', desktop: '2xl' },
            weight: 'font-normal',
            color: 'text-white/90'
          }
        },
        section: {
          title: { 
            font: 'heading', 
            size: { mobile: '3xl', desktop: '4xl' },
            weight: 'font-bold',
            color: 'text-gray-900'
          },
          subtitle: { 
            font: 'primary', 
            size: 'lg',
            weight: 'font-normal',
            color: 'text-gray-700'
          }
        },
        card: {
          title: { 
            font: 'heading', 
            size: 'xl',
            weight: 'font-semibold',
            color: 'text-gray-900'
          },
          description: { 
            font: 'primary', 
            size: 'base',
            weight: 'font-normal',
            color: 'text-gray-600'
          }
        }
      }
    },
    
    // Spacing and sizing
    spacing: {
      section: {
        padding: { mobile: 'py-12', desktop: 'py-16' },
        margin: { mobile: 'mb-8', desktop: 'mb-12' }
      },
      container: {
        padding: 'px-4',
        maxWidth: 'max-w-7xl'
      }
    },
    
    // Border radius
    borderRadius: {
      sm: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      full: '9999px'
    },
    
    // Shadows
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
    }
  },

  // Business Information
  business: {
    name: "Sunset Street Eats",
    tagline: "Gourmet comfort food crafted with love, served fresh from our kitchen on wheels",
    description: "Gourmet food truck serving fresh, locally-sourced comfort food with a twist",
    foundedYear: 2019,
    email: "hello@sunsetstreeteats.com",
    phone: "(555) 123-FOOD",
    phoneLink: "tel:+15551234663",
    address: {
      street: "Mobile Food Truck",
      city: "Downtown",
      state: "CA",
      zip: "90210"
    }
  },

  // Global Links & CTAs
  links: {
    orderOnline: "https://order.sunsetstreeteats.com",
    phone: "tel:+15551234663",
    email: "mailto:hello@sunsetstreeteats.com"
  },

  // All Image Assets
  images: {
    hero: "https://placehold.co/1920x1080/ff6b35/ffffff?text=Hero+Image",
    about: "https://placehold.co/600x400/2d3142/ffffff?text=Food+Truck",
    menu: {
      mains: [
        "https://placehold.co/400x300/ff6b35/ffffff?text=Signature+Burger", 
        "https://placehold.co/400x300/ff6b35/ffffff?text=Street+Tacos"
      ],
      sides: ["https://placehold.co/400x300/ff6b35/ffffff?text=Truffle+Fries"],
      drinks: ["https://placehold.co/400x300/ff6b35/ffffff?text=Craft+Sodas"]
    },
    gallery: [
      "https://placehold.co/400x400/ff6b35/ffffff?text=Gallery+1",
      "https://placehold.co/400x400/ff6b35/ffffff?text=Gallery+2",
      "https://placehold.co/400x400/ff6b35/ffffff?text=Gallery+3",
      "https://placehold.co/400x400/ff6b35/ffffff?text=Gallery+4",
      "https://placehold.co/400x400/ff6b35/ffffff?text=Gallery+5",
      "https://placehold.co/400x400/ff6b35/ffffff?text=Gallery+6"
    ],
    mapPlaceholder: "https://placehold.co/800x400/2d3142/ffffff?text=Location+Map"
  },

  // Menu Content
  menu: {
    mains: [
      { 
        name: "Signature Burger", 
        price: "$12", 
        description: "Grass-fed beef, house sauce, fresh vegetables"
      },
      { 
        name: "Street Tacos", 
        price: "$8", 
        description: "Authentic corn tortillas, choice of protein, fresh salsa"
      }
    ],
    sides: [
      { 
        name: "Truffle Fries", 
        price: "$6", 
        description: "Hand-cut fries with truffle oil and parmesan"
      }
    ],
    drinks: [
      { 
        name: "Craft Sodas", 
        price: "$3", 
        description: "Locally sourced artisan sodas and fresh juices"
      }
    ]
  },

  schedule: [
    { day: "Monday", location: "Downtown Plaza", address: "123 Main St, Downtown", time: "11:30 AM - 2:30 PM" },
    { day: "Tuesday", location: "Tech Campus", address: "456 Innovation Blvd", time: "11:30 AM - 2:30 PM" },
    { day: "Wednesday", location: "City Park", address: "789 Park Ave", time: "11:30 AM - 2:30 PM" },
    { day: "Thursday", location: "Business District", address: "321 Corporate Dr", time: "11:30 AM - 2:30 PM" },
    { day: "Friday", location: "Festival Grounds", address: "654 Event Plaza", time: "11:30 AM - 8:00 PM" },
    { day: "Saturday", location: "Farmers Market", address: "987 Market Square", time: "9:00 AM - 3:00 PM" },
    { day: "Sunday", location: "Beach Front", address: "147 Ocean Way", time: "12:00 PM - 6:00 PM" }
  ],

  testimonials: [
    {
      id: "testimonial-1",
      customer: "Sarah M.",
      review: "The best food truck in the city! Their signature burger is absolutely incredible, and the service is always friendly and fast.",
      rating: 5
    },
    {
      id: "testimonial-2", 
      customer: "Mike D.",
      review: "I'm a regular customer and I've never been disappointed. The truffle fries are to die for, and they always remember my order!",
      rating: 5
    },
    {
      id: "testimonial-3",
      customer: "Jennifer L.",
      review: "Perfect for corporate catering! They handled our office event flawlessly and everyone loved the food. Highly recommend!",
      rating: 5
    }
  ],

  about: {
    title: "Our Story",
    paragraphs: [
      "Born from a passion for bringing restaurant-quality food to the streets, Sunset Street Eats started as a dream between two culinary school graduates who wanted to make gourmet food accessible to everyone.",
      "We source our ingredients locally, supporting farmers and businesses in our community while serving up the freshest, most flavorful dishes that will keep you coming back for more."
    ],
    tagline: "Serving fresh food since 2019"
  },

  seo: {
    title: "Sunset Street Eats - Gourmet Food Truck",
    description: "Gourmet food truck serving fresh, locally-sourced comfort food with a twist in Downtown CA",
    keywords: "food truck, gourmet food, street food, catering, fresh ingredients",
    url: "https://sunsetstreeteats.com"
  }
} as const;

// Legacy export for backwards compatibility
export const siteImages = siteConfig.images;

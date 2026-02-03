# Wadee Harvest - Headless Shopify Storefront

A production-ready headless Shopify storefront for **Wadee Harvest**, a brand selling authentic Palestinian olive oil and dates in Canada. Built with Next.js 16, TypeScript, Tailwind CSS, and Shopify Storefront API.

## 🌟 Features

- **Headless Shopify Integration**: Full Shopify Storefront API integration
- **Real-time Product Sync**: Products, inventory, and pricing from Shopify
- **Secure Checkout**: Shopify-powered checkout and payment processing
- **Premium Design**: Clean, warm "artisan food brand" aesthetic with earth tones
- **Fully Responsive**: Mobile-first design, accessible (WCAG compliant)
- **Shopify Cart API**: Shopping cart managed by Shopify
- **SEO Optimized**: Metadata, OpenGraph tags, semantic HTML
- **Type-Safe**: 100% TypeScript
- **Modern Stack**: Next.js 16 (App Router), React 19, Tailwind CSS 4, Shopify Storefront API

## 🎨 Design System

**Premium Earth Palette:**
- Background: Cream (#FBF6EE)
- Surface: Ivory (#FFFDFA)
- Text: Espresso (#231F1A)
- Muted: Taupe (#7A6F66)
- Borders: Warm Beige (#E9DED2)
- Primary: Forest (#254D3B)
- Secondary: Terracotta (#B35A3A)

## 📁 Project Structure

```
wadee-shop/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── shop/              # Shop listing page
│   ├── product/[slug]/    # Dynamic product pages
│   ├── cart/              # Shopping cart
│   ├── contact/           # Contact form
│   └── privacy/           # Privacy policy
├── src/
│   ├── components/
│   │   ├── layout/        # Header, Footer, AnnouncementBar
│   │   ├── ui/            # Reusable UI components
│   │   └── home/          # Home page sections
│   ├── context/           # React Context (Cart, Toast)
│   ├── data/              # Product data
│   ├── types/             # TypeScript types
│   └── lib/               # Utilities
└── public/
    └── images/            # Product and content images

```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd wadee-shop
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Shopify Integration:**
   
   Follow the comprehensive guide in `SHOPIFY_SETUP.md` to:
   - Create a Shopify store (if you don't have one)
   - Set up a custom app with Storefront API access
   - Get your API credentials
   - Configure environment variables
   - Add products to Shopify

   Quick setup:
   ```bash
   # Copy the example env file
   cp .env.local.example .env.local
   
   # Edit .env.local and add your Shopify credentials
   # NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   # NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_token_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🛒 Key Features Implemented

### Pages & Routes
- **Home (/)**: Complete landing page with 13 sections
- **Shop (/shop)**: Product listing with filters and sorting
- **Product (/product/[slug])**: Detailed product pages
- **Cart (/cart)**: Shopping cart with mock checkout
- **Contact (/contact)**: Contact form with validation
- **Privacy (/privacy)**: Privacy policy page

### Components
- **Layout**: Sticky header with cart badge, footer, announcement bar
- **UI Components**: Button, ProductCard, QuantitySelector, FilterBar, Accordion, Breadcrumbs, Toast notifications
- **Home Sections**: Hero, CategoryGrid, FeaturedProducts, StorySection, WhyWadee, TasteNotes, FarmToTable, Testimonials, FindUs, ShippingReturns, FAQ, EmailSignup

### Functionality
- **Cart Management**: Add, remove, update quantity, persist to localStorage
- **Product Filtering**: By category, size, and price sorting
- **Form Validation**: Client-side validation with accessible error messages
- **Toast Notifications**: Success/error messages for user actions
- **Responsive Design**: Mobile-first, works on all screen sizes
- **Accessibility**: ARIA labels, keyboard navigation, focus states

## 🎯 Product Catalog

The site includes 6 products:
- Premium Extra Virgin Olive Oil (375ml, 500ml, 750ml)
- Medjool Dates (500g, 1kg)
- Olive Oil + Dates Gift Set

Products are defined in `src/data/products.ts` and can be easily extended.

## 🎨 Customization

### Update Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --color-primary: #254D3B;
  --color-secondary: #B35A3A;
  /* ... */
}
```

### Add Products
Edit `src/data/products.ts`:
```typescript
export const products: Product[] = [
  {
    id: "new-product",
    name: "Product Name",
    slug: "product-slug",
    category: "olive-oil",
    priceCAD: 25.00,
    // ...
  }
];
```

### Modify Content
Home page sections are in `src/components/home/` - edit any section independently.

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm run start
```

## 📝 Notes

- **Shopify Integration**: This is a headless storefront. Products, cart, and checkout are managed by Shopify.
- **Real Checkout**: Checkout redirects to Shopify's secure checkout page for payment processing.
- **Product Management**: Add/edit products in your Shopify Admin panel.
- **Inventory Sync**: Product availability syncs in real-time with Shopify.
- **Email Signup**: Currently stores in memory only. Integrate with email service (Mailchimp, SendGrid, etc.).
- **Contact Form**: Submissions logged to console. Add backend integration as needed.
- **Environment Variables**: Never commit `.env.local` - it contains sensitive API credentials.

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Ecommerce**: Shopify Storefront API
- **GraphQL Client**: graphql-request
- **Shopify SDK**: @shopify/hydrogen-react
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **State Management**: React Context API
- **Image Optimization**: next/image
- **Fonts**: Kumbh Sans (Google Fonts)

## 📄 License

© 2026 Wadee Harvest. All rights reserved.

## 🤝 Support

For questions or support, contact: info@wadeeharvest.ca

---

**Built with ❤️ for Wadee Harvest - Bringing the flavours of Palestine to Canada**

# 🛍️ 1Fi SDE1 Assignment - Product EMI Web App

A simple **full-stack web application** that displays products (like smartphones) with multiple EMI plans backed by mutual funds — similar to **Snapmint** style pages.

The application dynamically loads products, variants, and EMI plans from a **MongoDB database** via backend APIs and renders them in a **responsive, interactive web interface** built using **Next.js (App Router)** and **Tailwind CSS**.

---

## 🚀 Live Demo

🌐 **Frontend + Backend (Monorepo)** → [Render Deployment Link](#)
💾 **GitHub Repository** → [GitHub Link](#)
🎥 **Demo Video** → [Google Drive / YouTube Link](#)

---

## 🧩 Features

### 🖥️ Frontend (Next.js + Tailwind)

- Displays product details:
  - Name, description, price, image, and specifications.
  - Multiple color and storage variants.
- Lists EMI plans dynamically (with monthly payment, tenure, rate & cashback).
- Allows selection of variant and EMI plan.
- Displays total payable and down payment when a plan is chosen.
- Fully responsive and styled using **Tailwind CSS**.
- Interactive behavior:
  - Clicking image thumbnails changes the main product image.
  - Clicking “Proceed to Buy” shows a toast notification.
  - Dynamic URL updates for variants: `/products/iphone-17-pro?color=silver&price=159999`

---

### ⚙️ Backend (Express + MongoDB)

- REST APIs built using **Node.js (Express)**.
- Connected to **MongoDB Atlas**.
- Data models defined for:
  - Products
  - Variants
  - EMI Plans
- API Endpoints:
  - `GET /api/products` → Fetch all products.
  - `GET /api/products/:slug` → Fetch single product with variants, gallery, and EMI plans.
- Seeder script (`seed.js`) to populate the database.

---

## 🧱 Database Schema

### Product Schema

```js
{
  name: String,
  slug: String,
  brand: String,
  description: String,
  color: String,
  price: Number,
  image: String,
  imageGallery: [String],
  variants: [
    {
      color: String,
      price: Number,
      image: String
    }
  ],
  emiPlans: [
    {
      planName: String,
      tenureMonths: Number,
      monthlyAmount: Number,
      interestRate: Number,
      cashback: String
    }
  ]
}
```


## API Routes

| Method   | Endpoint                | Description                        |
| -------- | ----------------------- | ---------------------------------- |
| `GET`  | `/api/products`       | Fetch all products                 |
| `GET`  | `/api/products/:slug` | Fetch single product with details  |
| `POST` | `/api/seed`           | Seed the database with sample data |

## Tech Stack

**Frontend:**

* Next.js 14 (App Router)
* React 18
* Tailwind CSS
* TanStack Query (React Query)
* React Hot Toast

**Backend:**

* Node.js (Express)
* MongoDB + Mongoose
* CORS, dotenv, nodemon

**Deployment:**

* Render (Monorepo — same port for backend + frontend)
* MongoDB Atlas (Database)



## Setup & Run Instructions

### 🖥️ Local Setup

1. **Clone the repository**

   <pre class="overflow-visible!" data-start="2967" data-end="3076"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>git </span><span>clone</span><span> https://github.com/yourusername/1fi-sde1-assignment.git
   </span><span>cd</span><span> 1fi-sde1-assignment
   </span></span></code></div></div></pre>
2. **Install dependencies**

   <pre class="overflow-visible!" data-start="3109" data-end="3138"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm install
   </span></span></code></div></div></pre>
3. **Setup environment variables**

   Create a `.env` file in the project root:

   <pre class="overflow-visible!" data-start="3223" data-end="3290"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>MONGO_URI</span><span>=your_mongodb_connection_string
   </span><span>PORT</span><span>=</span><span>5000</span><span>
   </span></span></code></div></div></pre>
4. **Seed the database**

   <pre class="overflow-visible!" data-start="3320" data-end="3358"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>node backend/seed.js
   </span></span></code></div></div></pre>
5. **Run the development server**

   <pre class="overflow-visible!" data-start="3397" data-end="3426"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm run dev
   </span></span></code></div></div></pre>
6. Visit

   * Frontend → [http://localhost:3000]()
   * Backend API → [http://localhost:5000/api/products]()

---

## 🧠 Optional Improvements Implemented

✅  **Feature 1** : Default variant toggle (switch back to base variant)

✅  **Feature 2** : EMI plan selection → shows total payable & down payment simulation

✅  **Feature 3** : Click image gallery → update main image

✅  **Feature 4** : Toast notification on “Proceed to Buy”

✅  **Feature 5** : Dynamic URLs with variant color and price as query params

---

## 🗂️ Folder Structure

<pre class="overflow-visible!" data-start="3963" data-end="4377"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>1fi-sde1-assignment/
├── backend/
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── seed.js
│   ├── server.js
│   └── .</span><span>env</span><span>
│
├── frontend/
│   ├── app/
│   │   ├── products/
│   │   │   └── [slug]/page.jsx
│   │   └── layout.jsx
│   ├── components/
│   │   └── ProductCard.jsx
│   └── styles/
│       └── globals.css
│
├── package.json
├── README.md
└── .gitignore
</span></span></code></div></div></pre>

---

## 🧩 Example API Response

### `/api/products/iphone-17-pro`

<pre class="overflow-visible!" data-start="4447" data-end="5235"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-json"><span><span>{</span><span>
  </span><span>"name"</span><span>:</span><span></span><span>"iPhone 17 Pro"</span><span>,</span><span>
  </span><span>"slug"</span><span>:</span><span></span><span>"iphone-17-pro"</span><span>,</span><span>
  </span><span>"brand"</span><span>:</span><span></span><span>"Apple"</span><span>,</span><span>
  </span><span>"price"</span><span>:</span><span></span><span>159999</span><span>,</span><span>
  </span><span>"color"</span><span>:</span><span></span><span>"Silver"</span><span>,</span><span>
  </span><span>"image"</span><span>:</span><span></span><span>"https://example.com/iphone17pro.jpg"</span><span>,</span><span>
  </span><span>"variants"</span><span>:</span><span></span><span>[</span><span>
    </span><span>{</span><span>
      </span><span>"color"</span><span>:</span><span></span><span>"Graphite"</span><span>,</span><span>
      </span><span>"price"</span><span>:</span><span></span><span>149999</span><span>,</span><span>
      </span><span>"image"</span><span>:</span><span></span><span>"https://example.com/iphone17pro-graphite.jpg"</span><span>
    </span><span>}</span><span>,</span><span>
    </span><span>{</span><span>
      </span><span>"color"</span><span>:</span><span></span><span>"Titanium Blue"</span><span>,</span><span>
      </span><span>"price"</span><span>:</span><span></span><span>169999</span><span>,</span><span>
      </span><span>"image"</span><span>:</span><span></span><span>"https://example.com/iphone17pro-blue.jpg"</span><span>
    </span><span>}</span><span>
  </span><span>]</span><span>,</span><span>
  </span><span>"emiPlans"</span><span>:</span><span></span><span>[</span><span>
    </span><span>{</span><span>
      </span><span>"planName"</span><span>:</span><span></span><span>"6 Months Plan"</span><span>,</span><span>
      </span><span>"tenureMonths"</span><span>:</span><span></span><span>6</span><span>,</span><span>
      </span><span>"monthlyAmount"</span><span>:</span><span></span><span>26666</span><span>,</span><span>
      </span><span>"interestRate"</span><span>:</span><span></span><span>0</span><span>,</span><span>
      </span><span>"cashback"</span><span>:</span><span></span><span>"₹2000 Cashback"</span><span>
    </span><span>}</span><span>,</span><span>
    </span><span>{</span><span>
      </span><span>"planName"</span><span>:</span><span></span><span>"12 Months Plan"</span><span>,</span><span>
      </span><span>"tenureMonths"</span><span>:</span><span></span><span>12</span><span>,</span><span>
      </span><span>"monthlyAmount"</span><span>:</span><span></span><span>13333</span><span>,</span><span>
      </span><span>"interestRate"</span><span>:</span><span></span><span>10.5</span><span>,</span><span>
      </span><span>"cashback"</span><span>:</span><span></span><span>null</span><span>
    </span><span>}</span><span>
  </span><span>]</span><span>
</span><span>}</span></span></code></div></div></pre>

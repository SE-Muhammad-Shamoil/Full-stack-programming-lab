# Rustik Plank Ecommerce

Full-stack furniture ecommerce app based on the supplied Rustik Plank mockup.

## Stack

- Next.js + Tailwind CSS frontend
- Node.js + Express backend
- MongoDB + Mongoose database models
- Local extracted mock assets in `frontend/public/assets`

## Run

```bash
npm install
npm --prefix frontend install
npm --prefix backend install
npm run assets
npm run dev
```

Frontend: `http://localhost:3000`

API: `http://localhost:5000/api`

## Database

Create `backend/.env` from `backend/.env.example`, then start MongoDB and seed:

```bash
Copy-Item backend/.env.example backend/.env
npm run seed
```

The frontend includes fallback product data, so it can still render the storefront while MongoDB is not running. Once MongoDB and the API are active, pages pull live products, categories, and orders from Express.

## Main Pages

- `/` home page matching the Rustik Plank storefront layout
- `/shop` product listing with category filters
- `/product/[slug]` dynamic product detail page
- `/admin` simple product CRUD interface backed by the Express API

## Asset Resources

The asset extraction script crops reusable images from `rustik plant.jpg` into:

```text
frontend/public/assets
```

It also keeps a full reference copy as `frontend/public/assets/mock-reference.jpg`.

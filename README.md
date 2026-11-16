# Mondo — premium food delivery

## Run locally

1. Copy `.env.example` to `.env.local` and update MySQL credentials.
2. Import `database.sql` in MySQL Workbench or run `mysql -u root -p < database.sql`.
3. Run `npm install`, then `npm run dev`.
4. Open `http://localhost:3000`.

The UI has a complete 54-location fictional catalogue in `lib/data.js`, ready to replace with database/API records. API endpoints cover registration, login, restaurant retrieval and checkout persistence. The admin portal is available from the footer and can be extended with authenticated CRUD views.

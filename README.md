# Airline Booking

A multilingual airline flight search interface built with Next.js and General Translation.

**[Live Demo](https://airline-booking.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example app demonstrates a flight search results page with locale-aware formatting for currencies, dates, times, durations, and pluralization. It showcases how GT handles complex real-world UI patterns like flight cards with multiple formatted values.

## GT Features Used

- `<T>` — JSX translation (wide wrapping pattern)
- `<Currency>` — Locale-aware currency formatting
- `<Num>` — Number formatting
- `<DateTime>` — Date/time formatting
- `<Plural>` — Pluralization (flight counts, stops)
- `<Branch>` — Conditional rendering (fare class labels)
- `<Var>` — Dynamic values within translations
- `<LocaleSelector>` — Language picker
- `getGT` — String translations (metadata)
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/airline-booking.git
cd airline-booking
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)

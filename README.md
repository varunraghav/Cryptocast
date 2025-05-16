# CryptoCast

A real-time cryptocurrency sentiment analysis platform that tracks and analyzes social media sentiment for various cryptocurrencies.

## Features

- Real-time sentiment analysis of cryptocurrency-related tweets
- Historical sentiment tracking and visualization
- Integration with Twitter/X API for data collection
- Efficient caching and data fetching mechanisms
- Responsive and modern UI design

## Tech Stack

- **Frontend**: Next.js 15.3.2 with React
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS
- **State Management**: React Query for efficient data fetching and caching
- **API**: RESTful API endpoints with Next.js API routes

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cryptocast
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Recent Updates

- Optimized `useSentiment` hook for better performance
- Implemented efficient caching mechanisms
- Fixed React Hooks rule violations
- Improved API route performance
- Enhanced data fetching efficiency

## Development

- **Database Management**: Use Prisma Studio for database management:
```bash
npx prisma studio
```

- **API Routes**: All API routes are located in the `app/api` directory
- **Components**: Reusable components are in the `components` directory
- **Hooks**: Custom hooks are in the `hooks` directory

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

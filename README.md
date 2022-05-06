# MovieLib

## Table of Contents

-   [About](#about)
-   [Getting Started](#getting_started)
-   [Usage](#usage)
-   [Built Using](#built_using)

## About <a name = "about"></a>

A movie library page using the [TMDB](https://www.themoviedb.org/) API, built with Next.js by Vercel.

## Getting Started <a name = "getting_started"></a>

### Prerequisites

Install [Node.js](https://nodejs.org/en/).

### Installing

Install dependencies:

```
npm install
```

### Available Scripts

```
npm start
```

Starts the application in production mode. The application should be compiled with next build first.

```
npm build
```

Creates an optimized production build of your application. The output displays information about each route.

```
npm dev
```

Starts the application in development mode with hot-code reloading, error reporting, and more...

## Usage <a name = "usage"></a>

### Pages

`/` - Search for movies.

`/movies` - Browse movies based on the entered search string. View Wikipedia results when clicking on the movie title. View related movies when clicking on the "Find related!" button.

`/related` - Browse related movies. View Wikipedia results when clicking on the movie title.

## Built Using <a name = "built_using"></a>

[Next.js](https://nextjs.org/) - The React Framework
for Production

[Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

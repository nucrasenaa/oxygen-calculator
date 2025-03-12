# Oxygen Tank Calculator

This is a Next.js application for calculating oxygen tank duration based on flow rate, conversion factor, and cylinder pressure.

## Features

- Calculate oxygen tank duration in minutes
- Pre-defined tank sizes with conversion factors
- Support for custom conversion factors
- Responsive UI for all device sizes
- URL parameter support for pre-selecting conversion factors

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/oxygen-calculator.git
cd oxygen-calculator
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

The application allows users to:
- Select a tank size from the dropdown (D, E, M, or H cylinder)
- Enter the oxygen flow rate in LPM
- Enter the cylinder pressure in PSI
- Calculate the duration the tank will last

You can also pre-select a tank size by passing a conversion factor as a URL parameter:
- Example: `http://localhost:3000/?conversionFactor=0.28` will pre-select the E cylinder

## Deployment to Vercel

1. Create a GitHub repository and push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/oxygen-calculator.git
git push -u origin main
```

2. Go to [Vercel](https://vercel.com) and sign in with your GitHub account

3. Click "New Project" and select the GitHub repository you just created

4. Keep the default settings and click "Deploy"

5. Once deployed, your application will be available at a Vercel-provided URL

## License

This project is licensed under the MIT License.
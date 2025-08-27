# Auth Test - Simple Client-Side Authentication System

A modern, responsive authentication system built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components. This project demonstrates a complete login flow with Iranian mobile number validation and user dashboard.

## 🚀 Features

- **📱 Login Page**: Iranian mobile number input with validation
- **🏠 Dashboard**: Welcome page with user information
- **🔐 Client-side Authentication**: localStorage-based session management
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
- **⚡ Modern Stack**: Next.js 14, TypeScript, React Query, Axios
- **🎨 Beautiful UI**: shadcn/ui components with custom styling
- **✅ Form Validation**: React Hook Form + Zod schema validation
- **🔄 API Integration**: Random user data fetching with caching

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Form Management**: React Hook Form + Zod
- **API Client**: Axios + React Query
- **Icons**: Lucide React
- **State Management**: localStorage + React Query

## 📋 Requirements

- Node.js 18+
- npm or yarn

## 🚀 Quick Start

### 1. Clone and Install

```bash
# Navigate to project directory
cd Auth-test

# Install dependencies
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📱 Usage

### Login Flow

1. **Enter Iranian Mobile Number**:

   - Format: `09xxxxxxxxx`
   - Alternative formats: `+989xxxxxxxxx` or `00989xxxxxxxxx`
   - Real-time validation with error messages

2. **Click Login**:

   - Fetches random user data from API
   - Stores user information in localStorage
   - Redirects to dashboard

3. **Dashboard**:
   - Displays welcome message with user's name
   - Shows user profile picture and contact details
   - Logout button to clear session

### Authentication

- **Session Management**: Uses localStorage for client-side authentication
- **Route Protection**: Automatic redirects based on authentication status
- **Logout**: Clears localStorage and redirects to login page

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Login page
├── components/            # Reusable UI components
│   └── ui/               # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── label.tsx
├── lib/                  # Utility functions and configurations
│   ├── api.ts           # API service with Axios
│   ├── providers.tsx    # React Query provider
│   ├── storage.ts       # localStorage utilities
│   ├── utils.ts         # Utility functions
│   └── validations.ts   # Zod validation schemas
└── types/               # TypeScript type definitions
    └── index.ts
```

## 🎨 UI Components

### Form Components

- **Input**: Styled input with error states and focus styles
- **Label**: Accessible form labels
- **Button**: Multiple variants with loading states

### Layout Components

- **Card**: Container components for content organization
- **Responsive Grid**: Mobile-first responsive design

## 🔧 Configuration

### Tailwind CSS

- Custom color palette with CSS variables
- Responsive breakpoints
- Component-based styling

### React Query

- Optimized caching strategy
- Error handling
- Loading states

### Validation

- Iranian mobile number patterns
- Real-time form validation
- User-friendly error messages

## 📱 Mobile Number Validation

The system accepts Iranian mobile numbers in these formats:

- `09xxxxxxxxx` (standard format)
- `+989xxxxxxxxx` (international format)
- `00989xxxxxxxxx` (alternative international format)

## 🔒 Security Features

- Client-side validation
- Secure localStorage handling
- Error boundary protection
- Type-safe API calls

## 🎯 Key Features

### Login Page

- ✅ Single input for Iranian mobile numbers
- ✅ Client-side validation with multiple format support
- ✅ Loading states and error handling
- ✅ Responsive design

### Dashboard Page

- ✅ Welcome message with user's name
- ✅ User profile display
- ✅ Logout functionality
- ✅ Route protection

### Technical Implementation

- ✅ Next.js App Router
- ✅ TypeScript with strict typing
- ✅ Tailwind CSS styling
- ✅ React Hook Form + Zod validation
- ✅ React Query for API management
- ✅ Axios for HTTP requests
- ✅ shadcn/ui components

## 🚀 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Next.js recommended configuration
- **Prettier**: Code formatting
- **Component Structure**: Modular and reusable

## 📝 API Integration

The application integrates with the [Random User API](https://randomuser.me/) to fetch user data:

- **Endpoint**: `https://randomuser.me/api/?results=1&nat=us`
- **Data**: Name, email, and profile picture
- **Caching**: React Query handles caching and state management

## 🎨 Design System

Built with a consistent design system:

- **Colors**: HSL-based color palette with CSS variables
- **Typography**: Inter font family
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components with variants

## 🔄 State Management

- **Authentication**: localStorage-based session management
- **API State**: React Query for server state
- **Form State**: React Hook Form for form management
- **UI State**: React useState for component state

## 📱 Responsive Design

- **Mobile-first**: Optimized for mobile devices
- **Breakpoints**: Tailwind CSS responsive utilities
- **Flexible Layout**: Grid and flexbox layouts
- **Touch-friendly**: Appropriate touch targets

## 🚀 Performance

- **Code Splitting**: Next.js automatic code splitting
- **Image Optimization**: Next.js Image component
- **Caching**: React Query intelligent caching
- **Bundle Size**: Optimized dependencies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For questions or issues, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

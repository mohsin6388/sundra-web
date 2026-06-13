// App.jsx
import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Benefits = lazy(() => import("./pages/Benefits"));
const Dealers = lazy(() => import("./pages/Dealers"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  
  return null;
}

// Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong</h2>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {

  const [lang, setLang] = useState("hi");

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="App font-sans antialiased">
          <ScrollToTop />
          <Navbar lang={lang} setLang={setLang} />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route
                path="/"
                element={<Home lang={lang} setLang={setLang} />}
              />
              <Route path="/about" element={<About lang={lang} />} />
              <Route path="/products" element={<Products lang={lang} />} />
              <Route
                path="/products/:slug"
                element={<ProductDetail lang={lang} />}
              />
              <Route path="/benefits" element={<Benefits lang={lang} />} />
              <Route path="/dealers" element={<Dealers lang={lang} />} />
              <Route path="/gallery" element={<Gallery lang={lang} />} />
              <Route path="/contact" element={<Contact lang={lang} />} />
            </Routes>
          </Suspense>
          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#1f2937",
                color: "#ffffff",
                border: "none",
              },
              success: {
                style: {
                  background: "#10b981",
                },
              },
              error: {
                style: {
                  background: "#ef4444",
                },
              },
            }}
          />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
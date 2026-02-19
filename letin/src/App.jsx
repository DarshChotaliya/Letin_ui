import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import ProductsPage from './pages/ProductsPage'
import IndustriesPage from './pages/IndustriesPage'
import CareersPage from './pages/CareersPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="services" element={<ServicesPage />} />
                    <Route path="portfolio" element={<PortfolioPage />} />
                    <Route path="products" element={<ProductsPage />} />
                    <Route path="industries" element={<IndustriesPage />} />
                    <Route path="careers" element={<CareersPage />} />
                    <Route path="blog" element={<BlogPage />} />
                    <Route path="contact" element={<ContactPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App

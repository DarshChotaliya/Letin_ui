import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

const allSolutions = [
    // CMS Development
    {
        id: 'shopify-dev',
        category: 'CMS Development',
        title: "Shopify Development",
        desc: "We build high-performing Shopify stores tailored for growth. From store setup and theme customization to app integrations, we create seamless eCommerce experiences that increase conversions and scale with your business.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="40" y="20" width="120" height="80" rx="8" />
                <path d="M40 40h120M70 20v80M40 70h30" />
                <circle cx="100" cy="60" r="10" />
                <path d="M120 50l10 10-10 10" />
            </svg>
        )
    },
    {
        id: 'wordpress-dev',
        category: 'CMS Development',
        title: "WordPress Development",
        desc: "Custom WordPress websites designed for flexibility, performance, and business alignment. We develop scalable solutions including WooCommerce integrations for reliable and optimized online presence.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M100 20v80M60 40l80 40M60 80l80-40" />
                <circle cx="100" cy="60" r="40" />
            </svg>
        )
    },
    {
        id: 'enterprise-cms',
        category: 'CMS Development',
        title: "Enterprise CMS Solutions",
        desc: "Integrated enterprise-grade CMS platforms for managing structured and unstructured content. We centralize data, streamline workflows, and ensure governance for improved operational efficiency.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="30" y="20" width="140" height="80" rx="4" />
                <path d="M30 40h140M30 60h140M30 80h140M70 20v80" />
            </svg>
        )
    },
    {
        id: 'headless-cms',
        category: 'CMS Development',
        title: "Headless CMS Development",
        desc: "API-driven headless CMS architectures that separate content from presentation. Deliver consistent omnichannel experiences across web, mobile, and digital platforms.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M40 60h40M120 60h40M100 20v20M100 80v20" />
                <rect x="80" y="40" width="40" height="40" rx="20" />
            </svg>
        )
    },
    {
        id: 'cms-migration',
        category: 'CMS Development',
        title: "CMS Migration & Optimization",
        desc: "Secure content migration, architecture redesign, and performance optimization. We refine workflows and modernize CMS systems for scalability and compliance.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M60 40l40 20-40 20M140 40l-40 20 40 20" />
                <path d="M100 20v80" />
            </svg>
        )
    },

    // ERP Services
    {
        id: 'odoo-migration',
        category: 'ERP Services',
        title: "Odoo Migration",
        desc: "Seamless migration of business data, modules, and configurations to modern Odoo environments with zero disruption and enhanced performance.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="70" cy="60" r="20" opacity="0.5" />
                <circle cx="130" cy="60" r="20" />
                <path d="M90 60h20" markerEnd="url(#arrow)" />
            </svg>
        )
    },
    {
        id: 'odoo-customization',
        category: 'ERP Services (Odoo)',
        title: "Odoo Customization",
        desc: "Custom Odoo ERP enhancements aligned with your workflows, including automation, module modification, and third-party integrations.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="60" y="30" width="80" height="60" rx="4" />
                <path d="M80 50l10 10 20-20" />
            </svg>
        )
    },
    {
        id: 'odoo-development',
        category: 'ERP Services (Odoo)',
        title: "Odoo Development",
        desc: "End-to-end Odoo ERP development using Python for module creation, workflow automation, and business-specific functionality.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M40 30h120v60H40zM60 50h80M60 70h40" />
            </svg>
        )
    },
    {
        id: 'odoo-integration',
        category: 'ERP Services (Odoo)',
        title: "Odoo Integration",
        desc: "Connect Odoo with CRM, eCommerce, and third-party systems to enable real-time synchronization and unified business operations.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="60" cy="60" r="15" />
                <circle cx="140" cy="60" r="15" />
                <path d="M75 60h50M75 55h50M75 65h50" />
            </svg>
        )
    },
    {
        id: 'odoo-implementation',
        category: 'ERP Services (Odoo)',
        title: "Odoo Implementation",
        desc: "Strategic ERP implementation including system configuration, data migration, and full deployment tailored to your operational goals.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M40 100l60-80 60 80H40z" />
                <path d="M100 20v80M70 60h60" />
            </svg>
        )
    },

    // Artificial Intelligence & Machine Learning
    {
        id: 'ai-model-dev',
        category: 'Artificial Intelligence & Machine Learning',
        title: "Custom AI Model Development",
        desc: "Design and train domain-specific AI models using proprietary data to deliver precise, measurable business outcomes.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="100" cy="60" r="30" />
                <path d="M100 30v60M70 60h60" />
                <circle cx="100" cy="60" r="10" fill="currentColor" />
            </svg>
        )
    },
    {
        id: 'ml-solutions',
        category: 'Artificial Intelligence & Machine Learning',
        title: "Machine Learning Solutions",
        desc: "End-to-end ML pipelines including data preparation, model training, deployment, and predictive analytics for data-driven decisions.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M40 80l40-40 40 20 40-40" />
                <circle cx="40" cy="80" r="4" />
                <circle cx="80" cy="40" r="4" />
                <circle cx="120" cy="60" r="4" />
                <circle cx="160" cy="20" r="4" />
            </svg>
        )
    },
    {
        id: 'nlp-solutions',
        category: 'Artificial Intelligence & Machine Learning',
        title: "Natural Language Processing (NLP)",
        desc: "Intelligent language solutions for chatbots, sentiment analysis, document processing, and automated customer engagement.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M40 40h120M40 60h80M40 80h100" />
                <path d="M150 70l20 20-20 20" />
            </svg>
        )
    },
    {
        id: 'ai-integration',
        category: 'Artificial Intelligence & Machine Learning',
        title: "AI Integration & Deployment",
        desc: "Embed AI into existing systems to automate workflows, enhance insights, and improve operational efficiency.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="60" y="30" width="80" height="60" rx="10" />
                <circle cx="100" cy="60" r="15" className="animate-pulse" />
            </svg>
        )
    },
    {
        id: 'ai-support',
        category: 'Artificial Intelligence & Machine Learning',
        title: "AI Support & Optimization",
        desc: "Continuous AI monitoring, tuning, and performance enhancement to maximize ROI and system reliability.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M100 20l10 20h20l-15 15 5 25-20-15-20 15 5-25-15-15h20z" />
            </svg>
        )
    },
    {
        id: 'data-analytics',
        category: 'Artificial Intelligence & Machine Learning',
        title: "Data Analytics & Insights",
        desc: "Transform raw data into actionable intelligence through advanced analytics, dashboards, and predictive reporting.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="40" y="80" width="20" height="20" />
                <rect x="90" y="50" width="20" height="50" />
                <rect x="140" y="30" width="20" height="70" />
            </svg>
        )
    },

    // Automation & Integration
    {
        id: 'workflow-automation',
        category: 'Automation & Integration',
        title: "Workflow Automation",
        desc: "Automate repetitive tasks, improve visibility, and reduce operational costs through intelligent process automation.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="60" cy="40" r="10" />
                <circle cx="140" cy="40" r="10" />
                <circle cx="100" cy="90" r="10" />
                <path d="M70 45l20 35M130 45l-20 35M100 40h40" />
            </svg>
        )
    },
    {
        id: 'bpa',
        category: 'Automation & Integration',
        title: "Business Process Automation",
        desc: "Optimize enterprise workflows with smart automation solutions that increase accuracy and efficiency.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M40 60h120M100 20v80" strokeDasharray="4 4" />
                <rect x="80" y="40" width="40" height="40" rx="4" />
            </svg>
        )
    },
    {
        id: 'system-integration',
        category: 'Automation & Integration',
        title: "System Integration",
        desc: "Connect software, hardware, databases, and cloud systems into a unified digital ecosystem.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M60 60h80M100 20v80" />
                <circle cx="60" cy="60" r="5" fill="currentColor" />
                <circle cx="140" cy="60" r="5" fill="currentColor" />
                <circle cx="100" cy="20" r="5" fill="currentColor" />
                <circle cx="100" cy="100" r="5" fill="currentColor" />
            </svg>
        )
    },
    {
        id: 'ai-automation',
        category: 'Automation & Integration',
        title: "AI-Powered Automation",
        desc: "Advanced automation combining AI and RPA for handling complex processes and unstructured data.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M50 60h100" strokeWidth="4" opacity="0.2" />
                <circle cx="100" cy="60" r="20" />
                <path d="M90 60l5-5 5 5-5 5zM105 60l5-5 5 5-5 5z" fill="currentColor" />
            </svg>
        )
    },
    {
        id: 'third-party-integration',
        category: 'Automation & Integration',
        title: "Third-Party Tool Integration",
        desc: "Seamless API-based integration with external platforms to improve collaboration and system performance.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="40" y="30" width="40" height="40" rx="4" />
                <rect x="120" y="30" width="40" height="40" rx="4" />
                <path d="M80 50h40" />
            </svg>
        )
    },
    {
        id: 'data-sync',
        category: 'Automation & Integration',
        title: "Data Sync & Automation",
        desc: "Ensure consistent, real-time data synchronization across multiple systems and platforms.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M70 40a30 30 0 1 1 0 40M130 80a30 30 0 1 1 0-40" />
                <path d="M70 30l-5 10 10 0zM135 90l-10-5 5-10z" fill="currentColor" />
            </svg>
        )
    },

    // MVP Development
    {
        id: 'mvp-strategy',
        category: 'MVP Development',
        title: "MVP Strategy & Validation",
        desc: "Build and validate minimum viable products with core features to test market fit and reduce launch risk.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M40 60l40 40 80-80" />
            </svg>
        )
    },
    {
        id: 'mvp-ui-ux',
        category: 'MVP Development',
        title: "UI/UX for MVP",
        desc: "Design intuitive, user-focused interfaces that support rapid validation and early user adoption.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="40" y="30" width="120" height="60" rx="10" />
                <circle cx="70" cy="50" r="5" fill="currentColor" />
                <path d="M70 70h60" />
            </svg>
        )
    },
    {
        id: 'rapid-mvp',
        category: 'MVP Development',
        title: "Rapid MVP Development",
        desc: "Accelerated product development focusing on essential features for faster go-to-market.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M40 60h60l20-40 20 80 20-40h40" />
            </svg>
        )
    },
    {
        id: 'mvp-seo',
        category: 'MVP Development',
        title: "MVP SEO & Launch Readiness",
        desc: "Prepare MVPs for market launch with SEO planning, analytics setup, and operational readiness.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="80" cy="50" r="30" />
                <path d="M100 70l30 30" />
            </svg>
        )
    },
    {
        id: 'mvp-scaling',
        category: 'MVP Development',
        title: "MVP Scaling Support",
        desc: "Technical and strategic guidance to scale validated products while maintaining architectural stability.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M40 100v-20h30v-20h30v-20h30v-20h30" />
            </svg>
        )
    },

    // Generative AI
    {
        id: 'llm-tuning',
        category: 'Generative AI',
        title: "Custom LLM Fine-Tuning",
        desc: "Domain-specific LLM customization for enhanced accuracy, contextual relevance, and business alignment.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M60 60a40 40 0 1 1 80 0 40 40 0 1 1-80 0" />
                <path d="M100 40v40M80 60h40" />
            </svg>
        )
    },
    {
        id: 'genai-assessment',
        category: 'Generative AI Services',
        title: "GenAI Readiness Assessment",
        desc: "Evaluate infrastructure, data maturity, and business readiness for successful generative AI adoption.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="100" cy="60" r="40" strokeDasharray="4 4" />
                <path d="M100 45v30M85 60h30" />
            </svg>
        )
    },
    {
        id: 'genai-integration',
        category: 'Generative AI Services',
        title: "GenAI Integration",
        desc: "Integrate generative AI models into business workflows to enable real-time, context-aware automation.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="50" y="30" width="100" height="60" rx="10" />
                <path d="M70 60h60M100 45v30" className="animate-pulse" />
            </svg>
        )
    },
    {
        id: 'rag-implementation',
        category: 'Generative AI Services',
        title: "Enterprise RAG Implementation",
        desc: "Secure Retrieval-Augmented Generation systems combining proprietary data with LLMs for accurate enterprise insights.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M40 40h120M40 80h120M100 20v80" />
                <circle cx="100" cy="60" r="10" fill="currentColor" />
            </svg>
        )
    },
    {
        id: 'ai-agents',
        category: 'Generative AI Services',
        title: "AI Agent & Copilot Development",
        desc: "Build intelligent AI assistants and autonomous agents to streamline workflows and boost productivity.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M80 40c10-10 30-10 40 0s10 30 0 40-30 10-40 0-10-30 0-40" />
                <circle cx="100" cy="100" r="5" fill="currentColor" />
            </svg>
        )
    },

    // Software Testing
    {
        id: 'test-automation',
        category: 'Software Testing',
        title: "Intelligent Test Automation",
        desc: "AI-driven automated testing frameworks that reduce manual effort and accelerate release cycles.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M40 60l30 30 90-90" />
                <circle cx="100" cy="60" r="40" strokeDasharray="2 2" />
            </svg>
        )
    },
    {
        id: 'performance-engineering',
        category: 'Software Testing',
        title: "Performance & Reliability Engineering",
        desc: "Ensure system scalability, uptime, and reliability using monitoring, automation, and SRE principles.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M40 100a60 60 0 0 1 120 0" />
                <path d="M100 100V40" />
            </svg>
        )
    },
    {
        id: 'manual-testing',
        category: 'Software Testing',
        title: "Manual Testing",
        desc: "Comprehensive functional and regression testing to validate stability and user experience.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M60 40h80v60H60z" />
                <path d="M80 60l10 10 20-20" />
            </svg>
        )
    },
    {
        id: 'automation-testing-service',
        category: 'Software Testing',
        title: "Automation Testing",
        desc: "Script-based testing frameworks for consistent validation and improved software quality assurance.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M40 40l40 40 80-80" />
                <rect x="40" y="80" width="120" height="20" rx="4" />
            </svg>
        )
    },

    // Mobile Application Development
    {
        id: 'ios-dev',
        category: 'Mobile Application Development',
        title: "iOS Development",
        desc: "Custom, secure, and high-performance iOS applications built for Apple’s ecosystem.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="70" y="20" width="60" height="90" rx="10" />
                <circle cx="100" cy="95" r="5" />
            </svg>
        )
    },
    {
        id: 'cross-platform-dev',
        category: 'Mobile Application Development',
        title: "Cross-Platform Development",
        desc: "Unified codebase applications that run seamlessly across multiple operating systems.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="40" y="30" width="50" height="80" rx="5" />
                <rect x="110" y="30" width="50" height="80" rx="5" />
                <path d="M90 70h20" />
            </svg>
        )
    },
    {
        id: 'hybrid-app-dev',
        category: 'Mobile Application Development',
        title: "Hybrid App Development",
        desc: "Cost-effective hybrid solutions delivering consistent UI/UX across iOS and Android platforms.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="100" cy="60" r="40" />
                <path d="M80 60h40M100 40v40" />
            </svg>
        )
    },
    {
        id: 'mobile-ui-ux',
        category: 'Mobile Application Development',
        title: "Mobile App UI/UX Design",
        desc: "User-centered design focused on intuitive navigation and engaging mobile experiences.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="70" y="20" width="60" height="90" rx="10" />
                <path d="M85 45h30M85 60h30" />
            </svg>
        )
    },
    {
        id: 'android-dev',
        category: 'Mobile Application Development',
        title: "Android Development",
        desc: "Robust Android applications built using modern frameworks for scalability and performance.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="70" y="20" width="60" height="90" rx="10" />
                <path d="M80 30h40M90 20l-5-5M110 20l5-5" />
            </svg>
        )
    },

    // Managed IT Services
    {
        id: 'it-infra-mgmt',
        category: 'Managed IT Services',
        title: "Server & Infrastructure Management",
        desc: "Proactive IT infrastructure monitoring, optimization, and maintenance for operational continuity.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="60" y="20" width="80" height="20" rx="2" />
                <rect x="60" y="50" width="80" height="20" rx="2" />
                <rect x="60" y="80" width="80" height="20" rx="2" />
            </svg>
        )
    },
    {
        id: 'backup-recovery',
        category: 'Managed IT Services',
        title: "Backup & Disaster Recovery",
        desc: "Comprehensive data protection strategies ensuring rapid recovery and business continuity.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M100 20v80M60 60h80" />
                <path d="M60 40a40 40 0 0 1 80 0" strokeDasharray="4 4" />
            </svg>
        )
    },
    {
        id: 'email-collaboration',
        category: 'Managed IT Services',
        title: "Email & Collaboration Management",
        desc: "Secure and scalable communication platform management for improved team productivity.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="40" y="40" width="120" height="60" rx="4" />
                <path d="M40 40l60 30 60-30" />
            </svg>
        )
    },
    {
        id: 'voip-comms',
        category: 'Managed IT Services',
        title: "VoIP & Unified Communications",
        desc: "Integrated voice, video, and messaging solutions for seamless business communication.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M60 40a40 40 0 0 0 0 40M75 50a20 20 0 0 0 0 20" />
                <circle cx="140" cy="60" r="15" />
            </svg>
        )
    },
    {
        id: 'proactive-maintenance',
        category: 'Managed IT Services',
        title: "Proactive Maintenance & Updates",
        desc: "Continuous system monitoring and predictive maintenance to minimize downtime.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M60 60a40 40 0 1 1 80 0 40 40 0 1 1-80 0" strokeDasharray="8 4" />
                <circle cx="100" cy="60" r="10" fill="currentColor" />
            </svg>
        )
    },
    {
        id: 'it-strategic-planning',
        category: 'Managed IT Services',
        title: "IT Strategic Planning & Consulting",
        desc: "Align IT strategy with business objectives for measurable digital transformation outcomes.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M40 100l60-80 60 80H40z" fill="none" />
                <path d="M70 60h60M85 40h30" />
            </svg>
        )
    },

    // Enterprise Software Development
    {
        id: 'legacy-modernization',
        category: 'Enterprise Software Development',
        title: "Legacy System Modernization",
        desc: "Upgrade outdated systems into scalable, efficient, and future-ready digital solutions.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="40" y="30" width="50" height="60" rx="2" opacity="0.3" />
                <rect x="110" y="30" width="50" height="60" rx="2" />
                <path d="M90 60h20" />
            </svg>
        )
    },
    {
        id: 'bi-analytics',
        category: 'Enterprise Software Development',
        title: "Business Intelligence & Analytics Platforms",
        desc: "Interactive dashboards and advanced analytics tools for data-driven decision-making.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M40 90h120M60 90V60M100 90V40M140 90V20" />
            </svg>
        )
    },
    {
        id: 'enterprise-portal',
        category: 'Enterprise Software Development',
        title: "Enterprise Portal Development",
        desc: "Centralized digital portals for employees, partners, and customers.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="40" y="20" width="120" height="80" rx="4" />
                <path d="M40 40h120M80 40v60" />
            </svg>
        )
    },
    {
        id: 'saas-dev',
        category: 'Enterprise Software Development',
        title: "SaaS Product Development",
        desc: "Cloud-native SaaS solutions with scalable architecture, multi-tenancy, and high availability.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M100 20v80M60 40l80 40M60 80l80-40" />
                <circle cx="100" cy="60" r="30" strokeDasharray="4 4" />
            </svg>
        )
    },
    {
        id: 'low-code-dev',
        category: 'Enterprise Software Development',
        title: "Low-Code / No-Code Development",
        desc: "Rapid application development using visual tools and pre-built components to reduce development time.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="40" y="30" width="30" height="30" rx="4" />
                <rect x="85" y="30" width="30" height="30" rx="4" />
                <rect x="130" y="30" width="30" height="30" rx="4" />
                <path d="M55 60v30M100 60v30M145 60v30" strokeDasharray="2 2" />
            </svg>
        )
    },

    // Cloud And Infrastructure Services
    {
        id: 'devops-automation',
        category: 'Cloud And Infrastructure Services',
        title: "DevOps & Cloud Automation",
        desc: "Streamline development and operations through CI/CD pipelines and infrastructure automation.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M60 60c0-20 40-20 40 0s40 20 40 0" />
                <path d="M140 60c0 20-40 20-40 0s-40-20-40 0" />
            </svg>
        )
    },
    {
        id: 'cloud-strategy',
        category: 'Cloud & Infrastructure Services',
        title: "Cloud Strategy & Readiness Assessment",
        desc: "Assess cloud maturity and build strategic migration roadmaps aligned with business goals.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="100" cy="60" r="40" strokeDasharray="4 2" />
                <path d="M100 35v50M75 60h50" />
            </svg>
        )
    },
    {
        id: 'cloud-architecture',
        category: 'Cloud & Infrastructure Services',
        title: "Cloud Architecture & Infrastructure Setup",
        desc: "Design scalable, secure, and high-performance cloud environments.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M40 80c0-20 20-30 40-30s40 10 40 30" />
                <path d="M80 80c0-20 20-30 40-30s40 10 40 30" />
            </svg>
        )
    },
    {
        id: 'cloud-migration',
        category: 'Cloud & Infrastructure Services',
        title: "Cloud Migration Services",
        desc: "Secure migration of infrastructure and applications to cloud platforms with minimal disruption.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M60 80h80M100 80V40" />
                <path d="M85 55l15-15 15 15" />
            </svg>
        )
    },
    {
        id: 'cloud-infra-mgmt',
        category: 'Cloud & Infrastructure Services',
        title: "Cloud Infrastructure Management",
        desc: "End-to-end cloud monitoring, optimization, and operational management.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="50" y="30" width="100" height="60" rx="4" />
                <path d="M70 50h60M70 70h40" />
            </svg>
        )
    },
    {
        id: 'cloud-optimization',
        category: 'Cloud & Infrastructure Services',
        title: "Cloud Optimization & Cost Control",
        desc: "Right-sizing, cost governance, and performance tuning to maximize cloud ROI.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M100 20v80M60 60l40-40 40 40" strokeDasharray="4 4" />
                <circle cx="100" cy="60" r="10" fill="currentColor" />
            </svg>
        )
    }
];

const categories = [
    'All',
    'CMS Development',
    'ERP Services',
    'Artificial Intelligence & Machine Learning',
    'Automation & Integration',
    'MVP Development',
    'Generative AI',
    'Software Testing',
    'Mobile Application Development',
    'Managed IT Services',
    'Enterprise Software Development',
    'Cloud And Infrastructure Services'
];

const categoryOverviews = [
    {
        id: 'cms-overview',
        category: 'CMS Development',
        title: "CMS Development",
        desc: "Build better with Letin Solution. We deliver flexible Headless CMS solutions for seamless omnichannel publishing, high data integrity, and smarter workflows.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="40" y="20" width="120" height="80" rx="8" />
                <path d="M40 40h120M70 20v80M40 70h30" />
                <circle cx="100" cy="60" r="10" />
                <path d="M120 50l10 10-10 10" />
            </svg>
        )
    },
    {
        id: 'erp-overview',
        category: 'ERP Services',
        title: "ERP Services",
        desc: "Letin Solution provides ERP Services for integrated business management. We offer Odoo implementation, customization, and support to unify data, streamline workflows, and ensure stability.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="70" cy="60" r="20" opacity="0.5" />
                <circle cx="130" cy="60" r="20" />
                <path d="M90 60h20" />
            </svg>
        )
    },
    {
        id: 'ai-ml-overview',
        category: 'Artificial Intelligence & Machine Learning',
        title: "Artificial Intelligence & Machine Learning",
        desc: "Artificial Intelligence & Machine Learning systems mimic human intelligence for tasks like decision-making and pattern recognition. Letin Solution provides AI solutions for business, enabling predictive modeling and automation in operations.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="100" cy="60" r="30" />
                <path d="M100 30v60M70 60h60" />
                <circle cx="100" cy="60" r="10" fill="currentColor" />
            </svg>
        )
    },
    {
        id: 'automation-overview',
        category: 'Automation & Integration',
        title: "Automation & Integration",
        desc: "Our solutions streamline business operations. We implement technology, including RPA, to manage repetitive tasks and connect disparate systems. This enables real-time data sharing and supports operational efficiency through effective orchestration.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="40" y="30" width="120" height="60" rx="4" />
                <path d="M60 50h80M80 70h40" />
                <path d="M100 20v10M100 90v10" />
            </svg>
        )
    },
    {
        id: 'mvp-overview',
        category: 'MVP Development',
        title: "MVP Development",
        desc: "Letin Solution MVP development focuses on building core product features for initial user testing. This approach supports rapid market release and data collection for product-market fit. It enables efficient idea validation and iteration based on user feedback, minimizing resource expenditure.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M40 100l60-80 60 80H40z" />
                <circle cx="100" cy="65" r="10" />
            </svg>
        )
    },
    {
        id: 'gen-ai-overview',
        category: 'Generative AI',
        title: "Generative AI",
        desc: "Generative AI transforms complex data into actionable outputs. We provide custom LLM development to automate content creation and improve decision-making. Our solutions drive efficiency across business functions, including LLM fine-tuning for enterprises.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M60 40h80v40H60z" />
                <path d="M80 30v10M120 30v10M80 80v10M120 80v10" />
                <circle cx="100" cy="60" r="5" fill="currentColor" />
            </svg>
        )
    },
    {
        id: 'testing-overview',
        category: 'Software Testing',
        title: "Software Testing",
        desc: "Software Testing verifies application functionality, meeting requirements, and defect identification. Letin Solution provides comprehensive Test Automation to ensure product reliability and user satisfaction. This systematic Quality Assurance process supports business objectives.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="50" y="30" width="100" height="60" rx="8" />
                <path d="M80 60l15 15 30-30" />
            </svg>
        )
    },
    {
        id: 'mobile-overview',
        category: 'Mobile Application Development',
        title: "Mobile Application Development",
        desc: "Letin Solution offers Mobile Application Development, designing, coding, testing, and deploying custom mobile apps for iOS and Android. We focus on operational outcomes, streamlining processes, and enhancing customer engagement through secure, scalable solutions.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="70" y="20" width="60" height="80" rx="10" />
                <path d="M100 90h.01" strokeWidth="3" />
            </svg>
        )
    },
    {
        id: 'managed-it-overview',
        category: 'Managed IT Services',
        title: "Managed IT Services",
        desc: "Letin Solution Managed IT Services delivers continuous oversight for technology infrastructure. This proactive approach prevents operational disruptions and aligns IT support with business objectives. We cover network monitoring, cybersecurity, data backups, and software updates, ensuring...",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M40 80h120M60 60h80M80 40h40" />
                <path d="M100 20v80" />
            </svg>
        )
    },
    {
        id: 'enterprise-overview',
        category: 'Enterprise Software Development',
        title: "Enterprise Software Development",
        desc: "Enterprise Software Development designs and deploys large-scale, customized software solutions for complex organizational needs. We build cloud-native systems that streamline business processes, enhance operational efficiency, and support scalability and security.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="30" y="30" width="140" height="60" rx="4" />
                <path d="M30 50h140M70 30v60M130 30v60" />
            </svg>
        )
    },
    {
        id: 'cloud-overview',
        category: 'Cloud And Infrastructure Services',
        title: "Cloud And Infrastructure Services",
        desc: "Letin Solution provides cloud and infrastructure solutions, offering on-demand access to virtualized hardware and software resources. We focus on Cloud optimization to ensure operational stability and cost efficiency. Our services include comprehensive Cloud management...",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M70 80c-20 0-30-15-30-30s15-30 30-30c5-15 20-20 30-20s25 5 30 20c15 0 30 15 30 30s-15 30-30 30H70z" />
            </svg>
        )
    }
];

const ServicesPage = () => {
    const [filter, setFilter] = useState('All');
    const [selectedSolution, setSelectedSolution] = useState(null);

    const filteredSolutions = filter === 'All'
        ? allSolutions
        : allSolutions.filter(s => s.category.includes(filter) || s.title.includes(filter));

    return (
        <div className="bg-[#fbfcff] min-h-screen font-instrument select-none">
            {/* Modal for Details */}
            <AnimatePresence>
                {selectedSolution && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedSolution(null)}
                            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            className="relative bg-white rounded-[4rem] p-10 md:p-20 max-w-4xl w-full shadow-2xl border border-white/20 overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedSolution(null)}
                                className="absolute top-10 right-10 p-4 rounded-full bg-slate-50 text-slate-400 hover:text-slate-900 transition-all hover:rotate-90"
                            >
                                <X size={24} />
                            </button>

                            <div className="mb-12 w-28 h-28 transform -rotate-12">
                                {selectedSolution.illustration}
                            </div>

                            <span className="text-brand-accent font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">Strategic Briefing</span>
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-6 leading-none">
                                {selectedSolution.title}
                            </h2>
                            <p className="text-slate-500 text-xl font-light leading-relaxed mb-12">
                                {selectedSolution.desc}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-16">
                                {['Advanced Architecture', 'Scalable Ecosystem', 'AI Optimized'].map((tag) => (
                                    <span key={tag} className="px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <button className="bg-slate-900 text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-brand-accent transition-all shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                                Request Access
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Header Section */}
            <section className="pt-48 pb-24 relative overflow-hidden bg-white border-b border-slate-100">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-5xl mx-auto text-center flex flex-col items-center"
                    >
                        <span className="text-brand-accent font-black tracking-[0.6em] text-[10px] uppercase mb-8 block bg-brand-accent/5 w-fit px-6 py-2 rounded-full border border-brand-accent/10">Solutions Portfolio</span>
                        <h1 className="text-slate-900 text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.85] uppercase">
                            What we can <br /> <span className="text-brand-accent italic">Solve for you.</span>
                        </h1>
                        <p className="text-slate-500 text-base md:text-xl font-light leading-relaxed max-w-2xl">
                            We engineer technical ecosystems that define industry standards.
                            From intelligent CMS to enterprise-scale AI, our protocol is absolute.
                        </p>
                    </motion.div>

                    {/* Filter Navigation */}
                    <div className="mt-20 flex flex-wrap gap-3 justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all duration-500 ${filter === cat
                                    ? 'bg-slate-950 text-white border-slate-950 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]'
                                    : 'bg-white text-slate-400 border-slate-100 hover:border-brand-accent/30 hover:text-slate-900 hover:shadow-xl hover:shadow-slate-100'
                                    }`}
                            >
                                {cat === 'All' ? 'Genesis (All)' : cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Display Grid */}
            <section className="py-24 container mx-auto px-6 max-w-7xl">
                {filter === 'All' ? (
                    <div className="space-y-24">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                            {categoryOverviews.map((overview, idx) => (
                                <motion.div
                                    key={overview.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="flex flex-col group cursor-pointer"
                                    onClick={() => {
                                        setFilter(overview.category);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                >
                                    <div className="mb-8 w-full max-w-[120px] aspect-square flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
                                        {overview.illustration}
                                    </div>

                                    <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight uppercase leading-none group-hover:text-brand-accent transition-colors">
                                        {overview.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                                        {overview.desc}
                                    </p>

                                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-slate-900 transition-all">
                                        Examine Strategy <ArrowRight size={14} className="group-hover:translate-x-3 transition-transform duration-500 text-brand-accent" />
                                    </div>

                                    {/* Subtle Divider */}
                                    <div className="mt-12 h-px w-full bg-slate-100 group-hover:bg-brand-accent/20 transition-colors" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100 rounded-[3rem] overflow-hidden">
                        <AnimatePresence mode='popLayout'>
                            {filteredSolutions.map((solution, idx) => (
                                <motion.div
                                    layout
                                    key={solution.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-white p-12 md:p-16 flex flex-col items-center text-center group hover:bg-slate-50 transition-all duration-700 relative overflow-hidden"
                                >
                                    {/* Background Accent */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-3xl rounded-full translate-x-16 -translate-y-16 group-hover:bg-brand-accent/10 transition-colors" />

                                    <div className="mb-12 w-full max-w-[180px] h-[100px] transform group-hover:scale-110 transition-transform duration-1000 mx-auto">
                                        {solution.illustration}
                                    </div>

                                    <span className="text-brand-accent font-black text-[9px] uppercase tracking-widest mb-4 opacity-0 group-hover:opacity-100 transition-opacity">Protocol Ready</span>
                                    <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight uppercase leading-none group-hover:text-brand-accent transition-colors">
                                        {solution.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm font-light leading-relaxed mb-12 flex-grow line-clamp-4 group-hover:text-slate-700 transition-colors">
                                        {solution.desc}
                                    </p>

                                    <button
                                        onClick={() => setSelectedSolution(solution)}
                                        className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-slate-900 transition-all mx-auto"
                                    >
                                        Detailed Brief <ArrowRight size={14} className="group-hover:translate-x-3 transition-transform duration-500 text-brand-accent" />
                                    </button>

                                    {/* Hover Border */}
                                    <div className="absolute bottom-0 left-0 h-1 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left w-full" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </section >
        </div >
    );
};

export default ServicesPage;

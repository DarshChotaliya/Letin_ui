    import React, { useState, useEffect, useRef, useMemo, Suspense } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Canvas, useFrame, useThree } from '@react-three/fiber';
    import { Stars, useTexture } from '@react-three/drei';
    import { EffectComposer, Bloom } from '@react-three/postprocessing';
    import * as THREE from 'three';
    import { ChevronRight, ChevronLeft, Shield, Zap, Globe, Cpu, Activity } from 'lucide-react';

    const Fingerprint = ({ size }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12" /><path d="M5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12" /><path d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12" /><path d="M12 22V12" /></svg>
    );

    /* ─────────────────── Slide Data ─────────────────── */
    const slides = [
        {
            id: "core",
            title: "Technology That Transforms Solutions That Scale",
            subtitle: "LETIN SOLUTION",
            highlight: "We engineer industrial-grade digital ecosystems that empower global enterprises to innovate with speed and security.",
            cta: "Start Your Project",
            stats: [
                { icon: <Shield size={14} />, label: "Secured", val: "99.9%" },
                { icon: <Zap size={14} />, label: "Speed", val: "40% faster" }
            ],
        },
        {
            id: "ai",
            title: "Advancing Business Through Neural Intelligence",
            subtitle: "AI & AUTOMATION",
            highlight: "Our proprietary AI architectures automate complex decision loops, reducing operational friction by over 60%.",
            cta: "Explore AI Hub",
            stats: [
                { icon: <Cpu size={14} />, label: "Neural", val: "Proprietary" },
                { icon: <Activity size={14} />, label: "Scale", val: "Infinite" }
            ],
        },
        {
            id: "infra",
            title: "Distributed Systems For The Modern Era",
            subtitle: "GLOBAL INFRASTRUCTURE",
            highlight: "Building resilient, zero-downtime microservices that handle millions of concurrent global transactions.",
            cta: "View Architecture",
            stats: [
                { icon: <Globe size={14} />, label: "Reach", val: "Global" },
                { icon: <Shield size={14} />, label: "Uptime", val: "100%" }
            ],
        },
        {
            id: "consulting",
            title: "Strategic Advisory For Digital Supremacy",
            subtitle: "EXECUTIVE CONSULTING",
            highlight: "We partner with leadership teams to chart the multi-year technical roadmaps that define market leaders.",
            cta: "Request Briefing",
            stats: [
                { icon: <Activity size={14} />, label: "Strategy", val: "Multi-year" },
                { icon: <Activity size={14} />, label: "Impact", val: "High" }
            ],
        },
        {
            id: "security",
            title: "Zero Trust Defense For Elite Enterprises",
            subtitle: "QUANTUM SECURITY",
            highlight: "Hardening your digital perimeter with advanced threat intelligence and quantum-safe encryption protocols.",
            cta: "Secure My Perimeter",
            stats: [
                { icon: <Shield size={14} />, label: "Standard", val: "Zero Trust" },
                { icon: <Fingerprint size={14} />, label: "Auth", val: "Biometric" }
            ],
        }
    ];

    /* ─────────────────── Atmosphere Glow Shader ─────────────────── */
    const AtmosphereShader = {
        vertexShader: `
            varying vec3 vNormal;
            varying vec3 vPosition;
            void main() {
                vNormal = normalize(normalMatrix * normal);
                vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            varying vec3 vNormal;
            varying vec3 vPosition;
            uniform vec3 uColor;
            uniform float uIntensity;
            void main() {
                vec3 viewDir = normalize(-vPosition);
                float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 5.0);
                float atmosphere = fresnel * uIntensity;
                gl_FragColor = vec4(uColor, atmosphere * 0.8);
            }
        `
    };

    /* ─────────────────── Background Data Field ─────────────────── */
    function DigitalDataField({ count = 1200 }) {
        const mesh = useRef();
        const { positions, speeds } = useMemo(() => {
            const pos = new Float32Array(count * 3);
            const spd = new Float32Array(count);
            for (let i = 0; i < count; i++) {
                pos[i * 3] = (Math.random() - 0.5) * 100; // Wide spread x
                pos[i * 3 + 1] = (Math.random() - 0.5) * 60; // Wide spread y
                pos[i * 3 + 2] = (Math.random() - 0.5) * 60 - 20; // Background depth
                spd[i] = Math.random() * 0.2 + 0.1;
            }
            return { positions: pos, speeds: spd };
        }, [count]);

        useFrame((state) => {
            if (!mesh.current) return;
            const positions = mesh.current.geometry.attributes.position.array;
            for (let i = 0; i < count; i++) {
                positions[i * 3 + 2] += speeds[i] * 0.1;
                if (positions[i * 3 + 2] > 10) {
                    positions[i * 3 + 2] = -50;
                }
            }
            mesh.current.geometry.attributes.position.needsUpdate = true;
        });

        return (
            <points ref={mesh}>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
                </bufferGeometry>
                <pointsMaterial size={0.15} color="#4f46e5" transparent opacity={0.4} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
            </points>
        );
    }

    /* ─────────────────── 3D Real Earth Component ─────────────────── */
    function Planet({ mouse }) {
        const earthRef = useRef();
        const cloudsRef = useRef();
        const atmosphereRef = useRef();

        const [earthMap, cloudsMap] = useTexture([
            '/textures/earth-day.jpg',
            '/textures/earth-clouds.jpg',
        ]);

        const atmosphereUniforms = useMemo(() => ({
            uColor: { value: new THREE.Color('#7c3aed') }, // Deeper purple
            uIntensity: { value: 0.3 }, // Softer intensity
        }), []);

        useFrame((state) => {
            const t = state.clock.elapsedTime;
            if (earthRef.current) {
                earthRef.current.rotation.y = t * 0.05;
                earthRef.current.rotation.x = 0.2 + mouse.current.y * 0.05;
            }
            if (cloudsRef.current) {
                cloudsRef.current.rotation.y = t * 0.06;
                cloudsRef.current.rotation.x = 0.2 + mouse.current.y * 0.05;
            }
            // No separate rotation for atmosphere to keep it stable
        });

        return (
            <group position={[0, 0, 0]}>
                <mesh ref={earthRef}>
                    <sphereGeometry args={[2.4, 64, 64]} />
                    <meshStandardMaterial map={earthMap} metalness={0.2} roughness={0.6} />
                </mesh>
                <mesh ref={cloudsRef} scale={1.01}>
                    <sphereGeometry args={[2.4, 64, 64]} />
                    <meshStandardMaterial map={cloudsMap} transparent opacity={0.3} depthWrite={false} blending={THREE.AdditiveBlending} />
                </mesh>

            </group>
        );
    }

    /* ─────────────────── Orbital Particles ─────────────────── */
    const OrbitalParticles = ({ count = 100, mouse }) => {
        const meshRef = useRef();
        const { positions, velocities, colors } = useMemo(() => {
            const pos = new Float32Array(count * 3);
            const vel = [];
            const col = new Float32Array(count * 3);
            const particleColors = [
                new THREE.Color('#6366f1'),
                new THREE.Color('#a78bfa'),
                new THREE.Color('#ffffff'),
            ];

            for (let i = 0; i < count; i++) {
                const radius = 3.2 + Math.random() * 2.0; // Tighter orbit
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(2 * Math.random() - 1);
                pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
                pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
                pos[i * 3 + 2] = radius * Math.cos(phi);

                const speed = 0.005 + Math.random() * 0.01;
                vel.push({ speed, radius, theta, phi });

                const c = particleColors[Math.floor(Math.random() * particleColors.length)];
                col[i * 3] = c.r;
                col[i * 3 + 1] = c.g;
                col[i * 3 + 2] = c.b;
            }
            return { positions: pos, velocities: vel, colors: col };
        }, [count]);

        useFrame((state) => {
            if (!meshRef.current) return;
            const posAttr = meshRef.current.geometry.attributes.position;
            const t = state.clock.elapsedTime;
            for (let i = 0; i < count; i++) {
                const v = velocities[i];
                const angle = t * v.speed + v.theta;
                // Simple circular orbit
                posAttr.array[i * 3] = v.radius * Math.sin(v.phi) * Math.cos(angle);
                posAttr.array[i * 3 + 1] = v.radius * Math.sin(v.phi) * Math.sin(angle);
                posAttr.array[i * 3 + 2] = v.radius * Math.cos(v.phi);
            }
            posAttr.needsUpdate = true;
        });

        return (
            <points ref={meshRef}>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
                    <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
                </bufferGeometry>
                <pointsMaterial size={0.06} vertexColors transparent opacity={0.6} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
            </points>
        );
    }

    /* ─────────────────── Camera Controller ─────────────────── */
    function CameraRig({ mouse }) {
        const { camera } = useThree();
        useFrame((state) => {
            const t = state.clock.elapsedTime;
            camera.position.x = Math.sin(t * 0.05) * 0.5 + (mouse.current.x * 0.5); // Reduced movement
            camera.position.y = Math.cos(t * 0.05) * 0.3 + (mouse.current.y * 0.5);
            camera.position.z = 9; // Fixed distance
            camera.lookAt(0, 0, 0);
        });
        return null;
    }


    /* ─────────────────── Nebula Component ─────────────────── */
    function Nebula() {
        return (
            <mesh position={[0, 0, -15]}>
                <planeGeometry args={[40, 40]} />
                <meshBasicMaterial color="#02040a" opacity={0.0} transparent />
            </mesh>
        );
    }


    /* ─────────────────── 3D Scene ─────────────────── */
    function SpaceScene({ mouse }) {
        return (
            <>
                <color attach="background" args={['#02040a']} />
                <fog attach="fog" args={['#02040a', 10, 40]} />
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#818cf8" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#c084fc" />

                <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                <DigitalDataField />

                <Planet mouse={mouse} />
                <OrbitalParticles count={80} mouse={mouse} />

                <CameraRig mouse={mouse} />
                <EffectComposer disableNormalPass>
                    <Bloom luminanceThreshold={0.7} luminanceSmoothing={0.9} intensity={0.5} />
                </EffectComposer>
            </>
        );
    }


    /* ─────────────────── Main Hero Component ─────────────────── */
    const Hero = () => {
        const [currentSlide, setCurrentSlide] = useState(0);
        const SLIDE_DURATION = 10000;
        const mouse = useRef({ x: 0, y: 0 });

        useEffect(() => {
            const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), SLIDE_DURATION);
            return () => clearInterval(timer);
        }, []);

        useEffect(() => {
            const handleMouse = (e) => {
                mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
                mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
            };
            window.addEventListener('mousemove', handleMouse);
            return () => window.removeEventListener('mousemove', handleMouse);
        }, []);

        const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
        const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

        return (
            <section className="w-full relative h-screen flex items-center justify-center overflow-hidden bg-[#02040a]">

                <div className="absolute inset-0 z-0">
                    <Canvas camera={{ position: [0, 0, 8], fov: 50, near: 0.1, far: 100 }} dpr={[1, 1]} gl={{ antialias: true, stencil: false, depth: true, alpha: false, powerPreference: 'default' }}>
                        <Suspense fallback={null}>
                            <SpaceScene mouse={mouse} />
                        </Suspense>
                    </Canvas>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-[#02040a]/30 z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#02040a]/20 via-transparent to-[#02040a]/20 z-10 pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 relative z-50 text-center pt-16 md:pt-24">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: "spring", stiffness: 40, damping: 20 }}
                            className="flex flex-col items-center"
                        >

                            {/* Subtitle - Emerging from distance */}
                            <motion.div
                                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.1 }}
                                className="bg-brand-accent/10 px-6 py-2 rounded-full mb-6 flex items-center gap-3 backdrop-blur-md border border-brand-accent/20"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse shadow-glow" />
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-brand-accent/90">{slides[currentSlide].subtitle}</span>
                            </motion.div>

                            {/* Title - Organic Spring Emergence */}
                            <h1 className="cinematic-heading text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-5 max-w-6xl mx-auto px-4 uppercase tracking-tight drop-shadow-lg perspective-1000">
                                {slides[currentSlide].title.split(" ").map((word, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8, y: 40, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 60,
                                            damping: 20,
                                            delay: 0.2 + (i * 0.02)
                                        }}
                                        className="inline-block mr-[0.25em] hover:text-brand-accent transition-colors duration-300 cursor-default text-shimmer"
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </h1>

                            {/* Description - Smooth Float */}
                            <motion.p
                                initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ type: "spring", stiffness: 45, damping: 18, delay: 0.5 }}
                                className="text-slate-300 font-inter font-light text-sm md:text-lg lg:text-xl mb-8 max-w-3xl px-4 leading-relaxed tracking-wide"
                            >
                                {slides[currentSlide].highlight}
                            </motion.p>

                            {/* Stats - Quick Spring Stagger */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.7 }}
                                className="flex flex-wrap justify-center gap-4 mb-8"
                            >
                                {slides[currentSlide].stats.map((stat, i) => (
                                    <div key={i} className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-2xl transition-all group cursor-default border border-white/10 hover:bg-white/10 hover:shadow-lg backdrop-blur-sm">
                                        <div className="text-brand-accent group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                                        <div className="text-left">
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
                                            <p className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">{stat.val}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Buttons - Final Pop */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.9 }}
                                className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center mt-4 md:mt-8"
                            >
                                <button className="bg-[#6366f1] text-white px-10 py-5 md:px-14 md:py-6 rounded-full font-black text-sm md:text-base uppercase tracking-[0.3em] hover:bg-[#4f46e5] hover:scale-105 transition-all duration-300 shadow-[0_20px_50px_rgba(99,102,241,0.6)] flex items-center gap-4">
                                    {slides[currentSlide].cta}
                                    <ChevronRight size={22} className="shrink-0" />
                                </button>

                                <button className="border-2 border-slate-700 text-slate-300 px-10 py-5 md:px-14 md:py-6 rounded-full font-black text-sm md:text-base uppercase tracking-[0.3em] hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300">
                                    Enterprise Dispatch
                                </button>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
                {/* Scroll indicator and slider controls removed as requested */}
                <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-[#02040a] via-[#02040a]/40 to-transparent z-40 pointer-events-none" />
            </section>
        );
    };

    export default Hero;

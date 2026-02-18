import React, { useEffect, useRef } from 'react';

const GravityField = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let particles = [];
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 80 : 250;
        const mouse = { x: null, y: null, radius: isMobile ? 120 : 250 };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            mouse.radius = window.innerWidth < 768 ? 120 : 250;
        };

        const handleMouseMove = (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        handleResize();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                // Smaller particles for stardust feel
                this.size = Math.random() * 1.2 + 0.2;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 50) + 5;
                // Mix of cyan and pure white for stardust
                const colors = [
                    `rgba(6, 182, 212, ${Math.random() * 0.4 + 0.2})`,
                    `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`,
                    `rgba(34, 211, 238, ${Math.random() * 0.4 + 0.2})`
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.angle = Math.random() * Math.PI * 2;
                this.velocity = Math.random() * 0.2 + 0.1;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();

                // Occasional twinkle
                if (Math.random() > 0.995) {
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = this.color;
                } else {
                    ctx.shadowBlur = 0;
                }
            }

            update() {
                // Subtle drift
                this.x += Math.cos(this.angle) * this.velocity;
                this.y += Math.sin(this.angle) * this.velocity;

                // Mouse interaction (gravity)
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const directionX = (dx / distance) * force * this.density * 0.3;
                    const directionY = (dy / distance) * force * this.density * 0.3;
                    this.x += directionX;
                    this.y += directionY;
                }

                // Wrap around screen
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const connect = () => {
            // Only connect nearby particles for a "neural/constellation" look
            const maxDistance = 100;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let dx = particles[a].x - particles[b].x;
                    let dy = particles[a].y - particles[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = (1 - (distance / maxDistance)) * 0.15;
                        ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].draw();
                particles[i].update();
            }
            if (!isMobile) connect();
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none opacity-100"
        />
    );
};

export default GravityField;

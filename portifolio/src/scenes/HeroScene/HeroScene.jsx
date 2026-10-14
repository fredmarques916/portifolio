import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './HeroScene.css';

/**
 * HeroScene: An authorial 3D interactive conceptual sculpture
 * representing "Understanding. Building. Evolving."
 * 
 * - Core (Understanding): Polyhedral wireframe crystal with glowing center
 * - Rings (Building): Nested dual-axis precision rings with technical facets
 * - Particles (Evolving): Ambient orbiting telemetry particles responsive to pointer
 */
function checkWebGLSupport() {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch {
    return false;
  }
}

export function HeroScene({ fallbackNotice }) {
  const mountRef = useRef(null);
  const [hasWebGL] = useState(() => checkWebGLSupport());

  useEffect(() => {
    if (!hasWebGL) return;

    const container = mountRef.current;
    if (!container) return;

    // Detect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Detect mobile tier
    const isMobile = window.innerWidth < 768;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 600;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isMobile,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
      container.appendChild(renderer.domElement);
    } catch {
      return;
    }

    // 2. Lighting System
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xd2f800, 2.8); // Volt Accent Light
    dirLight1.position.set(5, 5, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x00e5ff, 2.2); // Cyan Accent Light
    dirLight2.position.set(-5, -3, 3);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xffffff, 1.5, 10);
    pointLight.position.set(0, 0, 2);
    scene.add(pointLight);

    // 3. Central Sculpture Group
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // === Layer 1: Understanding (Inner Polyhedral Crystal) ===
    const coreGeo = new THREE.IcosahedronGeometry(1.3, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x07080b,
      roughness: 0.15,
      metalness: 0.9,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    sculptureGroup.add(coreMesh);

    // Core Wireframe Glow
    const wireframeGeo = new THREE.IcosahedronGeometry(1.32, 0);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0xd2f800,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    sculptureGroup.add(wireframeMesh);

    // Inner Glowing Core Node
    const innerNodeGeo = new THREE.OctahedronGeometry(0.55, 0);
    const innerNodeMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: false,
    });
    const innerNode = new THREE.Mesh(innerNodeGeo, innerNodeMat);
    sculptureGroup.add(innerNode);

    // === Layer 2: Building (Precision Orbital Rings) ===
    // Outer Ring 1
    const ring1Geo = new THREE.TorusGeometry(2.1, 0.04, 16, 64);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xd2f800,
      roughness: 0.2,
      metalness: 0.85,
      emissive: 0xd2f800,
      emissiveIntensity: 0.25,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    sculptureGroup.add(ring1);

    // Outer Ring 2
    const ring2Geo = new THREE.TorusGeometry(2.4, 0.03, 16, 64);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0x00e5ff,
      emissiveIntensity: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    sculptureGroup.add(ring2);

    // Outer Segmented Horizon Ring
    const ring3Geo = new THREE.TorusGeometry(2.7, 0.015, 8, 48);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.35,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.z = Math.PI / 2;
    sculptureGroup.add(ring3);

    // === Layer 3: Evolving (Ambient Floating Telemetry Constellation) ===
    const particleCount = isMobile ? 35 : 80;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.6 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
      particleScales[i] = Math.random() * 0.08 + 0.02;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xd2f800,
      size: isMobile ? 0.06 : 0.08,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    sculptureGroup.add(particleSystem);

    // 4. Mouse / Pointer Interaction with smooth damping
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

      const x = ((clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((clientY - rect.top) / rect.height) * 2 - 1);

      mouse.targetX = x * 0.5;
      mouse.targetY = y * 0.35;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    // 5. Responsive Resize Handling
    const handleResize = () => {
      if (!container || !renderer) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 6. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth pointer lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      if (!prefersReducedMotion) {
        // Continuous kinetic movement
        sculptureGroup.rotation.y = elapsedTime * 0.25 + mouse.x;
        sculptureGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.15 + mouse.y;

        // Counter-rotation of orbital rings
        ring1.rotation.z = elapsedTime * 0.4;
        ring1.rotation.x = Math.PI / 3 + Math.sin(elapsedTime * 0.5) * 0.1;

        ring2.rotation.y = elapsedTime * -0.3;
        ring2.rotation.z = Math.cos(elapsedTime * 0.35) * 0.2;

        ring3.rotation.x = elapsedTime * 0.15;

        // Pulsing core
        const pulse = 1 + Math.sin(elapsedTime * 1.8) * 0.05;
        innerNode.scale.set(pulse, pulse, pulse);
        innerNode.rotation.y = elapsedTime * 0.8;

        // Particle field slow drift
        particleSystem.rotation.y = -elapsedTime * 0.08;
      } else {
        // Static tilt respecting reduced motion
        sculptureGroup.rotation.y = mouse.x * 0.2;
        sculptureGroup.rotation.x = mouse.y * 0.2;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three.js resources
      coreGeo.dispose();
      coreMat.dispose();
      wireframeGeo.dispose();
      wireframeMat.dispose();
      innerNodeGeo.dispose();
      innerNodeMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [hasWebGL]);

  return (
    <div className="hero-scene-container">
      {hasWebGL ? (
        <div ref={mountRef} className="threejs-canvas-wrapper" aria-hidden="true" />
      ) : (
        /* Accessible Fallback when WebGL is unavailable */
        <div className="hero-3d-fallback" aria-hidden="true">
          <div className="fallback-sculpture">
            <div className="fallback-ring fallback-ring-outer" />
            <div className="fallback-ring fallback-ring-inner" />
            <div className="fallback-core" />
            <div className="fallback-particles">
              <span className="fallback-dot d1" />
              <span className="fallback-dot d2" />
              <span className="fallback-dot d3" />
            </div>
          </div>
          <span className="fallback-caption font-mono">{fallbackNotice}</span>
        </div>
      )}
    </div>
  );
}

export default HeroScene;

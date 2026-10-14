import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './HeroScene.css';

function checkWebGLSupport() {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch {
    return false;
  }
}

/**
 * HeroScene / ScrollJourneyScene
 * An authorial, scroll-driven 3D continuous narrative experience:
 * 
 * - Stage 1 (Hero): Kinetic Architectural Core (Understanding. Building. Evolving.)
 * - Stage 2 (About): Constellation of the 7 DeMolay Cardinal Virtues (Honor, Duty, Brotherhood)
 * - Stage 3 (Education & Tech): Gyroscopic Matrix of Engineering & Systems Architecture
 * - Stage 4 (Projects): Topological Regional Network (Expandindo Horizontes & 1ª Oficialaria MG)
 * - Stage 5 (Contact): Chivalric Leadership Seal & Heraldic Octahedron
 */
export function HeroScene({ currentStageText }) {
  const mountRef = useRef(null);
  const [hasWebGL] = useState(() => checkWebGLSupport());

  useEffect(() => {
    if (!hasWebGL) return;

    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

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

    // 2. Lighting System with DeMolay Chivalric Palette (Gold, Purple, Volt, Cyan)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const goldLight = new THREE.DirectionalLight(0xf5b700, 2.5); // Chivalric Gold
    goldLight.position.set(5, 5, 4);
    scene.add(goldLight);

    const purpleLight = new THREE.DirectionalLight(0x8b25cf, 2.2); // Royal Purple
    purpleLight.position.set(-6, -4, 3);
    scene.add(purpleLight);

    const voltLight = new THREE.DirectionalLight(0xd2f800, 1.8); // Cyber Volt
    voltLight.position.set(0, 6, -3);
    scene.add(voltLight);

    const pointLight = new THREE.PointLight(0xffd700, 2.0, 12);
    pointLight.position.set(0, 0, 2);
    scene.add(pointLight);

    // 3. Central Sculpture Root Group
    const rootSculpture = new THREE.Group();
    scene.add(rootSculpture);

    // Initial position for desktop: to the right side of the Hero
    rootSculpture.position.set(isMobile ? 0 : 2.0, isMobile ? -0.8 : 0, 0);

    // === Layer 1: Core Monolith (Understanding) ===
    const coreGeo = new THREE.IcosahedronGeometry(1.25, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x090b10,
      roughness: 0.2,
      metalness: 0.92,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    rootSculpture.add(coreMesh);

    // Core Wireframe with Cyber Volt accents
    const wireframeGeo = new THREE.IcosahedronGeometry(1.27, 0);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0xd2f800,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    rootSculpture.add(wireframeMesh);

    // Inner Glowing Octahedral Node (Shifts to Amber/Gold in Stage 2)
    const innerNodeGeo = new THREE.OctahedronGeometry(0.55, 0);
    const innerNodeMat = new THREE.MeshStandardMaterial({
      color: 0xf5b700,
      emissive: 0xf5b700,
      emissiveIntensity: 0.8,
      roughness: 0.1,
    });
    const innerNode = new THREE.Mesh(innerNodeGeo, innerNodeMat);
    rootSculpture.add(innerNode);

    // === Layer 2: Dual Orbital Precision Rings (Building) ===
    const ring1Geo = new THREE.TorusGeometry(2.15, 0.035, 16, 64);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xf5b700,
      metalness: 0.9,
      roughness: 0.18,
      emissive: 0xf5b700,
      emissiveIntensity: 0.2,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    rootSculpture.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.5, 0.025, 16, 64);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x8b25cf,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x8b25cf,
      emissiveIntensity: 0.25,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    rootSculpture.add(ring2);

    const horizonRingGeo = new THREE.TorusGeometry(2.9, 0.015, 8, 64);
    const horizonRingMat = new THREE.MeshBasicMaterial({
      color: 0xd2f800,
      transparent: true,
      opacity: 0.35,
    });
    const horizonRing = new THREE.Mesh(horizonRingGeo, horizonRingMat);
    horizonRing.rotation.z = Math.PI / 2;
    rootSculpture.add(horizonRing);

    // === Layer 3: The 7 DeMolay Precepts Constellation (Virtutes) ===
    // 7 vertices revolving in sacred heptagonal harmony
    const preceptGroup = new THREE.Group();
    rootSculpture.add(preceptGroup);

    const preceptNodeGeo = new THREE.OctahedronGeometry(0.18, 0);
    const preceptNodeMat = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      emissive: 0xf5b700,
      emissiveIntensity: 1.0,
      roughness: 0.1,
    });

    const preceptNodes = [];
    const linePositions = new Float32Array(7 * 2 * 3); // 7 lines from center (0,0,0) to node
    const preceptBaseRadius = 2.4;

    for (let i = 0; i < 7; i++) {
      const angle = (i / 7) * Math.PI * 2;
      const x = Math.cos(angle) * preceptBaseRadius;
      const y = Math.sin(angle) * preceptBaseRadius;
      const z = (i % 2 === 0 ? 0.35 : -0.35);

      const nodeMesh = new THREE.Mesh(preceptNodeGeo, preceptNodeMat);
      nodeMesh.position.set(x, y, z);
      preceptGroup.add(nodeMesh);
      preceptNodes.push({ mesh: nodeMesh, angle, initialZ: z });
    }

    // Rays connecting core to 7 Precept nodes
    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const linesMat = new THREE.LineBasicMaterial({
      color: 0xf5b700,
      transparent: true,
      opacity: 0.45,
    });
    const raysMesh = new THREE.LineSegments(linesGeo, linesMat);
    preceptGroup.add(raysMesh);

    // === Layer 4: Regional Topological Network Nodes (Expandindo Horizontes) ===
    const networkGroup = new THREE.Group();
    rootSculpture.add(networkGroup);

    const chapterNodeGeo = new THREE.TetrahedronGeometry(0.12, 0);
    const chapterNodeMat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x00e5ff,
      emissiveIntensity: 0.8,
    });
    const networkNodes = [];
    const networkCount = 6;
    for (let k = 0; k < networkCount; k++) {
      const angle = (k / networkCount) * Math.PI * 2 + 0.3;
      const r = 3.3 + (k % 3) * 0.4;
      const nx = Math.cos(angle) * r;
      const ny = Math.sin(angle) * r;
      const nz = (k % 2 === 0 ? -0.5 : 0.5);

      const chMesh = new THREE.Mesh(chapterNodeGeo, chapterNodeMat);
      chMesh.position.set(nx, ny, nz);
      networkGroup.add(chMesh);
      networkNodes.push({ mesh: chMesh, angle, r, nz });
    }

    // Chapter connection lines
    const netLinesGeo = new THREE.BufferGeometry();
    const netLinesPos = new Float32Array(networkCount * 2 * 3);
    netLinesGeo.setAttribute('position', new THREE.BufferAttribute(netLinesPos, 3));
    const netLinesMat = new THREE.LineBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.35,
    });
    const netLinesMesh = new THREE.LineSegments(netLinesGeo, netLinesMat);
    networkGroup.add(netLinesMesh);

    // === Layer 5: Ambient Floating Telemetry Particles (Evolving) ===
    const particleCount = isMobile ? 40 : 85;
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.8 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xf5b700,
      size: isMobile ? 0.05 : 0.07,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    rootSculpture.add(particleSystem);

    // 4. Scroll Tracking & Smooth Camera Choreography
    let scrollProgress = 0;
    let targetScrollProgress = 0;

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        targetScrollProgress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // 5. Pointer Interaction (smooth parallax tilt)
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onPointerMove = (e) => {
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      pointer.targetX = (clientX / window.innerWidth) * 2 - 1;
      pointer.targetY = -(clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });

    // 6. Resize Handling
    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);

    // 7. Animation Loop with Stage-by-Stage Scroll Transformation
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth interpolations
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.08;
      pointer.x += (pointer.targetX - pointer.x) * 0.05;
      pointer.y += (pointer.targetY - pointer.y) * 0.05;

      const sp = scrollProgress; // 0.0 to 1.0

      // Compute choreography transformations per scroll stage
      let targetX = 2.0;
      let targetY = 0;
      let targetZ = 0;
      let targetRotY = elapsedTime * 0.25;
      let targetRotX = Math.sin(elapsedTime * 0.2) * 0.15;
      let preceptRadius = 2.4;
      let networkOpacity = 0.1;
      let goldEmphasis = 0.3;

      if (isMobile) {
        // Mobile layout: centered, slightly lower to avoid covering titles
        targetX = 0;
        targetY = -0.6;
      } else {
        if (sp < 0.18) {
          // Stage 1: Hero (Right side)
          targetX = 2.1;
          targetY = -0.1;
          targetZ = 0;
          preceptRadius = 2.2;
          goldEmphasis = 0.3;
        } else if (sp < 0.42) {
          // Stage 2: About / 7 Precepts (Expanding constellation, centered-right)
          const localProgress = (sp - 0.18) / (0.42 - 0.18);
          targetX = THREE.MathUtils.lerp(2.1, 1.4, localProgress);
          targetY = THREE.MathUtils.lerp(-0.1, -0.3, localProgress);
          targetZ = THREE.MathUtils.lerp(0, 0.4, localProgress);
          preceptRadius = THREE.MathUtils.lerp(2.2, 3.2, localProgress);
          goldEmphasis = THREE.MathUtils.lerp(0.3, 1.2, localProgress);
          targetRotY = elapsedTime * 0.35 + localProgress * Math.PI;
        } else if (sp < 0.62) {
          // Stage 3: Education & Tech (Lattice shifts to left to frame right content)
          const localProgress = (sp - 0.42) / (0.62 - 0.42);
          targetX = THREE.MathUtils.lerp(1.4, -1.8, localProgress);
          targetY = THREE.MathUtils.lerp(-0.3, 0.2, localProgress);
          targetZ = THREE.MathUtils.lerp(0.4, -0.4, localProgress);
          preceptRadius = THREE.MathUtils.lerp(3.2, 2.5, localProgress);
          goldEmphasis = 0.6;
        } else if (sp < 0.84) {
          // Stage 4: Projects / Regional Network Expandindo Horizontes
          const localProgress = (sp - 0.62) / (0.84 - 0.62);
          targetX = THREE.MathUtils.lerp(-1.8, 1.8, localProgress);
          targetY = THREE.MathUtils.lerp(0.2, -0.4, localProgress);
          targetZ = THREE.MathUtils.lerp(-0.4, 0.2, localProgress);
          networkOpacity = THREE.MathUtils.lerp(0.1, 0.85, localProgress);
          goldEmphasis = 0.8;
        } else {
          // Stage 5: Contact / Heraldic Leadership Seal
          const localProgress = (sp - 0.84) / 0.16;
          targetX = THREE.MathUtils.lerp(1.8, 0.0, localProgress);
          targetY = THREE.MathUtils.lerp(-0.4, 0.4, localProgress);
          targetZ = THREE.MathUtils.lerp(0.2, -1.0, localProgress);
          goldEmphasis = 1.0;
        }
      }

      // Apply root position with tilt
      rootSculpture.position.x = targetX + pointer.x * 0.3;
      rootSculpture.position.y = targetY + pointer.y * 0.25;
      rootSculpture.position.z = targetZ;

      if (!prefersReducedMotion) {
        rootSculpture.rotation.y = targetRotY + pointer.x * 0.2;
        rootSculpture.rotation.x = targetRotX + pointer.y * 0.2;

        // Animate Rings
        ring1.rotation.z = elapsedTime * 0.35 + sp * 2;
        ring2.rotation.y = elapsedTime * -0.28 - sp * 1.5;
        horizonRing.rotation.x = elapsedTime * 0.18;

        // Core Pulse
        const corePulse = 1 + Math.sin(elapsedTime * 2.2) * 0.06;
        innerNode.scale.set(corePulse, corePulse, corePulse);
        innerNode.rotation.y = elapsedTime * 0.9;
        innerNodeMat.emissiveIntensity = 0.6 + Math.sin(elapsedTime * 3) * 0.3;

        // Update 7 Precepts Constellation Nodes and Connecting Rays
        const positionsAttr = linesGeo.attributes.position;
        const posArray = positionsAttr.array;

        preceptNodes.forEach((node, idx) => {
          const currentAngle = node.angle + elapsedTime * 0.15;
          const nx = Math.cos(currentAngle) * preceptRadius;
          const ny = Math.sin(currentAngle) * preceptRadius;
          const nz = node.initialZ + Math.sin(elapsedTime * 1.5 + idx) * 0.25;

          node.mesh.position.set(nx, ny, nz);
          node.mesh.rotation.y = elapsedTime * 0.8 + idx;
          node.mesh.rotation.z = elapsedTime * 0.5;

          // Ray: (0,0,0) to (nx, ny, nz)
          const baseIndex = idx * 6;
          posArray[baseIndex] = 0;
          posArray[baseIndex + 1] = 0;
          posArray[baseIndex + 2] = 0;
          posArray[baseIndex + 3] = nx;
          posArray[baseIndex + 4] = ny;
          posArray[baseIndex + 5] = nz;
        });
        positionsAttr.needsUpdate = true;

        // Update Regional Network Nodes
        const netArray = netLinesGeo.attributes.position.array;
        networkNodes.forEach((ch, cIdx) => {
          const chAngle = ch.angle - elapsedTime * 0.1;
          const cnx = Math.cos(chAngle) * ch.r;
          const cny = Math.sin(chAngle) * ch.r;
          const cnz = ch.nz + Math.cos(elapsedTime + cIdx) * 0.3;

          ch.mesh.position.set(cnx, cny, cnz);

          const baseNetIndex = cIdx * 6;
          netArray[baseNetIndex] = 0;
          netArray[baseNetIndex + 1] = 0;
          netArray[baseNetIndex + 2] = 0;
          netArray[baseNetIndex + 3] = cnx;
          netArray[baseNetIndex + 4] = cny;
          netArray[baseNetIndex + 5] = cnz;
        });
        netLinesGeo.attributes.position.needsUpdate = true;
        netLinesMat.opacity = networkOpacity;

        // Light color modulation based on DeMolay gold emphasis
        goldLight.intensity = 2.0 + goldEmphasis * 1.2;
        pointLight.intensity = 1.5 + goldEmphasis * 1.5;

        // Ambient particles rotation
        particleSystem.rotation.y = -elapsedTime * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 8. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('resize', onResize);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

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
      horizonRingGeo.dispose();
      horizonRingMat.dispose();
      preceptNodeGeo.dispose();
      preceptNodeMat.dispose();
      linesGeo.dispose();
      linesMat.dispose();
      chapterNodeGeo.dispose();
      chapterNodeMat.dispose();
      netLinesGeo.dispose();
      netLinesMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [hasWebGL]);

  return (
    <div className="scroll-3d-fixed-container" aria-hidden="true">
      {hasWebGL ? (
        <div ref={mountRef} className="scroll-3d-canvas" />
      ) : (
        <div className="scroll-3d-fallback">
          <div className="fallback-sculpture">
            <div className="fallback-ring fallback-ring-outer" />
            <div className="fallback-ring fallback-ring-inner" />
            <div className="fallback-core" />
          </div>
        </div>
      )}

      {/* Real-time 3D Telemetry Stage Indicator */}
      <div className="scroll-stage-hud font-mono desktop-only">
        <span className="hud-pulse-dot" />
        <span className="hud-stage-label">
          {currentStageText || "3D JOURNEY // ONLINE"}
        </span>
      </div>
    </div>
  );
}

export default HeroScene;

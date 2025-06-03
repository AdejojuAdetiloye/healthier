// DoctorPatientScene.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const DoctorPatientScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // ✅ Wait until the DOM is mounted
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // ✅ Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    currentMount.appendChild(renderer.domElement);

    // ✅ Scene and Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87cefa); // Light blue

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 2, 5);

    // ✅ Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // ✅ Doctor
    const doctorBody = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 1.5, 0.3),
      new THREE.MeshStandardMaterial({ color: 0x0077be })
    );
    doctorBody.position.set(-1, 0.75, 0);
    scene.add(doctorBody);

    const doctorHead = new THREE.Mesh(
      new THREE.SphereGeometry(0.25, 32, 32),
      new THREE.MeshStandardMaterial({ color: 0xffcc99 })
    );
    doctorHead.position.set(-1, 1.75, 0);
    scene.add(doctorHead);

    const doctorArm = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 0.6, 0.2),
      new THREE.MeshStandardMaterial({ color: 0x0077be })
    );
    doctorArm.position.set(-0.65, 1.2, 0);
    doctorArm.rotation.z = -0.5;
    scene.add(doctorArm);

    // ✅ Patient
    const patientBody = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 1.5, 0.3),
      new THREE.MeshStandardMaterial({ color: 0x3cb371 })
    );
    patientBody.position.set(1, 0.75, 0);
    scene.add(patientBody);

    const patientHead = new THREE.Mesh(
      new THREE.SphereGeometry(0.25, 32, 32),
      new THREE.MeshStandardMaterial({ color: 0xffcc99 })
    );
    patientHead.position.set(1, 1.75, 0);
    scene.add(patientHead);

    // ✅ Floor
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 20),
      new THREE.MeshStandardMaterial({ color: 0xf0f0f0 })
    );
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    // ✅ Animation
    let armDirection = 1;
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      doctorArm.rotation.z += 0.01 * armDirection;
      if (doctorArm.rotation.z > -0.3 || doctorArm.rotation.z < -1.2) {
        armDirection *= -1;
      }
      renderer.render(scene, camera);
    };

    animate();

    // ✅ Resize Handling
    const handleResize = () => {
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // ✅ Clean-up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      currentMount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    />
  );
};

export default DoctorPatientScene;

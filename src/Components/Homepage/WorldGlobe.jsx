import React, { useRef, useEffect, useState, useMemo } from "react";
import Globe from "react-globe.gl";

const WorldGlobe = () => {
  const globeRef = useRef(null);

  // Height same as your old code
  const getSize = () => ({
    width: window.innerWidth < 768
      ? window.innerWidth
      : window.innerWidth * 0.9,

    height: window.innerWidth < 768 ? 750 : 1200,
  });

  const [size, setSize] = useState(getSize());
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Resize optimized
  useEffect(() => {
    let timeout;

    const handleResize = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
        setSize(getSize());
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Globe Controls
  useEffect(() => {
    if (!globeRef.current) return;

    const controls = globeRef.current.controls();

    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.8; // smooth speed
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enableZoom = false;
    controls.enablePan = false;

    globeRef.current.pointOfView({
      lat: isMobile ? 10 : 15,
      lng: 20,
      altitude: isMobile ? 3 : 1.8,
    });
  }, [isMobile]);

  // Memo data (lag kam hoga)
  const cities = useMemo(
    () => [
      { lat: 37.0902, lng: -95.7129, label: "USA" },
      { lat: 56.1304, lng: -106.3468, label: "CANADA" },
      { lat: 55.3781, lng: -3.436, label: "UK" },
      { lat: -25.2744, lng: 133.7751, label: "AUSTRALIA" },
    ],
    []
  );

  const arcs = useMemo(
    () => [
      {
        startLat: 37.0902,
        startLng: -95.7129,
        endLat: 55.3781,
        endLng: -3.436,
      },
      {
        startLat: 56.1304,
        startLng: -106.3468,
        endLat: -25.2744,
        endLng: 133.7751,
      },
      {
        startLat: 28.6139,
        startLng: 77.209,
        endLat: 37.0902,
        endLng: -95.7129,
      },
      {
        startLat: 28.6139,
        startLng: 77.209,
        endLat: 55.3781,
        endLng: -3.436,
      },
    ],
    []
  );

  return (
    <div className="w-full overflow-hidden">
      <Globe
        ref={globeRef}
        width={size.width}
        height={size.height}
        backgroundColor="rgba(0,0,0,0)"
        animateIn={false}

        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"

        showAtmosphere={true}
        atmosphereColor="#202940"
        atmosphereAltitude={0.15}

        // Arcs optimized
        arcsData={arcs}
        arcColor={() => "#60a5fa"}
        arcStroke={0.5}
        arcAltitude={0.22}
        arcDashLength={0.35}
        arcDashGap={0.18}
        arcDashAnimateTime={4000}

        // Points
        pointsData={cities}
        pointLat="lat"
        pointLng="lng"
        pointColor={() => "#60a5fa"}
        pointRadius={0.28}

        // Labels
        labelsData={cities}
        labelLat="lat"
        labelLng="lng"
        labelText="label"
        labelSize={1.2}
        labelDotRadius={0.25}
        labelColor={() => "#ffffff"}
      />
    </div>
  );
};

export default WorldGlobe;
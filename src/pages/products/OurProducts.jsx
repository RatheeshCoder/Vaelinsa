import React, { useState, useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";


import data from "./data";
import './style.css'
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Scrollbar } from "swiper/modules";

const ProductMain = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const canvasRefs = useRef(Array.from({ length: 6 }, () => React.createRef()));
  const scale = 350;
  const models = useRef([]);

  const renderers = useMemo(
    () =>
      Array.from({ length: 6 }, () => {
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x000000, 0);
        return renderer;
      }),
    []
  );

  useEffect(() => {
    const modelPaths = [
      "/model3.glb",
      "/model7.glb",
      "/model5.glb",
      "/model2.glb",
      "/model1.glb",
      "/model6.glb",
    ];
    const animationFrameIds = [];

    modelPaths.forEach((modelPath, index) => {
      const renderer = renderers[index];
      const canvasRef = canvasRefs.current[index];

      if (canvasRef.current) {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          30,
          canvasRef.current.clientWidth / canvasRef.current.clientHeight,
          1,
          5000
        );
        camera.position.set(0, 0, 1000);

        const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 2);
        hemiLight.color.setHSL(0.6, 1, 0.6);
        hemiLight.groundColor.setHSL(0.095, 1, 0.75);
        hemiLight.position.set(0, 50, 0);
        scene.add(hemiLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 3);
        dirLight.color.setHSL(0.1, 1, 0.95);
        dirLight.position.set(-1, 1.75, 1);
        dirLight.position.multiplyScalar(30);
        scene.add(dirLight);
        dirLight.castShadow = true;

        const loader = new GLTFLoader();
        loader.load(modelPath, (gltf) => {
          const model = gltf.scene.children[0];
          model.castShadow = true;
          model.receiveShadow = true;
          model.scale.set(scale, scale, scale);

          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          model.position.set(-center.x, -center.y, -center.z);

          scene.add(model);
          models.current[index] = model;

          const animate = () => {
            renderer.render(scene, camera);
            animationFrameIds[index] = requestAnimationFrame(animate);
          };

          const onWindowResize = () => {
            camera.aspect =
              canvasRef.current.clientWidth / canvasRef.current.clientHeight;
            camera.updateProjectionMatrix();

            const cameraAspectRatio =
              renderer.domElement.clientWidth /
              renderer.domElement.clientHeight;
            const aspectRatio = camera.aspect;
            if (aspectRatio > cameraAspectRatio) {
              camera.left = (-cameraAspectRatio * camera.viewportHeight) / 2;
              camera.right = (cameraAspectRatio * camera.viewportHeight) / 2;
              camera.top = camera.viewportHeight / 2;
              camera.bottom = -camera.viewportHeight / 2;
            } else {
              camera.top = camera.viewportHeight / (2 * cameraAspectRatio);
              camera.bottom = -camera.viewportHeight / (2 * cameraAspectRatio);
              camera.left = -camera.viewportWidth / 2;
              camera.right = camera.viewportWidth / 2;
            }

            camera.updateProjectionMatrix();

            renderer.setSize(
              canvasRef.current.clientWidth,
              canvasRef.current.clientHeight
            );
          };

          window.addEventListener("resize", onWindowResize);
          renderer.setSize(
            canvasRef.current.clientWidth,
            canvasRef.current.clientHeight
          );
          canvasRef.current.appendChild(renderer.domElement);
          animate();

          return () => {
            window.removeEventListener("resize", onWindowResize);
            scene.remove(model);
            canvasRef.current.removeChild(renderer.domElement);
            renderer.dispose();
            cancelAnimationFrame(animationFrameIds[index]);
          };
        });
      }
    });
  }, [renderers]);

  const handleSlideChange = (swiper) => {
    const newActiveIndex = swiper.activeIndex;
    setActiveIndex(newActiveIndex);

    const prevIndex = swiper.previousIndex;

    if (prevIndex !== undefined && models.current[prevIndex]) {
      const prevModel = models.current[prevIndex];
      gsap.to(prevModel.rotation, {
        duration: 2.5,
        z: prevModel.rotation.x - Math.PI / -2,
      });
    }

    if (models.current[newActiveIndex]) {
      const activeModel = models.current[newActiveIndex];
      gsap.to(activeModel.rotation, {
        duration: 2.5,
        z: activeModel.rotation.y + Math.PI * 2,
      });
    }
  };

  return (

    <div className="main">
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      scrollbar={{
        hide: true,
      }}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      modules={[Pagination, Navigation, Scrollbar]}
      className="mySwiper"
      onSlideChange={handleSlideChange}
      activeIndex={activeIndex} // Pass activeIndex as a prop to Swiper
    >
      {data.map((item, index) => (
        <SwiperSlide className="Model_all" key={index}>
          <div
            ref={canvasRefs.current[index]}
            className={`grid-item ${
              activeIndex === index ? "active" : "inactive"
            }`}
          >
            {activeIndex === index && (
              <>
                <div className="content">
                  <h1>{item.title}</h1>
                  <div className="para">
                    <h2>{item.heading}</h2>
                    <p>{item.content}</p>
                  </div>
                </div>

                <div className="left">
                  <p>{item.left}</p>
                </div>
              </>
            )}
          </div>
        </SwiperSlide>
      ))}

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </Swiper>
    </div>
  );
};

export default ProductMain;

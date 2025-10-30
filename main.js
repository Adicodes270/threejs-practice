// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);

// // MOVE THE CAMERA BACK
// camera.position.z = 3;

// // Load textures with error handling
// // let loader = new THREE.TextureLoader();
// // let color = loader.load("./textures/color.jpg")

// // let roughness = loader.load("./textures/roughness.jpg")

// // let normal = loader.load("./textures/normal.png");


// const rgbeLoader = new THREE.RGBELoader();
// rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/zwartkops_pit_1k.hdr', (texture) => {
//   texture.mapping = THREE.EquirectangularReflectionMapping;
//   scene.environment = texture;

// });

// const loader = new THREE.GLTFLoader();

// loader.load( 'car_scene.glb', function ( gltf ) {

//   scene.add( gltf.scene );

// }, undefined, function ( error ) {

//   console.error( error );

// } );

// // const light = new THREE.AmbientLight(0xffffff, 1);
// // scene.add(light);





// // const geometry = new THREE.BoxGeometry(3, 1.8, 2);

// // const material = new THREE.MeshStandardMaterial({
// //   color: "red",
// //   metalness: 0.6,
// //   roughness: 0.2
// // });


// // const cube = new THREE.Mesh(geometry, material);
// // scene.add(cube);



// const canvas = document.querySelector("#draw");
// const renderer = new THREE.WebGLRenderer({ canvas });
// renderer.setSize(window.innerWidth, window.innerHeight);

// renderer.outputEncoding = THREE.sRGBEncoding;
// renderer.toneMapping = THREE.ACESFilmicToneMapping;


// // const rgbeLoader = new THREE.RGBELoader();
// // rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/zwartkops_pit_1k.hdr', (texture) => {
// //   texture.mapping = THREE.EquirectangularReflectionMapping;
// //   scene.environment = texture;

// // });



// // REDUCED LIGHT INTENSITIES
// const highIntensityLight = new THREE.DirectionalLight(0xffffff, 0.5);
// // highIntensityLight.position.set(10, 20, 15);
// // scene.add(highIntensityLight);

// // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
// // directionalLight.position.set(5, 10, 7.5);
// // scene.add(directionalLight);

// // const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
// // scene.add(ambientLight);

// // const pointLight = new THREE.PointLight(0xffffff, 0.5, 100);
// // pointLight.position.set(0, 5, 0);
// // scene.add(pointLight);

// // // Light helpers
// // const highIntensityLightHelper = new THREE.DirectionalLightHelper(highIntensityLight, 5);
// // scene.add(highIntensityLightHelper);

// // const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
// // scene.add(directionalLightHelper);

// // const pointLightHelper = new THREE.PointLightHelper(pointLight, 5);
// // scene.add(pointLightHelper);



// window.addEventListener('resize', () => {
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
// });

// const clock = new THREE.Clock();

// const controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.enableZoom = true;
// controls.dampingFactor = 0.25;

// function animate() {
//     requestAnimationFrame(animate);

//     // Get delta ONCE per frame
//     const delta = clock.getDelta();

//     // Apply rotation using the same delta (optional - uncomment if you want rotation)
//     // cube.rotation.x += delta;
//     // cube.rotation.y += delta;
    
//     controls.update();

//     renderer.render(scene, camera);
// }

// // GUI Setup
// // const gui = new lil.GUI();

// // Mesh folder
// // const meshFolder = gui.addFolder('Mesh');
// // meshFolder.add(cube.rotation, 'x', 0, Math.PI * 2).name('Rotation X');
// // meshFolder.add(cube.rotation, 'y', 0, Math.PI * 2).name('Rotation Y');
// // meshFolder.add(cube.rotation, 'z', 0, Math.PI * 2).name('Rotation Z');
// // meshFolder.add(cube.scale, 'x', 0.1, 3).name('Scale X');
// // meshFolder.add(cube.scale, 'y', 0.1, 3).name('Scale Y');
// // meshFolder.add(cube.scale, 'z', 0.1, 3).name('Scale Z');
// // meshFolder.add(cube.position, 'x', -5, 5).name('Position X');
// // meshFolder.add(cube.position, 'y', -5, 5).name('Position Y');
// // meshFolder.add(cube.position, 'z', -5, 5).name('Position Z');
// // meshFolder.close();

// // // Material folder
// // const materialFolder = gui.addFolder('Material');
// // materialFolder.add(material, 'roughness', 0, 1).name('Roughness');
// // materialFolder.add(material, 'metalness', 0, 1).name('Metalness');
// // materialFolder.add(material, 'wireframe').name('Wireframe');
// // materialFolder.close();

// // // Light folder
// // // Ambient Light folder
// // const ambientFolder = gui.addFolder('Ambient Light');
// // ambientFolder.add(ambientLight, 'intensity', 0, 2).name('Intensity');
// // ambientFolder.close();

// // // Directional Light folder
// // const directionalFolder = gui.addFolder('Directional Light');
// // directionalFolder.add(directionalLight, 'intensity', 0, 2).name('Intensity');
// // directionalFolder.add(directionalLight.position, 'x', -20, 20).name('Position X');
// // directionalFolder.add(directionalLight.position, 'y', -20, 20).name('Position Y');
// // directionalFolder.add(directionalLight.position, 'z', -20, 20).name('Position Z');
// // directionalFolder.close();

// // // High Intensity Light folder
// // const highIntensityFolder = gui.addFolder('High Intensity Light');
// // highIntensityFolder.add(highIntensityLight, 'intensity', 0, 2).name('Intensity');
// // highIntensityFolder.add(highIntensityLight.position, 'x', -20, 20).name('Position X');
// // highIntensityFolder.add(highIntensityLight.position, 'y', -20, 20).name('Position Y');
// // highIntensityFolder.add(highIntensityLight.position, 'z', -20, 20).name('Position Z');
// // highIntensityFolder.close();

// // // Point Light folder
// // const pointFolder = gui.addFolder('Point Light');
// // pointFolder.add(pointLight, 'intensity', 0, 2).name('Intensity');
// // pointFolder.add(pointLight.position, 'x', -20, 20).name('Position X');
// // pointFolder.add(pointLight.position, 'y', -20, 20).name('Position Y');
// // pointFolder.add(pointLight.position, 'z', -20, 20).name('Position Z');
// // pointFolder.close();

// animate();


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let mouseX = window.innerWidth ;
let mouseY = window.innerHeight;

let object;
let controls;

const loader = new THREE.GLTFLoader();

loader.load(
  'car_scene.glb',
  function (gltf) {
    object = gltf.scene;
    scene.add(object);
    console.log('Car loaded successfully');
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    console.error(error);
  }
);

const canvas = document.querySelector("#draw");
const renderer = new THREE.WebGLRenderer({ canvas: canvas }); 
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.z = 400;

const highIntensityLight = new THREE.DirectionalLight(0xffffff, 2);
highIntensityLight.position.set(-6.5, 20, -5.08);
scene.add(highIntensityLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(0.64, 1.8, 10.16);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 2, 100);
pointLight.position.set(20, 20, 0);
scene.add(pointLight);

controls = new THREE.OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  
  if (controls) {
    controls.update();
  }
  
  renderer.render(scene, camera);
}

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

document.onmousemove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

animate();

// ————————————————————————————————
// GUI Setup (FIXED – only lights + car)
// ————————————————————————————————
const gui = new lil.GUI();

// ——— LIGHT FOLDERS (working exactly like your commented code) ———
const ambientFolder = gui.addFolder('Ambient Light');
ambientFolder.add(ambientLight, 'intensity', 0, 2).name('Intensity');
ambientFolder.close();

const directionalFolder = gui.addFolder('Directional Light');
directionalFolder.add(directionalLight, 'intensity', 0, 2).name('Intensity');
directionalFolder.add(directionalLight.position, 'x', -20, 20).name('Position X');
directionalFolder.add(directionalLight.position, 'y', -20, 20).name('Position Y');
directionalFolder.add(directionalLight.position, 'z', -20, 20).name('Position Z');
directionalFolder.close();

const highIntensityFolder = gui.addFolder('High Intensity Light');
highIntensityFolder.add(highIntensityLight, 'intensity', 0, 2).name('Intensity');
highIntensityFolder.add(highIntensityLight.position, 'x', -20, 20).name('Position X');
highIntensityFolder.add(highIntensityLight.position, 'y', -20, 20).name('Position Y');
highIntensityFolder.add(highIntensityLight.position, 'z', -20, 20).name('Position Z');
highIntensityFolder.close();

const pointFolder = gui.addFolder('Point Light');
pointFolder.add(pointLight, 'intensity', 0, 2).name('Intensity');
pointFolder.add(pointLight.position, 'x', -20, 20).name('Position X');
pointFolder.add(pointLight.position, 'y', -20, 20).name('Position Y');
pointFolder.add(pointLight.position, 'z', -20, 20).name('Position Z');
pointFolder.close();
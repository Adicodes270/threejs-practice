const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);

// MOVE THE CAMERA BACK
camera.position.z = 3;

// Load textures with error handling
let loader = new THREE.TextureLoader();
let color = loader.load("./textures/color.jpg")

let roughness = loader.load("./textures/roughness.jpg")

let normal = loader.load("./textures/normal.png");





const geometry = new THREE.BoxGeometry(3, 1.8, 2);

const material = new THREE.MeshStandardMaterial({ 
    map: color,
    roughnessMap: roughness,
    normalMap: normal,
    roughness: 0.8,
    metalness: 0.0
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);



const canvas = document.querySelector("#draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// REDUCED LIGHT INTENSITIES
const highIntensityLight = new THREE.DirectionalLight(0xffffff, 0.5);
highIntensityLight.position.set(10, 20, 15);
scene.add(highIntensityLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 0.5, 100);
pointLight.position.set(0, 5, 0);
scene.add(pointLight);

// Light helpers
const highIntensityLightHelper = new THREE.DirectionalLightHelper(highIntensityLight, 5);
scene.add(highIntensityLightHelper);

const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
scene.add(directionalLightHelper);

const pointLightHelper = new THREE.PointLightHelper(pointLight, 5);
scene.add(pointLightHelper);



window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

const clock = new THREE.Clock();

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = true;
controls.dampingFactor = 0.25;

function animate() {
    requestAnimationFrame(animate);

    // Get delta ONCE per frame
    const delta = clock.getDelta();

    // Apply rotation using the same delta (optional - uncomment if you want rotation)
    // cube.rotation.x += delta;
    // cube.rotation.y += delta;
    
    controls.update();

    renderer.render(scene, camera);
}

// GUI Setup
const gui = new lil.GUI();

// Mesh folder
const meshFolder = gui.addFolder('Mesh');
meshFolder.add(cube.rotation, 'x', 0, Math.PI * 2).name('Rotation X');
meshFolder.add(cube.rotation, 'y', 0, Math.PI * 2).name('Rotation Y');
meshFolder.add(cube.rotation, 'z', 0, Math.PI * 2).name('Rotation Z');
meshFolder.add(cube.scale, 'x', 0.1, 3).name('Scale X');
meshFolder.add(cube.scale, 'y', 0.1, 3).name('Scale Y');
meshFolder.add(cube.scale, 'z', 0.1, 3).name('Scale Z');
meshFolder.add(cube.position, 'x', -5, 5).name('Position X');
meshFolder.add(cube.position, 'y', -5, 5).name('Position Y');
meshFolder.add(cube.position, 'z', -5, 5).name('Position Z');
meshFolder.open();

// Material folder
const materialFolder = gui.addFolder('Material');
materialFolder.add(material, 'roughness', 0, 1).name('Roughness');
materialFolder.add(material, 'metalness', 0, 1).name('Metalness');
materialFolder.add(material, 'wireframe').name('Wireframe');
materialFolder.open();

// Light folder
const lightFolder = gui.addFolder('Lights');
lightFolder.add(ambientLight, 'intensity', 0, 2).name('Ambient');
lightFolder.add(directionalLight, 'intensity', 0, 2).name('Directional');
lightFolder.add(highIntensityLight, 'intensity', 0, 2).name('High Intensity');
lightFolder.add(pointLight, 'intensity', 0, 2).name('Point Light');
lightFolder.open();

animate();
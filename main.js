const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);

// MOVE THE CAMERA BACK
camera.position.z = 5;

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "blue", wireframe: "true" });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const canvas = document.querySelector("#draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener('resize', ()=> {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})
const clock = new THREE.Clock();

const controls = new OrbitControls( camera, renderer );


function animate() {
    requestAnimationFrame(animate);

    // Get delta ONCE per frame
    // const delta = clock.getDelta();

    // // Apply rotation using the same delta
    // cube.rotation.x += delta * 2;
    // cube.rotation.y += delta * 2;
    // cube.rotation.z += delta * 2;
    controls.update();

    renderer.render(scene, camera);
}
animate();
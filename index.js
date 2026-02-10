console.log('alo bre');

const medeki = document.querySelectorAll('.medo-img');

const duration = 1500; // your animation time in ms


// function startChain(i = 0) {
//   if (!medeki[i]) return;
//   const el = medeki[i];

//   el.classList.add("start");

//   // Halfway trigger next
//   setTimeout(() => {
//     el.classList.add("animate");
//     startChain(i + 1);
//   }, duration / 2);
// }

// startChain();

// function animate(el){

// }

let count = 3000;
let count_zoom = 1500;

medeki.forEach((element, index)=>{

    // setTimeout(() => {
    //     console.log("Delayed for 1 second.", element, index);
    //     element.classList.add('start');
    // }, count);
    // count += 1500;
    // console.log(count);

    setTimeout(() => {
        //element.classList.remove('start')
        element.classList.add('animate');
        console.log(element, 'done')
    }, count);
    count += 2000;
    console.log(count)
});
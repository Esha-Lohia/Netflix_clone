const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.foreach((item, i) => {
  let containersDimensions = item.getBoundingClientReact();
  let ContainerWidth = containersDimensions.width;

  nxtBtn[i].addEventListeners('click', () => {
    item.scrollLeft +=cointainerWidth;

  })

  preBtn[i].addEventListerner('click', () =>{
    item.scrollLeft +=cointainerWidth;
  })
  
})

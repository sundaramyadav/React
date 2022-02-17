function changecoloronhover(id,clss,ind)
{
  const box=document.getElementById(id).getElementsByClassName(clss)[ind];

  // 👇️ Change text color on mouseover
  box.addEventListener('mouseover', function handleMouseOver() {
    box.style.color = 'red';
  });
  
  // 👇️ Change text color back on mouseout
  box.addEventListener('mouseout', function handleMouseOut() {
    box.style.color = 'black';
  });
}

changecoloronhover("box","float-child",0);
changecoloronhover("box","float-child",1);

// const box=document.getElementById("box").getElementsByClassName("float-child")[1];
// // const box = document.getElementById("box");

// // 👇️ Change text color on mouseover
//   box.addEventListener('mouseover', function handleMouseOver() {
//      box.style.color = 'red';
//  });
  
//    // 👇️ Change text color back on mouseout
//    box.addEventListener('mouseout', function handleMouseOut() {
//     box.style.color = 'black';
//    });
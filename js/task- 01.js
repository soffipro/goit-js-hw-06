const ulRef = document.querySelector('#categories');
// console.log(ulRef);

const liRefs = ulRef.querySelectorAll('.item');
console.log('Number of categories:', liRefs.length);


liRefs.forEach(liRef => {
  liRef.firstElementChild
  console.log('Categorie: ', liRef.firstElementChild.textContent)
  
  const totalLi = liRef.lastElementChild.children.length;
  console.log('Elements :',totalLi)
});



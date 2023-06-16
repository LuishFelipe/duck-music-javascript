function handleSubmit(event) {
  event.preventDefault();

  var numberDucks = document.getElementById('ducks').value;

  var textDiv = document.getElementById('lyrics');
  for (let index = numberDucks; index > 0; index--) {
    console.log(index);
    if(index == 1){
      textDiv.textContent += index + " patinho foi passear. Além das montanhas, para brincar. A mamãe gritou quá, quá, quá, quá. Mas nenhum patinhos voltou de lá. A mamãe patinha foi procurar. Além das montanhas na beira do mar. A mamãe gritou quá, quá, quá, quá. E os " + numberDucks + " patinhos voltaram de lá ";
    } else{
      textDiv.textContent += index + " patinhos foram passear. Além das montanhas, para brincar. A mamãe gritou quá, quá, quá, quá. Mas só " + (index-1) + " patinhos volataram de lá. ";
    }
  }
}

var inputDucks = document.getElementById('input-ducks');
inputDucks.addEventListener('submit', handleSubmit);

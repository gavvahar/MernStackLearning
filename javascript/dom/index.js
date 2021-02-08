//DOM -> Document Object Modal
//BOM -> browser Object Modal


document.getElementById('block1');  //return single element

document.getElementsByClassName('block'); // return array of element

document.getElementsByTagName('div'); // return array of element


// Get input values
document.getElementById('inputid').value
document.getElementById('inputid').value = "Hello...."

function test(event) {
  console.log(event);
}

document.getElementById('clickme').addEventListener('click', function() {
  console.log("you click div");

})
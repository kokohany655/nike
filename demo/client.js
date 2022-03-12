
  ////////////////////////////////////////////////////////////////
  
  document.getElementById('generate').addEventListener('click', performanceAno)

  function performanceAno(){
    const fave = document.getElementById('fav').value
    console.log(fav)
    getAnimal('/fakeAnimal')

    .then(data =>{
      postData('/addAnimal', {animal : data.animal , fact : data.fact , fav: fave})
      updateUI()
    })
    

  }

  async function getAnimal(url){
    const res = await fetch(url);
    try{
      const newData = await res.json()
      return newData
    }catch(error){
      console.log('error', error)
    }
  }

  /////////////////////////////

  const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
             return newData
    }catch(error) {
    console.log("error", error);
    // appropriately handle the error
    }
}


async function updateUI(){
const res = await fetch('/all');
try{
  const allData = await res.json()
  console.log(allData)
  document.getElementById('animale').innerHTML = allData[0].animal
  document.getElementById('facte').innerHTML = allData[0].fact
  document.getElementById('favee').innerHTML = allData[0].fav
}catch(error){
  console.log('error', error)
}
}
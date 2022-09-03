async function fetchData() {
     try {

      let res = await fetch('https://raw.githubusercontent.com/davi38/pet-shop-site/main/src/Assets/all_data.json')
      let myData = res.json()
      return myData


     } catch (err)
     { console.log('error fetching data from Source', err) }
   }

 export { fetchData }

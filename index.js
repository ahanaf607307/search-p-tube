// input search by value seciotn starts
const loadAllDataSearch =async (searchValue = " ") => {
 const spinner =  document.getElementById("spinner")
  spinner.style.display='block'
  const response =await fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchValue}`);
  spinner.style.display='none'
  const data = await response.json()
  displayAllData(data.videos)
}


// input search by value seciotn ends
const loadAllData =async () => {

  const response =await fetch(`https://openapi.programming-hero.com/api/phero-tube/videos`);
  const data = await response.json()
  displayAllData(data.videos)
}


// display all data secion starts
const displayAllData = (videos) =>{
const spinner =  document.getElementById("spinner")
  spinner.style.display='block'

  const content = document.getElementById("content")
  content.innerHTML = ""
  setTimeout(() => {
    const spinner =  document.getElementById("spinner")
 spinner.style.display='none'

  if(videos.length == 0){
    content.innerHTML = "no content"
    return;
  }
  content.style.display = 'block'
  videos.forEach(item => {
  const content = document.getElementById("content")
  const newDiv2 = document.createElement('div')
  const newDiv = document.createElement('div')
  newDiv2.classList = "col-span-1"
  // newDiv2.classList = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-2 gap-y-5 mt-10"
  newDiv.innerHTML = `
  <div class="card bg-base-100 shadow-xl p-3 border-2 border-gray-200">
        <img src="${item.thumbnail}" class="w-full" alt="">
        <p class="text-red-600 font-bold text-[10px] mt-3">${item.title}</p>
    </div>
  `
newDiv2.appendChild(newDiv)
content.appendChild(newDiv2)
});


 }, 2000);
   console.log("all data" , videos);

}
// display all data secion ends


// search button starts
const handleBtnClick = () => {
const value = document.getElementById('search').value
loadAllDataSearch(value)
}
// search button ends
  
// get input section starts
// document.getElementById("search").addEventListener('keyup' , function(e){
//   const value = e.target.value
//   loadAllDataSearch(value)
// })
 // get input section ends

loadAllData()


//  const spinner =  document.getElementById("spinner")
  // spinner.style.display='block'

  // setTimeout(() => {
  //    const spinner =  document.getElementById("spinner")
  // spinner.style.display='none'
  //   displayAllData()
  // }, 2000);
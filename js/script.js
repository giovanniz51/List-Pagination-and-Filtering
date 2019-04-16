/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Get the Students
   Set the max Items on a Page
***/
const studentList = document.querySelector(".student-list").children;
const itemsOnPage = 10;



/*** 
   Only show the elements within the endIndex
   the oder will be hidden
***/
function showPage(list, page) {
   const startIndex = (page * itemsOnPage) - itemsOnPage;
   const endIndex = page * itemsOnPage;

   for (let i = 0; i < list.length; i++){ 
      if(i >= startIndex && i < endIndex){
         list[i].style.display = "block";
      }else {
         list[i].style.display = "none";
      }
   } 
}

/*** 
   Create Pagination Buttons and add it to the DOM
***/

function appendPageLinks(list) {
   const div = document.createElement("div");
   div.className = "pagination";
   const ul = document.createElement("ul");
   div.appendChild(ul);
   const pageNumber = list.length / itemsOnPage;

   for(let i = 0; i < pageNumber; i++){
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = i+1;
      li.appendChild(a);
      ul.appendChild(li);
   }

   ul.firstChild.firstChild.className = "active";
   document.querySelector(".page").appendChild(div);

   const a = document.querySelectorAll(".pagination a");
   a.forEach(link => {
      link.addEventListener("click", (e) => {
         e.preventDefault();
         a.forEach(link => link.className = "");
         e.target.className = "active";
         showPage(list, e.target.textContent);
      });
   });

}



showPage(studentList, 1);
appendPageLinks(studentList);





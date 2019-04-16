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

const div = document.createElement("div");
div.className = "student-search";
div.innerHTML = `
   <input placeholder="Search for students...">
   <button>Search</button
`;

document.querySelector(".page-header").appendChild(div);

function search(input) {

      if(document.querySelector(".error")){
         document.querySelector(".error").remove();
      }

      const searchResults = [];
      Array.from(studentList).forEach(student => {
         if(student.textContent.includes(input.target.value.toLowerCase())){
            searchResults.push(student);
            student.style.display = "block";
         }else {
            student.style.display = "none";
         }
      });
      const pagination = document.querySelector(".pagination");
      pagination.remove();
      
      if(searchResults.length <= 0){
         const page = document.querySelector(".page");
         const h3 = document.createElement("h3");
         h3.className = "error";
         h3.textContent = `No student with the name ${input.target.value} found!`;
         h3.style.color = "red";
         page.appendChild(h3);
      }

      appendPageLinks(searchResults);
   
}


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

   if(ul.children.length > 0)
      ul.children[0].firstElementChild.className = "active";

   document.querySelector(".page").appendChild(div);

   
   showPage(list, 1);

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

const searchInput = document.querySelector(".student-search").firstElementChild;
searchInput.addEventListener("keyup", e => {
   search(e);
});

searchInput.addEventListener("change", e => {
   search(e);
});

appendPageLinks(studentList);





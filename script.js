document.addEventListener("DOMcontentLoaded",()=>{
  const loginFrom = document.getElementById("loginFrom");
  if(loginFrom) {
    loginFrom.addEventListener("submit",funcation (e) {
	  e.preventDefault();
	  
	  const name =document.getElementById("studentName").value;
	  const id =document.getElementById("studentId").value;
	  const teacher =document.getElementById("teacherName").value;
	  const password =document.getElementById("exampassword").value;
	  
	  if (password == "exam123") {
         sessionStorage.setItem("studentName", name);
         window.location.href = "exam.html";
      } else {
       alert("Invalid exam password!");
	  }
	});
  }
 const examFrom = document.getElementById("examForm");
 if(examFrom) {
  examFrom.addEventListener("submit",funcation (e) {
   e.preventDefault();
   iet score = 0;
   if(document.querySelector('input[name="q1"]:checked')?.value===="paris)score++;
   if(document.querySelector('input[name="q2"]:checked')?.value===="JavaScript)score++;
    window.location.href = 'result.html?score=$ {score}';
  });
 }
}); 
function generateResume(){
  const name = document.getElementById('nameInput').value
  const title = document.getElementById('titleInput').value
  const email = document.getElementById('emailInput').value
  const phone = document.getElementById('phoneInput').value
  const summary = document.getElementById('summaryInput').value
  const workExperience = document.getElementById('workExperienceInput').value
  
  // declare a resumeData object to assign the variables above to a property
  const resumeData = {
    name: name,
    title: title,
    contact: {
    email: email,
    phone: phone
    },
    summary: summary,
    workExperience: []
  }

  const workExperienceLines = workExperience.split('\n');
  /* we first take the content of workExperience variable and split that string into an array of lines using the line break as the separator
  */
  workExperienceLines.forEach(function(line){
    /* we then iterate over each line of work experience in the array 
    * we use array destructuring to create a new array for each work experience line, splitting them using the ';' as the separator
    * thus, this creates an array containing three elements: job title, company and job description!
    */
    const [jobTitle, company, jobDescription] = line.split(';');


    /* Our next step is to create a new object 'experience' to store the extracted work experience details
    * For each iteration, we assign the job title, company and job description to respective properties of 
      the experience object using object literal syntax
    */
    const experience = {
      jobTitle: jobTitle,
      company: company,
      jobDescription: jobDescription
    };
    resumeData.workExperience.push(experience);
    /* we then add the 'experience' object to the 'resumeData.workExperience' array using the push() method
     * after the first iteration, the array 'workExperience' will contain the first work experience object. 
     * after the second iteration, the array will contain both of the 2 work experience objects 
    */
  })

// adding resume details to the empty string variable resume   
 let resume = '';
  resume += `<h1>${resumeData.name}</h1>`;
  resume += `<p>${resumeData.title}<br>Email: ${resumeData.contact.email}<br>Phone: ${resumeData.contact.phone}</p>`;
  resume += `<p>Summary: ${resumeData.summary}</p>`;
  
  // adding work experience to the resume 
  resume += `<h2>Work Experience:</h2>`
  resumeData.workExperience.forEach(function(experience){
    resume += `<p>Job Title: ${experience.jobTitle}<br>Company: ${experience.company}<br>Job Description: ${experience.jobDescription}</p>`
  })
  /* we use a forEach loop to iterate over each 'experience' object in the 'resumeData.workExperience' array
  * we append the jobTitle, company and jobDescription values to the resume variable 
  */
  
document.getElementById('resume').innerHTML = resume;
}

function fillButton(){
  const button = document.getElementById('myButton')
  button.innerHTML = 'Looks great!'
  button.classList.add('filled')
}

function fadeInText() {
  const div = document.getElementById('animation');
  div.innerHTML = 'Thanks for using the resume generator!';
  div.style.opacity = 1;
}

function reloadPage(){
  location.reload();
}

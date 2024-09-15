const form=document.getElementById('resume-form') as HTMLFormElement;
 const resumeDisplayElement= document.getElementById('resume-display') as HTMLDivElement;

 form.addEventListener('submit',(event:Event)=>{
    event.preventDefault()

    const name=(document.getElementById('name') as HTMLInputElement).value
    const email=(document.getElementById('email') as HTMLInputElement).value
    const contactNumber=(document.getElementById('contactNumber') as HTMLInputElement).value
    const education=(document.getElementById('education') as HTMLInputElement).value
    const experience=(document.getElementById('experience') as HTMLInputElement).value
    const skills=(document.getElementById('skills') as HTMLInputElement).value


    const resumeHTML=`
    <h2>  Editable Resume</h2>
    <h3> Personal Information</h3>
    <p> Name: <span contenteditable="true">${name}</span></p>
    <p> Name: <span contenteditable="true">${email}</span></p>
    <p> Name:<span contenteditable="true">${contactNumber}</span></p>
    
    <h3> Education </h3>
    <p contenteditable="true"> Name:${education}</p>

    <h3> Experience</h3>
    <p contenteditable="true"> Name:${experience}</p>

    <h3> Skills</h3>
    <p contenteditable="true"> Name:${skills}</p>`;
 if(resumeDisplayElement){
    resumeDisplayElement.innerHTML=resumeHTML;
}
else {
    console.error('one or two missing');
}



 })

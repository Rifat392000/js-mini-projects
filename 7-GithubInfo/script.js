let githubUser = document.querySelector('#githubUser');
console.log(githubUser);

const submit = document.querySelector('#subt');
console.log(submit);


function userInfo(requesturl){
    console.log(requesturl);
    const xhr = new XMLHttpRequest();

    // https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && this.status == 200) {
            console.log(this.responseText);
            const data = JSON.parse(this.responseText);
            document.getElementById('image').innerHTML=`<img src="${data.avatar_url}" alt="Boy in a tshirt" width="140px" height="140px" style="border-radius: 50%; object-fit:contain;">`;
            document.getElementById('uname').innerHTML=`${data.login}`;
            document.getElementById('following').innerHTML=`${data.following}`;
            document.getElementById('followers').innerHTML=`${data.followers}`;
            document.getElementById('link').href=`${data.html_url}`
            githubUser.value='';
        }
        else if(xhr.readyState=== 4 && this.status == 403 )
        {
            
           alert("Forbidden");
           githubUser.value='';

        }
        else if(xhr.readyState=== 4 && this.status == 404 )
        {
           alert("Page not found provide a valid user name");
           githubUser.value='';
        }
    }

    xhr.open('GET', requesturl);
      xhr.send();
}


submit.addEventListener('click', e => {
e.preventDefault();
if(githubUser.value != '')
{
const requesturl= `https://api.github.com/users/${githubUser.value}`;
userInfo(requesturl);
}
else
{
alert("Please! Provide a user name!!");
}
})
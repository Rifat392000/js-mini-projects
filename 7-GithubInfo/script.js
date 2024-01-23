let githubUser = document.querySelector('#githubUser');
console.log(githubUser);

const submit = document.querySelector('#subt');
console.log(submit);


function userInfo(requesturl){
    console.log(requesturl);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requesturl);
    xhr.onreadystatechange = function () {
        
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText);
            document.getElementById('image').innerHTML=`<img src="${data.avatar_url}" alt="Boy in a tshirt" width="140px" height="140px" style="border-radius: 50%; object-fit:contain;">`;
            document.getElementById('uname').innerHTML=`${data.login}`;
            document.getElementById('following').innerHTML=`${data.following}`;
            document.getElementById('followers').innerHTML=`${data.followers}`;
            document.getElementById('link').href=`${data.html_url}`
            githubUser.value='';
        }
    }
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
alert("Please! Provide a valid user name!!");
}
})
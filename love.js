function lovecheck(){

    var name = document.getElementById('name').value;
    var lname = document.getElementById('lname').value;
    

    if(name == " "){
        alert('Please enter your name');
    }else if (name.length <= 2){
        alert('Min length is 3');
    }else if (!isNaN(name)){
        alert('Number not allowed');
    }

    else if(lname == " "){
        alert('Please enter your love name');
    }else if (lname.length <= 2){
        alert('Min length is 3');
    }else if (!isNaN(lname)){
        alert('Number not allowed');
    }
    else{
        var math = Math.floor((Math.random()*100)+1);
        var percent = math + '%';
        document.getElementById('lovevalue').innerHTML = percent;
    }
   }
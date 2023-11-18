function drop(){
    let inp = document.getElementById('inp').value
    if(inp  == 'fifa'){
        document.getElementById('fifa_1').style.boxShadow = '5px 5px 5px black';
        document.getElementById('fifa_2').style.boxShadow = '5px 5px 5px black';
        document.getElementById('fifa_3').style.boxShadow = '5px 5px 5px black';
        document.getElementById('fifa_4').style.boxShadow = '5px 5px 5px black';
        document.getElementById('hidden').style.display = 'block';
    }
    
}

function drop_1(){
    document.getElementById('fifa_1').style.display= 'none';
    document.getElementById('fifa_2').style.display= 'none';
    document.getElementById('fifa_3').style.display= 'none';
    document.getElementById('fifa_4').style.display= 'none';
    document.getElementById('fifa_5').style.display= 'block';
    document.getElementById('fifa_6').style.display= 'block';
    document.getElementById('fifa_7').style.display= 'block';
    document.getElementById('fifa_8').style.display= 'block';
}
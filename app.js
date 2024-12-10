$(document).ready(function () {

    let key = localStorage.length+1;
    
    getStorage();

    $('#button').click(function (e) {

        let key = localStorage.length+1;
        
        //alert('Botacao clicado');

        let descricao = $('#descricao').val().trim();
        
        if( descricao == '' ){
            alert('Escreva alguma coisa');
            return false;
        }

        $('#descricao').val('');

        localStorage.setItem(key,descricao);
        
      
        //getStorage();
        $('.list').append(`
            <li>
                ${localStorage.getItem(key)}
                <button class='remover' value='${key}'>Deletar</button>
            </li>  
            `);

        $(document).on('click','.remover', function(){
            chave = $(this).val();
            $(this).parent().remove();
            localStorage.removeItem(chave);
        });

        console.log(descricao);


    });


});

function getStorage(){

    if(localStorage.length > 0){

        for (let chave = 1; chave <= localStorage.length; chave++ ){
            
            $('.list').append(`
            <li>
                ${localStorage.getItem(chave)}
                <button class='remover' value='${chave}'>Deletar</button>
            </li>  
            `);

        }

    }
}

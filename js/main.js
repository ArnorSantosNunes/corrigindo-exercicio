$('document').ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
    })
    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(DDD) 00000-0000'
    })

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
})

$('#cep').mask('00000-000', {
    placeholder: '012345-678'
})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        },
    },
    messages:{
        nome: 'Por Favor, insira o seu nome',
        email: 'Por Favor, insira o seu email',
        telefone: 'Por Favor, insira o seu telefone',
        endereco: 'Por Favor, insira o seu endereço',
        cep: 'Por Favor, insira o seu cep',
        cpf: 'Por Favor, insira o seu cpf',
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha os campos para prosseguir com a compra!");
    }
})
});


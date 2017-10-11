var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:fID', function(req, res, next) {
  res.render('form', {
    title: 'Formulario :' + req.params.fID,
    form: getFormByID(req.params.fID)
  });
});

router.post('/send/:fID', function(req, res, next) {
  var respostas = {
    fID:req.params.fID,
    body:req.body
  }
  console.log(respostas);
  res.json(respostas);
})


/*
 * Isso só simula uma chamada a um banco de dados
 */
function getFormByID(id) {
  var theForm = {};
  theForm.elementos = [];
  theForm.id = id;

  theForm.elementos.push({
    fragment:'input',
    type:'text',
    titulo:'Pergunta texto1',
    desc:'Esta pergunta projetara a resposta para a perguntaTexto2 que virá a seguir',
    placeholder:'placeholder',
    questName:'perguntaTexto1',
    target:'perguntaTexto2'
  })

  theForm.elementos.push({
    fragment:'input',
    type:'text',
    titulo:'Pergunta texto2',
    desc:'Descricao2',
    placeholder:'placeholder',
    questName:'perguntaTexto2'
  })

  theForm.elementos.push({
    fragment:'input',
    type:'number',
    titulo:'Pergunta numerica',
    desc:'Desc',
    placeholder:'123',
    questName:'perguntaNumerica'
  })

  theForm.elementos.push({
    fragment:'input',
    type:'text',
    titulo:'Pergunta texto3',
    desc:'Descricao3',
    placeholder:'placeholder',
    questName:'perguntaTexto3'
  })

  theForm.elementos.push({
    fragment:'info',
    titulo:'Paragrafo de informação',
    desc:'Aqui, se informa o que se segue',
  })

  theForm.elementos.push({
    fragment:'radio',
    titulo:'Perguntas radiobtn',
    desc:'Radio btns',
    questName:'rbtnPerg',
    ops:[{value:'op1',text:'opcao 1'},{value:'op2',text:'opcao 2'},{value:'op3',text:'opcao 3'}]
  })

  theForm.elementos.push({
    fragment:'radio',
    titulo:'Perguntas radiobtn 2',
    desc:'Radio btns 2',
    questName:'rbtnPerg2',
    ops:[{value:'op1',text:'opcao 1'},{value:'op2',text:'opcao 2'},{value:'op3',text:'opcao 3'}]
  })

  // tudo isso pode ser facilmente persistido no MongoDB como uma entrada unica não estruturada/relacional
  return theForm;
}

module.exports = router;

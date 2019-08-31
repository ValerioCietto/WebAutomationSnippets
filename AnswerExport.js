//vai con Firefox su https://it.quora.com/profile/NOME_COGNOME/answers
// CTRL+SHIFT+I per aprire la console di debug.
// scrolla giù fino al fondo
// clicca su tutti gli espandi risposta, pulsante "altro..."
// copia incolla questo script
// invio
// click destro, copia messaggio
// incolla il testo su Libreoffice calc
// usa come separatore "|"
// otterrai nella prima cella la domanda, nella seconda l'html della risposta e nella terza le visualizzazioni

var number_of_questions = document.getElementsByClassName("AnswerListItem").length;
var i =0;
var csv = "";
for(i =0; i< number_of_questions; i++){
  var element = document.getElementsByClassName("AnswerListItem")[i];
  var question_title = ""; 
  var upvotes = "";
  question_title = element.getElementsByClassName("ui_qtext_rendered_qtext")[0].innerHTML;
	//answer_text = element.getElementsByClassName("ui_qtext_rendered_qtext")[1].innerHTML;
  if( element.getElementsByClassName("AnswerFooter").length > 0){
    upvotes_text = element.getElementsByClassName("AnswerFooter")[0];
    upvotes = upvotes_text.getElementsByTagName("SPAN")[0].innerHTML;
  }
  csv += question_title+"|"+answer_text+"|"+upvotes+"\n";
}
console.log(csv);

var number_of_questions = document.getElementsByClassName("partners_question_list_item").length;
var i =0;
var csv = "";
for(i =0; i< 2000; i++){ //number_of_questions
  var element = document.getElementsByClassName("partners_question_list_item")[i];
  var question_text = "question text null";
  if(element.getElementsByClassName("ui_qtext_rendered_qtext")[0] != null){
    question_text = element.getElementsByClassName("ui_qtext_rendered_qtext")[0].innerHTML;
  }
  var question_earning = "0€";
  if(element.getElementsByClassName("earnings_amount")[0] != null){
    question_earning = element.getElementsByClassName("earnings_amount")[0].innerHTML;
  }
  var question_number_of_answers = "0";
  if(element.getElementsByClassName("answer_count")[0] != null){
    question_number_of_answers = element.getElementsByClassName("answer_count")[0].innerHTML;
  }
  var external_traffic = "0";
  var question_views = element.getElementsByClassName("info")[1].innerHTML;
  question_views = question_views.replace(".","");
  question_views = question_views.replace(",","");
  if(element.getElementsByClassName("traffic_sources")[0] != null){
    external_traffic = element.getElementsByClassName("external_traffic")[0].innerText;
    external_traffic = external_traffic.replace(" % esterno", "");
    external_traffic = external_traffic.replace(" % External", "");
    var external_traffic_number = parseInt(external_traffic)/100;
    external_traffic = "" + external_traffic_number;
  }
  var topics = "";
  var question_topics = element.getElementsByClassName("TopicName")[0];
  if(question_topics != null){
     topics = element.getElementsByClassName("TopicName")[0].innerText;
  }
  var topics_1 = "";
  var question_topics_1 = element.getElementsByClassName("TopicName")[1];
  if(question_topics_1 != null){
     topics_1 = element.getElementsByClassName("TopicName")[1].innerText;
  }
  if(!question_earning.includes("€")){
     //bad merged or excluded
        question_earning = "€0.00"
    }   
    //console.log(question_text+"|"+question_earning);
    csv += question_text+";"+question_earning+";"+external_traffic+";"+question_views +";"+question_number_of_answers + ";" + topics + ";" + topics_1 + "\n";
}

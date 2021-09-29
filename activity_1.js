function check() {
    get_answer = document.getElementById("inpans").value;
    if (get_answer == "player1") {
        update_player1_score - player1_score +1;
        document.getElementById("player1_score").innerHTML = player1_score;
    }
    else {
        update_player2_score - player2_score +1;
        document.getElementById("player2_score").innerHTML = player2_score;   
    }
    if (question_turn = "player1")
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else {
        question_turn = "player1"
    document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }
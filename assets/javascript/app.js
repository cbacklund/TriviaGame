
function Trivia(question, a1, a2, a3, a4, correct, pic) {
   this.question = question;
   this.a1 = a1;
   this.a2 = a2;
   this.a3 = a3;
   this.a4 = a4;
   this.correct = correct;
   this.pic = pic; 
}

//create variables to track answers submitted
var correctA = incorrectA = unansweredA = 0;

// creating the questions and array of the trivia game
var q = [
    new Trivia("What is the breed of dog from the movie Turner and Hooch?", "Doberman", "Neopolitan Mastiff", "Leonberger", "Dogue de Bordeaux", "Dogue de Bordeaux", "assets/images/dogue.jpg"),
    new Trivia("What dog breed totals the most bites to humans each year?", "Golden Retriever", "Rottweiler", "Labrador Retriever", "Pitbull", "Golden Retriever", "assets/images/golden.jpg"),
    new Trivia("What is the breed of dog from the movie: Beethoven?", "Akita", "Bernese Mountain Dog", "Saint Bernard", "Leonberger", "Saint Bernard", "assets/images/bernard.jpg"),
    new Trivia("What Group of dogs includes the French Bulldog breed?", "Working Group", "Sporting Group", "NonSporting Group", "Toy Group", "NonSporting Group", "assets/images/nonsporting.jpg"),
    new Trivia("Which breed of dog did not originate from Japan?", "Akita", "Shiba Inu", "Chow Chow", "Havanese", "Havanese", "assets/images/havanese.jpg"),
    new Trivia("Which dog can run the fastest of these breeds?", "Greyhound", "Samoyed", "Bloodhound", "Poodle", "Greyhound", "assets/images/greyhound.jpg"),
    new Trivia("What breed of dog comes in 3 different colors? (Black, Yellow, Chocolate)", "Pitbull", "Poodle", "Pekingese", "Labrador Retreiver", "Labrador Retriever", "assets/images/lab.jpg"),
    new Trivia("What breed of dog is not in the Terrier group?", "Kerry Blue", "Giant Schnauzer", "Skye", "Airedale", "Giant Schnauzer", "assets/images/giant.jpg"),
    new Trivia("What breed of dog do hipsters love the most?", "Pugs", "French Bulldogs", "Poodles", "Any dog they claim they 'rescued'", "Any dog they claim they 'rescued'", "assets/images/rescue.jpg"),
    new Trivia("What breed of dog do the most annoying people have?", "Pomeranian", "Goldendoodle", "Yorkshire Terrier", "Maltese", "Goldendoodle", "assets/images/goldendoodle.jpg")
];

console.log(q[0]);
console.log(q[0].a1);

$("#f").autofill(q);

// create the start function
function start() {
    for (var j = 0; 0 < q.length; j++) {
        var quest = $("<h2>");
        var ans1 = ans2 = ans3 = ans4 = $("<button>");
        quest.text(q[j].a0);
        ans1.text(q[j].a1);
        ans2.text(q[j].a2);
        ans3.text(q[j].a3);
        ans4.text(q[j].a4);
        $("#question").text(quest);
        $("#answer1").append(ans1);
        console.log(ans1);
        console.log(ans2);
        console.log(ans3);
        console.log(ans4);
    } // for loop close out
} //start function close out

start();

// create the reset function
function reset() {
    correctA = incorrect = unanswered = 0;
} //reset function close out

// create the finish function that will execute when the submit button is pushed
function submit() {

   
} //submit function close out

function check(a, b) {
    for (var i = 0; 0 < q.length; q++) {
    if (a == b) {
        correctA++;
        $("#correct").text(correctA);
    } else {
        incorrect++;
        $("#incorrect").text(incorrect);
    }
} // for loop close out
}// check close out
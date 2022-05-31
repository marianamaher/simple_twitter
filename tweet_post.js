$(document).ready(function(){

    $(".btn-gettxtarea").prop("disabled", true)
        $(".btn-gettxtarea").click(function(){
            let mytextcontent = $(".txt-mytxtarea").val().trim()
            if(mytextcontent.length==0){
                $(".btn-gettxtarea").prop("disabled", true)
            }
            else{
            let newDiv = $("<div class='post_tweet'>");
                newDiv.html('<img id="theImg" src="/Users/marianamaher/Desktop/Code/js_projects/Twitter/homephoto.png"/> <b>Mari</b> @mariana_maher: <br>' +mytextcontent);
            let secondDiv = $("<div class='just_for_post_break'>");
                $(".final-text").prepend(newDiv)
                $(".final-text").prepend(secondDiv)
            $(".txt-mytxtarea").val("")
            $(".btn-gettxtarea").prop("disabled", true)
            }

    })



    $(".characters").text("30")
    $(".txt-mytxtarea").keyup(function(){
        let cs = this.value.length
        let maxLen = 31;

        if(cs>=maxLen){
            $(".btn-gettxtarea").prop("disabled", true)
            $(".characters").text("30").addClass("charRed")  
        }
        else{
            $(".btn-gettxtarea").prop("disabled", false)
            $(".characters").text("30").removeClass("charRed")
        }
        $(".characters").text(30-cs)

        if (cs<=31 && event.which === 13){
            event.preventDefault();
            $(".btn-gettxtarea").click()
            $(".characters").text("30").removeClass("charRed")
        }    
   
    })
})

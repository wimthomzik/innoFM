           //DROPDOWN

        /* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
      
        function myFunction() {
          document.getElementById("myDropdown").classList.toggle("show");
        }
        

        // Close the dropdown if the user clicks outside of it
        document.addEventListener("click", functionOne);
        function functionOne(event) {
            if (!event.target.matches('.dropbtn')) {
              var dropdowns = document.getElementsByClassName("dropdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }








            //POPUP WINDOWS

            // Get the modal
            var modal = document.getElementById("myModal");

            // Get the button that opens the modal
            var btn = document.getElementById("modalBtn");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on the button, open the modal 
            btn.onclick = function() {
            modal.style.display = "block";
            }

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
            modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            document.addEventListener("click", functionTwo);
            function functionTwo(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
            }


            // Get the modal
            var modal2 = document.getElementById("myModal2");

            // Get the button that opens the modal
            var btn2 = document.getElementById("modalBtn2");

            // Get the <span> element that closes the modal
            var span2 = document.getElementsByClassName("close2")[0];

            // When the user clicks on the button, open the modal 
            btn2.onclick = function() {
            modal2.style.display = "block";
            }

            // When the user clicks on <span> (x), close the modal
            span2.onclick = function() {
            modal2.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            document.addEventListener("click", functionThree);
            function functionThree(event) {
            if (event.target == modal2) {
                modal2.style.display = "none";
            }
            }



        //LOAD MORE BUTTON EPISODES.HTML

        let loadMoreBtn = document.querySelector('#show-more');
        let currentItem = 5;

        loadMoreBtn.onclick = () =>{
            let containerEpisodePost = [...document.querySelectorAll('.container-episode-post')];

            for(var i = currentItem; i < currentItem + 5; i++){
                containerEpisodePost[i].style.display = 'flex';
            }
            currentItem += 5;

            if(currentItem >= containerEpisodePost.length){
                loadMoreBtn.style.display = 'none';
            }
        }


var Smile = (function() {

    // PRIVATE VARIABLES
        
    // The backend we'll use for Part 2. For Part 3, you'll replace this 
    // with your backend.
    var apiUrl = 'https://smileback-cs169.herokuapp.com'; 
    // FINISH ME (Task 4): You can use the default smile space, but this means
    //            that your new smiles will be merged with everybody else's
    //            which can get confusing. Change this to a name that 
    //            is unlikely to be used by others. 
    var smileSpace = 'initial_Sudouble'; // The smile space to use. 


    var smiles; // smiles container, value set in the "start" method below
    var smileTemplateHtml; // a template for creating smiles. Read from index.html
                           // in the "start" method
    var create; // create form, value set in the "start" method below


    // PRIVATE METHODS
      
   /**
    * HTTP GET request 
    * @param  {string}   url       URL path, e.g. "/api/smiles"
    * @param  {function} onSuccess   callback method to execute upon request success (200 status)
    * @param  {function} onFailure   callback method to execute upon request failure (non-200 status)
    * @return {None}
    */
   var makeGetRequest = function(url, onSuccess, onFailure) {
       $.ajax({
           type: 'GET',
           url: apiUrl + url,
           dataType: "json",
           success: onSuccess,
           error: onFailure
       });
   };

    /**
     * HTTP POST request
     * @param  {string}   url       URL path, e.g. "/api/smiles"
     * @param  {Object}   data      JSON data to send in request body
     * @param  {function} onSuccess   callback method to execute upon request success (200 status)
     * @param  {function} onFailure   callback method to execute upon request failure (non-200 status)
     * @return {None}
     */
    var makePostRequest = function(url, data, onSuccess, onFailure) {
        $.ajax({
            type: 'POST',
            url: apiUrl + url,
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json",
            success: onSuccess,
            error: onFailure
        });
    };
        
    /**
     * Insert smile into smiles container in UI
     * @param  {Object}  smile       smile JSON
     * @param  {boolean} beginning   if true, insert smile at the beginning of the list of smiles
     * @return {None}
     */
    var insertSmile = function(smile, beginning) {
        // Start with the template, make a new DOM element using jQuery
        var newElem = $(smileTemplateHtml);
        // Populate the data in the new element
        // Set the "id" attribute 
        newElem.attr('id', smile.id); 
        // Now fill in the data that we retrieved from the server
        newElem.find('.title').text(smile.title);
        // FINISH ME (Task 2): fill-in the rest of the data
        newElem.find('.story').text(smile.story);
        newElem.find('.count').text(smile.like_count);
        var newClassName = "happiness-level-"+ smile.happiness_level;
        var findResult = newElem.find('.happiness-level-1');
        //newElem.find('.happiness-level-1').text(smile.happiness_level);
        findResult.className = newClassName;
        var dateEpoch = smile.updated_at*1000;
        var myDate = new Date(dateEpoch);
        newElem.find('.timestamp').text(myDate.toLocaleString());

        if (beginning) {
            smiles.prepend(newElem);
        } else {
            smiles.append(newElem);
        }
    };


     /**
     * Get recent smiles from API and display 10 most recent smiles
     * @return {None}
     */
    var displaySmiles = function() {
        // Prepare the AJAX handlers for success and failure
        var onSuccess = function(data) {
            /* FINISH ME (Task 2): display smiles with most recent smiles at the beginning */
            for (i=0; i <data['smiles'].length; i++)
            {
                insertSmile(data['smiles'][i], false)
            }            
        };
        var onFailure = function() { 
            console.error('display smiles failed'); 
        };
        /* FINISH ME (Task 2): make a GET request to get recent smiles */
        makeGetRequest(`/api/smiles?space=${smileSpace}&count=10&order_by=updated_at`, onSuccess, onFailure);
    };

    /**
     * Add event handlers for clicking like.
     * @return {None}
     */
    var attachLikeHandler = function(e) {
        // Attach this handler to the 'click' action for elements with class 'like'
        smiles.on('click', '.like', function(e) {
            // FINISH ME (Task 3): get the id of the smile clicked on to use in the POST request
            var smileId = $(this).parents('.smile').attr('id');
            var like_count = $(this).siblings(".count");
   
            var data = {};
                        
            // Prepare the AJAX handlers for success and failure
            var onSuccess = function(data) {
                /* FINISH ME (Task 3): update the like count in the UI */
                if (data['status'] == 1) {
                    var new_count = data['smile']['like_count'];
                    like_count.text(new_count);
                }
            };
            var onFailure = function() { 
                console.error('like smile error'); 
            };
            /* FINISH ME (Task 3): make a POST request to like this smile */
            makePostRequest("/api/smiles/" + smileId + "/like", data, onSuccess, onFailure);
        });
    };


    /**
     * Add event handlers for submitting the create form.
     * @return {None}
     */
    var attachCreateHandler = function(e) {
        // First, hide the form, initially 
        create.find('form').hide();

        // FINISH ME (Task 4): add a handler to the 'Share a smile...' button to
        //                     show the 'form' and hide to button
        $('.my-button').click(function(){
            $(this).hide();
            $('.create').find('form').show();
            return false;
       });

        // FINISH ME (Task 4): add a handler for the 'Cancel' button to hide the form
        // and show the 'Shared a smile...' button
        $('.cancel-input').click(function(){
            $('.my-button').show();
            create.find('form').hide();
        });

        // The handler for the Post button in the form
        create.on('click', '.submit-input', function (e) {
            e.preventDefault (); // Tell the browser to skip its default click action

            var smile = {}; // Prepare the smile object to send to the server
            smile.title = create.find('.title-input').val();
            // FINISH ME (Task 4): collect the rest of the data for the smile
            smile.space = smileSpace;
            smile.story = create.find('.story-input').val();
            smile.happiness_level = parseInt(create.find('#smile-select').val());
            var onSuccess = function(data) {
                // FINISH ME (Task 4): insert smile at the beginning of the smiles container
                if (data['status'] != -1)
                    insertSmile(data['smile'], true);
            };
            var onFailure = function() { 
                console.error('create smile failed'); 
            };
            
            // FINISH ME (Task 4): make a POST request to create the smile, then 
            //            hide the form and show the 'Shared a smile...' button
            if (!smile.title 
                || smile.title == "" 
                || smile.title.length > 64)
                {
                    alert("the title is empty or longer than 64 characters.");
                    return;
                }
            if (smile.happiness_level < 1 || smile.happiness_level > 3)
            {
                alert("the happiness-level is not between 1 and 3.");
                return;
            }

            if (!smile.story 
                || smile.story == "" 
                || smile.story.length > 2048)
            {
                alert("the story is empty, or longer than 2048 characters.");
                return;
            }

            makePostRequest("/api/smiles", smile, onSuccess, onFailure);

            create.find('form').hide();
            $('.my-button').show();
        });

    };

    
    /**
     * Start the app by displaying the most recent smiles and attaching event handlers.
     * @return {None}
     */
    var start = function() {
        smiles = $(".smiles");
        create = $(".create");

        // Grab the first smile, to use as a template
        smileTemplateHtml = $(".smiles .smile")[0].outerHTML;
        // Delete everything from .smiles
        smiles.html('');

        displaySmiles();
        attachLikeHandler();
        attachCreateHandler();
    };
    

    // PUBLIC METHODS
    // any private methods returned in the hash are accessible via Smile.key_name, e.g. Smile.start()
    return {
        start: start
    };
    
})();

// $(document).ready(function(){
   
//     $('.bill').click(function() {
//         console.log('alt-pic is', $(this).attr('alt-pic'));
//     });
 


//     });
$(document).ready(function() {
    // When an image with the class 'bill' is clicked
    $('.bill').click(function() {
        // Log the value of the custom 'alt-pic' attribute
        var altPic = $(this).attr('alt-pic');
        console.log('alt-pic is', altPic);
        
        // Optionally, you can also change the image source to the 'alt-pic' image
        $(this).attr('src', altPic);
    });
});

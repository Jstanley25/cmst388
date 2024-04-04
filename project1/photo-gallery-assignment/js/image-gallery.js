// JavaScript Document

document.addEventListener('DOMContentLoaded', function() {
    // permanently sets thumbnails to the thumbnails images
    const thumbnails = document.getElementById('thumbnails').getElementsByTagName('img');

    // permanently sets largeImage the img with id largImage
    const largeImage = document.getElementById('largeImage');

    // permanently sets figureCaption
    const figureCaption = document.getElementById('caption');

    // sets selectedThumbnail to null
    let selectedThumbnail = null;

    // loops through each of the thumbnails
    for (let i = 0; i < thumbnails.length; i++) {

        // Takes all of the thumbnails as an arrary and adds an eventlistener to listen for the mouseover event
        thumbnails[i].addEventListener('mouseover', function() {

            // this stores the new figureCaption text which is the alt text of the image being moused over
            const figureCaptionText = this.getAttribute('alt');

            // Sets the new figureCaption text to the alt text of the image we are hovering over
            figureCaption.innerText = figureCaptionText;
            
        });

        // adds an onClick listener to each of the thumbnail images
        thumbnails[i].addEventListener('click', function() {

            // this stores the new largeImage src which is the src of the image being moused over
            const largeSrc = this.getAttribute('src');
            // Sets the new largeImage src to the src of the image we are hovering over
            largeImage.src = largeSrc;

            // Checks which image is the selectedThumbnail
            if (selectedThumbnail) {
                // removes image as selected thumbnail
                selectedThumbnail.classList.remove('selected');
            }
            // sets image we just clicked to selectedThumbnail
            this.classList.add('selected');
            selectedThumbnail = this;
        });
    }
});
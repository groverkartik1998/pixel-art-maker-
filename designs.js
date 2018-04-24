$(function () {

// Select color input
     colorPicker = $('#colorPicker');

// Select size input
     heightInput = $('#input_height');
     widthInput = $('#input_width');

// select canvas
    const canvas = $('#pixel_canvas');

// When size is submitted by the user, call makeGrid()
    function makeGrid() {
        canvas.find('tbody').remove();

        // "submit" the size form to update the grid size
         gridRows = heightInput.val();
         gridCol = widthInput.val();

        // set tbody to the table
        canvas.append('<tbody></tbody>');

         canvasBody = canvas.find('tbody');

        // draw grid row
        for ( j = 0; j < gridRows; j++) {
            canvasBody.append('<tr></tr>');
        }

        // draw grid col
        for ( j = 0; j < gridCol; j++) {
            canvas.find('tr').append('<td class="transparent"></td>');
        }

    }


    $(document).ready(function () {
        // click the submit button to update the grid
        $('input[type="submit"]').on('click', function (abc) {
            abc.preventDefault();
            makeGrid();
        });


        // toggle grid color
        $('#pixel_canvas').on('click', 'td', function (abc) {
             color = colorPicker.val();
             currentColor = $(this).css('background-color');
            console.log(currentColor+ " color:" + color);

            if($(this).hasClass('transparent')){
                $(this).toggleClass('transparent');
                $(this).css("background-color", color);
            } else{
                $(this).toggleClass('transparent');
                $(this).css("background-color", "transparent");
            }

        })

    });

});
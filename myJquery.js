// to make sure document has finished loading before running jquery code
$(function () {
    console.log('We are using jQuery')

    // syntax of jquery
    // $('selector').action() 

    // $('p').on('click', function () {
    //     console.log('you clicked on p', this)
    //     $(this).hide()
    // }) // do this when we click on p    

    /* three main types of selectors in jquery
    1. element selector
    2. id selector
    3. class selector */

    // element selector - this is an example of element selector which clicks on all p element
    // $('p').on('click', function () {
    //     console.log('you clicked on p element')
    // })

    // id selector - this is an example of id selector
    // $('#second').on('click', function () {
    //     console.log('you clicked on element which has an id of second')
    // })

    // class selector - this is an example of class selector 
    // $('.odd').on('click', function () {
    //     console.log('you clicked on element which has a class of odd')
    // })

    //other selectors 
    // adds a click event listener to all elements on the page.
    // $('*').on('click', function(){
    //     console.log('you clicked on an element', this)
    // })

    // adds a click event listener to all p elements which has a class of odd
    // $('p.odd').on('click', function () {
    //     console.log('you clicked on a p element which has a class of odd')
    // })

    // adds a click event listener to first p element in the document 
    // $('p:first').on('click', function() {
    //     console.log('you clicked on the first p element')
    // })

    // events in jquery
    // $('p').on('click', function () {
    //     console.log('you clicked on p element')
    // })

    // $('p').on('mouseenter', function(){
    //     console.log('you entered ', this)
    // })

    // $('p').on('dblclick', function(){
    //     console.log('you double clicked ', this)
    // })

    // show, hide & toggle and other animations
    // hide
    // $('.first-div').hide(1000, function () {
    //     console.log('hidden')
    // })

    // show
    // $('.first-div').show(1000, function () {
    //     console.log('shown')
    // })

    // toggle 
    // $('#toggle-first-div').on('click', function(){
    //     $('.first-div').toggle(1000, function(){
    //         console.log('toggled')
    //     })
    // })

    //fadeIn()
    // $('.first-div').fadeIn(1000, function () {
    //     console.log('fade in')
    // })

    //fadeOut()
    // $('.first-div').fadeOut(1000, function () {
    //     console.log('fade out')
    // })

    // fadeToggle() 
    // $('#toggle-first-div').on('click', function(){
    //     $('.first-div').fadeToggle(1000, function(){
    //         console.log('fade toggle')
    //     })
    // })

    // fadeTo()
    // $('.first-div').fadeTo(1000, 0, function () {
    //     console.log('fade to')
    // })

    // slide methods, speed and callback parameters are optional
    // $('.first-div').slideUp(1000, function() {
    //     console.log('slide up')
    // })

    // $('.first-div').slideDown(1000, function() {
    //     console.log('slide down')
    // })

    // $('#toggle-first-div').on('click', function(){
    //     $('.first-div').slideToggle(1000, function(){
    //         console.log('slide toggle')
    //     })
    // })

    // animate function in jquery
    // $('.first-div').animate({
    //     width: "180px",
    //     opacity: 0.5
    // }, 1000, "linear")

    // $('.first-div').animate({
    //     width: "180px",
    //     opacity: 0.5
    // }, 1000, "linear")

    // $('.first-div').animate({
    //     width: "100%",
    //     opacity: 1.0
    // }, 1000, "linear")

    // dom manipulation with jquery
    // $('#ta').val()

    // $('#ta').val('write your review')

    // $('.first-div').text()

    // $('.first-div').text('hey!')

    // $('.first-div').empty()

    // $('.first-div').remove()

    // $('.first-div').addClass('myclass')

    // $('.first-div').addClass('myclass2')

    // $('.first-div').removeClass('myclass2')

    // $('.first-div').css('background-color')

    // $('.first-div').css('background-color', 'blue')

    // ajax using jquery
    // $.get('https://code.jquery.com/jquery-3.6.4.js', function(data, status) {
    //     alert(data)
    // })

    // $.post('https://code.jquery.com/jquery-3.6.4.js', {
    //     name: 'abc',
    //     company: 'xyz'
    // }, function (data, status) {
    //     console.log(status)
    // })

})



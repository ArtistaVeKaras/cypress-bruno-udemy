# jquery manipulating the Dom

# select the anchor tag

\$('ul li a')

# add color to the h1

\$('h1').css('color','red')

# jqueryBefore #add a h2 tag before the ul

\$('ul').before("My favorite dogs!")

# jqueryAfter #add a h2 tag after the ul

\$('ul').After("My favorite dogs!")

# retrieve text

\$('li').text
\$('li').textContent

# retrive text from a single element

\$('a[href*="profile"]').textContent

# retrieve the first element is the list

\$('li:first').text
\$('ul').lastChild.textContent
\$('ul').firstChild.textContent

# change the text in p element

\$('p').text('This will change the text in the paragraph')

# change the text in the last li

\$('li:last').html('blueberries')

# return the text from the elements .text .innerHTML

$('ul').text returns text only 
$('ul).innerHTML return the tags along with the text
\$('p).textContent

# change border of the img with .attr class

\$('img').attr('border','3px solid black')

# remove class from the element

\$('img').removeClass('styleclass')

# addClass

\$('img').addClass('styleclass')

# toggleClass --> adds and removes class

\$('img').toggleClass('styleclass')

#notes from DOM TRVERSYMEDIACHANNEL

// EXAMINE THE DOCUMENT OBJECT
// console.log(document) or document.domain
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title);  
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = 'Hello';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// Gives error
// items.style.backgroundColor = '#f4f4f4';
// for(var i = 0; i < items.length; i++){ // items[i].style.backgroundColor = '#f4f4f4'; // }

// GETELEMENTSBYTAGNAME
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// Gives error
// items.style.backgroundColor = '#f4f4f4';
// for(var i = 0; i < li.length; i++){
// li[i].style.backgroundColor = '#f4f4f4'; // }

// QUERYSELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';
// var input = document.querySelector('input');
// input.value = 'Hello World'
// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');
// for(var i = 0; i < odd.length; i++){
// odd[i].style.backgroundColor = '#f4f4f4';
// even[i].style.backgroundColor = '#ccc';
// }

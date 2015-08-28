webpackJsonp([0],[function(o,t,e){o.exports=e(2)},,function(o,t,e){e(3),angular.module("LibraryApp.Books",[]).controller("BooksIndexCtrl",e(10)).controller("CreateBookCtrl",e(18)).controller("UpdateBookCtrl",e(21)).controller("AuthorsIndexCtrl",e(22)).directive("whenScrolled",function(){return function(o,t,e){var r,n;return n=t[0],r=function(){var t;return t=n.getBoundingClientRect(),t.bottom<=window.innerHeight?o.$apply(e.whenScrolled):void 0},angular.element(window).bind("scroll load",r)}})},,,,,,,,function(o,t,e){var r,n;r=e(11),e(13),n=e(17),o.exports=["$scope","$route","$http","$location",function(o,t,e,a){var i;return i=function(){return o.books=r.findAll()},o.getStarsRange=function(o){return _.range(1,o+1)},o.getRating=function(o){return Math.abs(5-o)},o.saveRating=function(o){return r.update(o),n("Рейтинг сохранен")},o.attrs=t.current.params,o.getTitle=function(){var o,e,r;return e=t.current.params.genre,o=t.current.params.author,r=t.current.params.rating,e?"Книги жанра "+e:o?"Книги писателя "+o:r?"Книги с рейтингом "+r:"Моя библиотека"},o.loadDemo=function(){var o;return o=e.get("../demo.json").success(function(o){return r.save(o),i()}),n("Демонстрационные данные загружены")},o["delete"]=function(o){return r["delete"]({id:o}),i(),n("Книга удалена")},o.exportBooks=function(){return r["export"](),n("Экспорт данных завершен")},o["import"]=function(){var t;return t=document.querySelector("#files"),t.addEventListener("change",function(){var e,a,c;return a=t.files,e=a[0],c=new FileReader,c.onloadend=function(t){return t.target.readyState===FileReader.DONE?(r["import"](t.target.result),i(),o.$apply(),n("Импорт данных завершен")):void 0},c.readAsText(e)},!1)},o.bookOrder="title",i(),o.isActive=function(o){return a.path()===o},o.getProps=function(o){return r.getProps(o)},o.booksQuantity=3,o.loadMoreBooks=function(){return o.booksQuantity+=3}}]},function(o,t,e){var r;r=e(12),o.exports=new r("books")},,function(o,t,e){var r=e(14);"string"==typeof r&&(r=[[o.id,r,""]]);e(16)(r,{});r.locals&&(o.exports=r.locals)},function(o,t,e){t=o.exports=e(15)(),t.push([o.id,'.center{text-align:center;display:block}.extra-block{float:left;min-height:150px;padding:10px}.extra-block img{max-width:90px}.description-block{overflow:hidden;position:relative;padding:10px}.description-block p.review{border-top:1px solid #c4c4c4;margin-top:10px;padding-top:10px}.description-block .fa-trash{background:url("data:image/png; base64, iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAC9SURBVDiN7ZTNCcMwDIVfGk8iDRJ3iKwScoszWbKAR/AMXiBGPZQU1z9JA+2tDwRCEh9PBrkREaRiZq2UmrZt03utbVuEEGbnnEnnbxnhqSUGAEAIAQCmcRwzCETkLYhIE5EMw2AKPSGiJa03fd8ba23M7QBoAHPBYbGnvPd7I9VUWTXvJVazFWoRz9ce9pKKEGYWZjZH+SnkK07+kN9BZgDrSf6SKhHic6/lnzi5pGb/lJh5QfkQj3R3zq0PFPKTWkg0z/cAAAAASUVORK5CYII=") no-repeat;opacity:.5;width:17px;height:18px;cursor:pointer;display:none}.description-block .fa-trash:hover{opacity:1}article h2,article p{margin:0}article h2 a,article p a{text-decoration:none;color:#5065ee;position:relative}article h2 a:hover,article p a:hover{color:#0f2196}article h2 a:hover::after,article p a:hover::after{content:attr(data-title);position:absolute;padding:5px 10px;background:#5065ee;left:105%;top:-5px;font-weight:400;display:block;white-space:nowrap;text-align:center;font-size:14px;color:#fff;z-index:1000}article.book{background:#ddd;margin-bottom:10px;box-shadow:0 0 1px #000}article.book a:hover::after content attr(data-title){width:75pt;height:20px}article.book:hover{box-shadow:0 0 5px #000}article.book:hover .fa-trash{display:block}.info-block{clear:both;padding:0;margin:0;background:#cecece}.info-block p{display:inline-block;padding:5px 10px}.info-block p.rating{width:10pc}.info-block p span.stars{font-size:18px;color:#888}.info-block p span.stars input{display:none}.info-block p span.stars label{cursor:pointer;float:right;font-weight:600}.info-block p span.stars label:hover,.info-block p span.stars label:hover~label{color:#000}.info-block p span.stars label.active::before{content:"\\2605";position:absolute}aside .block{padding:10px;margin-bottom:10px;background:#ddd;box-shadow:0 0 1px #000}aside .block .search{width:90%;height:30px;padding:1% 4%}aside .block select{width:100%;padding:7px 10px}aside .block .btn,aside .block a.btn{text-decoration:none;padding:10px 15px;color:#fff;border:0}aside .block .btn{background:#223e57;width:100%}aside .block .btn:hover{background:#3f72a0}aside .block a.btn{background:#223e57;display:inline-block;width:84%;text-align:center}aside .block a.btn:hover{background:#3f72a0}.sort-block{color:#888}#files{display:none}#files+label{width:85%;display:block;text-align:center;cursor:pointer}',""])},,,function(o,t){o.exports=function(o){var t;return t=document.querySelector(".popup"),t.textContent=o,t.classList.add("active"),setTimeout(function(){return t.classList.remove("active")},2e3)}},function(o,t,e){var r,n;r=e(11),e(19),n=e(17),o.exports=["$scope","$route","$location",function(o,t,e){return o.form_title="Новая книга",o.save=function(){return o.create_book_form.$valid?(o.book.genre&&(o.book.genre=o.book.genre.toLowerCase()),r.create(o.book),n("Книга сохранена"),e.path("/books")):console.log("error while saving")}}]},function(o,t,e){var r=e(20);"string"==typeof r&&(r=[[o.id,r,""]]);e(16)(r,{});r.locals&&(o.exports=r.locals)},function(o,t,e){t=o.exports=e(15)(),t.push([o.id,"#create-book-form .rating-controls,a.btn{text-align:center}.form-container{max-width:360px;width:100%;margin:0 auto}#create-book-form{background-color:#ddd;padding:20px;-webkit-box-shadow:0 0 2px #000;box-shadow:0 0 2px #000;margin-bottom:30px;-webkit-animation:Appear .5s ease-in-out;-moz-animation:Appear .5s ease-in-out;-o-animation:Appear .5s ease-in-out;-ms-animation:Appear .5s ease-in-out;animation:Appear .5s ease-in-out}#create-book-form button{width:100%;background:#223e57;padding:10px 20px;border:0;color:#fff}#create-book-form button:hover{background:#3f72a0}#create-book-form button[disabled],#create-book-form button[disabled]:hover{background:#ccc}#create-book-form .rating-controls input{display:none}#create-book-form .rating-controls label{padding:5px 10px;cursor:pointer}#create-book-form .rating-controls label:hover{background:#3489ff;color:#fff}#create-book-form .active{background:#67a7ff;color:#fff}#create-book-form .controls{padding:10px;border-bottom:1px solid #ccc;maring-bottom:20px}#create-book-form label{padding-bottom:10px;display:inline-block}#create-book-form input,#create-book-form textarea{width:93%;padding:10px 15px}#create-book-form textarea{height:90pt}#create-book-form input.ng-invalid,#create-book-form textarea.ng-invalid{border:2px solid red;-webkit-box-shadow:0 0 2px red;box-shadow:0 0 2px red}#create-book-form input.ng-invalid~p,#create-book-form textarea.ng-invalid~p{color:red}a.btn{margin:5px 0;background:#223e57;text-decoration:none;padding:10px 15px;color:#fff;display:inline-block;width:90%}a.btn:hover{background:#3f72a0}",""])},function(o,t,e){var r,n;r=e(11),e(19),n=e(17),o.exports=["$scope","$route","$location",function(o,t,e){var a;return a=Number(t.current.params.id),o.book=r.find({id:a}),o.form_title='Редактирование книги "'+o.book.title+'"',o.save=function(){return o.create_book_form.$valid?(r.update(o.book),e.path("/books"),n("Книга сохранена")):console.log("error while saving")}}]},function(o,t,e){var r;r=e(11),o.exports=["$scope","$location",function(o,t){var e;return e=r.findAll(),o.authors=_.map(_.countBy(e,"author"),function(o,t){return{name:t,books:o}}),o.authorOrder="name",o.isActive=function(o){return t.path()===o}}]}]);
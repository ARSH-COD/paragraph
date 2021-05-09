name_of_the_menu_array = [];

 function submit() 
 {
  var name_1 = document.getElementById("name_of_the_menu_1").value;
  var name_2 = document.getElementById("name_of_the_menu_2").value; 
  var name_3 = document.getElementById("name_of_the_menu_3").value; 
  var name_4 = document.getElementById("name_of_the_menu_4").value;
  name_of_the_menu_array.push(name_1); 
  name_of_the_menu_array.push(name_2);
  name_of_the_menu_array.push(name_3); 
  name_of_the_menu_array.push(name_4);
  console.log(name_of_the_menu_array); 
  document.getElementById("display_name").innerHTML = name_of_the_menu_array;
  document.getElementById("submit_button").style.display = "none";
  document.getElementById("sort_button").style.display = "inline-block";
 }
 function sorting() 
 { 
     name_of_the_menu_array.sort();
      console.log(name_of_the_menu_array);
     document.getElementById("display_name").innerHTML = name_of_the_menu_array;
     }
     name_of_the_menu_array1 = [];
     function submit1() 
     {
      var name_5 = document.getElementById("name_of_the_menu_5").value;
      var name_6 = document.getElementById("name_of_the_menu_6").value; 
      var name_7 = document.getElementById("name_of_the_menu_7").value; 
      var name_8 = document.getElementById("name_of_the_menu_8").value;
      name_of_the_menu_array1.push(name_5); 
      name_of_the_menu_array1.push(name_6);
      name_of_the_menu_array1.push(name_7); 
      name_of_the_menu_array1.push(name_8);
      console.log(name_of_the_menu_array1); 
      document.getElementById("display_name1").innerHTML = name_of_the_menu_array1;
      document.getElementById("submit_button1").style.display = "none";
      document.getElementById("sort_button1").style.display = "inline-block";
     }
     function sorting1() 
     { 
         name_of_the_menu_array1.sort();
          console.log(name_of_the_menu_array1);
         document.getElementById("display_name1").innerHTML = name_of_the_menu_array1;
         }
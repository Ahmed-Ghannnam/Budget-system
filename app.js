(function () {
  //save in variable (data)
  var budget = 0;
  var income = 0;
  var expenses = 0;
  var incounter = 0;
  var excounter = 0;

  var inval = [];
  var indesc = [];
  var exval = [];
  var exdesc = [];

  //reset UI
  document.querySelector(".budget__income--value").textContent = 0;
  document.querySelector(".budget__expenses--value").textContent = 0;
  document.querySelector(".budget__value").textContent = 0;

  //select button
  var btn = document.querySelector(".add__btn");
  //add eventliner to button
  btn.addEventListener("click", handel);

  function handel() {
    console.log("test");
    //how to read informatiom from textinput
    //use data update UI numers and content num (income&expensee)
    var individaual = document.querySelector(".add__value").value;
    var descript = document.querySelector(".add__description").value;

    var posit = document.querySelector(".add__type").value;

    if (posit === "inc" && individaual > 0 && descript) {
      document.querySelector(".income__list").insertAdjacentHTML(
        "beforeend",
        ' <div class="item clearfix" id="income-' +
          incounter +
          '"> <div class="item__description">' +
          //ubdate descript UI
          descript +
          '</div><div class="right clearfix"><div class="item__value">+' +
          individaual +
          '</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      );
      //ubdate data
      inval[incounter] = individaual;
      indesc[incounter] = descript;
      console.log(inval);
      console.log(indesc);
      //ubdate income Data
      income += +individaual;
      //ubdate income UI
      document.querySelector(".budget__income--value").textContent = income;
      incounter++;
      console.log(incounter);

      //reset UI
      document.querySelector(".add__value").value = null;
      document.querySelector(".add__description").value = null;
      document.querySelector(".add__description").focus();
    } else if (posit === "exp" && individaual > 0 && descript) {
      if (excounter === 0) {
        excounter === 0;
      } else {
        excounter = exval.length;
      }
      document.querySelector(".expenses__list").insertAdjacentHTML(
        "beforeend",
        ' <div class="item clearfix" id="expenses-' +
          excounter +
          '"> <div class="item__description">' +
          //ubdate descript UI
          descript +
          '</div><div class="right clearfix"><div class="item__value">-' +
          //update individual items UI
          individaual +
          '</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      );
      //ubdate income UI & Data
      expenses += -individaual;
      document.querySelector(".budget__expenses--value").textContent = expenses;

      //ubdate data
      exval[excounter] = individaual;
      exdesc[excounter] = descript;
      console.log(exval);
      console.log(exdesc);
      excounter++;
      //reset UI
      document.querySelector(".add__value").value = null;
      document.querySelector(".add__description").value = null;
      document.querySelector(".add__description").focus();
    }
    //update DATA
    budget = income + expenses;
    //update Ui
    document.querySelector(".budget__value").textContent = budget;
    //Enter event
    // document
    //   .querySelector(".add__value")
    //   .addEventListener("keypress", function (press) {
    //     // If the user presses the "Enter" key on the keyboard
    //     if (press.key === "Enter") {
    //       document.querySelector(".add__btn").click();
    //     }
    //   });
  }
  //Enter event
  function HandelEnter(event) {
    if (event.key === "Enter") {
      handel();
    }
  }
  document.addEventListener("keypress", HandelEnter);
  //delete element
  document.querySelector("body").addEventListener("click", function (e) {
    if (e.target.classList.value === "ion-ios-close-outline") {
      var container =
        e.target.parentElement.parentElement.parentElement.parentElement;

      var type = container.id.split("-")[0];
      var id = container.id.split("-")[1];

      // var index = inval[type].findIndex(function (el) {
      //   return el.incounter === +id;
      // });
      // console.log(index, id);
      //  var index = inval[type].indexOf(id);

      //Update Data
      if (type == "income") {
        income -= Number(inval[id]);
        budget -= Number(inval[id]);
      }
      if (type == "expenses") {
        expenses += Number(exval[id]);
        budget += Number(exval[id]);
        console.log(expenses);
        console.log(type, id);
      }
      //Update UI
      e.target.parentElement.parentElement.parentElement.parentElement.replaceWith(
        ""
      );
      document.querySelector(".budget__value").textContent = budget;
      document.querySelector(".budget__expenses--value").textContent = expenses;
      document.querySelector(".budget__income--value").textContent = income;
    }
  });
})();

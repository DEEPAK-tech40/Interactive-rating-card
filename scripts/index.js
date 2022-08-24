const main = document.querySelector(".main");
const tContainer = document.querySelector(".thanks-container");

const btnEl = document.querySelector(".btn");
const r1El = document.querySelector("#r1");
const r2El = document.querySelector("#r2");
const r3El = document.querySelector("#r3");
const r4El = document.querySelector("#r4");
const r5El = document.querySelector("#r5");
const output = document.querySelector(".outcome");
const iBg = "hsla(214, 11%, 24%, 0.432)";
const hovBg = "hsl(25, 97%, 53%)";
const selectBg = "hsl(216, 12%, 54%)";
const selectColor = "white";
const iColor = "hsl(216, 12%, 54%)";

let val = 0;
let r1Selected = false;
let r2Selected = false;
let r3Selected = false;
let r4Selected = false;
let r5Selected = false;

// Functions---------------------------------------------------------------------------------------------------------------------

function setDefault() {
  val = 0;
  r1Selected = false;
  r2Selected = false;
  r3Selected = false;
  r4Selected = false;
  r5Selected = false;
  r1El.style.background = iBg;
  r2El.style.background = iBg;
  r3El.style.background = iBg;
  r4El.style.background = iBg;
  r5El.style.background = iBg;
  r1El.style.color = iColor;
  r2El.style.color = iColor;
  r3El.style.color = iColor;
  r4El.style.color = iColor;
  r5El.style.color = iColor;
}

function render(El) {
  setDefault();
  El.style.background = selectBg;
  El.style.color = selectColor;
  val = El.value;
}

function mouseOvr(El) {
  El.style.background = hovBg;
  El.style.color = selectColor;
}

function mouseOut(El) {
  El.style.background = iBg;
  El.style.color = iColor;
}

// ---------------------------------------------------------------------------------------------------------------------------

// EventListeners-------------------------------------------------------------------------------------------------------------

// OnClick--------------------------------------------------------------------------------------------------------------------
r1El.addEventListener("click", function () {
  render(r1El);
  r1Selected = true;
});

r2El.addEventListener("click", function () {
  render(r2El);
  r2Selected = true;
});

r3El.addEventListener("click", function () {
  render(r3El);
  r3Selected = true;
});

r4El.addEventListener("click", function () {
  render(r4El);
  r4Selected = true;
});

r5El.addEventListener("click", function () {
  render(r5El);
  r5Selected = true;
});

btnEl.addEventListener("click", function () {
  if (val > 0) {
    tContainer.style.visibility = "visible";
    main.style.visibility = "hidden";
    output.textContent = `You selected ${val} out of 5`;
  } else {
    alert("Select any one of the options.");
  }
});

// --------------------------------------------------------------------------------------------------------------------------

// Hover---------------------------------------------------------------------------------------------------------------------

// OnMouseOver---------------------------------------------------------------------------------------------------------------

r1El.onmouseover = function () {
  if (r1Selected) {
    return null;
  } else {
    mouseOvr(r1El);
  }
};

r2El.onmouseover = function () {
  if (r2Selected) {
    return null;
  } else {
    mouseOvr(r2El);
  }
};

r3El.onmouseover = function () {
  if (r3Selected) {
    return null;
  } else {
    mouseOvr(r3El);
  }
};

r4El.onmouseover = function () {
  if (r4Selected) {
    return null;
  } else {
    mouseOvr(r4El);
  }
};

r5El.onmouseover = function () {
  if (r5Selected) {
    return null;
  } else {
    mouseOvr(r5El);
  }
};

//--------------------------------------------------------------------------------------------------------------------------
//OnMouseOut----------------------------------------------------------------------------------------------------------------

r1El.onmouseout = function () {
  if (r1Selected) {
    return null;
  } else {
    mouseOut(r1El);
  }
};

r2El.onmouseout = function () {
  if (r2Selected) {
    return null;
  } else {
    mouseOut(r2El);
  }
};

r3El.onmouseout = function () {
  if (r3Selected) {
    return null;
  } else {
    mouseOut(r3El);
  }
};

r4El.onmouseout = function () {
  if (r4Selected) {
    return null;
  } else {
    mouseOut(r4El);
  }
};

r5El.onmouseout = function () {
  if (r5Selected) {
    return null;
  } else {
    mouseOut(r5El);
  }
};

//--------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------

var lastServerTime = 0;
//========= request 1 ========= 
request({pathname: "talks"}, function(error, response) {
  if (error) {
    reportError(error);
  } else {
    response = JSON.parse(response);
    displayTalks(response.talks);
    lastServerTime = response.serverTime;
    waitForChanges();
  }
});

var talkDiv = document.querySelector("#talks");
var shownTalks = Object.create(null);

var nameField = document.querySelector("#name");
nameField.value = localStorage.getItem("name") || "";
nameField.addEventListener("change", function() {
  localStorage.setItem("name", nameField.value);
});

//=========  request 2 ========= 
function request(options, callback) {
	console.log("request(options, callback)!!!");
  var req = new XMLHttpRequest();
  req.open(options.method || "GET", options.pathname, true);
  
  req.addEventListener("load", function() {
    if (req.status < 400)
      callback(null, req.responseText);//to request
    else
      callback(new Error("Request failed: " + req.statusText));
  });
  
  req.addEventListener("error", function() {
    callback(new Error("Network error"));
  });
  
  req.send(options.body || null);
}

//=========  new message submit ========= 
var talkForm = document.querySelector("#newtalk");
talkForm.addEventListener("submit", function(event) {
  event.preventDefault();
  request({ 
			pathname: talkURL(talkForm.elements.title.value),
            method: "PUT",
            body: JSON.stringify({
             presenter: nameField.value,
             summary: talkForm.elements.summary.value
           })
		  }, reportError);
  talkForm.reset();
});

//----------------------------------------  Function ----------------------------------------

//---------- delete talk ----------
function deleteTalk(title) {
  request({pathname: talkURL(title), method: "DELETE"},
          reportError);
}

//---------- add comment ----------
function addComment(title, comment) {
  var comment = {author: nameField.value, message: comment};
  request({pathname: talkURL(title) + "/comments",
           body: JSON.stringify(comment),
           method: "POST"},
          reportError);
}

function talkURL(title) {
  return "talks/" + encodeURIComponent(title);
}

function drawTalk(talk) {
  var node = instantiateTemplate("talk", talk);
  var comments = node.querySelector(".comments");
  talk.comments.forEach(function(comment) {
    comments.appendChild(
      instantiateTemplate("comment", comment));
  });

  node.querySelector("button.del").addEventListener(
    "click", deleteTalk.bind(null, talk.title));

  var form = node.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    addComment(talk.title, form.elements.comment.value);
    form.reset();
  });
  return node;
}

function reportError(error) {
  if (error)
    alert(error.toString());
}

function displayTalks(talks) {
  talks.forEach(function(talk) {
    var shown = shownTalks[talk.title];
    if (talk.deleted) {
      if (shown) {
        talkDiv.removeChild(shown);
        delete shownTalks[talk.title];
      }
    } else {
      var node = drawTalk(talk);
      if (shown)
        talkDiv.replaceChild(node, shown);
      else
        talkDiv.appendChild(node);
      shownTalks[talk.title] = node;
    }
  });
}

function waitForChanges() {
  request({pathname: "talks?changesSince=" + lastServerTime},
          function(error, response) {
    if (error) {
      setTimeout(waitForChanges, 2500);
      console.error(error.stack);
    } else {
      response = JSON.parse(response);
      displayTalks(response.talks);
      lastServerTime = response.serverTime;
      waitForChanges();
    }
  });
}

function instantiateTemplate(name, values) {
  function instantiateText(text) {
    return text.replace(/\{\{(\w+)\}\}/g, function(_, name) {
      return values[name];
    });
  }
  function instantiate(node) {
    if (node.nodeType == document.ELEMENT_NODE) {
      var copy = node.cloneNode();
      for (var i = 0; i < node.childNodes.length; i++)
        copy.appendChild(instantiate(node.childNodes[i]));
      return copy;
    } else if (node.nodeType == document.TEXT_NODE) {
      return document.createTextNode(
               instantiateText(node.nodeValue));
    } else {
      return node;
    }
  }

  var template = document.querySelector("#template ." + name);
  return instantiate(template);
}
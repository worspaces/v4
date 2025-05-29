var tab = localStorage.getItem("tab");

if (tab) {
try {
  var tabData = JSON.parse(tab);
} catch {
  var tabData = {};
}
} else {
var tabData = {};
}

var settingsDefaultTab = {
  title: "Study.com",
  icon: "/images/app-logo-transgender.png",
  scriptSrc: "/app.js"
};
document.addEventListener("DOMContentLoaded", function () {
  const notifs = document.createElement('div');
  notifs.style.position = 'fixed';
  notifs.style.zIndex = '9999'
  notifs.id = 'notifs'
  notifs.style.bottom = '10px';
  notifs.style.right = '10px';
  notifs.style.display = 'flex';
  notifs.style.flexDirection = 'column-reverse';
  notifs.style.gap = '5px';
  document.body.appendChild(notifs);
});
function showNotification(message, duration = 3000) {
  let notifs = document.getElementById('notifs')
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.background = 'rgba(44, 44, 44, 0.8)';
  notification.style.color = 'white';
  notification.style.padding = '10px 20px';
  notification.style.borderRadius = '5px';
  notification.style.border = '5px solid #00ff9d;'
  notification.style.opacity = '0';
  notification.style.transition = 'opacity 0.3s';
  notification.style.zIndex = '9999'
  notification.style.position = 'relative'
  notifs.prepend(notification);
  console.log('sent!')
  requestAnimationFrame(() => {
      notification.style.opacity = '1';
  });
  
  setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => {
          notification.remove();
      }, 300);
  }, duration);
}
function setTitle(title = "") {
  if (title) {
    document.title = title;
  } else {
    document.title = settingsDefaultTab.title;
  }

  var tab = localStorage.getItem("tab");

  if (tab) {
    try {
      var tabData = JSON.parse(tab);
    } catch {
      var tabData = {};
    }
  } else {
    var tabData = {};
  }

  if (title) {
    tabData.title = title;
  } else {
    delete tabData.title;
  }

  localStorage.setItem("tab", JSON.stringify(tabData));
}

function setFavicon(icon) {
  if (icon) {
    document.querySelector("link[rel='icon']").href = icon;
  } else {
    document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  }

  var tab = localStorage.getItem("tab");

  if (tab) {
    try {
      var tabData = JSON.parse(tab);
    } catch {
      var tabData = {};
    }
  } else {
    var tabData = {};
  }

  if (icon) {
    tabData.icon = icon;
  } else {
    delete tabData.icon;
  }

  localStorage.setItem("tab", JSON.stringify(tabData));
}

function setCloak() {
  var cloak = document.getElementById("premadecloaks").value;
  switch (cloak) {
    case "defaultsettings":
    setTitle("Study.com");
    setFavicon("/images/app-logo-transgender.png");
    localStorage.setItem("tab", JSON.stringify({}));
    location.reload();
    break;
    case "search":
      setTitle("Google");
      setFavicon("/assets/img/favicons/google.ico");
      location.reload();
      break;
    case "drive":
      setTitle("My Drive - Google Drive");
      setFavicon("/assets/img/favicons/google-drive-ico.ico");
      location.reload();
      break;
    case "classroom":
      setTitle("Google Classroom");
      setFavicon("/assets/img/favicons/google-classroom.ico");
      location.reload();
      break;
    case "gmail":
      setTitle("Gmail");
      setFavicon("/assets/img/favicons/gmail.ico");
      location.reload();
      break;
    case "word":
      setTitle("Document.docx");
      setFavicon("/assets/img/favicons/word.ico");
      location.reload();
      break;
    case "powerpoint":
      setTitle("Presentation.pptx");
      setFavicon("/assets/img/favicons/powerpoint.ico");
      location.reload();
      break;
    case "youtube": 
      setTitle("YouTube");
      setFavicon("/assets/img/favicons/youtube.ico");
      location.reload();
      break;
    case "calendar":
      setTitle("Google Calendar");
      setFavicon("/assets/img/favicons/google-calender.ico");
      location.reload();
      break;
    case "meets":
      setTitle("Google Meet");
      setFavicon("/assets/img/favicons/google-meet.ico");
      location.reload();
      break;
    case "canvas":
      setTitle("Canvas");
      setFavicon("/assets/img/favicons/canvas.ico");
      location.reload();
      break;
    case "zoom":
      setTitle("Zoom");
      setFavicon("/assets/img/favicons/zoom.ico");
      location.reload();
      break;
    case "khan":
      setTitle("Khan Academy"); 
      setFavicon("/assets/img/favicons/khan-academy.ico");
      location.reload();
      break;
    case "fakesearch":
      setTitle("calculator - Google Search"); 
      setFavicon("/assets/img/favicons/google.ico");
      location.reload();
      break;
    case "brunysex":
      setTitle("BrunysIXL"); 
      setFavicon("/images/sillypartners/brunysixl.png");
      location.reload();
      break;
    case "sizzlecentral":
      setTitle("Szvy Central"); 
      setFavicon("/images/sillypartners/szvy.png");
      location.reload();
      break;
    case "meximath":
      setTitle("MexiMath"); 
      setFavicon("/images/sillypartners/meximath.png");
      location.reload();
      break;
    case "pablocp":
      setTitle("PabloCP"); 
      setFavicon("/assets/img/favicons/pablo.png");
      location.reload();
      break;
  }
}

function resetTab() {
  setTitle("Study.com");
  setFavicon("/images/app-logo-transgender.png");
   var tab = localStorage.getItem("tab");

   if (tab) {
     try {
       var tabData = JSON.parse(tab);
       var theme = tabData.theme
       var mobiledata
     } catch {
       var tabData = {};
     }
   } else {
     var tabData = {};
   }
 
   if (theme) {
     const consttheme = tabData.theme;
     localStorage.setItem("tab", JSON.stringify({}));
     setTheme(consttheme);
   } 
   else if (mobiledata){
    const constmobiledata = tabData.mobilescreen;
    localStorage.setItem("tab", JSON.stringify({}));
    var tabData = JSON.parse(localStorage.getItem("tab")) || {};
    tabData.mobilescreen = constmobiledata;
    localStorage.setItem("tab", JSON.stringify(tabData));
   }
   else {
    localStorage.setItem("tab", JSON.stringify({}));
   }
  location.reload();
}

window.onload = () => {
  if (onLoadData) {
    eval(onLoadData);
  }
};

window.onerror = (e) => {
  throw new Error(e);
};

var tab = localStorage.getItem('tab');
if (tab) {
  try {
    var tabData = JSON.parse(tab);
  } catch {
    var tabData = {};
  }
} else {
  var tabData = {};
}

if (tabData.title) {
  document.title = tabData.title;
}

if (tabData.icon) {
  document.querySelector('link[rel="icon"]').href = tabData.icon;
}

function setTheme(theme) {
  var styleTag = document.getElementById("theme-style");
  if (!styleTag) {
    styleTag = document.createElement("style");
    styleTag.id = "theme-style";
    document.head.appendChild(styleTag);
  }


  var tabData = JSON.parse(localStorage.getItem("tab")) || {};


  switch (theme) {
    case "teto":
      styleTag.innerHTML = "@import url('/stuff/themes/teto/teto.min.css')";
      break; 
    case "miku":
      styleTag.innerHTML = "@import url('/stuff/themes/miku/miku.min.css')";
      document.getElementById('cornerimage').src = "/stuff/themes/miku/miku.png"
      break;
      case "neru":
        styleTag.innerHTML = "@import url('/stuff/themes/neru/neru.min.css')"; 
        document.getElementById('cornerimage').src = "/stuff/themes/neru/neru.png"
        break;
        case "szvy":
          styleTag.innerHTML = "@import url('/stuff/themes/szvy/szvy.min.css')";
          
          break;
          case "mexi":
            styleTag.innerHTML = "@import url('/stuff/themes/mexi/mexi.min.css')";
            
            break;
            case "cryptic":
              styleTag.innerHTML = "body{background-color:#191520}#roddyrichhesbox{position:absolute;top:30%;left:50%;overflow:hidden;transform:translateX(-50%);box-shadow:0 0 20px #8667ad,0 0 30px #8667ad,0 0 40px #8667ad,0 0 50px #8667ad;min-width:350px;margin:0 auto;border:3px solid #7d5f81;border-radius:10px;background:#262129;min-height:250px;padding:20px;z-index:9997;text-align:center}#roddyrichheshomebox{position:absolute;top:14%;left:50%;overflow:auto;transform:translateX(-50%);box-shadow:0 0 20px #8667ad,0 0 30px #8667ad,0 0 40px #8667ad,0 0 50px #8667ad;min-width:350px;width:35%;margin:0 auto;border:3px solid #7d5f81;border-radius:10px;background:#262129;min-height:250px;padding:20px;z-index:9997;text-align:center}#gamering{position:absolute;top:20%;left:50%;overflow:auto;transform:translateX(-50%);box-shadow:0 0 20px #8667ad,0 0 30px #8667ad,0 0 40px #8667ad,0 0 50px #8667ad;min-width:350px;height:63%;width:76%;margin:0 auto;border:3px solid #7d5f81;border-radius:10px;background:#262129;min-height:250px;padding:20px;z-index:9999;text-align:center}::-webkit-scrollbar{width:8px;outline:1px solid var(--black)}::-webkit-scrollbar-track{background:var(--light-gray)}::-webkit-scrollbar-thumb{background:#8667ad;border-radius:20px;outline:1px solid var(--black)}.apps-gallery a::before{position:absolute;top:10%;left:50%;transform:translate(-50%,-50%);color:#7d5f81;font-weight:700;font-size:1.5em;opacity:0;transition:opacity 0.3s ease;box-shadow:0 0 10px #8667ad,0 0 20px #8667ad,0 0 30px #8667ad}.apps-gallery a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #8667ad,0 0 20px #8667ad,0 0 30px #8667ad}.gallery a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #8667ad,0 0 20px #8667ad,0 0 30px #8667ad}.gallery a::before{position:absolute;top:80%;left:50%;padding:5px;border-radius:25px;background-color:#000;background-size:cover;background-repeat:no-repeat;transform:translate(-50%,-50%);color:#fff;font-weight:700;font-size:1.5em;opacity:0;transition:all .2s ease-in-out;box-shadow:0 0 10px #8667ad,0 0 20px #8667ad,0 0 30px #8667ad}.partner-gallery a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #8667ad,0 0 20px #8667ad,0 0 30px #8667ad}button{font-size:1.2em;padding:15px 30px;margin:10px;background-color:#261f2e;color:#fff;border:4px solid #231c2b;;border-radius:14px;cursor:pointer;transition:all .2s ease-in-out;box-shadow:0 4px 6px rgb(0 0 0 / .2);z-index:9999}button:hover{background-color:#352c3f;border:4px solid #b188e2;box-shadow:0 0 10px #8667ad,0 0 20px #8667ad,0 0 30px #8667ad;transition:all .2s ease-in-out}#headerbtn:hover{background-color:#352c3f;box-shadow:0 0 5px #8667ad,0 0 15px #8667ad,0 0 25px #8667ad;transition:all .2s ease-in-out}#reloadButton:hover{background-color:#352c3f;box-shadow:0 0 5px #8667ad,0 0 15px #8667ad,0 0 25px #8667ad;transition:all .2s ease-in-out}#uv-address{font-size:1.2em;padding:15px 5px;margin:10px;background-color:#261f2e;color:#fff;border:2px solid #1d161c;min-width:40px;border-radius:8px;cursor:auto;box-shadow:0 4px 6px rgb(0 0 0 / .2);z-index:9999;text-decoration-color:#fff;transition:all .2s ease-in-out;overflow:visible;text-align:center;transform:scaleX(30px)}#uv-address:hover{border:2px solid #b188e2;transition:all .2s ease-in-out}#uv-address:focus{border:2px solid #b188e2;transition:all .2s ease-in-out;outline:0;box-shadow:0 0 5px #8667ad,0 0 15px #8667ad,0 0 25px #8667ad}input{font-size:1.2em;padding:15px 5px;margin:10px;background-color:#261f2e;color:#fff;border:2px solid #1d161c;min-width:40px;border-radius:8px;cursor:auto;box-shadow:0 4px 6px rgb(0 0 0 / .2);z-index:9999;text-decoration-color:#fff;transition:all .2s ease-in-out;overflow:visible;text-align:center;transform:scaleX(30px)}input:hover{border:2px solid #b188e2;transition:all .2s ease-in-out}input:focus{border:2px solid #b188e2;transition:all .2s ease-in-out;outline:0;box-shadow:0 0 5px #8667ad,0 0 15px #8667ad,0 0 25px #8667ad}.proxy-quicklinks a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #8667ad,0 0 20px #8667ad,0 0 30px #8667ad}select{font-size:1.2em;padding:15px 5px;margin:10px;background-color:#080808;color:#fff;border:2px solid #141414;min-width:40px;border-radius:8px;cursor:auto;box-shadow:0 4px 6px rgb(0 0 0 / .2);z-index:9999;text-decoration-color:#fff;transition:all .2s ease-in-out;overflow:visible;text-align:center;transform:scaleX(30px)}select:hover{border:2px solid #b188e2;transition:all .2s ease-in-out}select:focus-visible{border:2px solid #b188e2;transition:all .2s ease-in-out;outline:0;box-shadow:0 0 5px #8667ad,0 0 15px #8667ad,0 0 25px #8667ad}#stupidpfpbutton{margin:0;cursor:pointer;z-index:9999;opacity:1;padding:0;background-color:#000;border:0;box-shadow:0;top:4px;border-radius:100%;transform:translateY(6px)}#stupidpfpbutton:hover{margin:0;cursor:pointer;z-index:9999;opacity:1;padding:0;background-color:#000;border:0;box-shadow:0 0 0 #81bb92,0 0 0 #81bb92,0 0 0 #81bb92}";
              setScriptSrc()
              break;
              case "halloween":
                styleTag.innerHTML = "body{background-color:#0c0c11}#roddyrichhesbox{position:absolute;top:30%;left:50%;overflow:hidden;transform:translateX(-50%);box-shadow:0 0 20px #c97250,0 0 30px #c97250,0 0 40px #c97250,0 0 50px #c97250;min-width:350px;margin:0 auto;border:3px solid #ffca57;border-radius:10px;background:#000;min-height:250px;padding:20px;z-index:9997;text-align:center}#roddyrichheshomebox{position:absolute;top:14%;left:50%;overflow:auto;transform:translateX(-50%);box-shadow:0 0 20px #c97250,0 0 30px #c97250,0 0 40px #c97250,0 0 50px #c97250;min-width:350px;width:35%;margin:0 auto;border:3px solid #ffca57;border-radius:10px;background:#000;min-height:250px;padding:20px;z-index:9997;text-align:center}#gamering{position:absolute;top:20%;left:50%;overflow:auto;transform:translateX(-50%);box-shadow:0 0 20px #c97250,0 0 30px #c97250,0 0 40px #c97250,0 0 50px #c97250;min-width:350px;height:63%;width:76%;margin:0 auto;border:3px solid #ffca57;border-radius:10px;background:#000;min-height:250px;padding:20px;z-index:9999;text-align:center}::-webkit-scrollbar{width:8px;outline:1px solid var(--black)}::-webkit-scrollbar-track{background:var(--light-gray)}::-webkit-scrollbar-thumb{background:#ffca57;border-radius:20px;outline:1px solid var(--black)}.apps-gallery a::before{position:absolute;top:10%;left:50%;transform:translate(-50%,-50%);color:#ffca57;font-weight:700;font-size:1.5em;opacity:0;transition:opacity 0.3s ease;text-shadow:0 0 10px #ffca57,0 0 20px #ffca57,0 0 30px #ffca57}.apps-gallery a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #ffca57,0 0 20px #ffca57,0 0 30px #ffca57}.gallery a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #ffca57,0 0 20px #ffca57,0 0 30px #ffca57}.gallery a::before{position:absolute;top:80%;left:50%;padding:5px;border-radius:25px;background-color:#000;background-size:cover;background-repeat:no-repeat;transform:translate(-50%,-50%);color:#fff;font-weight:700;font-size:1.5em;opacity:0;transition:all .2s ease-in-out;text-shadow:0 0 10px #ffca57,0 0 20px #ffca57,0 0 30px #ffca57}.partner-gallery a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #ffca57,0 0 20px #ffca57,0 0 30px #ffca57}button{font-size:1.2em;padding:15px 30px;margin:10px;background-color:#000;color:#fff;border:4px solid #141414;;border-radius:8px;cursor:pointer;transition:background-color 0.3s ease;box-shadow:0 4px 6px rgb(0 0 0 / .2);z-index:9999}button:hover{background-color:#d6b264;border:4px solid #c97250;;box-shadow:0 0 10px #ffca57,0 0 20px #ffca57,0 0 30px #ffca57;transition:all .2s ease-in-out}#headerbtn:hover{background-color:#d6b264;box-shadow:0 0 5px #ffca57,0 0 15px #ffca57,0 0 25px #ffca57;transition:all .2s ease-in-out}#reloadButton:hover{background-color:#d6b264;box-shadow:0 0 5px #ffca57,0 0 15px #ffca57,0 0 25px #ffca57;transition:all .2s ease-in-out}#uv-address:hover{border:4px solid #d6b264;transition:all .2s ease-in-out}#uv-address:focus{border:4px solid #d6b264;transition:all .2s ease-in-out;width:60%;outline:0;box-shadow:0 0 5px #ffca57,0 0 15px #ffca57,0 0 25px #ffca57}input:hover{border:4px solid #d6b264;transition:all .2s ease-in-out}input:focus{border:4px solid #d6b264;transition:all .2s ease-in-out;outline:0;box-shadow:0 0 5px #ffca57,0 0 15px #ffca57,0 0 25px #ffca57}.proxy-quicklinks a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #ffca57,0 0 20px #ffca57,0 0 30px #ffca57}select:hover{border:4px solid #d6b264;transition:all .2s ease-in-out}select:focus-visible{border:4px solid #d6b264;transition:all .2s ease-in-out;outline:0;box-shadow:0 0 5px #ffca57,0 0 15px #ffca57,0 0 25px #ffca57}";
                setScriptSrc()
                
                break;
                case "EVIL":
                  styleTag.innerHTML = "html{height:100%;width:100%;background:#0d0d0d}#roddyrichhesbox{position:absolute;top:30%;left:50%;overflow:hidden;transform:translateX(-50%);box-shadow:0 0 20px #ff5858,0 0 30px #ff5858,0 0 40px #ff5858,0 0 50px #ff5858;min-width:350px;margin:0 auto;border:3px solid #ff2c2c;border-radius:10px;background:rgb(48 46 45);min-height:250px;padding:20px;z-index:9997;text-align:center}#roddyrichheshomebox{position:absolute;top:14%;left:50%;overflow:auto;transform:translateX(-50%);box-shadow:0 0 20px #ff5858,0 0 30px #ff5858,0 0 40px #ff5858,0 0 50px #ff5858;min-width:350px;width:35%;margin:0 auto;border:3px solid #ff2c2c;border-radius:10px;background:rgb(48 46 45);min-height:250px;padding:20px;z-index:9997;text-align:center}#gamering{position:absolute;top:20%;left:50%;overflow:auto;transform:translateX(-50%);box-shadow:0 0 20px #ff5858,0 0 30px #ff5858,0 0 40px #ff5858,0 0 50px #ff5858;min-width:350px;height:63%;width:76%;margin:0 auto;border:3px solid #ff2c2c;border-radius:10px;background:rgb(48 46 45);min-height:250px;padding:20px;z-index:9999;text-align:center}::-webkit-scrollbar{width:8px;outline:1px solid var(--rgb(48 46 45))}::-webkit-scrollbar-track{background:var(--light-gray)}::-webkit-scrollbar-thumb{background:#ff5858;border-radius:20px;outline:1px solid var(--rgb(48 46 45))}.apps-gallery a::before{position:absolute;top:10%;left:50%;transform:translate(-50%,-50%);color:#ff2c2c;font-weight:700;font-size:1.5em;opacity:0;transition:opacity 0.3s ease;text-shadow:0 0 10px #ff5858,0 0 20px #ff5858,0 0 30px #ff5858}.apps-gallery a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #ff5858,0 0 20px #ff5858,0 0 30px #ff5858}.gallery a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #ff5858,0 0 20px #ff5858,0 0 30px #ff5858}.gallery a::before{position:absolute;top:80%;left:50%;padding:5px;border-radius:25px;background-color:rgb(48 46 45);background-size:cover;background-repeat:no-repeat;transform:translate(-50%,-50%);color:#fff;font-weight:700;font-size:1.5em;opacity:0;transition:all .2s ease-in-out;text-shadow:0 0 10px #ff5858,0 0 20px #ff5858,0 0 30px #ff5858}.partner-gallery a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #ff5858,0 0 20px #ff5858,0 0 30px #ff5858}button{font-size:1.2em;padding:15px 30px;margin:10px;background-color:#000;color:#fff;border:4px solid #141414;;border-radius:8px;cursor:pointer;transition:background-color 0.3s ease;box-shadow:0 4px 6px rgb(0 0 0 / .2);z-index:9999}button:hover{background-color:#ff2c2c;border:4px solid #ff5858;;box-shadow:0 0 10px #ff5858,0 0 20px #ff5858,0 0 30px #ff5858;transition:all .2s ease-in-out}#headerbtn:hover{background-color:#ff2c2c;box-shadow:0 0 5px #ff5858,0 0 15px #ff5858,0 0 25px #ff5858;transition:all .2s ease-in-out}#reloadButton:hover{background-color:#ff2c2c;box-shadow:0 0 5px #ff5858,0 0 15px #ff5858,0 0 25px #ff5858;transition:all .2s ease-in-out}#uv-address:hover{border:4px solid #ff2c2c;transition:all .2s ease-in-out}#uv-address:focus{border:4px solid #ff2c2c;transition:all .2s ease-in-out;width:60%;outline:0;box-shadow:0 0 5px #ff5858,0 0 15px #ff5858,0 0 25px #ff5858}input:hover{border:4px solid #ff2c2c;transition:all .2s ease-in-out}input:focus{border:4px solid #ff2c2c;transition:all .2s ease-in-out;outline:0;box-shadow:0 0 5px #ff5858,0 0 15px #ff5858,0 0 25px #ff5858}.proxy-quicklinks a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #ff5858,0 0 20px #ff5858,0 0 30px #ff5858}select:hover{border:4px solid #ff2c2c;transition:all .2s ease-in-out}select:focus-visible{border:4px solid #ff2c2c;transition:all .2s ease-in-out;outline:0;box-shadow:0 0 5px #ff5858,0 0 15px #ff5858,0 0 25px #ff5858}";
                  setScriptSrc()
                  
                  break;
                  case "chillax":
                    styleTag.innerHTML = "body{background:url(/images/pixel-jeff.gif) no-repeat center/cover;margin:0;height:100vh}#roddyrichhesbox{position:absolute;top:30%;left:50%;overflow:hidden;transform:translateX(-50%);box-shadow:0 0 20px #ffa17c00,0 0 30px #ffa17c00,0 0 40px #ffa17c00,0 0 50px #fff0;min-width:350px;margin:0 auto;border:3px solid #61523334;border-radius:10px;background:rgb(37 37 37 / .527);backdrop-filter:blur(20px);min-height:250px;padding:20px;z-index:9997;text-align:center}#roddyrichheshomebox{position:absolute;top:14%;left:50%;overflow:auto;transform:translateX(-50%);box-shadow:0 0 20px #ffa17c00,0 0 30px #ffa17c00,0 0 40px #ffa17c00,0 0 50px #fff0;min-width:350px;width:35%;margin:0 auto;border:3px solid #61523334;background:rgb(37 37 37 / .527);backdrop-filter:blur(20px);min-height:250px;padding:20px;z-index:9997;text-align:center}#gamering{position:absolute;top:20%;left:50%;overflow:auto;transform:translateX(-50%);box-shadow:0 0 20px #ffa17c00,0 0 30px #ffa17c00,0 0 40px #ffa17c00,0 0 50px #fff0;min-width:350px;height:63%;width:76%;margin:0 auto;border:3px solid #615233;border-radius:10px;background:rgb(37 37 37 / .39);min-height:250px;padding:20px;z-index:9999;text-align:center;backdrop-filter:blur(20px)}::-webkit-scrollbar{width:8px;outline:1px solid var(--black)}::-webkit-scrollbar-track{background:var(--light-gray)}::-webkit-scrollbar-thumb{background:#615233;border-radius:20px;outline:1px solid var(--black)}.apps-gallery a::before{position:absolute;top:10%;left:50%;transform:translate(-50%,-50%);color:#615233;font-weight:700;font-size:1.5em;opacity:0;transition:opacity 0.3s ease;text-shadow:0 0 10px #615233,0 0 20px #615233,0 0 30px #615233}.apps-gallery a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #615233,0 0 20px #615233,0 0 30px #615233}.gallery a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #615233,0 0 20px #615233,0 0 30px #615233}.gallery a::before{position:absolute;top:80%;left:50%;padding:5px;border-radius:25px;background-color:#000;background-size:cover;background-repeat:no-repeat;transform:translate(-50%,-50%);color:#fff;font-weight:700;font-size:1.5em;opacity:0;transition:all .2s ease-in-out;text-shadow:0 0 10px #615233,0 0 20px #615233,0 0 30px #615233}.partner-gallery a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #615233,0 0 20px #615233,0 0 30px #615233}button{font-size:1.2em;padding:15px 30px;margin:10px;background-color:#000;color:#fff;border:4px solid #141414;;border-radius:8px;cursor:pointer;transition:background-color 0.3s ease;box-shadow:0 4px 6px rgb(0 0 0 / .2);z-index:9999}button:hover{background-color:#d6b264;border:4px solid #c97250;;box-shadow:0 0 10px #615233,0 0 20px #615233,0 0 30px #615233;transition:all .2s ease-in-out}#headerbtn:hover{background-color:#d6b264;box-shadow:0 0 5px #615233,0 0 15px #615233,0 0 25px #615233;transition:all .2s ease-in-out}#reloadButton:hover{background-color:#d6b264;box-shadow:0 0 5px #615233,0 0 15px #615233,0 0 25px #615233;transition:all .2s ease-in-out}#uv-address:hover{border:4px solid #d6b264;transition:all .2s ease-in-out}#uv-address:focus{border:4px solid #d6b264;transition:all .2s ease-in-out;width:60%;outline:0;box-shadow:0 0 5px #615233,0 0 15px #615233,0 0 25px #615233}input:hover{border:4px solid #d6b264;transition:all .2s ease-in-out}input:focus{border:4px solid #d6b264;transition:all .2s ease-in-out;outline:0;box-shadow:0 0 5px #615233,0 0 15px #615233,0 0 25px #615233}.proxy-quicklinks a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #615233,0 0 20px #615233,0 0 30px #615233}select:hover{border:4px solid #d6b264;transition:all .2s ease-in-out}select:focus-visible{border:4px solid #d6b264;transition:all .2s ease-in-out;outline:0;box-shadow:0 0 5px #615233,0 0 15px #615233,0 0 25px #615233}#particles-js{display:none}header{backdrop-filter:blur(20px);background-color:#0000008c}#gameBar{background-color:#0000008c;backdrop-filter:blur(20px)}";
                    setScriptSrc()
                    
                    break;
                    case "crystalic":
                      styleTag.innerHTML = "body{background:url(/images/crystalic.gif) no-repeat center/cover;margin:0;height:100vh}#roddyrichhesbox{position:absolute;top:30%;left:50%;overflow:hidden;transform:translateX(-50%);box-shadow:0 0 20px #9054ff,0 0 30px #9054ff,0 0 40px #9054ff,0 0 50px #9054ff;min-width:350px;margin:0 auto;border:3px solid #9054ff;border-radius:10px;background:rgb(37 37 37 / .527);backdrop-filter:blur(20px);min-height:250px;padding:20px;z-index:9997;text-align:center}#roddyrichheshomebox{position:absolute;top:14%;left:50%;overflow:auto;transform:translateX(-50%);box-shadow:0 0 20px #9054ff,0 0 30px #9054ff,0 0 40px #9054ff,0 0 50px #9054ff;min-width:350px;width:35%;margin:0 auto;border:3px solid #9054ff;background:rgb(37 37 37 / .527);backdrop-filter:blur(20px);min-height:250px;padding:20px;z-index:9997;text-align:center}#gamering{position:absolute;top:20%;left:50%;overflow:auto;transform:translateX(-50%);box-shadow:0 0 20px #9054ff,0 0 30px #9054ff,0 0 40px #9054ff,0 0 50px #9054ff;min-width:350px;height:63%;width:76%;margin:0 auto;border:3px solid #9054ff;border-radius:10px;background:rgb(37 37 37 / .39);min-height:250px;padding:20px;z-index:9999;text-align:center;backdrop-filter:blur(20px)}::-webkit-scrollbar{width:8px;outline:1px solid var(--black)}::-webkit-scrollbar-track{background:var(--light-gray)}::-webkit-scrollbar-thumb{background:#9054ff;border-radius:20px;outline:1px solid var(--black)}.apps-gallery a::before{position:absolute;top:10%;left:50%;transform:translate(-50%,-50%);color:#9054ff;font-weight:700;font-size:1.5em;opacity:0;transition:opacity 0.3s ease;text-shadow:0 0 10px #9054ff,0 0 20px #9054ff,0 0 30px #9054ff}.apps-gallery a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #9054ff,0 0 20px #9054ff,0 0 30px #9054ff}.gallery a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #9054ff,0 0 20px #9054ff,0 0 30px #9054ff}.gallery a::before{position:absolute;top:80%;left:50%;padding:5px;border-radius:25px;background-color:#000;background-size:cover;background-repeat:no-repeat;transform:translate(-50%,-50%);color:#fff;font-weight:700;font-size:1.5em;opacity:0;transition:all .2s ease-in-out;text-shadow:0 0 10px #9054ff,0 0 20px #9054ff,0 0 30px #9054ff}.partner-gallery a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #9054ff,0 0 20px #9054ff,0 0 30px #9054ff}button{font-size:1.2em;padding:15px 30px;margin:10px;background-color:#000;color:#fff;border:4px solid #141414;;border-radius:8px;cursor:pointer;transition:background-color 0.3s ease;box-shadow:0 4px 6px rgb(0 0 0 / .2);z-index:9999}button:hover{background-color:#9054ff;border:4px solid #6a50c9;;box-shadow:0 0 10px #9054ff,0 0 20px #9054ff,0 0 30px #9054ff;transition:all .2s ease-in-out}#headerbtn:hover{background-color:#9054ff;box-shadow:0 0 5px #9054ff,0 0 15px #9054ff,0 0 25px #9054ff;transition:all .2s ease-in-out}#reloadButton:hover{background-color:#9054ff;box-shadow:0 0 5px #9054ff,0 0 15px #9054ff,0 0 25px #9054ff;transition:all .2s ease-in-out}#uv-address:hover{border:4px solid #9054ff;transition:all .2s ease-in-out}#uv-address:focus{border:4px solid #9054ff;transition:all .2s ease-in-out;width:60%;outline:0;box-shadow:0 0 5px #9054ff,0 0 15px #9054ff,0 0 25px #9054ff}input:hover{border:4px solid #9054ff;transition:all .2s ease-in-out}input:focus{border:4px solid #9054ff;transition:all .2s ease-in-out;outline:0;box-shadow:0 0 5px #9054ff,0 0 15px #9054ff,0 0 25px #9054ff}.proxy-quicklinks a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #9054ff,0 0 20px #9054ff,0 0 30px #9054ff}select:hover{border:4px solid #9054ff;transition:all .2s ease-in-out}select:focus-visible{border:4px solid #9054ff;transition:all .2s ease-in-out;outline:0;box-shadow:0 0 5px #9054ff,0 0 15px #9054ff,0 0 25px #9054ff}#particles-js{display:none}header{backdrop-filter:blur(20px);background-color:#0000008c}#gameBar{background-color:#0000008c;backdrop-filter:blur(20px)}";
                      setScriptSrc()
                      
                      break;
                      case "snowy":
                        styleTag.innerHTML = "body{background:url(/images/mountain.gif) no-repeat center/cover;margin:0;height:100vh}#roddyrichhesbox{position:absolute;top:30%;left:50%;overflow:hidden;transform:translateX(-50%);box-shadow:0 0 20px #caeaff,0 0 30px #caeaff,0 0 40px #caeaff,0 0 50px #caeaff;min-width:350px;margin:0 auto;border:3px solid #caeaff;border-radius:10px;background:rgb(37 37 37 / .527);backdrop-filter:blur(20px);min-height:250px;padding:20px;z-index:9997;text-align:center}#roddyrichheshomebox{position:absolute;top:14%;left:50%;overflow:auto;transform:translateX(-50%);box-shadow:0 0 20px #caeaff,0 0 30px #caeaff,0 0 40px #caeaff,0 0 50px #caeaff;min-width:350px;width:35%;margin:0 auto;border:3px solid #caeaff;background:rgb(37 37 37 / .527);backdrop-filter:blur(20px);min-height:250px;padding:20px;z-index:9997;text-align:center}#gamering{position:absolute;top:20%;left:50%;overflow:auto;transform:translateX(-50%);box-shadow:0 0 20px #caeaff,0 0 30px #caeaff,0 0 40px #caeaff,0 0 50px #caeaff;min-width:350px;height:63%;width:76%;margin:0 auto;border:3px solid #caeaff;border-radius:10px;background:rgb(37 37 37 / .39);min-height:250px;padding:20px;z-index:9999;text-align:center;backdrop-filter:blur(20px)}::-webkit-scrollbar{width:8px;outline:1px solid var(--black)}::-webkit-scrollbar-track{background:var(--light-gray)}::-webkit-scrollbar-thumb{background:#caeaff;border-radius:20px;outline:1px solid var(--black)}.apps-gallery a::before{position:absolute;top:10%;left:50%;transform:translate(-50%,-50%);color:#caeaff;font-weight:700;font-size:1.5em;opacity:0;transition:opacity 0.3s ease;text-shadow:0 0 10px #caeaff,0 0 20px #caeaff,0 0 30px #caeaff}.apps-gallery a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #caeaff,0 0 20px #caeaff,0 0 30px #caeaff}.gallery a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #caeaff,0 0 20px #caeaff,0 0 30px #caeaff}.gallery a::before{position:absolute;top:80%;left:50%;padding:5px;border-radius:25px;background-color:#000;background-size:cover;background-repeat:no-repeat;transform:translate(-50%,-50%);color:#fff;font-weight:700;font-size:1.5em;opacity:0;transition:all .2s ease-in-out;text-shadow:0 0 10px #caeaff,0 0 20px #caeaff,0 0 30px #caeaff}.partner-gallery a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #caeaff,0 0 20px #caeaff,0 0 30px #caeaff}button{font-size:1.2em;padding:15px 30px;margin:10px;background-color:#000;color:#fff;border:4px solid #141414;;border-radius:8px;cursor:pointer;transition:background-color 0.3s ease;box-shadow:0 4px 6px rgb(0 0 0 / .2);z-index:9999}button:hover{background-color:#caeaff;border:4px solid #b2faff;;box-shadow:0 0 10px #caeaff,0 0 20px #caeaff,0 0 30px #caeaff;transition:all .2s ease-in-out}#headerbtn:hover{background-color:#caeaff;box-shadow:0 0 5px #caeaff,0 0 15px #caeaff,0 0 25px #caeaff;transition:all .2s ease-in-out}#reloadButton:hover{background-color:#caeaff;box-shadow:0 0 5px #caeaff,0 0 15px #caeaff,0 0 25px #caeaff;transition:all .2s ease-in-out}#uv-address:hover{border:4px solid #caeaff;transition:all .2s ease-in-out}#uv-address:focus{border:4px solid #caeaff;transition:all .2s ease-in-out;width:60%;outline:0;box-shadow:0 0 5px #caeaff,0 0 15px #caeaff,0 0 25px #caeaff}input:hover{border:4px solid #caeaff;transition:all .2s ease-in-out}input:focus{border:4px solid #caeaff;transition:all .2s ease-in-out;outline:0;box-shadow:0 0 5px #caeaff,0 0 15px #caeaff,0 0 25px #caeaff}.proxy-quicklinks a:hover{transition:all .2s ease-in-out;border-radius:25px;transform:scale(.9);box-shadow:0 0 10px #caeaff,0 0 20px #caeaff,0 0 30px #caeaff}select:hover{border:4px solid #caeaff;transition:all .2s ease-in-out}select:focus-visible{border:4px solid #caeaff;transition:all .2s ease-in-out;outline:0;box-shadow:0 0 5px #caeaff,0 0 15px #caeaff,0 0 25px #caeaff}#particles-js{display:none}header{backdrop-filter:blur(20px);background-color:#0000008c}#gameBar{background-color:#0000008c;backdrop-filter:blur(20px)}";
                        setScriptSrc()
                        
                        break;
    default:
      styleTag.innerHTML = "";
      tabData.scriptSrc = "/app.js";
      applyTheme()
      setScriptSrc()
  }

  var tab = localStorage.getItem("tab");

  if (tab) {
    try {
      var tabData = JSON.parse(tab);
    } catch {
      var tabData = {};
    }
  } else {
    var tabData = {};
  }

  if (theme) {
    tabData.theme = theme;
  } else {
    delete tabData.theme;
  }

  
  localStorage.setItem("tab", JSON.stringify(tabData));
}

function applySavedTheme() {
  var tab = localStorage.getItem("tab");

  if (tab) {
    try {
      var tabData = JSON.parse(tab);
      if (tabData.theme) {
        setTheme(tabData.theme);
        document.getElementById("themeSelector").value = tabData.theme;
        setScriptSrc()
      }
      
    } catch {
    }
  }
}

function setScriptSrc() {
  var scriptTag = document.getElementById('pjsconfig');
  var tabData = JSON.parse(localStorage.getItem("tab")) || {};
  if (tabData.theme === "default"){
    scriptTag = document.createElement('script');
    scriptTag.id = 'pjsconfig';
    scriptTag.src = "/app.js";
    document.head.appendChild(scriptTag);
  }
  else if (tabData.theme === "teto"){
    scriptTag = document.createElement('script');
    scriptTag.id = 'pjsconfig';
    scriptTag.src = "/stuff/themes/teto/app.js";
    document.head.appendChild(scriptTag);
  }
  else if (tabData.theme === "miku"){
    scriptTag = document.createElement('script');
    scriptTag.id = 'pjsconfig';
    scriptTag.src = "/stuff/themes/miku/app.js";
    document.head.appendChild(scriptTag);
  }
  else if (tabData.theme === "neru"){
    scriptTag = document.createElement('script');
    scriptTag.id = 'pjsconfig';
    scriptTag.src = "/stuff/themes/neru/app.js";
    document.head.appendChild(scriptTag);
  }
  else if (tabData.theme === "szvy"){
    scriptTag = document.createElement('script');
    scriptTag.id = 'pjsconfig';
    scriptTag.src = "/stuff/themes/szvy/app.js";
    document.head.appendChild(scriptTag);
  }
  else if (tabData.theme === "mexi"){
    scriptTag = document.createElement('script');
    scriptTag.id = 'pjsconfig';
    scriptTag.src = "/stuff/themes/mexi/app.js";
    document.head.appendChild(scriptTag);
  }
  else if (tabData.theme === "cryptic"){
    scriptTag = document.createElement('script');
    scriptTag.id = 'pjsconfig';
    scriptTag.src = "/theme/cryptic.js";
    document.head.appendChild(scriptTag);
  }
  else if (tabData.theme === "halloween"){
    scriptTag = document.createElement('script');
    scriptTag.id = 'pjsconfig';
    scriptTag.src = "/theme/halloweenpjs.js";
    document.head.appendChild(scriptTag);
  }
  else if (tabData.theme === "EVIL"){
    scriptTag = document.createElement('script');
    scriptTag.id = 'pjsconfig';
    scriptTag.src = "/theme/evil.js";
    document.head.appendChild(scriptTag);
  }
  else {
   scriptTag = document.createElement('script');
   scriptTag.id = 'pjsconfig';
   scriptTag.src = "/app.js";
   document.head.appendChild(scriptTag);
  }
}

function applyTheme() {
  var tabData = JSON.parse(localStorage.getItem("tab")) || {};
  if (tabData.scriptSrc) {
      setScriptSrc(tabData.scriptSrc);
  } else {
      setScriptSrc(settingsDefaultTab.scriptSrc);
  }
}

        function EnableMobileScreenReload() {
          var tabData = JSON.parse(localStorage.getItem("tab")) || {};
          tabData.mobilescreen = "true";
          localStorage.setItem("tab", JSON.stringify(tabData));
          applyMobileScreenSetting();
          window.location.reload();
      }

        function EnableMobileScreen() {
          var tabData = JSON.parse(localStorage.getItem("tab")) || {};
          tabData.mobilescreen = "true";
          localStorage.setItem("tab", JSON.stringify(tabData));
          applyMobileScreenSetting();
          showNotification('enabled!', 5000)
      }

      function DisableMobileScreen() {
        var tabData = JSON.parse(localStorage.getItem("tab")) || {};
        tabData.mobilescreen = "false";
        localStorage.setItem("tab", JSON.stringify(tabData));
        applyMobileScreenSetting();
        document.getElementById('mobilemode').remove()
        showNotification('disabled!', 5000)
    }
    function normalbare() {
      var tabData = JSON.parse(localStorage.getItem("tab")) || {};
      tabData.bare = "normal";
      localStorage.setItem("tab", JSON.stringify(tabData));
  }

  function germanybare() {
    var tabData = JSON.parse(localStorage.getItem("tab")) || {};
    tabData.bare = "germany";
    localStorage.setItem("tab", JSON.stringify(tabData));
  }

      function applyMobileScreenSetting() {
          var tabData = JSON.parse(localStorage.getItem("tab")) || {};
          var stylesheet = document.getElementById("stylesheet");
            if (tabData.mobilescreen === "true") {
              var style = document.createElement('style');
              style.type = 'text/css';
              style.id = 'mobilemode'
              style.innerHTML = '#header{width: 40%;}#footer{width: 40%;}#frame{position:fixed;top:.3%;left:0;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:7777}#frameframe{position:fixed;width:86vw;height:77vh;overflow:none}#frameframe iframe{width:100%;height:100%;margin:0;overflow:none;left:50%;top:-1%;position:absolute;transform:translateX(-50%)}.sidebar{position:absolute;top:47%;right:-2.4%;transform:translateY(-50%);backdrop-filter:blur(3px);background-color:rgb(29 29 29 / .7);border:0 solid #81bb92;width:2vw;height:27vh;display:flex;flex-direction:column;align-items:center;text-align:center;color:#fff;z-index:9999;border-top-right-radius:1vw;border-bottom-right-radius:1vw}';
              document.head.appendChild(style);      
          } else {
              console.log("mobile mode not enabled")
          }
      }

      function particlesdeleter() {
        var particlesdiv = document.getElementById("particles-js");
        if (particlesdiv) {
            document.body.removeChild(particlesdiv);
        }
    }

      function DisableParticles() {
        var tabData = JSON.parse(localStorage.getItem("tab")) || {};
        tabData.noparticles = "true";
        localStorage.setItem("tab", JSON.stringify(tabData));
        applynoparticles();
        showNotification('disabled!', 5000)
    }

    function EnableParticles() {
      var tabData = JSON.parse(localStorage.getItem("tab")) || {};
      tabData.noparticles = "false";
      localStorage.setItem("tab", JSON.stringify(tabData));
      applynoparticles();
      window.location.reload()
  }

  function higang() {
    var particlesdiv = document.getElementById("pjsconfig");
    if (particlesdiv) {
        document.body.removeChild(particlesdiv);
    }
}

  function changetabjs() {
    var scriptTag = document.getElementById('pjsconfig');
    if (scriptTag) {
      scriptTag.src = "/otherapp.js";
    } else {
        scriptTag = document.createElement('script');
        scriptTag.id = 'pjsconfig';
        scriptTag.src = "/otherapp.js";
        document.head.appendChild(scriptTag);
    }
}

function removetabjs() {
    higang()
}

function DisableBrainrot() {
  var tabData = JSON.parse(localStorage.getItem("tab")) || {};
  tabData.brainrot = "false";
  localStorage.setItem("tab", JSON.stringify(tabData));
  applynoparticles();
}

function EnableBrainrot() {
var tabData = JSON.parse(localStorage.getItem("tab")) || {};
tabData.brainrot = "true";
localStorage.setItem("tab", JSON.stringify(tabData));
applynoparticles();
window.location.reload()
}

function brainrotmoderizz(){
  var tabData = JSON.parse(localStorage.getItem("tab")) || {};
  const braingivingvideo = document.getElementById('subwaysurfersclips');
  if(tabData.brainrot === "true"){
  braingivingvideo.style = ' '
  console.log(tabData.brainrot);
  }
  else{
    console.log('sigma');
    braingivingvideo.style = 'display: none;'
  }
  // this is literally the most simple code even i dont need chatgpt for ts 😭
}

    function applynoparticles() {
      var tabData = JSON.parse(localStorage.getItem("tab")) || {};
        if (tabData.noparticles === "true") {
            particlesdeleter();
      } else {
          console.log("particles get spared")
      }
  }

    function applynoparticles() {
        var tabData = JSON.parse(localStorage.getItem("tab")) || {};
          if (tabData.noparticles === "true") {
              particlesdeleter();
        } else {
            console.log("particles get spared")
        }
    }

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  } else if (days === 0) {
      let date = new Date(0);
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function deleteCookie(name) {
  setCookie(name, "", 0);
}

window.onload = () => {
  if (onLoadData) {
    eval(onLoadData);
  }
  applynoparticles();
}

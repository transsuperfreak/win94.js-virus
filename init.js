// Download this, then drag and drop into boot folder. Refresh win93 and use steps below to start program.
// Or paste into termianl if you plan testing it in one boot. Finding the program in win93 is impossible, use "boot" in terminal. Finding program in win94 is in other category.
freerobux2024= le._apps.boot = {
  categories: "Amusement",
  name: "Free Robux 2024",
  icon: "/c/files/images/icons/pow.png",
  exec: function () {

    $confirm("Warning! this will destroy windows 93 you sure??", function (ok) {
      if (!ok) {
        $alert("Good choice.");
      } else {
        $alert("Enjoy this computer while it lasts. Once you refresh, all your data will be gone.");
        $file.save("/a/boot/win94.js",'$kernel.on("splash:ready", function() { function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); } sleep(3500).then(() => { $file.format(); $window({ title: "Suffer", html: "CREDIT TO SUBZERO FOR FIXING MY CODE", icon: "c/sys/skins/w93/apps/hexedit.png", resizable: false, maximizable: false }); $window({ title: "Suffer", html: "CREDIT TO SUBZERO FOR FIXING MY CODE", icon: "c/sys/skins/w93/apps/hexedit.png", resizable: false, maximizable: false }); $window({ title: "Suffer", html: "CREDIT TO SUBZERO FOR FIXING MY CODE", icon: "c/sys/skins/w93/apps/hexedit.png", resizable: false, maximizable: false }); $window({ title: "Suffer", html: "<p><b>CREDIT TO SUBZERO FOR FIXING MY CODE</b></p>", icon: "c/sys/skins/w93/apps/hexedit.png", resizable: false, maximizable: false }); timeout = setTimeout(doom, 1000); function doom() { window.location.href = "https://windows93.net/derp.html";; } })});');
      }
    });
  }
};

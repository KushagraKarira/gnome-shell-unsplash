function init () {} // will be called first to initiate the extenion //pull the image locally
function enable () {gsettings set org.gnome.desktop.background picture-uri "https://source.unsplash.com/daily"} // will be called when it is enabled
function disable() {} // will be called when it is disabled //reset to default wallpaper

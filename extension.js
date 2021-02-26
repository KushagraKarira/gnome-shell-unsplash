function init () {}
function enable () {
cd ~/Pictures/Wallpapers/ && rm daily && wget https://source.unsplash.com/user/nasa/daily && gsettings set org.gnome.desktop.background picture-uri ~/Pictures/Wallpapers/daily
} // Goes to wallpaper directory, deletes old image, pulls new daily one from unsplash and makes it the wallpaper, voila !

function disable() {} // will be called when it is disabled //reset to default wallpaper

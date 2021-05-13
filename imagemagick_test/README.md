# Imagemagick Test

## Command

```sh
magick logo.gif -gravity south -font './sp-setofont.ttf' -pointsize 30 \
 -stroke '#000C' -strokewidth 2 -annotate 0 'プログラムを魔法か何かと勘違いしている' \
 -stroke  none   -fill white    -annotate 0 'プログラムを魔法か何かと勘違いしている' \
 logo_annotate.gif
```



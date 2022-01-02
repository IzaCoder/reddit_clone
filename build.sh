export PATH="./dart-sass:$PATH"
sass scss/styles.scss styles.min.css --style compressed
git config --global user.name "IzaCoder"
git config --global user.email "izacoder@icloud.com"
git add styles.min.css
git commit -m "Compile & minify SCSS"
git pushm
# create a new repository on the command line

echo "# shoping-cart360" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Brajalal-Pal/shoping-cart360.git
git push -u origin main

# push an existing repository from the command line

git remote add origin https://github.com/Brajalal-Pal/shoping-cart360.git
git branch -M main
git push -u origin main

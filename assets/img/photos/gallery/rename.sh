for i in FAVS*.jpg; do mv "$i" "${i//FAVS/A}"; done 
for i in GR*.jpg; do mv "$i" "${i//GR/B}"; done 
for i in MD*.jpg; do mv "$i" "${i//MD/C}"; done 
for i in CS*.jpg; do mv "$i" "${i//CS/D}"; done 
for i in FGP*.jpg; do mv "$i" "${i//FGP/E}"; done 
for i in MD*.jpg; do mv "$i" "${i//MD/F}"; done 
for i in VOW*.jpg; do mv "$i" "${i//VOW/G}"; done 
for i in PC*.jpg; do mv "$i" "${i//PC/H}"; done 
for i in TD*.jpg; do mv "$i" "${i//TD/I}"; done 
for i in PTY*.jpg; do mv "$i" "${i//PTY/J}"; done 

a=1
for i in *.jpg; do
  new=$(printf "gallery-%d.jpg" ${a})
  mv ${i} ${new} 
  let a=a+1
done

#!/bin/bash
mkdir -p ../public/walkthrough
for i in {0..1179}; do
  FRAME=$(printf "%04d" $i)
  if [ ! -f "../public/walkthrough/frame-$FRAME.png" ]; then
    npx remotion still src/index.ts Walkthrough ../public/walkthrough/frame-$FRAME.png --frame $i --quiet
    echo "Rendered frame $i"
  fi
done
echo "Done!"
